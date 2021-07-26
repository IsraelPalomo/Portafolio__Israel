<template>
	<div class="home">
		<Nav />
		<Header />
		<Main />
	</div>
</template>

<script>
// @ is an alias to /src

import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";

export default {
	name: "Home",
	components: {
		Nav,
		Header,
		Main,
	},
};
</script>
<style lang="scss"></style>
