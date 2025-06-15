<script>
export default {
  name: 'ResumeModal',
}
</script>

<template>
  <div class="modal fade" id="resumeModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark-card">
        <div class="modal-header border-bottom border-secondary">
          <h5 class="modal-title text-white">Resume / CV</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="text-center mb-4">
            <img
              src="https://placehold.co/400x600?text=Resume+Preview"
              alt="Resume Preview"
              class="img-fluid rounded shadow"
            />
          </div>
          <div class="d-flex justify-content-center gap-3">
            <a href="#" class="btn btn-amg-teal">
              <i class="fas fa-download me-2"></i>Download PDF
            </a>
            <a href="#" class="btn btn-outline-light"> <i class="fas fa-print me-2"></i>Print </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
