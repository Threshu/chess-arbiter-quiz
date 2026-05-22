<template>
  <section>
    <h1>Chess Arbiter Quiz</h1>
    <p>
      Welcome to the Chess Arbiter Quiz! Test your knowledge of chess rules and
      regulations.
    </p>
    <Button as-child> <NuxtLink to="/quiz">Start quiz</NuxtLink> </Button>
  </section>
  <section>
    <h2>Features</h2>
    <div class="flex gap-2">
      <Card v-for="card in cardsData" :key="card.title">
        <CardHeader>
          <CardTitle>
            <span class="emoji" aria-hidden="true">{{ card.emoji }}</span>
            {{ card.title }}
          </CardTitle>
          <CardDescription>
            {{ card.description }}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CardData {
  title: string;
  description: string;
  emoji: string;
}
const cardsData: CardData[] = [
  {
    title: "500+ pytań",
    description: "Pełna baza pytań egzaminacyjnych FIDE",
    emoji: "♟️",
  },
  {
    title: "Tryb egzaminacyjny",
    description: "Rozwiązuj testy z limitem czasu",
    emoji: "⏱️",
  },
  {
    title: "PL + EN",
    description: "Aplikacja dostępna w dwóch językach",
    emoji: "🌍",
  },
];
</script>
