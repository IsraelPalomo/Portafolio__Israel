<template>
	<div class="home">
		<Nav />
		<Header />
	</div>
</template>

<script>
// @ is an alias to /src

import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";
export default {
	name: "Home",
	components: {
		Nav,
		Header,
	},
};
</script>
<style lang="scss"></style>
