<template>
	<main>
		<h2>Sobre Mi</h2>
		<div class="sobreMi">
			<div class="sobreMi__img"></div>
			<div class="sobreMi__texto">
				<p>
					Hola 🖐, me llamo Israel actualmente me encuentro inmerso en el mundo del desarrollo web
					ya hace 3 años , actualmente manejo tecnologias como Html, Css, JavaScripts lo que nos da
					unas bases solidas para el mundo del desarrollo web , ademas manejo otras tecnologias como
					Sass, Webpack, Vue.Js, Nuxt, Npm y mas. Tambien estoy enfocado en buenas practicas con
					metodologias como BEM , Git y GitHub.
				</p>
			</div>
		</div>
	</main>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
main {
	background-color: $color-oscuro;
	width: 100%;
	height: 55rem;
	padding-top: 10rem;
	box-sizing: border-box;
	h2 {
		text-align: center;
		padding: 1rem;
		background-color: $color-principal;
		width: auto;
		margin: 0 auto;
		max-width: 15rem;

		color: $color-oscuro;
		font-family: $tipografia-subtitulos;
	}
	.sobreMi {
		margin-top: 10rem;
		display: flex;
		justify-content: space-around;
		.sobreMi__img {
			background-image: url("../assets/avatar.jpeg");
			background-size: cover;
			background-position: center;
			width: 10rem;
			height: 10rem;
			margin-left: 5rem;
			clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
			box-shadow: (20px -20px 10px 10px #37aa9c);
		}
		.sobreMi__texto {
			width: 35rem;
			height: 20rem;
			box-shadow: 0 3.1px 2.7px rgba(0, 0, 0, 0.39), 0 7.9px 6.9px rgba(0, 0, 0, 0.396),
				0 16.1px 14.2px rgba(0, 0, 0, 0.371), 0 33.2px 29.2px rgba(0, 0, 0, 0.334),
				0 91px 80px rgba(0, 0, 0, 0.29);
			padding: 5rem;
			border-radius: 0 0 15px 15px;
			p {
				text-align: justify;
				color: $color-principal;
				font-family: $tipografia-parrafos;
			}
		}
	}
}
</style>
