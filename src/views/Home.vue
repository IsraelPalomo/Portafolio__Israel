<template>
	<div class="home">
		<Nav />
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script>
// @ is an alias to /src

import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import Footer from "../components/Footer.vue";

export default {
	name: "Home",
	components: {
		Nav,
		Header,
		Main,
		Footer,
	},
};
</script>
<style lang="scss"></style>
