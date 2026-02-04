<script setup lang="ts">
import GridSection from "../components/GridSection.vue";
import Button from "../components/Button.vue";

interface TopicCard {
  icon: string;
  title: string;
  description: string;
}

interface PageData {
  title: string;
  subtitle: string;
  heroDescription: string;
  mainTopics: TopicCard[];
  relatedTopics: TopicCard[];
}

const pageData: PageData = {
  title: "Francisco Morazan",
  subtitle: "Visionary Leader of Central America",
  heroDescription:
    "Francisco Morazan stands as one of Honduras' most significant historical figures, a military commander and statesman whose ambitions shaped the region.",
  mainTopics: [
    {
      icon: "fa-solid fa-star",
      title: "Early Life",
      description:
        "Born in Tegucigalpa, Francisco Morazan rose from humble beginnings to become a military strategist and political leader.",
    },
    {
      icon: "fa-solid fa-sword",
      title: "Military Ambitions",
      description:
        "His military campaigns unified Central American states and established him as a formidable military commander in the region.",
    },
    {
      icon: "fa-solid fa-map",
      title: "In Texiguat",
      description:
        "Morazan's connection to Texiguat and his role in the town's development reflects his broader vision for Honduras.",
    },
  ],
  relatedTopics: [
    {
      icon: "fa-solid fa-peace",
      title: "Post-War Period",
      description:
        "Following military campaigns, Morazan worked to establish political stability and reform in Central America.",
    },
    {
      icon: "fa-solid fa-landmark",
      title: "Trinidad",
      description:
        "His headquarters and base of operations during key periods of his leadership and military organization.",
    },
    {
      icon: "fa-solid fa-crown",
      title: "Political Ambitions",
      description:
        "Beyond military achievements, Morazan sought to create a unified, progressive Central American federation.",
    },
    {
      icon: "fa-solid fa-skull",
      title: "Death & Legacy",
      description:
        "His execution in 1842 marked a turning point, but his legacy continues to influence Central American politics.",
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
            <i class="fa-solid fa-person mr-2"></i>Main Exhibition
          </span>
        </div>
        <h1 class="text-5xl md:text-6xl font-bold mb-6">{{ pageData.title }}</h1>
        <h2 class="text-2xl md:text-3xl text-brand mb-8">{{ pageData.subtitle }}</h2>
        <p class="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8">
          {{ pageData.heroDescription }}
        </p>
        <Button href="/" variant="outline" size="md">
          <i class="fa-solid fa-arrow-left mr-2"></i>Back to Home
        </Button>
      </div>
    </section>

    <!-- Main Topics Section -->
    <GridSection
      id="main-topics"
      title="Early Life, Military, & Texiguat"
      description="The formative experiences and ambitions that defined Francisco Morazan's role in history"
      :features="pageData.mainTopics"
      :columns="3"
    />

    <!-- Related Topics Section -->
    <GridSection
      id="related-topics"
      title="Legacy & Political Impact"
      description="How Morazan's ambitions and actions shaped the future of Central America"
      :features="pageData.relatedTopics"
      :columns="2"
      reverse-cards
    />

    <!-- Historical Context Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          Historical <span class="text-brand">Timeline</span>
        </h2>
        <div class="space-y-8">
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1800s</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">Early Life & Rise</h3>
              <p class="text-zinc-300">Francisco Morazan establishes himself as a military figure in Central America</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1821+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">Military Campaigns</h3>
              <p class="text-zinc-300">Leads military operations to unify Central American states and expand his influence</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1838+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">Federation & Reform</h3>
              <p class="text-zinc-300">Works to establish the Central American federation and implement political reforms</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1842</div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Death & Legacy</h3>
              <p class="text-zinc-300">His execution marks the end of an era, but his influence persists in Central American history</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation to Related Topics -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">
          Explore Other <span class="text-brand">Exhibitions</span>
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/spanish-colonials" variant="primary" size="lg">
            <i class="fa-solid fa-crown mr-2"></i>Spanish Colonials
          </Button>
          <Button href="/indigenous-population" variant="secondary" size="lg">
            <i class="fa-solid fa-earth-americas mr-2"></i>Indigenous Population
          </Button>
          <Button href="/" variant="outline" size="lg">
            <i class="fa-solid fa-home mr-2"></i>Home
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
