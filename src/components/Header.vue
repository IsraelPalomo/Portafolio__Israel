<template>
	<header>
		<h1>Israel Palomo España</h1>
		<h2 class="animate__animated animate__flipInX">
			Desarrollador Y <br />
			Programador Web
		</h2>
		<a href="#sobreMi"><i class="fas fa-arrow-circle-down header__icono"></i></a>
	</header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
header {
	overflow: hidden;
	height: calc(100vh - 6rem);
	background-image: url("../assets/Fondo__Header.jpg");
	background-size: cover;
	background-position: center;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 1fr);
	text-align: center;
	align-items: center;
	h1 {
		color: $color-blanco;
		font-family: $tipografia-titulos;
		padding: 1em;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 2px solid $color-blanco;

		max-width: 700px;
		margin: 2rem auto 0 auto;
		width: auto;
	}
	h2 {
		color: $color-blanco;
		font-family: $tipografia-subtitulos;
		width: 80%;
		margin: -4rem auto 0 auto;
		padding: 1rem;
		background-color: $color-principal;
		border-radius: 15px;
		max-width: 600px;
		letter-spacing: 1.5px;
	}
	.animate__animated {
		--animate-duration: 2s; //!Duracion libreria JS animate.css
	}
	.header__icono {
		color: $color-blanco;
		font-size: 2rem;
		margin-bottom: 5rem;
		animation-name: pulso;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
	@keyframes pulso {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
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
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
