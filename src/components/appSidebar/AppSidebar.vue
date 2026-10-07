<script setup>
import { ref, inject } from 'vue';
import { useRoute } from 'vue-router';
import { useVueCommonUtilities } from '@/composables/useVueCommonUtilities';
import AppSidebarIcon from '@/components/appSidebar/AppSidebarIcon.vue';

const appImages = inject('appImages');

const emit = defineEmits(['select']);

const route = useRoute();
const { goToRoute } = useVueCommonUtilities();
const isCollapsed = ref(false);

const navigationItems = [
  { key: 'controlCenter', labelKey: 'appSidebar.controlCenter', route: '/' },
  { key: 'overview', labelKey: 'appSidebar.overview', route: '/overview' },
  { key: 'riskAssessment', labelKey: 'appSidebar.riskAssessment', route: '/risk-assessment' },
  { key: 'riskEvaluation', labelKey: 'appSidebar.riskEvaluation', route: '/risk-evaluation' },
  { key: 'monitoring', labelKey: 'appSidebar.monitoring', route: '/monitoring' },
  { key: 'notification', labelKey: 'appSidebar.notification', route: '/notification' },
  { key: 'kris', labelKey: 'appSidebar.kris', route: '/kris' },
  { key: 'audit', labelKey: 'appSidebar.audit', route: '/audit' },
];

const onSelect = (item) => {
  emit('select', item.key);
  goToRoute(item.route);
};

const onToggle = () => {
  isCollapsed.value = !isCollapsed.value;
};

const onLogoClick = () => {
  if (isCollapsed.value) {
    onToggle();
  }
};
</script>

