<template>
	<header id="inicio">
		<h1>Israel Palomo España</h1>
		<h2 class="animate__animated ">
			Desarrollador Y <br />
			Programador Web
		</h2>
		<div class="header__icono">
			<a href="#sobreMi"><i class="fas fa-arrow-circle-down header__icono__enlace"></i></a>
		</div>
		<div class="header__proyectos">
			<a href="https://venta-de-casas-y-pisos.netlify.app/" target="_blank">
				<div class="header__proyectos__proyecto--1" data-aos="fade-left" data-aos-duration="1000">
					<img src="..\assets\portatil.webp" alt="portatil header" />
				</div>
			</a>
			<a href="https://app-tiempo-israel.netlify.app/" target="_blank">
				<div class="header__proyectos__proyecto--2" data-aos="fade-left" data-aos-duration="2000">
					<img src="..\assets\movil.webp" alt="movil header" />
				</div>
			</a>
			<a href="https://hotel-philidor.netlify.app/" target="_blank">
				<div class="header__proyectos__proyecto--3" data-aos="fade-left" data-aos-duration="3000">
					<img src="..\assets\tv.webp" alt="ordenador header" />
				</div>
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
	background-image: url("../assets/Fondo__Header.webp");
	background-size: cover;
	background-position: center;
	background-attachment: fixed;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(2, 1fr);

	text-align: center;
	align-items: center;
	padding-top: 6rem;
	h1 {
		color: $color-blanco;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
		padding: 1.5rem 1rem;

		background-color: $color-oscuro;
		box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.112), 0 6.7px 5.3px rgba(0, 0, 0, 0.162),
			0 12.5px 10px rgba(0, 0, 0, 0.2), 0 22.3px 17.9px rgba(0, 0, 0, 0.238),
			0 41.8px 33.4px rgba(0, 0, 0, 0.288), 0 100px 80px rgba(0, 0, 0, 0.4);

		max-width: 700px;

		margin: 2rem auto -5rem auto;
		width: auto;
		font-size: 1.7rem;
	}
	h2 {
		color: $color-oscuro;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
		width: 80%;
		margin: -6rem auto 0 auto;
		padding: 1rem;
		background-color: $color-principal;

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
			margin-bottom: 1.5rem;
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
		margin-left: 5rem;
		margin-top: -7rem;

		.header__proyectos__proyecto--1 {
			img {
				width: 25rem;
				height: 15rem;
				filter: drop-shadow(40px -30px 20px #000);
			}

			position: relative;
			top: 15rem;
			right: 10rem;

			z-index: 99999;
		}
		.header__proyectos__proyecto--2 {
			img {
				width: 8rem;
				height: 13rem;
				filter: drop-shadow(40px -30px 20px #000);
			}

			width: 5rem;
			position: relative;
			top: 0rem;
			right: -23rem;
			z-index: 99999;
		}
		.header__proyectos__proyecto--3 {
			img {
				width: 35rem;
				height: 25rem;
				filter: drop-shadow(40px 30px 30px #000);
			}

			position: relative;
			top: -25rem;
			right: 0rem;

			z-index: 999;
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
