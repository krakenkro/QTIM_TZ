<template>
	<div class="card">
		<div class="card__image">
			<img :src="image" alt="Block Image" />
		</div>
		<div class="card__content">
			<p class="card__preview">{{ preview }}</p>
			<NuxtLink :to="`/posts/${id}`">Read more</NuxtLink>
		</div>
	</div>
</template>
<script setup lang="ts">
interface Props {
	id: string;
	image: string;
	preview: string;
}

defineProps<Props>();
</script>