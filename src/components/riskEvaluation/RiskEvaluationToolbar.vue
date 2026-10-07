<script setup>
import { computed, ref } from 'vue';
import OInput from '@/components/sharedComponents/OInput.vue';
import ODropdown from '@/components/sharedComponents/ODropdown.vue';

const search = ref('');
const selectedBusinessUnits = ref([]);
const businessUnits = ['TSTP', 'Meenakshi', 'Sakti', 'JIPP'];
const selectedRatings = ref([]);
const ratings = ['Critical', 'Severe', 'Moderate', 'Acceptable'];

const filterLabel = (prefix, emptyLabel, selected) => {
  if (!selected.length) {
    return `${prefix}: ${emptyLabel}`;
  }

  if (selected.length === 1) {
    return `${prefix}: ${selected[0]}`;
  }

  return `${prefix}: ${selected.length}`;
};

const businessUnitLabel = computed(() => filterLabel('BU', 'All', selectedBusinessUnits.value));
const ratingLabel = computed(() => filterLabel('Rating', 'Any', selectedRatings.value));
</script>

<template>
  <div class="risk-evaluation-toolbar">
    <OInput
      class="search-input"
      v-model="search"
      type="search"
      placeholder="Search Risks..."
      :prepend-inner="true"
      :clearable="true"
      :hideDetails="true"
    />
    <ODropdown
      v-model="selectedBusinessUnits"
      :items="businessUnits"
      variant="filter"
      multiple
      button-text="BU: All"
      width="12rem"
    >
      <template #triggerContent>
        <span class="dropdown-filter-label">{{ businessUnitLabel }}</span>
      </template>
    </ODropdown>
    <ODropdown
      v-model="selectedRatings"
      :items="ratings"
      variant="filter"
      multiple
      button-text="Rating: Any"
      width="12rem"
    >
      <template #triggerContent>
        <span class="dropdown-filter-label">{{ ratingLabel }}</span>
      </template>
    </ODropdown>
  </div>
</template>

<style lang="scss" scoped>
.risk-evaluation-toolbar {
  display: flex;
  align-items: center;
  gap: .75rem;

  :deep(.search-input) {
    flex: 1;
    width: auto;
    max-width: 20rem;
    min-width: 0;
  }
}

.dropdown-filter-label {
  overflow: hidden;
  color: $color-9;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.875rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1;
  text-align: left;
}
</style>
