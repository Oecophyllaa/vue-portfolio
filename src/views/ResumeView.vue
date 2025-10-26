<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { RouterLink } from 'vue-router'

// PDF.js setup
const loading = ref(true)
const error = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)
const scale = ref(1.2)
const pdfContainer = ref(null)
const pdfCanvas = ref(null)

let pdfDoc = null
let renderTask = null

// Load PDF.js library
const loadPDFJS = async () => {
  try {
    // Load PDF.js from CDN
    if (!window.pdfjsLib) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
      document.head.appendChild(script)

      await new Promise((resolve, reject) => {
        script.onload = resolve
        script.onerror = reject
      })
    }

    // Configure PDF.js worker
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

    return true
  } catch (err) {
    console.error('Failed to load PDF.js:', err)
    return false
  }
}

// Load PDF document
const loadPDF = async () => {
  loading.value = true
  error.value = null

  try {
    // Load PDF.js first
    const pdfJSLoaded = await loadPDFJS()
    if (!pdfJSLoaded) {
      throw new Error('Failed to load PDF.js library')
    }

    // For demo purposes, we'll create a sample PDF URL
    // In real implementation, this would be the path to your actual resume PDF
    const pdfUrl = '/documents/Rangga_Raditya_Full_Resume.pdf' // This should be your actual PDF file path

    // Try to load the PDF
    try {
      const loadingTask = window.pdfjsLib.getDocument(pdfUrl)
      pdfDoc = await loadingTask.promise
      totalPages.value = pdfDoc.numPages

      // Render first page
      await renderPage(1)
      loading.value = false
    } catch (pdfError) {
      // If PDF file doesn't exist, show a placeholder
      console.warn('PDF file not found, showing placeholder')
      console.log(pdfError)
      await createPlaceholderPDF()
      loading.value = false
    }
  } catch (err) {
    console.error('Error loading PDF:', err)
    error.value = err.message || 'Failed to load PDF'
    loading.value = false
  }
}

// Create placeholder PDF content
const createPlaceholderPDF = async () => {
  const canvas = pdfCanvas.value
  const ctx = canvas.getContext('2d')

  // Set canvas size (A4 proportions)
  canvas.width = 595 * scale.value
  canvas.height = 842 * scale.value

  // White background
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Header
  ctx.fillStyle = '#00D2BE'
  ctx.fillRect(0, 0, canvas.width, 80 * scale.value)

  // Name
  ctx.fillStyle = '#000000'
  ctx.font = `bold ${24 * scale.value}px Arial`
  ctx.textAlign = 'center'
  ctx.fillText('RANGGA RADITYA NUGROHO', canvas.width / 2, 50 * scale.value)

  // Title
  ctx.fillStyle = '#666666'
  ctx.font = `${16 * scale.value}px Arial`
  ctx.fillText('Fullstack Web Developer', canvas.width / 2, 100 * scale.value)

  // Contact Info
  ctx.fillStyle = '#333333'
  ctx.font = `${12 * scale.value}px Arial`
  ctx.textAlign = 'left'
  const leftMargin = 50 * scale.value
  let yPos = 140 * scale.value

  ctx.fillText('📧 oecophylla@example.com', leftMargin, yPos)
  yPos += 20 * scale.value
  ctx.fillText('📱 +62 xxx-xxxx-xxxx', leftMargin, yPos)
  yPos += 20 * scale.value
  ctx.fillText('🌐 oecophylla.my.id', leftMargin, yPos)
  yPos += 20 * scale.value
  ctx.fillText('📍 East Java, Indonesia', leftMargin, yPos)

  // Experience Section
  yPos += 40 * scale.value
  ctx.fillStyle = '#00D2BE'
  ctx.font = `bold ${16 * scale.value}px Arial`
  ctx.fillText('EXPERIENCE', leftMargin, yPos)

  yPos += 30 * scale.value
  ctx.fillStyle = '#333333'
  ctx.font = `bold ${14 * scale.value}px Arial`
  ctx.fillText('Freelance Web Developer', leftMargin, yPos)

  yPos += 20 * scale.value
  ctx.fillStyle = '#666666'
  ctx.font = `${12 * scale.value}px Arial`
  ctx.fillText('Self-Employed | 2023 - Present', leftMargin, yPos)

  yPos += 20 * scale.value
  ctx.fillStyle = '#333333'
  ctx.font = `${11 * scale.value}px Arial`
  const description =
    'Developing custom web applications for various clients using modern technologies.'
  ctx.fillText(description, leftMargin, yPos)

  // Skills Section
  yPos += 50 * scale.value
  ctx.fillStyle = '#00D2BE'
  ctx.font = `bold ${16 * scale.value}px Arial`
  ctx.fillText('SKILLS', leftMargin, yPos)

  yPos += 30 * scale.value
  ctx.fillStyle = '#333333'
  ctx.font = `${12 * scale.value}px Arial`
  const skills = ['Laravel', 'Vue.js', 'React', 'PHP', 'JavaScript', 'MySQL', 'Git', 'Docker']
  ctx.fillText('• ' + skills.join(' • '), leftMargin, yPos)

  // Education Section
  yPos += 50 * scale.value
  ctx.fillStyle = '#00D2BE'
  ctx.font = `bold ${16 * scale.value}px Arial`
  ctx.fillText('EDUCATION', leftMargin, yPos)

  yPos += 30 * scale.value
  ctx.fillStyle = '#333333'
  ctx.font = `bold ${14 * scale.value}px Arial`
  ctx.fillText('Politeknik Negeri Jember', leftMargin, yPos)

  yPos += 20 * scale.value
  ctx.fillStyle = '#666666'
  ctx.font = `${12 * scale.value}px Arial`
  ctx.fillText('Computer Science | 2021 - Present', leftMargin, yPos)

  totalPages.value = 1
  currentPage.value = 1
}

