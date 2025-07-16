<template>
  <section class="post">
    <div class="container">
		<template v-if="post">
			<h1 class="post__title">{{ post.title }}</h1>
			<img :src="post.image" :alt="post.title" class="post__image" />
			<h2 class="post__subtitle">About</h2>
			<p class="post__description">{{ post.description }}</p>
		</template>
	  	<div v-else-if="pending" class="post__message">Загрузка...</div>
    	<div v-else class="post__message">Ошибка загрузки поста</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePosts } from '@/composables/usePosts';
import type { Post } from '@/types/blog';
import type { Ref } from 'vue';

const route = useRoute();
const { getPostById } = usePosts();
const { data: post, pending, error } = getPostById(route.params.id as string)  as {
	data: Ref<Post | null>,
	pending: Ref<boolean>,
	error: Ref<unknown>
};
</script>

<style lang="scss">
.post {
	margin-bottom: 80px;
	
	&__title {
		font-size: 84px;
		line-height: 1;
		font-weight: 400;
		margin: 0 0 73px;
		color: #101010;
	}

	&__description {
		color: #101010;
		font-size: 36px;
		line-height: 1.2;
		width: 50%;
	}

	&__image {
		width: 100%;
		object-fit: cover;
		margin-bottom: 80px;
	}

	&__subtitle {
		font-size: 16px;
		color: #101010;
		font-weight: 400;
		margin: 0 0 32px;
	}

	&__message {
		font-size: 36px;
	}
}
</style>