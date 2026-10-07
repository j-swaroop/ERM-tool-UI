<script setup>
// composables
import { useCommonUtilities } from '@/composables/useCommonUtilities';
import { useRating } from '@/composables/useRating';
// components
import ODropdown from '@/components/sharedComponents/ODropdown.vue';
import OTable from '@/components/sharedComponents/OTable.vue';
import ScoreTrend from '@/components/sharedComponents/ScoreTrend.vue';
// utils
import { risks } from '@/utils/riskEvaluationData';

const { getInitials } = useCommonUtilities();
const { ratingClass } = useRating();

const headers = [
  { text: 'RISK', key: 'risk', width: '25rem', headerClasses: 'sticky-column', classes: 'sticky-column' },
  { text: 'INHERENT', key: 'inherent', width: 'minmax(7rem, 0.8fr)' },
  { text: 'Q1 RESIDUAL', key: 'q1Residual', width: 'minmax(8.5rem, 0.9fr)' },
  { text: 'Q2 RESIDUAL', key: 'q2Residual', width: 'minmax(8.5rem, 0.9fr)' },
  { text: 'OWNERS', key: 'owners', width: '1.2fr', headerClasses: 'left-align' },
  { text: 'MITIGATION', key: 'mitigation', width: 'minmax(14rem, 1.2fr)', headerClasses: 'left-align' },
  { text: '', key: 'actions', width: '9.5rem' },
];

const mitigationChipList = [
  { key: 'approved', label: 'Approved', className: 'approved' },
  { key: 'forApproval', label: 'for Approval', className: 'for-approval' },
  { key: 'noChange', label: 'No Change', className: 'no-change' },
];

const mitigationTotal = (counts) => Object.values(counts).reduce((sum, count) => sum + count, 0);

const rowActionItems = [
  { text: 'Open workspace', value: 'open-workspace' },
  { text: 'Assessment basis', value: 'assessment-basis' },
];
</script>

<template>
  <div class="risk-evaluation-list">
    <OTable :headers="headers" :table-data="risks" :enable-infinite-scroll="false" :alternate-rows="true">
      <!-- Risk Cell -->
      <template #cell-risk="{ rowData }">
        <div class="risk-cell">
          <div class="risk-header">
            <span class="risk-code">{{ rowData.code }}</span> {{ rowData.name }}
          </div>
          <div class="risk-description">{{ rowData.description }}</div>
        </div>
      </template>

      <!-- Inherent Cell -->
      <template #cell-inherent="{ rowData }">
        <div class="score-cell">{{ rowData.inherent }}</div>
      </template>

      <!-- Q1 Residual Cell -->
      <template #cell-q1Residual="{ rowData }">
        <div class="score-cell">{{ rowData.q1Residual }}</div>
      </template>

      <!-- Q2 Residual Cell -->
      <template #cell-q2Residual="{ rowData }">
        <div class="q2-residual-cell">
          <div class="q2-residual-score" :class="ratingClass(rowData.q2Residual)">{{ rowData.q2Residual }}</div>
          <ScoreTrend :current="rowData.q2Residual" :previous="rowData.q1Residual" />
        </div>
      </template>

      <!-- Owners Cell -->
      <template #cell-owners="{ rowData }">
        <div class="owners-cell">
          <div class="owner" v-for="owner in rowData.ownerList.slice(0, 2)" :key="owner._id">
            <div class="owner-avatar">
              <span class="owner-initials">{{ getInitials(owner.name) }}</span>
            </div>
            <div class="owner-name">{{ owner.name }}</div>
          </div>
          <div class="owner-more" v-if="rowData.ownerList.length > 2">
            <span class="owner-more-text">+{{ rowData.ownerList.length - 2 }} more</span>
          </div>
        </div>
      </template>

      <!-- Mitigation Cell -->
      <template #cell-mitigation="{ rowData }">
        <div class="mitigation-cell">
          <div class="mitigation-total">
            <span class="mitigation-total-count">{{ mitigationTotal(rowData.mitigationCounts) }} Action Plans</span>
            <span class="mitigation-total-register">on the register</span>
          </div>
          <div class="mitigation-chips">
            <span v-for="chip in mitigationChipList" :key="chip.key" class="mitigation-chip" :class="chip.className">
              {{ rowData.mitigationCounts[chip.key] }} {{ chip.label }}
            </span>
          </div>
        </div>
      </template>

      <template #cell-actions>
        <div class="row-actions" @click.stop>
          <div class="secondary-button">
            <div class="secondary-button-text">Open</div>
            <div class="secondary-button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <ODropdown
            class="actions-menu"
            variant="actions"
            :items="rowActionItems"
            placement="bottom-end"
            width="12.5rem"
            :offset="[0, 0.25]"
          >
            <template #trigger="{ props: trigger }">
              <div class="actions-icon" :class="{ 'is-open': trigger.isOpen }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="3.25" r="1.15" />
                  <circle cx="8" cy="8" r="1.15" />
                  <circle cx="8" cy="12.75" r="1.15" />
                </svg>
              </div>
            </template>
            <template #item="{ item }">
              <div class="action-item">
                <div class="action-item-icon">
                  <svg
                    v-if="item.value === 'open-workspace'"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <path
                      d="M6.5 3.5H3.5v9h9V9.5M8.5 3.5H12.5V7.5M12.5 3.5 7.5 8.5"
                      stroke="currentColor"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none">
                    <path
                      d="M5 2.5v11M11 2.5v11M3.25 6.25h3.5M9.25 10h3.5"
                      stroke="currentColor"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div class="action-item-text">{{ item.text }}</div>
              </div>
            </template>
          </ODropdown>
        </div>
      </template>
    </OTable>
  </div>