// Render specific page
const renderPage = async (pageNum) => {
  if (!pdfDoc) return

  try {
    const page = await pdfDoc.getPage(pageNum)
    const canvas = pdfCanvas.value
    const ctx = canvas.getContext('2d')

    const viewport = page.getViewport({ scale: scale.value })
    canvas.height = viewport.height
    canvas.width = viewport.width

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    }

    if (renderTask) {
      renderTask.cancel()
    }

    renderTask = page.render(renderContext)
    await renderTask.promise

    currentPage.value = pageNum
  } catch (err) {
    console.error('Error rendering page:', err)
  }
}

// Navigation functions
const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    if (pdfDoc) {
      await renderPage(currentPage.value + 1)
    } else {
      currentPage.value++
    }
  }
}

const previousPage = async () => {
  if (currentPage.value > 1) {
    if (pdfDoc) {
      await renderPage(currentPage.value - 1)
    } else {
      currentPage.value--
    }
  }
}

// Zoom functions
const zoomIn = async () => {
  scale.value = Math.min(scale.value + 0.2, 3.0)
  if (pdfDoc) {
    await renderPage(currentPage.value)
  } else {
    await createPlaceholderPDF()
  }
}

const zoomOut = async () => {
  scale.value = Math.max(scale.value - 0.2, 0.5)
  if (pdfDoc) {
    await renderPage(currentPage.value)
  } else {
    await createPlaceholderPDF()
  }
}

// Download PDF
const downloadPDF = () => {
  // Create a download link for the PDF
  const link = document.createElement('a')
  link.href = '/src/assets/documents/Rangga_Raditya_Resume.pdf' // Your actual PDF file path
  link.download = 'Rangga_Raditya_Nugroho_Resume.pdf'
  link.click()
}

// Print PDF
const printPDF = () => {
  window.print()
}

// Initialize
onMounted(async () => {
  await nextTick()
  await loadPDF()
})
</script>

