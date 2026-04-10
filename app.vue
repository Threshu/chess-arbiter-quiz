<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <Button variant="destructive" @click="console.log('test')">Test</Button>

    <button @click="$colorMode.preference = 'dark'">Dark</button>
    <button @click="$colorMode.preference = 'light'">Light</button>

    <button @click="$i18n.locale = 'en'">En</button>
    <button @click="$i18n.locale = 'pl'">Pl</button>

    <div :class="cn('bg-red-500 p-3 font-bold text-white')">test 2</div>
    {{ $t("welcome") }}
  </div>
</template>

<script setup lang="ts">
import { cn } from "./lib/utils";
</script>
