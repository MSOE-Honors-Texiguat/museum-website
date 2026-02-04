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
  title: "Spanish Colonials",
  subtitle: "The Legacy of Spanish Rule in Honduras",
  heroDescription:
    "Discover how Spanish colonization transformed Honduras, from the initial conquest to the establishment of colonial institutions that shaped society for centuries.",
  mainTopics: [
    {
      icon: "fa-solid fa-hammer",
      title: "Creation of Town",
      description:
        "Spanish conquistadors established towns and settlements, reorganizing indigenous populations under colonial rule and establishing new urban centers.",
    },
    {
      icon: "fa-solid fa-pickaxe",
      title: "Mining",
      description:
        "The extraction of precious metals and minerals became the economic foundation of colonial Honduras, driving Spanish interest and investment in the region.",
    },
    {
      icon: "fa-solid fa-cross",
      title: "Church",
      description:
        "The Catholic Church played a central role in colonial society, converting indigenous populations and establishing spiritual and cultural authority.",
    },
  ],
  relatedTopics: [
    {
      icon: "fa-solid fa-flag",
      title: "Spanish Removal",
      description:
        "The eventual decline of Spanish colonial rule and the transition to independence movements in the 19th century.",
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
            <i class="fa-solid fa-crown mr-2"></i>Main Exhibition
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
      id="colonial-topics"
      title="Colonial Foundations"
      description="The three pillars of Spanish colonial society in Honduras"
      :features="pageData.mainTopics"
      :columns="3"
    />

    <!-- Economic Impact Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          Colonial <span class="text-brand">Economy & Structure</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-pickaxe"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Mining Economy</h3>
            <p class="text-zinc-300">
              Silver and other precious metals extracted from Honduras were the lifeblood of colonial 
              commerce, attracting Spanish investment and labor, and establishing trade routes that 
              connected the colony to Europe and other Spanish colonies.
            </p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-cross"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Religious Authority</h3>
            <p class="text-zinc-300">
              The Church became the most powerful institution in colonial society, controlling vast lands, 
              wealth, and influencing political decisions. Conversion efforts transformed the spiritual 
              landscape and created new cultural identities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Colonial Timeline Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          Historical <span class="text-brand">Timeline</span>
        </h2>
        <div class="space-y-8">
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1524</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">Conquest & Settlement</h3>
              <p class="text-zinc-300">Spanish conquistadors arrive and establish colonial control over indigenous territories</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1550s+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">Town Development</h3>
              <p class="text-zinc-300">Colonial towns are founded and organized under Spanish administrative systems</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1600s+</div>
              <div class="w-1 h-20 bg-brand/30"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-semibold mb-2">Mining Boom</h3>
              <p class="text-zinc-300">Mining operations expand, bringing wealth and labor demands to colonial Honduras</p>
            </div>
          </div>
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-zinc-900 font-bold">1821</div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Independence</h3>
              <p class="text-zinc-300">Honduras breaks from Spanish colonial rule, though colonial institutions continue to influence society</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Topics Section -->
    <GridSection
      id="related-topics"
      title="Colonial Decline"
      description="The transition away from colonial rule and Spanish authority"
      :features="pageData.relatedTopics"
    />

    <!-- Navigation to Related Topics -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">
          Explore Other <span class="text-brand">Exhibitions</span>
        </h2>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/francisco-morazan" variant="primary" size="lg">
            <i class="fa-solid fa-person mr-2"></i>Francisco Morazan
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
