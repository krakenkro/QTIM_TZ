

import { useAsyncData } from '#imports';

const BASE_URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts';

export const usePosts = () => {
	const getAllPosts = () => {
		return useAsyncData('osts', () => $fetch(BASE_URL));
	}

	// Получение одного поста по id
	const getPostById = (id: string) => {
		return useAsyncData(`post-${id}`, () => $fetch(`${BASE_URL}/${id}`));
	}

	return {
		getAllPosts,
		getPostById,
	}
}
