<script setup lang="ts">
import Button from "../components/Button.vue";

const sections = [
  {
    id: "francisco",
    title: "Francisco Morazan",
    icon: "fa-solid fa-person",
    description: "Explore the life and legacy of Honduras' most influential leader",
    path: "/francisco-morazan",
  },
  {
    id: "colonials",
    title: "Spanish Colonials",
    icon: "fa-solid fa-crown",
    description: "Discover the impact of Spanish colonial rule on Honduras",
    path: "/spanish-colonials",
  },
  {
    id: "indigenous",
    title: "Indigenous Population",
    icon: "fa-solid fa-earth-americas",
    description: "Learn about the rich cultures of Honduras' indigenous peoples",
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
          Welcome to the<br />
          <span class="text-brand">Honduras Museum</span>
        </h1>
        <p class="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
          Explore the rich and complex history of Honduras through three interconnected themes:
          the visionary leadership of Francisco Morazan, the lasting impacts of Spanish colonization,
          and the enduring heritage of indigenous populations.
        </p>
        <p class="text-lg text-zinc-400 mb-12">
          Navigate through each exhibition to discover how these forces shaped the nation we see today.
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
            <h2 class="text-2xl font-bold">{{ section.title }}</h2>
            <p class="text-zinc-300">{{ section.description }}</p>
            <div class="mt-4 inline-flex items-center gap-2 text-brand font-semibold group-hover:translate-x-1 transition-transform">
              Explore
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Scroll Indicator -->
      <div class="relative z-10 mt-16 animate-bounce">
        <p class="text-zinc-400 mb-2">Learn More</p>
        <i class="fa-solid fa-chevron-down text-brand text-2xl"></i>
      </div>
    </section>

    <!-- Exhibition Overview Section -->
    <section class="px-6 md:px-14 lg:px-28 py-20 bg-zinc-800/30 border-t border-zinc-700">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">
          Discover the <span class="text-brand">Museum Layout</span>
        </h2>
        <p class="text-lg text-zinc-300 mb-6 leading-relaxed">
          This museum presents a carefully designed exhibition structure that reveals the interconnected
          nature of Honduran history. Each of the three main themes branches into specific historical
          periods, events, and cultural elements.
        </p>
        <div class="bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-8">
          <h3 class="text-xl font-semibold mb-4 text-brand">Exhibition Structure:</h3>
          <ul class="space-y-3 text-zinc-300">
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-check text-brand mt-1"></i>
              <span><strong>Francisco Morazan</strong> - His early life, military ambitions, and political legacy</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-check text-brand mt-1"></i>
              <span><strong>Spanish Colonials</strong> - Colonial period, mining, and church influence</span>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-check text-brand mt-1"></i>
              <span><strong>Indigenous Population</strong> - Ancient traditions, folktales, and cultural heritage</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="px-6 md:px-14 lg:px-28 py-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to explore?
        </h2>
        <p class="text-lg text-zinc-300 mb-8">
          Start with any of the three main exhibitions and journey through the fascinating history of Honduras.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/francisco-morazan"
            variant="primary"
            size="lg"
          >
            <i class="fa-solid fa-person mr-2"></i>Francisco Morazan
          </Button>
          <Button
            href="/spanish-colonials"
            variant="secondary"
            size="lg"
          >
            <i class="fa-solid fa-crown mr-2"></i>Spanish Colonials
          </Button>
          <Button
            href="/indigenous-population"
            variant="outline"
            size="lg"
          >
            <i class="fa-solid fa-earth-americas mr-2"></i>Indigenous Population
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
