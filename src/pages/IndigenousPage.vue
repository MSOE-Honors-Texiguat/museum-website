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
  title: "Indigenous Population",
  subtitle: "Ancient Cultures & Enduring Heritage",
  heroDescription:
    "Explore the rich and ancient cultures of Honduras' indigenous peoples, whose traditions, beliefs, and practices continue to shape the nation's cultural identity.",
  mainTopics: [
    {
      icon: "fa-solid fa-book",
      title: "Folktales",
      description:
        "Traditional stories passed down through generations preserve the wisdom, values, and imagination of indigenous communities.",
    },
    {
      icon: "fa-solid fa-church",
      title: "Church & Spirituality",
      description:
        "Indigenous spiritual practices blended with introduced religions, creating unique syncretic traditions and belief systems.",
    },
  ],
  relatedTopics: [
    {
      icon: "fa-solid fa-leaf",
      title: "Cultural Heritage",
      description:
        "The preservation and celebration of indigenous languages, crafts, and traditions in contemporary Honduras.",
    },
    {
      icon: "fa-solid fa-earth-americas",
      title: "Land & Territory",
      description:
        "The historical and ongoing relationship between indigenous peoples and the lands they inhabited for centuries.",
    },
    {
      icon: "fa-solid fa-users",
      title: "Community & Society",
      description:
        "The social structures, governance systems, and community organization of indigenous Honduran societies.",
    },
    {
      icon: "fa-solid fa-heart",
      title: "Contemporary Identity",
      description:
        "How indigenous Hondurans maintain their cultural identity and traditions in the modern world.",
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
            <i class="fa-solid fa-earth-americas mr-2"></i>Main Exhibition
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
      id="indigenous-topics"
      title="Cultural Foundations"
      description="The core elements of indigenous Honduran culture and spirituality"
      :features="pageData.mainTopics"
      :columns="2"
    />

    <!-- Historical Context Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          Indigenous <span class="text-brand">Civilizations</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-building"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Ancient Societies</h3>
            <p class="text-zinc-300">
              Before European contact, indigenous peoples of Honduras developed complex societies with 
              sophisticated governance systems, agricultural practices, and architectural achievements 
              that reflected their deep knowledge of the land.
            </p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="text-3xl text-brand mb-4">
              <i class="fa-solid fa-scroll"></i>
            </div>
            <h3 class="text-xl font-semibold mb-3">Traditions & Knowledge</h3>
            <p class="text-zinc-300">
              Indigenous knowledge systems encompassed agriculture, medicine, astronomy, and art. 
              These traditions were preserved and transmitted through oral history, artistic expression, 
              and practical skills passed from generation to generation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cultural Elements Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          Living <span class="text-brand">Traditions</span>
        </h2>
        <div class="space-y-6">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
            <div class="flex items-start gap-4">
              <div class="text-3xl text-brand flex-shrink-0">
                <i class="fa-solid fa-language"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Language & Oral Tradition</h3>
                <p class="text-zinc-300">
                  Indigenous languages preserve unique ways of understanding the world. Oral traditions 
                  continue to transmit stories, histories, and cultural values through spoken word and ceremony.
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
                <h3 class="text-xl font-semibold mb-2">Arts & Crafts</h3>
                <p class="text-zinc-300">
                  Textiles, pottery, weaving, and other traditional crafts are expressions of cultural 
                  identity and continue to be vital parts of indigenous communities today.
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
                <h3 class="text-xl font-semibold mb-2">Environmental Stewardship</h3>
                <p class="text-zinc-300">
                  Indigenous peoples developed sustainable relationships with their environment, 
                  with practices rooted in deep ecological knowledge and respect for natural systems.
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
      description="The various aspects of indigenous identity, community, and heritage"
      :features="pageData.relatedTopics"
      :columns="2"
      reverse-cards
    />

    <!-- Modern Indigenous Community Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Indigenous Honduras <span class="text-brand">Today</span>
        </h2>
        <p class="text-lg text-zinc-300 mb-8 leading-relaxed">
          Indigenous communities in Honduras continue to preserve and celebrate their cultural heritage 
          while adapting to contemporary challenges. From language preservation initiatives to cultural 
          festivals, indigenous Hondurans maintain strong connections to their ancestral traditions while 
          shaping the nation's future.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6">
            <div class="text-4xl text-brand mb-3">
              <i class="fa-solid fa-heart"></i>
            </div>
            <h3 class="font-semibold mb-2">Cultural Pride</h3>
            <p class="text-sm text-zinc-300">Celebrating indigenous heritage through festivals and community events</p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6">
            <div class="text-4xl text-brand mb-3">
              <i class="fa-solid fa-book"></i>
            </div>
            <h3 class="font-semibold mb-2">Education</h3>
            <p class="text-sm text-zinc-300">Teaching indigenous languages and histories to new generations</p>
          </div>
          <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-6">
            <div class="text-4xl text-brand mb-3">
              <i class="fa-solid fa-handshake"></i>
            </div>
            <h3 class="font-semibold mb-2">Advocacy</h3>
            <p class="text-sm text-zinc-300">Working to protect indigenous rights and land claims</p>
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
          <Button href="/francisco-morazan" variant="primary" size="lg">
            <i class="fa-solid fa-person mr-2"></i>Francisco Morazan
          </Button>
          <Button href="/spanish-colonials" variant="secondary" size="lg">
            <i class="fa-solid fa-crown mr-2"></i>Spanish Colonials
          </Button>
          <Button href="/" variant="outline" size="lg">
            <i class="fa-solid fa-home mr-2"></i>Home
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
