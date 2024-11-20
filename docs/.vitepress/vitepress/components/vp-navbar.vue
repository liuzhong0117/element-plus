<script setup lang="ts">
import { computed } from 'vue'
import { inBrowser, useData } from 'vitepress'

import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarTranslation from './navbar/vp-translation.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'

defineProps<{
  fullScreen: boolean
}>()

defineEmits(['toggle'])

const { theme, page } = useData()

const currentLink = computed(() => {
  if (!inBrowser) {
    return `/${page.value?.frontmatter?.lang || ''}/`
  }
  const existLangIndex = theme.value.langs.findIndex((lang) =>
    window?.location?.pathname.startsWith(`/${lang}`)
  )

  return existLangIndex === -1 ? '/' : `/${theme.value.langs[existLangIndex]}/`
})
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <el-text class="mx-1" size="large" type="primary">@ulearning/element-plus</el-text>
        <!-- <a :href="currentLink">
          <img
            class="logo"
            src="/images/element-plus-logo.svg"
            alt="Element Plus Logo"
          />
        </a> -->
      </div>
      <!-- <div class="content">
        <VPNavbarSearch class="search" :options="theme.agolia" multilang />
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarTranslation class="translation" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger
          :active="fullScreen"
          class="hamburger"
          @click="$emit('toggle')"
        />
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: flex-end;
  height: var(--header-height);
  .el-text{
    font-size: 24px;
  }
  > .sub {
    font-size: 12px;
  }
  .logo {
    position: relative;
    height: 100%;
  }
}
.dark {
  .logo {
    filter: drop-shadow(2px 2px 6px #409eff);
  }
}
</style>
