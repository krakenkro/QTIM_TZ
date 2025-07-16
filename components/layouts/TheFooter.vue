<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__question">
				Is there a project?
			</div>
			<div class="footer__wrapper">
				<div class="footer__title">Let’s work<br />together</div>
				<div class="footer__right">
					<div class="footer__contact">
						<span>For all questions</span>
						<a class="footer__link" href="tel:+79202780068">+7 (920) 278—00—68</a>
						<a class="footer__link" href="mailto:qtim@agency.com">qtim@agency.com</a>
					</div>
					<div class="footer__location">
						<div class="footer__address">
							<span>Office in Russia</span>
							<address>
								139 Ruben Station Lake<br />
								Drew, NM 52678
							</address>
							<button class="footer__icon-btn">
								<IconTelegram />
							</button>
						</div>
						<div class="footer__address">
							<span>Office in Dubai</span>
							<address>
								139 Ruben Station Lake<br />
								Drew, NM 52678
							</address>
							<button class="footer__icon-btn">
								<IconTelegram />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="footer__bottom">
				<div class="footer__socials">
					<a href="#" class="footer__social-link">
						Facebook
					</a>
					<a href="#" class="footer__social-link">
						Instagram
					</a>
					<a href="#" class="footer__social-link">
						Telegram
					</a>
				</div>
				<div class="footer__circle-wrapper">
					<div class="footer__circle">
						<span class="footer__circle-text">Go</span>
					</div>
				</div>
				<div class="footer__socials">
					<a href="#" class="footer__social-link">
						Behance
					</a>
					<a href="#" class="footer__social-link">
						Linkedn
					</a>
					<a href="#" class="footer__social-link">
						Privacy Policy
					</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import IconTelegram from '@/components/icons/IconTelegram.vue';
</script>

<style lang="scss">
.footer {
	padding: 140px 0 30px;
	background-color: #E2BEFF;

	&__question {
		font-size: 16px;
		margin-bottom: 56px;
	}

	&__title {
		font-size: 112px;
		text-decoration: underline;
    	text-decoration-thickness: from-font;
		line-height: 1;
	}

	&__right {
		font-size: 16px;
	}

	&__wrapper {
		display: flex;
		gap: 368px;
		margin-bottom: 273px;
	}

	&__contact {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 36px;
	}

	&__location {
		display: flex;
		flex-direction: column;
		gap: 36px;
	}

	&__address {
		display: flex;
		flex-direction: column;
		gap: 10px;
		
		address {
			font-style: normal;
		}
	}

	&__link,
	&__social-link {
		color: #000;
		text-decoration: none;
		font-size: 16px;

		&:hover, &:focus, &:active {
			color: #000;
		}
	}

	&__social-link {
		border-bottom: 0.4px solid #000;
	}

	&__icon-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border: none;
		background-color: #000;
		width: 32px;
		height: 32px;
		border-radius: 16px;
	}

	&__bottom {
		display: flex;
		justify-content: space-between;
		position: relative;
	}

	&__socials {
		display: flex;
		gap: 32px;
	}

	&__circle-wrapper {
		position: absolute;
		bottom: -30px;
		left: 50%;
		transform: translateX(-50%);
		width: 300px;
		height: 150px;
		overflow: hidden;
		z-index: 1;
	}

	&__circle {
		width: 300px;
		height: 300px;
		background-color: black;
		border-radius: 50%;
		position: relative;
	}

	&__circle-text {
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 20px;
		font-weight: bold;
	}
}
</style>