<template>
  <div class="app-sidebar" :class="{ 'app-sidebar-collapsed': isCollapsed }">
    <div class="app-sidebar-header">
      <div class="app-sidebar-brand">
        <div class="app-sidebar-logo" @click="onLogoClick">
          <img :src="appImages['app-logo.png']" alt="logo" class="app-sidebar-logo" />
          <div v-if="isCollapsed" class="app-sidebar-logo-expand">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 15.1667H6C2.38 15.1667 0.833328 13.62 0.833328 10V6C0.833328 2.38 2.38 0.833332 6 0.833332H10C13.62 0.833332 15.1667 2.38 15.1667 6V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6 1.83333C2.92666 1.83333 1.83333 2.92667 1.83333 6V10C1.83333 13.0733 2.92666 14.1667 6 14.1667H10C13.0733 14.1667 14.1667 13.0733 14.1667 10V6C14.1667 2.92667 13.0733 1.83333 10 1.83333H6Z"
                fill="white"
              />
              <path
                d="M6 15.1667C5.72667 15.1667 5.5 14.94 5.5 14.6667V1.33333C5.5 1.06 5.72667 0.833332 6 0.833332C6.27333 0.833332 6.5 1.06 6.5 1.33333V14.6667C6.5 14.94 6.27333 15.1667 6 15.1667Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="app-sidebar-brand-name">{{ $t('appSidebar.orgName') }}</div>
      </div>
      <div class="app-sidebar-toggle" @click="onToggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 15.1667H6C2.38 15.1667 0.833328 13.62 0.833328 10V6C0.833328 2.38 2.38 0.833332 6 0.833332H10C13.62 0.833332 15.1667 2.38 15.1667 6V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6 1.83333C2.92666 1.83333 1.83333 2.92667 1.83333 6V10C1.83333 13.0733 2.92666 14.1667 6 14.1667H10C13.0733 14.1667 14.1667 13.0733 14.1667 10V6C14.1667 2.92667 13.0733 1.83333 10 1.83333H6Z"
            fill="white"
          />
          <path
            d="M6 15.1667C5.72667 15.1667 5.5 14.94 5.5 14.6667V1.33333C5.5 1.06 5.72667 0.833332 6 0.833332C6.27333 0.833332 6.5 1.06 6.5 1.33333V14.6667C6.5 14.94 6.27333 15.1667 6 15.1667Z"
            fill="white"
          />
        </svg>
      </div>
    </div>

    <div class="app-sidebar-menu">
      <div
        class="app-sidebar-menu-item"
        :class="{ active: route.path === item.route }"
        v-for="item in navigationItems"
        :key="item.key"
        @click="onSelect(item)"
      >
        <div class="app-sidebar-menu-item-icon">
          <AppSidebarIcon :name="item.key" />
        </div>
        <div class="app-sidebar-menu-item-label">{{ $t(item.labelKey) }}</div>
      </div>
    </div>

    <div class="user-info">
      <div class="user-avatar">
        <span class="user-avatar-initials">JD</span>
      </div>
      <div class="user-info-details">
        <div class="user-name">Ankit Thakur</div>
        <div class="user-role">Risk Controller</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-sidebar {
  display: flex;
  width: 14rem;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 1rem;
  transition: width 0.24s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 1.5rem;
  background: linear-gradient(174deg, $background-6 0.37%, $background-7 99.13%);

  .app-sidebar-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    .app-sidebar-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .app-sidebar-logo {
        position: relative;
        height: 1.75rem;
        width: 1.75rem;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
        }
        .app-sidebar-logo-expand {
          display: none;
          position: absolute;
          inset: 0;
          align-items: center;
          justify-content: center;
          border-radius: 0.375rem;
          background: $background-7;
          svg {
            width: 1rem;
            height: 1rem;
            transform: rotate(180deg);
          }
        }
      }
      .app-sidebar-brand-name {
        color: $color-white;
        font-size: 0.75rem;
        font-weight: 590;
      }
    }
    .app-sidebar-toggle {
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
        transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  }

  .app-sidebar-menu {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    gap: 0.125rem;
    flex: 1 0 0;

    .app-sidebar-menu-item {
      display: flex;
      padding: 0.75rem;
      justify-content: flex-start;
      align-items: center;
      align-self: stretch;
      gap: 0.5rem;
      border-radius: 0.375rem;
      cursor: pointer;
      color: $color-white;
      .app-sidebar-menu-item-icon {
        width: 1rem;
        height: 1rem;
        display: flex;
        flex-shrink: 0;
      }
      .app-sidebar-menu-item-label {
        color: $color-white;
        font-size: 0.875rem;
        font-weight: 510;
      }

      &:hover:not(.active) {
        border-radius: 0.5rem;
        background: $background-20;
        .app-sidebar-menu-item-label {
          color: $color-white;
        }
      }

      &.active {
        border-radius: 0.5rem;
        background: $background-5;
        color: $color-19;
        .app-sidebar-menu-item-label {
          color: $color-19;
          font-weight: 700;
        }
      }
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .user-avatar {
      width: 2rem;
      height: 2rem;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: $background-21;
      .user-avatar-initials {
        color: $color-21;
        font-size: 0.75rem;
        font-weight: 590;
      }
    }
    .user-info-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.125rem;
      .user-name {
        color: $color-white;
        font-size: 1rem;
        font-weight: 700;
      }
      .user-role {
        color: $color-20;
        font-weight: 400;
        font-size: 0.75rem;
      }
    }
  }

  &.app-sidebar-collapsed {
    width: 4.25rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;

    .app-sidebar-brand-name,
    .app-sidebar-menu-item-label,
    .user-info-details {
      display: none;
    }

    .app-sidebar-header,
    .app-sidebar-menu,
    .user-info {
      align-self: stretch;
    }

    .app-sidebar-header {
      justify-content: center;
    }

    .app-sidebar-menu-item,
    .user-info {
      justify-content: center;
      gap: 0;
    }

    .app-sidebar-toggle {
      display: none;
    }

    .app-sidebar-logo {
      cursor: pointer;

      &:hover .app-sidebar-logo-expand {
        display: flex;
      }
    }
  }
}
</style>
