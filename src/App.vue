<template>
	<nav>
		<h1>Nav's4Every1</h1>
	</nav>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</div>
	<router-view />
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Press Start 2P", cursive;
}
nav {
	height: 5rem;
	background-color: #5d5dff;
	color: #ffae5d;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
