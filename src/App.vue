<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useLanguage } from "./composables/useLanguage";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

const router = useRouter();
const route = useRoute();
const { t } = useLanguage();

const navLinks = [
  {
    label: "nav.francisco",
    path: "/francisco-morazan",
    icon: "fa-solid fa-person",
  },
  {
    label: "nav.colonials",
    path: "/spanish-colonials",
    icon: "fa-solid fa-crown",
  },
  {
    label: "nav.indigenous",
    path: "/indigenous-population",
    icon: "fa-solid fa-earth-americas",
  },
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <div class="min-h-screen bg-zinc-900 text-white">
    <!-- Navigation Banner -->
    <header class="sticky top-0 z-50 bg-zinc-900/95 border-b border-zinc-800 shadow-lg">
      <nav class="flex items-center justify-between px-6 md:px-14 lg:px-28 py-4">
        <!-- Logo/Home Link -->
        <div class="flex items-center gap-2">
          <router-link
            to="/"
            class="font-bold text-lg text-brand hover:text-brand/80 transition-colors flex items-center gap-2"
          >
            <i class="fa-solid fa-building"></i>
            <span class="hidden sm:inline">{{ t('nav.title') }}</span>
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center gap-6">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium',
              isActive(link.path)
                ? 'bg-brand text-zinc-900'
                : 'text-zinc-300 hover:text-white hover:bg-zinc-800/50',
            ]"
          >
            <i :class="link.icon"></i>
            {{ t(link.label) }}
          </router-link>
        </div>

        <!-- Language Switcher and Mobile Menu Button -->
        <div class="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            class="md:hidden text-zinc-300 hover:text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            type="button"
          >
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-zinc-800 border-t border-zinc-700 mt-20 py-8">
      <div class="px-6 md:px-14 lg:px-28 text-center text-zinc-400">
        <p>
          {{ t('footer.copyright') }} © {{ new Date().getFullYear() }}
        </p>
      </div>
    </footer>
  </div>
</template>
