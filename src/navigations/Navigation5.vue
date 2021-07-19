<template>
	<header>
		<nav class="navigation">
			<div class="navigation__logo">
				<!-- //********************************************************************************//
				///////////////////////////******* CHANGE LOGO ********////////////////////////
				//********************************************************************************// !-->
				<img src="../assets/logo-navs.png" alt="" />
			</div>
			<ul class="navigation__links" v-show="!mobile">
				<!-- //********************************************************************************//
				///////////////////////////******* ADD DESKTOP LINKS ********////////////////////////
				//********************************************************************************// !-->
				<li><a href="">Home</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Contact</a></li>
			</ul>
			<div
				class="navigation__hamburger"
				@click="toggleMobileNav"
				v-show="mobile"
			>
				<!-- //********************************************************************************//
				///////////////////////////******* CHANGE HAMBURGER ********////////////////////////
				//********************************************************************************// !-->
				<span class="line"></span>
				<span class="line"></span>
				<span class="line"></span>
			</div>
		</nav>
		<ul class="mobile__links" v-show="mobileNav">
			<!-- //********************************************************************************//
				///////////////////////////******* ADD MOBILE LINKS ********////////////////////////
				//********************************************************************************// !-->
			<li><a href="">Homeddd</a></li>
			<li><a href="">About</a></li>
			<li><a href="">Contact</a></li>
		</ul>
	</header>
</template>
<script>
export default {
	name: "Navigation1",
	data() {
		return {
			mobile: null,
			mobileNav: null,
			windowWidth: null,
		};
	},
	created() {
		window.addEventListener("resize", this.checkScreenSize);
		this.checkScreenSize();
	},
	methods: {
		toggleMobileNav() {
			this.mobileNav = !this.mobileNav;
		},
		checkScreenSize() {
			this.windowWidth = window.innerWidth;
			if (this.windowWidth <= 800) {
				this.mobile = true;
				return;
			}
			this.mobile = false;
			this.mobileNav = false;
			return;
		},
	},
};
</script>
<style lang="scss" scoped>
header {
	background: rgb(255, 240, 24);
	.navigation {
		width: 80%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		img {
			width: 8rem;
			height: 8rem;
		}
		&__hamburger {
			cursor: pointer;
			.line {
				//********************************************************************************//
				///////////////////////////******* CHANGE HAMBURGER ********////////////////////////
				//********************************************************************************//
				display: block;
				width: 2.8rem;
				height: 0.4rem;
				margin: 0.5rem auto;
				background-color: rgb(255, 115, 0);
			}
		}
	}
	ul {
		display: flex;
	}
	li {
		&:not(:last-child) {
			margin-right: 5rem;
		}
	}
}
</style>
