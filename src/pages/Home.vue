<script setup lang="ts">
import Button from "../components/Button.vue";
import { useLanguage } from "../composables/useLanguage";

const { t } = useLanguage();

const sections = [
  {
    id: "francisco",
    titleKey: "nav.francisco",
    icon: "fa-solid fa-person",
    descKey: "home.exhibitions.francisco",
    path: "/francisco-morazan",
  },
  {
    id: "colonials",
    titleKey: "nav.colonials",
    icon: "fa-solid fa-crown",
    descKey: "home.exhibitions.colonials",
    path: "/spanish-colonials",
  },
  {
    id: "indigenous",
    titleKey: "nav.indigenous",
    icon: "fa-solid fa-earth-americas",
    descKey: "home.exhibitions.indigenous",
    path: "/indigenous-population",
  },
];
</script>

<template>
  <div class="min-h-[calc(100vh_-_56px)] bg-zinc-900">
    <!-- Hero Section -->
    <section class="relative flex flex-col items-center justify-center min-h-[calc(100vh_-_56px)] px-6 md:px-14 lg:px-28 py-20 text-center overflow-hidden">
      <!-- Background splash image -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="/images/splash.jpg" 
          alt="Honduras Museum background" 
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Content overlay -->
      <div class="relative z-10 max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          {{ t('home.hero.title') }}<br />
        </h1>
        <p class="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
          {{ t('home.hero.subtitle') }}
        </p>
        <p class="text-lg text-zinc-400 mb-12">
          {{ t('home.hero.navSubtitle') }}
        </p>
      </div>

      <!-- Main Exhibition Cards -->
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
        <router-link
          v-for="section in sections"
          :key="section.id"
          :to="section.path"
          class="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-8 hover:border-brand/50 hover:bg-zinc-800/70 transition-all duration-300 cursor-pointer"
        >
          <div class="flex flex-col items-center text-center gap-4 h-full justify-between">
            <div class="text-5xl text-brand group-hover:scale-110 transition-transform duration-300">
              <i :class="section.icon"></i>
            </div>
            <h2 class="text-2xl font-bold">{{ t(section.titleKey) }}</h2>
            <p class="text-zinc-300">{{ t(section.descKey) }}</p>
            <div class="mt-4 inline-flex items-center gap-2 text-brand font-semibold group-hover:translate-x-1 transition-transform">
              {{ t('button.explore') }}
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Scroll Indicator -->
      <div class="relative z-10 mt-16 animate-bounce">
        <p class="text-zinc-400 mb-2">{{ t('home.hero.scrollMore') }}</p>
        <i class="fa-solid fa-chevron-down text-brand text-2xl"></i>
      </div>
    </section>

    <!-- Exhibition Overview Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">
          {{ t('home.exhibitions.title') }} <span class="text-brand">Museum Layout</span>
        </h2>
        <p class="text-lg text-zinc-300 mb-6 leading-relaxed">
          {{ t('home.exhibitions.description') }}
        </p>
        <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
          <h3 class="text-xl font-semibold mb-4 text-brand">{{ t('home.exhibitions.structure') }}</h3>
          <ul class="space-y-3 text-zinc-300">
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-check text-brand mt-1"></i>
              <span>{{ t('home.exhibitions.francisco') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-check text-brand mt-1"></i>
              <span>{{ t('home.exhibitions.colonials') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-check text-brand mt-1"></i>
              <span>{{ t('home.exhibitions.indigenous') }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-lg text-zinc-300 mb-8">
          {{ t('home.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/francisco-morazan"
            variant="primary"
            size="lg"
          >
            <i class="fa-solid fa-person mr-2"></i>{{ t('nav.francisco') }}
          </Button>
          <Button
            href="/spanish-colonials"
            variant="secondary"
            size="lg"
          >
            <i class="fa-solid fa-crown mr-2"></i>{{ t('nav.colonials') }}
          </Button>
          <Button
            href="/indigenous-population"
            variant="outline"
            size="lg"
          >
            <i class="fa-solid fa-earth-americas mr-2"></i>{{ t('nav.indigenous') }}
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
