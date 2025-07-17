<template>
	<section class="blog">
		<div class="container">
			<h1 class="blog__title">Articles</h1>

			<div v-if="pending" class="blog__loading">Загрузка...</div>
			<div v-else-if="error" class="blog__error">Ошибка при загрузке</div>

			<div v-else class="blog__list">
				<PostCard
					v-for="post in paginatedPosts"
					:key="post.id"
					:id="post.id"
					:image="post.image"
					:preview="post.preview"
				/>
			</div>

			<Pagination
				:currentPage="currentPage"
				:totalPages="totalPages"
				@update:page="(page: number) => (currentPage = page)"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePosts } from '@/composables/usePosts';
import PostCard from '@/components/posts/PostCard.vue';
import Pagination from '@/components/Pagination.vue';

const currentPage = ref(1);
const postsPerPage = 8;

const { getAllPosts } = usePosts();

const { data: allPosts, pending, error } = await getAllPosts();

const paginatedPosts = computed(() => {
	if (!allPosts.value) return [];
	const start = (currentPage.value - 1) * postsPerPage;
	const end = start + postsPerPage;
	return allPosts.value.slice(start, end);
})

const totalPages = computed(() => {
	return allPosts.value ? Math.ceil(allPosts.value.length / postsPerPage) : 0;
})
</script>

<style lang="scss">
.blog {
	margin-bottom: 140px;
	&__title {
		font-weight: 400;
		font-size: 84px;
		margin: 0 0 49px;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 32px;
		row-gap: 60px;
		margin-bottom: 50px;
	}
}
</style>
