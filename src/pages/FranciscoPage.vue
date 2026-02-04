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
  titleKey: "nav.francisco",
  subtitleKey: "francisco.subtitle",
  heroDescriptionKey: "francisco.hero",
  mainTopics: [
    {
      icon: "fa-solid fa-star",
      titleKey: "francisco.topic.earlyLife.title",
      descKey: "francisco.topic.earlyLife.desc",
    },
    {
      icon: "fa-solid fa-sword",
      titleKey: "francisco.topic.military.title",
      descKey: "francisco.topic.military.desc",
    },
    {
      icon: "fa-solid fa-map",
      titleKey: "francisco.topic.texiguat.title",
      descKey: "francisco.topic.texiguat.desc",
    },
  ],
  relatedTopics: [
    {
      icon: "fa-solid fa-peace",
      titleKey: "francisco.topic.postWar.title",
      descKey: "francisco.topic.postWar.desc",
    },
    {
      icon: "fa-solid fa-landmark",
      titleKey: "francisco.topic.trinidad.title",
      descKey: "francisco.topic.trinidad.desc",
    },
    {
      icon: "fa-solid fa-crown",
      titleKey: "francisco.topic.political.title",
      descKey: "francisco.topic.political.desc",
    },
    {
      icon: "fa-solid fa-skull",
      titleKey: "francisco.topic.death.title",
      descKey: "francisco.topic.death.desc",
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
            <i class="fa-solid fa-person mr-2"></i>{{ t('francisco.badge') }}
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
      id="main-topics"
      :title="t('francisco.section.mainTopics')"
      :description="`The formative experiences and ambitions that defined Francisco Morazan's role in history`"
      :features="pageData.mainTopics.map(topic => ({ icon: topic.icon, title: t(topic.titleKey), description: t(topic.descKey) }))"
      :columns="3"
    />

    <!-- Related Topics Section -->
    <GridSection
      id="related-topics"
      :title="t('francisco.section.relatedTopics')"
      :description="`How Morazan's ambitions and actions shaped the future of Central America`"
      :features="pageData.relatedTopics.map(topic => ({ icon: topic.icon, title: t(topic.titleKey), description: t(topic.descKey) }))"
      :columns="2"
      reverse-cards
    />

    <!-- Historical Context Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          {{ t('francisco.timeline.title') }} <span class="text-brand">Timeline</span>
        </h2>
        <div class="space-y-8">
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1800s</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">{{ t('francisco.timeline.earlyLife.title') }}</h3>
              <p class="text-zinc-300">{{ t('francisco.timeline.earlyLife.desc') }}</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1821+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">{{ t('francisco.timeline.military.title') }}</h3>
              <p class="text-zinc-300">{{ t('francisco.timeline.military.desc') }}</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1838+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">{{ t('francisco.timeline.federation.title') }}</h3>
              <p class="text-zinc-300">{{ t('francisco.timeline.federation.desc') }}</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1842</div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ t('francisco.timeline.death.title') }}</h3>
              <p class="text-zinc-300">{{ t('francisco.timeline.death.desc') }}</p>
            </div>
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
          <Button href="/spanish-colonials" variant="primary" size="lg">
            <i class="fa-solid fa-crown mr-2"></i>{{ t('nav.colonials') }}
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
