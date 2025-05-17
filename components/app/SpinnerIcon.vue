<template>
  <svg
    class="spinner text-white"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <circle cx="12" cy="2.5" r="2" opacity=".14" fill="currentColor" />
      <circle cx="16.75" cy="3.77" r="2" opacity=".29" fill="currentColor" />
      <circle cx="20.23" cy="7.25" r="2" opacity=".43" fill="currentColor" />
      <circle cx="21.5" cy="12" r="2" opacity=".57" fill="currentColor" />
      <circle cx="20.23" cy="16.75" r="2" opacity=".71" fill="currentColor" />
      <circle cx="16.75" cy="20.23" r="2" opacity=".86" fill="currentColor" />
      <circle cx="12" cy="21.5" r="2" fill="currentColor" />
    </g>
  </svg>
</template>

<style scoped>
.spinner {
  animation: spin-step 0.75s step-end infinite;
  transform-origin: center;
}

@keyframes spin-step {
  8.3% { transform: rotate(30deg); }
  16.6% { transform: rotate(60deg); }
  25% { transform: rotate(90deg); }
  33.3% { transform: rotate(120deg); }
  41.6% { transform: rotate(150deg); }
  50% { transform: rotate(180deg); }
  58.3% { transform: rotate(210deg); }
  66.6% { transform: rotate(240deg); }
  75% { transform: rotate(270deg); }
  83.3% { transform: rotate(300deg); }
  91.6% { transform: rotate(330deg); }
  100% { transform: rotate(360deg); }
}
</style>
