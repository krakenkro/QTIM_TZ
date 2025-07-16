<template>
	<header class="header">
		<div class="header__container">
			<NuxtLink to="/" class="header__logo">
				<img src="~/assets/images/Qtim.png" alt="Qtim" />
			</NuxtLink>

			<div class="header__wrapper">
				<nav class="header__nav" aria-label="Main Navigation">
					<ul class="header__nav-list">
						<li><NuxtLink class="header__nav-link" to="/works">Works</NuxtLink></li>
						<li><NuxtLink class="header__nav-link" to="/about">About</NuxtLink></li>
					</ul>
				</nav>

				<div class="header__actions">
					<button class="header__lang-btn">
						<img src="~/assets/images/united kingdom.png" alt="English" />
					</button>
					<button class="header__cta">Let’s work</button>
				</div>
			</div>
		</div>
	</header>
</template>
<style lang="scss">
.header {
	margin-bottom: 120px;

	&__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 47px 40px;
	}

	&__wrapper {
		display: flex;
		align-items: center;
		gap: 90px;
	}

	&__nav-list {
		display: flex;
		gap: 58px;
		list-style: none;
	}

	&__actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	&__lang-btn {
		background: none;
		border: 2px solid rgba(0, 0, 0, 0.1);
		cursor: pointer;
		border-radius: 50%;
		width: 52px;
		height: 52px;
	}

	&__cta {
		background-color: #000;
		color: #fff;
		border: none;
		border-radius: 999px;
		padding: 12px 24px;
		cursor: pointer;
		font-size: 20px;
	}

	&__nav-link {
		font-size: 20px;
		text-decoration: none;
		color: #000;

		&:hover, &:focus, &:active {
			color: #000;
		}
	}
}
</style>