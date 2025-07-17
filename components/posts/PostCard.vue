<template>
	<div class="card">
		<div class="card__image">
			<img :src="image" alt="post" @error="handleImageError" />
		</div>
		<div class="card__content">
			<p class="card__preview">{{ preview }}</p>
			<NuxtLink class="card__link" :to="`/posts/${id}`">Read more</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app';

interface CardProps {
	id: string;
	image: string;
	preview: string;
}

defineProps<CardProps>();
const { baseURL } = useRuntimeConfig().app;
const defaultImage = `${baseURL}no_image.png`;

// Показывает дефолтное изображение, если картинка не загрузилась
function handleImageError(event: Event) {
	const target = event.target as HTMLImageElement | null;
	if (target) {
		target.src = defaultImage;
	}
}
</script>

<style lang="scss">
.card {
	position: relative;
	transition: transform 0.3s ease;
	cursor: pointer;
	overflow: hidden;

	&:hover {
		transform: translateY(-5px);
	}



	&__image {
		height: 280px;
		margin-bottom: 24px;

		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
			display: block;
		}
	}

	&__preview {
		font-size: 20px;
		line-height: 1.2;
		margin: 0;
	}

	&__link {
		font-size: 20px;
		display: inline-block;
		margin-top: 12px;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s ease, visibility 0.3s ease;
		color: #E2BEFF;
		text-decoration: none;
	}

	&:hover .card__link {
		opacity: 1;
		visibility: visible;
	}
}
</style>