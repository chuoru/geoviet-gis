<template>
	<div>
		<nav class="main" v-on:click.prevent>
			<a href="#" class="info" v-on:click="makeActive('info')">Info</a>
			<i class="fa-solid fa-circle-user fa-xl user-account"></i>
		</nav>
	</div>
</template>
<script src="./NavBar.js"></script>
<style src="./NavBar.css" scope></style>