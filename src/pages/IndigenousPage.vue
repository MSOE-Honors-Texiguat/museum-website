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
  titleKey: "nav.indigenous",
  subtitleKey: "indigenous.subtitle",
  heroDescriptionKey: "indigenous.hero",
  mainTopics: [
    {
      icon: "fa-solid fa-book",
      titleKey: "indigenous.topic.folktales.title",
      descKey: "indigenous.topic.folktales.desc",
    },
    {
      icon: "fa-solid fa-church",
      titleKey: "indigenous.topic.spirituality.title",
      descKey: "indigenous.topic.spirituality.desc",
    },
  ],
  relatedTopics: [
    {
      icon: "fa-solid fa-leaf",
      titleKey: "indigenous.topic.culturalHeritage.title",
      descKey: "indigenous.topic.culturalHeritage.desc",
    },
    {
      icon: "fa-solid fa-earth-americas",
      titleKey: "indigenous.topic.land.title",
      descKey: "indigenous.topic.land.desc",
    },
    {
      icon: "fa-solid fa-users",
      titleKey: "indigenous.topic.community.title",
      descKey: "indigenous.topic.community.desc",
    },
    {
      icon: "fa-solid fa-heart",
      titleKey: "indigenous.topic.identity.title",
      descKey: "indigenous.topic.identity.desc",
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
        <div class="absolute top-20 left-10 w-40 h-40 bg-brand rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-20 w-60 h-60 bg-brand/50 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-3xl">
        <div class="inline-block mb-4">
          <span class="text-brand font-semibold tracking-wider uppercase text-sm px-4 py-2 bg-brand/10 rounded-full">
            <i class="fa-solid fa-earth-americas mr-2"></i>{{ t('indigenous.badge') }}
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
      id="indigenous-topics"
      :title="t('indigenous.section.foundations')"
      :description="'The core elements of indigenous Honduran culture and spirituality'"
      :features="pageData.mainTopics.map(topic => ({
        icon: topic.icon,
        title: t(topic.titleKey),
        description: t(topic.descKey),
      }))"
      :columns="2"
    />

    <!-- Historical Context Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          {{ t('indigenous.civilizations.title') }} <span class="text-brand">Civilizations</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-building"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('indigenous.civilizations.ancient.title') }}</h3>
            <p class="text-zinc-300">
              {{ t('indigenous.civilizations.ancient.desc') }}
            </p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-scroll"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('indigenous.civilizations.traditions.title') }}</h3>
            <p class="text-zinc-300">
              {{ t('indigenous.civilizations.traditions.desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cultural Elements Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          {{ t('indigenous.living.title') }} <span class="text-brand">Traditions</span>
        </h2>
        <div class="space-y-6">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="flex items-start gap-4">
              <div class="text-3xl text-brand flex-shrink-0">
                <i class="fa-solid fa-language"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ t('indigenous.living.language.title') }}</h3>
                <p class="text-zinc-300">
                  {{ t('indigenous.living.language.desc') }}
                </p>
              </div>
            </div>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="flex items-start gap-4">
              <div class="text-3xl text-brand flex-shrink-0">
                <i class="fa-solid fa-palette"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ t('indigenous.living.arts.title') }}</h3>
                <p class="text-zinc-300">
                  {{ t('indigenous.living.arts.desc') }}
                </p>
              </div>
            </div>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="flex items-start gap-4">
              <div class="text-3xl text-brand flex-shrink-0">
                <i class="fa-solid fa-tree"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ t('indigenous.living.environment.title') }}</h3>
                <p class="text-zinc-300">
                  {{ t('indigenous.living.environment.desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Topics Section -->
    <GridSection
      id="related-topics"
      title="Cultural Dimensions"
      :description="'The various aspects of indigenous identity, community, and heritage'"
      :features="pageData.relatedTopics.map(topic => ({
        icon: topic.icon,
        title: t(topic.titleKey),
        description: t(topic.descKey),
      }))"
      :columns="2"
      reverse-cards
    />

    <!-- Modern Indigenous Community Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          {{ t('indigenous.modern.title') }} <span class="text-brand">Today</span>
        </h2>
        <p class="text-lg text-zinc-300 mb-8 leading-relaxed">
          {{ t('indigenous.modern.subtitle') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6">
            <div class="text-4xl text-brand mb-3">
              <i class="fa-solid fa-heart"></i>
            </div>
            <h3 class="font-semibold mb-2">{{ t('indigenous.modern.pride.title') }}</h3>
            <p class="text-sm text-zinc-300">{{ t('indigenous.modern.pride.desc') }}</p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6">
            <div class="text-4xl text-brand mb-3">
              <i class="fa-solid fa-book"></i>
            </div>
            <h3 class="font-semibold mb-2">{{ t('indigenous.modern.education.title') }}</h3>
            <p class="text-sm text-zinc-300">{{ t('indigenous.modern.education.desc') }}</p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6">
            <div class="text-4xl text-brand mb-3">
              <i class="fa-solid fa-handshake"></i>
            </div>
            <h3 class="font-semibold mb-2">{{ t('indigenous.modern.advocacy.title') }}</h3>
            <p class="text-sm text-zinc-300">{{ t('indigenous.modern.advocacy.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation to Related Topics -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">
          {{ t('francisco.section.exploreName') }} <span class="text-brand">Exhibitions</span>
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/francisco-morazan" variant="primary" size="lg">
            <i class="fa-solid fa-person mr-2"></i>{{ t('nav.francisco') }}
          </Button>
          <Button href="/spanish-colonials" variant="secondary" size="lg">
            <i class="fa-solid fa-crown mr-2"></i>{{ t('nav.colonials') }}
          </Button>
          <Button href="/" variant="outline" size="lg">
            <i class="fa-solid fa-home mr-2"></i>{{ t('button.home') }}
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
