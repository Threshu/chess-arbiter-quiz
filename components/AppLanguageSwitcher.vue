<script setup lang="ts">
const { localeProperties, locales, setLocale } = useI18n();
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        {{ localeProperties }}
        <span class="sr-only">Toggle language</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="loc in locales"
        :key="loc.code"
        @click="setLocale(loc.code)"
      >
        <img
          :src="`/flags/${loc.code}.svg`"
          :alt="loc.name"
          class="mr-2 h-5 w-5"
        />
        {{ loc.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
