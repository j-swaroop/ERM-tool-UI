<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg
    v-if="name === 'controlCenter'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M2.25 6.75 8 2.25l5.75 4.5V13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z" />
    <path d="M6.25 13.75V9.25h3.5v4.5" />
  </svg>
  <svg
    v-else-if="name === 'overview'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M2.25 2.75h11.5v10.5H2.25z" />
    <path d="M6.5 2.75v10.5M2.25 7h4.25" />
  </svg>
  <svg
    v-else-if="name === 'riskAssessment'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M5.5 2.5v11M10.5 2.5v11" />
    <path d="M2.5 5h3M10.5 5h3M2.5 11h3M10.5 11h3" />
  </svg>
  <svg
    v-else-if="name === 'riskEvaluation'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M2.25 4h11.5M2.25 8h11.5M2.25 12h7.5" />
  </svg>
  <svg
    v-else-if="name === 'monitoring'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M8 2.5 14.5 13.5h-13z" />
    <path d="M8 6.75v3M8 11.75v.01" />
  </svg>
  <svg
    v-else-if="name === 'notification'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M2.25 8.5 4 3h8l1.75 5.5v4.25H2.25z" />
    <path d="M2.25 8.5h3l.75 1.75h4l.75-1.75h3" />
  </svg>
  <svg
    v-else-if="name === 'kris'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="5.75" />
    <path d="M8 8l3-2.75" />
    <circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
  <svg
    v-else-if="name === 'audit'"
    class="app-sidebar-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M3.75 2.25h8.5v11.5h-8.5z" />
    <path d="M6 5.5h4M6 8h4M6 10.5h2.5" />
  </svg>
</template>

<style lang="scss" scoped>
.app-sidebar-icon {
  width: 1rem;
  height: 1rem;
  display: block;
}
</style>
