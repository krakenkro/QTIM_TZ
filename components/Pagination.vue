<template>
	<div class="pagination">
		<button :class="['pagination__button', 'pagination__left', currentPage === 1 ? `invisible` : '' ]" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">&laquo;</button>

		<button
			class="pagination__button pagination__num"
			v-for="page in visiblePages"
			:key="page"
			@click="changePage(page)"
			:class="{ active: page === currentPage }"
		>
			{{ page }}
		</button>

		<button class="pagination__button pagination__right" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">&raquo;</button>
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
	if (page >= 1 && page <= totalPages.value) {
		emit('update:page', page);
	}
};

// Вычисляемые видимые номера страниц для пагинации
const visiblePages = computed(() => {
	const maxVisiblePages = 5;
	const halfVisible = Math.floor(maxVisiblePages / 2);
	
	let start = Math.max(1, currentPage.value - halfVisible);
	const end = Math.min(totalPages.value, start + maxVisiblePages - 1);
	

	start = Math.max(1, end - maxVisiblePages + 1);
	
	return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});
</script>

<style lang="scss">
.pagination {
	display: flex;
	gap: 8px;

	&__button {
		font-size: 16px;
		cursor: pointer;
		width: 48px;
		height: 48px;
		border-radius: 12px;
		border: none;
		background-color: #F3F3F3;

		&:focus, &:hover, &:active {
			background-color: #E8E8E8;
		}
	}

	.active {
		color: #fff;
		background-color: #000;

		&:focus, &:hover, &:active {
			background-color: #000;
		}
	}

	&__left.invisible {
		opacity: 0;
	}

	&__left {
		opacity: 1;
	}

	&__left,
	&__right {
		background-color: #fff;
		border: 1px solid #E8E8E8;
	}
}
</style>
