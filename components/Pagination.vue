<template>
  <div class="pagination">
    <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">←</button>

    <button
      v-for="page in visiblePages"
      :key="page"
      @click="changePage(page)"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>

    <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">→</button>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();
const { currentPage, totalPages } = toRefs(props);

const emit = defineEmits<{
  (e: 'update:page', page: number): void;
}>();

const changePage = (page: number) => {
	console.log(`Changing to page: ${page}`);
  if (page >= 1 && page <= totalPages.value) {
    emit('update:page', page);
  }
};

const visiblePages = computed(() => {
  const pages: number[] = [];
  let start = Math.max(1, currentPage.value - 2);
  let end = Math.min(totalPages.value, start + 4);

  if (end - start < 4) {
    start = Math.max(1, end - 4);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});
</script>

<style scoped>
.pagination {
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.pagination button {
  padding: 0.5rem 1rem;
  border: none;
  background: #eee;
  cursor: pointer;
}

.pagination button.active {
  background: #007bff;
  color: white;
}
</style>
