<template>
	<header>
		<h1>Israel Palomo España</h1>
		<h2 class="animate__animated animate__flipInX">
			Desarrollador Y <br />
			Programador Web
		</h2>
		<div class="header__icono">
			<a href="#sobreMi"><i class="fas fa-arrow-circle-down header__icono__enlace"></i></a>
		</div>
		<div class="header__proyectos">
			<a href="https://venta-de-casas-y-pisos.netlify.app/" target="_blank">
				<div class="header__proyectos__proyecto--1"></div>
			</a>
			<a href="https://hotel-philidor.netlify.app/" target="_blank">
				<div class="header__proyectos__proyecto--2"></div>
			</a>
			<a href="https://app-tiempo-israel.netlify.app/" target="_blank">
				<div class="header__proyectos__proyecto--3"></div>
			</a>
		</div>
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
		backdrop-filter: blur(4px);
		-webkit--filter: blur(5px);
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
		.header__icono__enlace {
			color: $color-blanco;
			font-size: 2rem;
			margin-bottom: 5rem;
		}
	}

	.header__proyectos {
		width: 36rem;
		height: 27rem;

		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		display: none;

		.header__proyectos__proyecto--1 {
			border-radius: 15px;
			cursor: pointer;
			width: 20rem;
			height: 15rem;
			background-image: url("../assets/proyecto1.png");
			background-position: center;
			background-size: cover;
			position: relative;
			top: 5rem;
			right: -8rem;
			border: 2px solid white;
			z-index: 99999;
			transform: perspective(400px) rotateY(-15deg);
			box-shadow: 0 2.6px 2.2px rgba(0, 0, 0, 0.056), 0 6.2px 5.3px rgba(0, 0, 0, 0.081),
				0 11.6px 10px rgba(0, 0, 0, 0.1), 0 20.8px 17.9px rgba(0, 0, 0, 0.119),
				0 38.9px 33.4px rgba(0, 0, 0, 0.144), 0 93px 80px rgba(0, 0, 0, 0.2);

			&:hover {
				transform: scale(1.1);
				z-index: 999999;
				transition-duration: 1s;
			}
		}
		.header__proyectos__proyecto--2 {
			border-radius: 15px;
			cursor: pointer;
			width: 20rem;
			height: 15rem;
			background-image: url("../assets/proyecto4.png");
			background-position: center;
			background-size: cover;

			border: 2px solid white;
			position: relative;

			right: -3rem;
			z-index: 999;
			transform: perspective(400px) rotateY(-20deg);
			box-shadow: 0 2.6px 2.2px rgba(0, 0, 0, 0.056), 0 6.2px 5.3px rgba(0, 0, 0, 0.081),
				0 11.6px 10px rgba(0, 0, 0, 0.1), 0 20.8px 17.9px rgba(0, 0, 0, 0.119),
				0 38.9px 33.4px rgba(0, 0, 0, 0.144), 0 93px 80px rgba(0, 0, 0, 0.2);

			&:hover {
				transform: scale(1.1);
				z-index: 999999;
				transition-duration: 1s;
			}
		}
		.header__proyectos__proyecto--3 {
			border-radius: 15px;
			cursor: pointer;
			width: 20rem;
			height: 25rem;
			background-image: url("../assets/proyecto5.png");
			background-position: center;
			background-size: cover;
			position: relative;
			top: -30rem;
			right: -12rem;
			border: 2px solid white;
			z-index: 999;
			transform: perspective(400px) rotateY(-15deg);
			box-shadow: 0 2.6px 2.2px rgba(0, 0, 0, 0.056), 0 6.2px 5.3px rgba(0, 0, 0, 0.081),
				0 11.6px 10px rgba(0, 0, 0, 0.1), 0 20.8px 17.9px rgba(0, 0, 0, 0.119),
				0 38.9px 33.4px rgba(0, 0, 0, 0.144), 0 93px 80px rgba(0, 0, 0, 0.2);

			&:hover {
				transform: scale(1.1);
				z-index: 999999;
				transition-duration: 1s;
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
	header {
		grid-template-columns: repeat(2, 1fr);

		h2 {
			grid-column: 1/2;
		}
		.header__icono {
			grid-column: 1/2;
			grid-row: 3/4;
			justify-self: end;
			margin-right: -1rem;
		}
		.header__proyectos {
			display: block;
			grid-column: 2/3;
			grid-row: 1/3;
			justify-self: center;
		}
	}
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
