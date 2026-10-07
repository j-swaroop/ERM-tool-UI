<script setup></script>

<template>
  <div class="risk-evaluation-header">
    <div class="header-left">
      <div class="page-title">Risk Evaluation</div>
      <div class="page-subtitle">Vedanta Power Limited · Q2 FY27 · 16 of 16 Risks</div>
    </div>
    <div class="header-right">
      <div class="quarter-status quarter-status-inactive">
        <div class="quarter-status-text quarter-status-text-inactive">Q2 FY27 Not Open Yet</div>
      </div>
      <div class="primary-button">
        <div class="primary-button-text">Create New Risk</div>
        <div class="primary-button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6H9.5M6 2.5V9.5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.risk-evaluation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: 1rem;
  flex-wrap: wrap;
  .header-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    flex: 1 0 0;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
