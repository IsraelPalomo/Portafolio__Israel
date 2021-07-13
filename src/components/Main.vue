<template>
	<main>
		<h2>Sobre Mi</h2>
		<div class="sobreMi">
			<div class="contenedor---img">
				<div class="sobreMi__img"></div>
				<button class="sobreMi__btn">Descargar Curriculum</button>
			</div>
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
	height: 100rem;
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
		margin-top: 7rem;
		.contenedor---img {
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			gap: 4rem;
			.sobreMi__img {
				background-image: url("../assets/avatar.jpeg");
				background-size: cover;
				background-position: center;
				width: 10rem;
				height: 10rem;
				box-shadow: (-20px 20px 0 $color-ternario);
				border-radius: 100px;
				margin: 0 auto 2rem auto;
			}
			.sobreMi__btn {
				background-color: $color-ternario;
				color: $color-blanco;
				padding: 2rem;
				border-radius: 15px;
				font-family: $tipografia-subtitulos;
				border: none;
				max-width: 15rem;
				margin: 0 auto;
				display: none;
			}
		}

		.sobreMi__texto {
			width: auto;
			height: 17rem;
			box-shadow: 0 3.1px 2.7px rgba(0, 0, 0, 0.39), 0 7.9px 6.9px rgba(0, 0, 0, 0.396),
				0 16.1px 14.2px rgba(0, 0, 0, 0.371), 0 33.2px 29.2px rgba(0, 0, 0, 0.334),
				0 91px 80px rgba(0, 0, 0, 0.29);
			padding: 2rem;
			border-radius: 0 0 15px 15px;
			max-width: 35rem;
			margin: 0 auto 0 auto;

			p {
				text-align: justify;
				color: $color-principal;
				font-family: $tipografia-parrafos;
			}
		}
	}
}
//*--------------------------------------------Media Queris---------------------------------------------------------------------------

@media (min-width: 450px) {
}
@media (min-width: 650px) {
}
@media (min-width: 900px) {
}
@media (min-width: 1200px) {
	main {
		.sobreMi {
			display: flex;
			justify-content: space-around;
			.contenedor---img {
				.sobreMi__btn {
					display: block;
				}
			}
		}
	}
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
