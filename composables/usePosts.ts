

import { useFetch } from '#app';
export const usePosts = () => {
	const getAllPosts = async () => {
		const { data, error } = await useFetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');
		if (error.value) throw error.value;
		return data.value;
	}

	const getPostById = async (id: string) => {
		const { data, error } = await useFetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`);
		if (error.value) throw error.value;
		return data.value;
	}

	return { getAllPosts, getPostById };
};
