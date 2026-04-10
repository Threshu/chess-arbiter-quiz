<template>
	<div>
		<NuxtRouteAnnouncer />
		<!-- <NuxtWelcome /> -->
		<Button variant="destructive" @click="console.log('test')">Test</Button>

		<button @click="$colorMode.preference = 'dark'">Dark</button>
		<button @click="$colorMode.preference = 'light'">Light</button>
	</div>
</template>
