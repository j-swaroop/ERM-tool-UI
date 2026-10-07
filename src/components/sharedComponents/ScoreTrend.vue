<script setup>
import { computed } from 'vue';
import { useRating } from '@/composables/useRating';

const props = defineProps({
  current: Number,
  previous: Number,
});

const { scoreTrend } = useRating();

const trend = computed(() => scoreTrend(props.current, props.previous));

const trendPaths = {
  up: ['M1.5 12.5 5.5 8.5 8.5 11.5 14.5 5.5', 'M14.5 9.25V5.5h-3.75'],
  down: ['M1.5 3.5 5.5 7.5 8.5 4.5 14.5 10.5', 'M14.5 6.75v3.75h-3.75'],
  flat: ['M1.5 8h9', 'M11 5.5 13.5 8 11 10.5'],
};
</script>

<template>
  <svg
    v-if="trend"
    class="score-trend"
    :class="`score-trend-${trend}`"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      v-for="(path, index) in trendPaths[trend]"
      :key="index"
      :d="path"
      stroke="currentColor"
      stroke-width="1.85"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss" scoped>
.score-trend {
  width: 0.9rem;
  height: 0.9rem;
  flex: none;
}
</style>