</template>
<style lang="scss" scoped>
.risk-evaluation-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .risk-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 0.5rem;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    .risk-header {
      color: #374151;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.25rem; /* 125% */

      .risk-code {
        font-size: 0.875rem;
        letter-spacing: -0.0175rem;
        margin-right: 0.25rem;
      }
    }
    .risk-description {
      width: 100%;
      color: rgba(17, 24, 39, 0.8);
      font-size: 0.875rem;
      line-height: 1.25rem; /* 142.857% */
      white-space: normal;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }

  .score-cell {
    color: $color-7;
    font-family: 'SF Pro', $primary-font;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
    text-align: center;
    width: 100%;
  }
  .q2-residual-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    align-self: stretch;
    width: 100%;
    .q2-residual-score {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem; /* 142.857% */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
  .owners-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    .owner {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .owner-avatar {
        width: 1.5rem;
        height: 1.5rem;
        aspect-ratio: 1/1;
        background-color: #f4f7fa;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $color-19;
        font-size: 0.875rem;
        border: 1px solid #e3eaee;
        font-weight: 700;
        .owner-initials {
          color: #5b6b77;
          leading-trim: both;
          text-edge: cap;
          font-size: 0.625rem;
          font-weight: 590;
          line-height: 1.25rem; /* 166.667% */
          letter-spacing: -0.24px;
        }
      }
      .owner-name {
        color: #111827;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
      }
    }
    .owner-more {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding-left: 1.75rem;
      .owner-more-text {
        color: #111827;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
      }
    }
  }

  .mitigation-cell {
    border-radius: 0.25rem;
    border: 1px solid rgba(17, 24, 39, 0.08);
    background: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    flex-shrink: 0;
    align-self: stretch;
    width: 13.4375rem;
    overflow: hidden;

    .mitigation-total {
      border-bottom: 1px solid rgba(17, 24, 39, 0.08);
      background: #fff;
      display: flex;
      padding: 0.25rem;
      padding-left: 0.5rem;
      align-items: center;
      gap: 0.5rem;
      align-self: stretch;
      .mitigation-total-count {
        color: #111827;
        font-size: 0.75rem;
        font-weight: 590;
        line-height: 1.25rem; /* 166.667% */
        letter-spacing: -0.24px;
      }
      .mitigation-total-register {
        color: rgba(17, 24, 39, 0.7);
        font-size: 0.75rem;
        font-weight: 510;
        line-height: 1.25rem;
        letter-spacing: -0.24px;
      }
    }

    .mitigation-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      padding: 0.25rem;
      padding-left: 0.5rem;
      .mitigation-chip {
        font-size: 0.75rem;
        font-weight: 590;
        line-height: 1rem;
        padding: 0.125rem 0.5rem;
        border-radius: 0.25rem;

        &.approved {
          color: $color-12;
          background: $background-16;
        }

        &.for-approval {
          color: $color-13;
          background: $background-17;
        }

        &.no-change {
          color: $color-6;
          background: $background-1;
        }
      }
    }
  }

  .row-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .actions-menu {
      width: auto;
      flex: none;
    }

    .actions-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.75rem;
      height: 1.75rem;
      padding: 0;
      border: none;
      border-radius: 0.5rem;
      background: transparent;
      color: $color-1;
      cursor: pointer;

      svg {
        width: 1rem;
        height: 1rem;
      }

      &:hover,
      &.is-open {
        background: $background-21;
      }
    }
  }
}
</style>
