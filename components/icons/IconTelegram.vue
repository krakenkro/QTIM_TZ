<template>
	<svg
		:width="width"
		:height="height"
		:viewBox="viewBox"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		:stroke="stroke"
		:stroke-width="strokeWidth"
		stroke-linecap="round"
		stroke-linejoin="round"
		v-bind="$attrs"
	>
		<path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" />
	</svg>
</template>
<script setup>
	defineProps({
		width: {
			type: [Number, String],
			default: 12,
		},
		height: {
			type: [Number, String],
			default: 12,
		},
		viewBox: {
			type: String,
			default: '0 0 12 12',
		},
		stroke: {
			type: String,
			default: '#E2BEFF',
		},
		strokeWidth: {
			type: [Number, String],
			default: 1.4,
		},
	});
</script>