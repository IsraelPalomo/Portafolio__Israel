<template>
	<main>
		<h2>Sobre Mi</h2>
		<div class="sobreMi">
			<div class="contenedor---img">
				<div class="sobreMi__img"></div>
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
		<img class="separador__portafolio" src="..\assets\triangleAsymmetrical.svg" alt="" />
		<section class="portafolio"></section>
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
		margin-right: 1rem;
		margin-left: 1rem;
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
				border: solid 10px $color-oscuro;

				border-radius: 100px;
				margin: 0 auto -6rem auto;
				box-shadow: 0 0px 1.8px rgba(0, 0, 0, 0.105), 0 0px 4px rgba(0, 0, 0, 0.155),
					0 0px 6.7px rgba(0, 0, 0, 0.191), 0 0px 10.2px rgba(0, 0, 0, 0.222),
					0 0px 14.7px rgba(0, 0, 0, 0.25), 0 0px 20.7px rgba(0, 0, 0, 0.278),
					0 0px 29.4px rgba(0, 0, 0, 0.309), 0 0px 42.7px rgba(0, 0, 0, 0.345),
					0 0px 65.8px rgba(0, 0, 0, 0.395), 0 0px 117px rgba(0, 0, 0, 0.5);
			}
		}

		.sobreMi__texto {
			width: auto;
			height: 50%;
			max-height: 30rem;
			box-shadow: 0 0px 1.8px rgba(0, 0, 0, 0.105), 0 0px 4px rgba(0, 0, 0, 0.155),
				0 0px 6.7px rgba(0, 0, 0, 0.191), 0 0px 10.2px rgba(0, 0, 0, 0.222),
				0 0px 14.7px rgba(0, 0, 0, 0.25), 0 0px 20.7px rgba(0, 0, 0, 0.278),
				0 0px 29.4px rgba(0, 0, 0, 0.309), 0 0px 42.7px rgba(0, 0, 0, 0.345),
				0 0px 65.8px rgba(0, 0, 0, 0.395), 0 0px 117px rgba(0, 0, 0, 0.5);
			padding: 1.5rem;
			padding-top: 7rem;
			border-radius: 10px;
			max-width: 35rem;
			margin: auto auto;
			background-color: $color-oscuro-2;

			p {
				text-align: center;
				color: $color-principal;
				font-family: $tipografia-parrafos;
			}
		}
	}
	.separador__portafolio {
		transform: rotate(180deg);
		margin-top: 10rem;
	}
	.portafolio {
		background-color: $color-principal;
		height: 25rem;
		width: 100%;
		margin-top: -4px;
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
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