<template>
  <div class="resume-page">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark-teal fixed-top">
      <div class="container">
        <RouterLink to="/" class="navbar-brand fw-bold">
          <i class="fas fa-arrow-left me-2"></i>Back to Portfolio
        </RouterLink>
        <div class="navbar-nav ms-auto">
          <button class="btn btn-outline-light me-2" @click="downloadPDF">
            <i class="fas fa-download me-2"></i>Download PDF
          </button>
          <button class="btn btn-outline-light" @click="printPDF">
            <i class="fas fa-print me-2"></i>Print
          </button>
        </div>
      </div>
    </nav>

    <!-- PDF Viewer Section -->
    <section class="pdf-viewer-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-4">
            <h2 class="text-white">
              <i class="fas fa-file-pdf me-3 text-amg-teal"></i>Resume Preview
            </h2>
            <p class="text-light-gray">Rangga Raditya Nugroho - Fullstack Web Developer</p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="pdf-container bg-dark-card p-4 rounded-4 shadow-lg">
              <!-- PDF Viewer -->
              <div class="pdf-viewer" ref="pdfContainer">
                <div class="pdf-loading text-center py-5" v-if="loading">
                  <div class="spinner-border text-amg-teal" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="text-light-gray mt-3">Loading PDF...</p>
                </div>

                <div class="pdf-error text-center py-5" v-if="error">
                  <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
                  <h4 class="text-white">Error Loading PDF</h4>
                  <p class="text-light-gray">{{ error }}</p>
                  <button class="btn btn-amg-teal" @click="loadPDF">
                    <i class="fas fa-redo me-2"></i>Retry
                  </button>
                </div>

                <canvas ref="pdfCanvas" v-show="!loading && !error" class="pdf-canvas"></canvas>
              </div>

              <!-- PDF Controls -->
              <div
                class="pdf-controls mt-4 d-flex justify-content-between align-items-center"
                v-if="!loading && !error"
              >
                <div class="page-controls">
                  <button
                    class="btn btn-outline-light btn-sm me-2"
                    @click="previousPage"
                    :disabled="currentPage <= 1"
                  >
                    <i class="fas fa-chevron-left"></i>
                  </button>
                  <span class="text-white mx-3"> Page {{ currentPage }} of {{ totalPages }} </span>
                  <button
                    class="btn btn-outline-light btn-sm ms-2"
                    @click="nextPage"
                    :disabled="currentPage >= totalPages"
                  >
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </div>

                <div class="zoom-controls">
                  <button class="btn btn-outline-light btn-sm me-2" @click="zoomOut">
                    <i class="fas fa-search-minus"></i>
                  </button>
                  <span class="text-white mx-2">{{ Math.round(scale * 100) }}%</span>
                  <button class="btn btn-outline-light btn-sm ms-2" @click="zoomIn">
                    <i class="fas fa-search-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Resume Information -->
        <div class="row mt-5">
          <div class="col-lg-8 mx-auto">
            <div class="resume-info bg-dark-card p-4 rounded-4">
              <h4 class="text-amg-teal mb-3">
                <i class="fas fa-info-circle me-2"></i>Resume Information
              </h4>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="info-item">
                    <i class="fas fa-user text-amg-teal me-2"></i>
                    <span class="text-light-gray">Name: Rangga Raditya Nugroho</span>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="info-item">
                    <i class="fas fa-briefcase text-amg-teal me-2"></i>
                    <span class="text-light-gray">Position: Fullstack Web Developer</span>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="info-item">
                    <i class="fas fa-calendar text-amg-teal me-2"></i>
                    <span class="text-light-gray">Last Updated: January 2025</span>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="info-item">
                    <i class="fas fa-file-alt text-amg-teal me-2"></i>
                    <span class="text-light-gray">Format: PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.resume-page {
  min-height: 100vh;
  background-color: var(--dark-bg);
  padding-top: 80px;
}

.pdf-viewer-section {
  min-height: calc(100vh - 80px);
}

.pdf-container {
  border: 1px solid var(--border-color);
  max-width: 100%;
}

.pdf-viewer {
  text-align: center;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pdf-canvas {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.pdf-controls {
  padding: 15px;
  background: rgba(0, 210, 190, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(0, 210, 190, 0.2);
}

.resume-info {
  border: 1px solid var(--border-color);
}

.info-item {
  padding: 8px 0;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

/* Print styles */
@media print {
  .navbar,
  .pdf-controls,
  .resume-info {
    display: none !important;
  }

  .pdf-container {
    border: none !important;
    box-shadow: none !important;
    background: white !important;
  }

  .pdf-canvas {
    border: none !important;
    box-shadow: none !important;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .pdf-controls {
    flex-direction: column;
    gap: 15px;
  }

  .page-controls,
  .zoom-controls {
    justify-content: center;
    display: flex;
    align-items: center;
  }
}
</style>
