<template>
  <header
    class="flex items-center justify-between bg-background px-4 shadow-md"
  >
    <NuxtLink
      to="/"
      class="flex items-center"
      aria-label="Chess Arbiter Quiz Home"
    >
      <img
        src="/logo.png"
        alt="Chess Arbiter Quiz Logo"
        width="80"
        height="80"
      />
      <span>Chess Arbiter Quiz</span>
    </NuxtLink>
    <nav aria-label="Main navigation">
      <ul class="flex gap-8">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
    <div>
      <AppDarkModeToggle />
      <AppLanguageSwitcher />
    </div>
  </header>
</template>
<script setup lang="ts"></script>
