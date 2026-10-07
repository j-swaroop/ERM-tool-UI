<script setup>
import RiskEvaluationHeader from '@/components/riskEvaluation/RiskEvaluationHeader.vue';
import RiskEvaluationToolbar from '@/components/riskEvaluation/RiskEvaluationToolbar.vue';
import RiskEvaluationList from '@/components/riskEvaluation/RiskEvaluationList.vue';
</script>

<template>
  <div class="risk-evaluation-page-wrapper">
    <RiskEvaluationHeader />
    <RiskEvaluationToolbar />
    <RiskEvaluationList />
  </div>
</template>

<style lang="scss" scoped>
.risk-evaluation-page-wrapper {
  height: 100%;
  width: 100%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
