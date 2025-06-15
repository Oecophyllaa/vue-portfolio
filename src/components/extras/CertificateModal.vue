<script>
export default {
  name: 'CertifitaceModal',
}
</script>

<template>
  <div class="modal fade" id="certificateModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark-card">
        <div class="modal-header border-bottom border-secondary">
          <h5 class="modal-title text-white">Certificate Details</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-center">
          <div id="certificateContent">
            <img
              src="https://placehold.co/600x400?text=Certificate"
              alt="Certificate"
              class="img-fluid rounded shadow mb-4"
            />
            <h4 class="text-white mb-2">Certificate Title</h4>
            <p class="text-light-gray mb-3">Issued by: Certificate Issuer</p>
            <span class="badge bg-amg-teal text-dark">Year</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
