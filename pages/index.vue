<template>
  <section class="blog">
    <h1>Blog</h1>

    <div class="post-list">
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
      @update:page="(page) => (currentPage = page)"
    />
  </section>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { usePosts } from '@/composables/usePosts'
import PostCard from '@/components/posts/PostCard.vue';
import Pagination from '@/components/Pagination.vue';
import type { Post } from '@/types/blog';

const currentPage = ref(1);
const pageSize = 5;
const postsPerPage = 8;
const posts = reactive<Post[]>([]);

const { getAllPosts } = usePosts();

posts.value = await getAllPosts();

const totalPages = computed(() => {
  return Math.ceil(allPosts.value.length / postsPerPage);
});
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.value.slice(start, end);
});
</script>

<style scoped>
.blog {
  padding: 2rem;
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}


</style>
