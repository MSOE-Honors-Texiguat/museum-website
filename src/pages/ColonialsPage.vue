<script setup lang="ts">
import GridSection from "../components/GridSection.vue";
import Button from "../components/Button.vue";
import { useLanguage } from "../composables/useLanguage";

const { t } = useLanguage();

interface TopicCard {
  icon: string;
  titleKey: string;
  descKey: string;
}

interface PageData {
  titleKey: string;
  subtitleKey: string;
  heroDescriptionKey: string;
  mainTopics: TopicCard[];
  relatedTopics: TopicCard[];
}

const pageData: PageData = {
  titleKey: "nav.colonials",
  subtitleKey: "colonials.subtitle",
  heroDescriptionKey: "colonials.hero",
  mainTopics: [
    {
      icon: "fa-solid fa-hammer",
      titleKey: "colonials.topic.creation.title",
      descKey: "colonials.topic.creation.desc",
    },
    {
      icon: "fa-solid fa-pickaxe",
      titleKey: "colonials.topic.mining.title",
      descKey: "colonials.topic.mining.desc",
    },
    {
      icon: "fa-solid fa-cross",
      titleKey: "colonials.topic.church.title",
      descKey: "colonials.topic.church.desc",
    },
  ],
  relatedTopics: [
    {
      icon: "fa-solid fa-flag",
      titleKey: "colonials.topic.removal.title",
      descKey: "colonials.topic.removal.desc",
    },
  ],
};
</script>

<template>
  <div class="bg-zinc-900">
    <!-- Hero Section -->
    <section class="relative min-h-[calc(100vh_-_56px)] flex flex-col items-center justify-center px-6 md:px-14 lg:px-28 py-20 text-center overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute top-20 right-10 w-40 h-40 bg-brand rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 left-20 w-60 h-60 bg-brand/50 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-3xl">
        <div class="inline-block mb-4">
          <span class="text-brand font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-brand/10 rounded-full">
            <i class="fa-solid fa-crown mr-2"></i>{{ t('colonials.badge') }}
          </span>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">{{ t(pageData.titleKey) }}</h1>
        <h2 class="text-2xl md:text-3xl text-brand mb-8">{{ t(pageData.subtitleKey) }}</h2>
        <p class="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8">
          {{ t(pageData.heroDescriptionKey) }}
        </p>
        <Button href="/" variant="outline" size="md">
          <i class="fa-solid fa-arrow-left mr-2"></i>{{ t('button.backHome') }}
        </Button>
      </div>
    </section>

    <!-- Main Topics Section -->
    <GridSection
      id="colonial-topics"
      :title="t('colonials.section.foundations')"
      :description="'The three pillars of Spanish colonial society in Honduras'"
      :features="pageData.mainTopics.map(topic => ({
        icon: topic.icon,
        title: t(topic.titleKey),
        description: t(topic.descKey),
      }))"
      :columns="3"
    />

    <!-- Economic Impact Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          {{ t('colonials.section.economyStructure') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-pickaxe"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('colonials.economy.mining.title') }}</h3>
            <p class="text-zinc-300">
              {{ t('colonials.economy.mining.desc') }}
            </p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-cross"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('colonials.economy.religious.title') }}</h3>
            <p class="text-zinc-300">
              {{ t('colonials.economy.religious.desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Colonial Timeline Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          {{ t('colonials.timeline.title') }} <span class="text-brand">Timeline</span>
        </h2>
        <div class="space-y-8">
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1524</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">{{ t('colonials.timeline.conquest.title') }}</h3>
              <p class="text-zinc-300">{{ t('colonials.timeline.conquest.desc') }}</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1550s+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">{{ t('colonials.timeline.towns.title') }}</h3>
              <p class="text-zinc-300">{{ t('colonials.timeline.towns.desc') }}</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1600s+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">{{ t('colonials.timeline.mining.title') }}</h3>
              <p class="text-zinc-300">{{ t('colonials.timeline.mining.desc') }}</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1821</div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ t('colonials.timeline.independence.title') }}</h3>
              <p class="text-zinc-300">{{ t('colonials.timeline.independence.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Topics Section -->
    <GridSection
      id="related-topics"
      title="Colonial Decline"
      :description="'The transition away from colonial rule and Spanish authority'"
      :features="pageData.relatedTopics.map(topic => ({
        icon: topic.icon,
        title: t(topic.titleKey),
        description: t(topic.descKey),
      }))"
    />

    <!-- Navigation to Related Topics -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">
          {{ t('francisco.section.exploreName') }} <span class="text-brand">Exhibitions</span>
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/francisco-morazan" variant="primary" size="lg">
            <i class="fa-solid fa-person mr-2"></i>{{ t('nav.francisco') }}
          </Button>
          <Button href="/indigenous-population" variant="secondary" size="lg">
            <i class="fa-solid fa-earth-americas mr-2"></i>{{ t('nav.indigenous') }}
          </Button>
          <Button href="/" variant="outline" size="lg">
            <i class="fa-solid fa-home mr-2"></i>{{ t('button.home') }}
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
