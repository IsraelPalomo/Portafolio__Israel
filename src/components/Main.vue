<template>
	<main>
		<h2 id="sobreMi">Sobre Mi</h2>
		<div class="sobreMi">
			<div class="contenedor---img">
				<div class="sobreMi__img"></div>
			</div>
			<div class="sobreMi__texto">
				<p>
					Hola 🖐, me llamo Israel actualmente me encuentro inmerso en el mundo del desarrollo web
					ya hace 3 años , actualmente manejo tecnologias como Html, Css, JavaScripts lo que nos da
					unas bases sólidas para el mundo del desarrollo web, ademas manejo otras tecnologias como
					Sass, Webpack, Vue.Js, Nuxt, Npm y mas. También estoy enfocado en buenas prácticas con
					metodologías como BEM , Git y GitHub.
				</p>
			</div>
		</div>

		<h2 class="portafolio__titulo" id="proyectos">Mis Proyectos</h2>
		<section class="portafolio">
			<div
				class="portafolio__proyecto portafolio__proyecto--1"
				data-aos="fade-left"
				data-aos-duration="1000"
			>
				<div class="portafolio__proyecto__img portafolio__proyecto__img--1"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Proyecto de página web para ventas de casas y solares, buen proyecto para iniciarse en
						el mundo del desarrollo web. Algunas de las tecnologías usadas son Html, Css
						(Principalmente).
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://venta-de-casas-y-pisos.netlify.app" target="_blank"
						><button>Ver Sitio</button></a
					>
					<button>Ver Codigo</button>
				</div>
			</div>

			<div
				class="portafolio__proyecto portafolio__proyecto--2"
				data-aos="fade-up"
				data-aos-duration="1500"
			>
				<div class="portafolio__proyecto__img portafolio__proyecto__img--2"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Proyecto para club de ajedrez local, con informacion sobre proximos torneos y quedadas.
						Realizado con Html, Css, JavaScript, Sass, Webpack ect, ademas de utilizar FullPage.js
						para estructurar la pagina.
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://ajedrejos.netlify.app/" target="_blank"><button>Ver Sitio</button></a>
					<a href="https://github.com/IsraelPalomo/Ajedrejos" target="_blank"
						><button>Ver Codigo</button></a
					>
				</div>
			</div>
			<div
				class="portafolio__proyecto portafolio__proyecto--3"
				data-aos="fade-right"
				data-aos-duration="1000"
			>
				<div class="portafolio__proyecto__img portafolio__proyecto__img--3"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Proyecto de Ajedrez para practicar jugadas y aperturas, marcandote las amezas
						potenciales en la posición además de poder cambiar entre las piezas y resetear el
						tablero.
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://app-ajedrez-israel.netlify.app" target="_blank"
						><button>Ver Sitio</button></a
					>
					<a href="https://github.com/IsraelPalomo/App__Ajedrez" target="_blank"
						><button>Ver Codigo</button></a
					>
				</div>
			</div>
			<div
				class="portafolio__proyecto portafolio__proyecto--4"
				data-aos="fade-left"
				data-aos-duration="1000"
			>
				<div class="portafolio__proyecto__img portafolio__proyecto__img--4"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						LadingPage de un Hotel, construido con Html, Css y JavaScripts. Además de otras
						tecnologías con Webpack y Sass, buen proyecto para practicar la creacion desde 0 con
						Webpack.
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://hotel-philidor.netlify.app" target="_blank"
						><button>Ver Sitio</button></a
					>
					<a href="https://github.com/IsraelPalomo/Hotel--Philidor" target="_blank"
						><button>Ver Codigo</button></a
					>
				</div>
			</div>

			<div
				class="portafolio__proyecto portafolio__proyecto--5"
				data-aos="fade-up"
				data-aos-duration="1500"
			>
				<div class="portafolio__proyecto__img portafolio__proyecto__img--5"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Aplicación de clima en distintas zonas. Pudiendo mirar desde paises y ciudades hasta
						pueblos, buen proyecto para practicar como consumir un API REST.
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://app-tiempo-israel.netlify.app" target="_blank"
						><button>Ver Sitio</button></a
					>
					<a href="https://github.com/IsraelPalomo/APP__TIEMPO" target="_blank"
						><button>Ver Codigo</button></a
					>
				</div>
			</div>
			<div
				class="portafolio__proyecto portafolio__proyecto--6"
				data-aos="fade-right"
				data-aos-duration="1000"
			>
				<div class="portafolio__proyecto__img portafolio__proyecto__img--6"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Aplicacion de pokedex con funcion de buscar por id y nombre, con ayuda de Poke API muy
						buen proyecto para practicar paginacion, rutas, llamadas a APIs. Insprescindible para
						todo amante de pokemon.
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://pokedex-israel.netlify.app" target="_blank"
						><button>Ver Sitio</button></a
					>
					<a href="https://github.com/IsraelPalomo/pokedex" target="_blank"
						><button>Ver Codigo</button></a
					>
				</div>
			</div>
		</section>

		<div class="relleno"></div>
		<section class="formulario" id="contacto">
			<div class="formulario__titulo">
				Contactame...
			</div>
			<div class="formulario__contenedor">
				<form
					class="formulario__contenedor__form"
					name="ask-question"
					action="https://formspree.io/f/xzbykrgq"
					method="POST"
				>
					<div class="cuerpo__formulario">
						<input
							type="hidden"
							name="form-name"
							value="ask-question"
							data-aos="fade-up-right"
							data-aos-duration="300"
						/>
						<div class="parte1__form">
							<h3>NOMBRE</h3>

							<input
								type="text"
								name="nombre"
								id="name"
								required
								placeholder="Tu nombre"
								data-aos="fade-up-right"
								data-aos-duration="800"
							/>
							<h3>EMAIL</h3>

							<input
								type="text"
								name="correo"
								id="email"
								required
								placeholder="Tu Email"
								data-aos="fade-up-right"
								data-aos-duration="1300"
							/>
						</div>

						<textarea
							name="mensaje"
							id="mensaje"
							cols="10"
							rows="10"
							placeholder="Escribe tu mensaje..."
							data-aos="fade-up-right"
							data-aos-duration="1800"
						></textarea>
					</div>

					<button class="btn-form" type="submit">Enviar Formulario</button>
				</form>
			</div>
		</section>
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
	overflow: hidden;

	padding-top: 10rem;

	h2 {
		text-align: center;
		padding: 1rem;
		background-color: $color-principal;
		width: auto;
		margin: 0 auto -5rem auto;
		max-width: 15rem;

		color: $color-oscuro;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
	}
	.sobreMi {
		margin-top: 10rem;
		margin-right: 1rem;
		margin-left: 1rem;
		padding-bottom: 5rem;
		background-image: url("../assets/hola.webp");
		background-size: cover;
		background-position: center;

		.contenedor---img {
			margin: 0 auto;

			display: flex;
			flex-direction: column;
			justify-content: space-around;
			gap: 4rem;
			.sobreMi__img {
				background-image: url("../assets/avatar.webp");
				background-size: cover;
				background-position: center;
				width: 10rem;
				height: 10rem;
				border: solid 5px $color-oscuro;

				border-radius: 49% 51% 71% 29% / 40% 30% 70% 60%;
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

			max-width: 35rem;
			margin: auto auto;

			background-color: $color-oscuro-2;

			p {
				text-align: center;
				color: $color-principal;
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
					Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
				font-size: 1.2rem;
			}
		}
	}
	.separador__portafolio {
		transform: rotate(180deg);
		margin-top: 10rem;
		margin-bottom: -6rem;
		z-index: 9999;
	}
	.separador__portafolio--1 {
		transform: rotate(180deg);
		margin-top: 10rem;
	}
	.portafolio__titulo {
		text-align: center;
		padding: 1rem;
		background-color: $color-oscuro;
		position: relative;
		width: auto;
		margin: 13rem auto -17rem auto;
		max-width: 15rem;
		z-index: 99999;
		color: $color-principal;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
	}

	.portafolio {
		background-color: #1a1a1b;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%231b2a29' points='800 100 0 200 0 800 1600 800 1600 200'/%3E%3Cpolygon fill='%231c3a38' points='800 200 0 400 0 800 1600 800 1600 400'/%3E%3Cpolygon fill='%231d4a46' points='800 300 0 600 0 800 1600 800 1600 600'/%3E%3Cpolygon fill='%231e5b54' points='1600 800 800 400 0 800'/%3E%3Cpolygon fill='%231f6b62' points='1280 800 800 500 320 800'/%3E%3Cpolygon fill='%23207b71' points='533.3 800 1066.7 800 800 600'/%3E%3Cpolygon fill='%23218B7F' points='684.1 800 914.3 800 800 700'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;

		z-index: 9999;
		height: auto;
		width: 100%;

		padding-top: 5rem;
		padding-bottom: 10rem;
		display: grid;
		position: relative;
		grid-template-columns: 1fr;
		max-height: 350rem;
		justify-content: center;
		align-items: center;
		margin-top: 8rem;

		.portafolio__proyecto.portafolio__proyecto--1 {
			margin-top: 10rem;
		}

		.portafolio__proyecto {
			width: 90%;
			margin: 0 auto;
			background-color: $color-oscuro;

			max-width: 30rem;
			min-width: 15rem;
			box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.16), 0 6.7px 5.3px rgba(0, 0, 0, 0.23),
				0 12.5px 10px rgba(0, 0, 0, 0.285), 0 22.3px 17.9px rgba(0, 0, 0, 0.34),
				0 41.8px 33.4px rgba(0, 0, 0, 0.41), 0 100px 80px rgba(0, 0, 0, 0.57);

			.portafolio__proyecto__img {
				width: 100%;
				height: 20rem;
				margin: 0 auto;
			}
			.portafolio__proyecto__img--1 {
				background-image: url("../assets/proyecto1.webp");
				background-position: left;
				background-size: cover;
			}
			.portafolio__proyecto__img--2 {
				background-image: url("../assets/AjedrejosCaptura.webp");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__img--3 {
				background-image: url("../assets/proyecto3.webp");
				background-position: left;
				background-size: cover;
			}
			.portafolio__proyecto__img--4 {
				background-image: url("../assets/proyecto4.webp");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__img--5 {
				background-image: url("../assets/proyecto5.webp");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__img--6 {
				background-image: url("../assets/proyecto6.webp");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__texto {
				width: 90%;
				height: auto;
				margin: 0 auto;
				text-align: center;
				color: $color-blanco;
				background-color: $color-oscuro;

				p {
					padding: 1.5rem;
				}
			}
			.portafolio__proyecto__btn {
				display: flex;
				justify-content: space-around;
				button {
					margin: 2rem 2rem;
					padding: 0.5rem;
					border: none;
					background-color: $color-principal;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
						Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
					font-weight: 700;
					font-size: 1rem;
					box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.16), 0 6.7px 5.3px rgba(0, 0, 0, 0.23),
						0 12.5px 10px rgba(0, 0, 0, 0.285), 0 22.3px 17.9px rgba(0, 0, 0, 0.34),
						0 41.8px 33.4px rgba(0, 0, 0, 0.41), 0 100px 80px rgba(0, 0, 0, 0.57);

					&:hover {
						transform: scale(1.1);
						transition: 0.5s;
						cursor: pointer;

						background-color: #218b7f;
					}
				}
			}
		}
	}
	.relleno {
		width: 100%;
		height: 40rem;
		background-color: $color-oscuro;
		margin-top: -30rem;
		z-index: 99;
	}
	.formulario {
		background-color: $color-oscuro;
		height: 50rem;
		margin-bottom: 15rem;
		margin-top: 5rem;

		.formulario__titulo {
			text-align: center;
			padding: 1rem;
			background-color: $color-principal;

			width: auto;
			margin: 0 auto;
			max-width: 15rem;
			font-weight: 900;
			color: $color-oscuro;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
				"Open Sans", "Helvetica Neue", sans-serif;
			font-size: 1.5rem;
		}
		.formulario__contenedor {
			box-shadow: 0 0px 1.8px rgba(0, 0, 0, 0.105), 0 0px 4px rgba(0, 0, 0, 0.155),
				0 0px 6.7px rgba(0, 0, 0, 0.191), 0 0px 10.2px rgba(0, 0, 0, 0.222),
				0 0px 14.7px rgba(0, 0, 0, 0.25), 0 0px 20.7px rgba(0, 0, 0, 0.278),
				0 0px 29.4px rgba(0, 0, 0, 0.309), 0 0px 42.7px rgba(0, 0, 0, 0.345),
				0 0px 65.8px rgba(0, 0, 0, 0.395), 0 0px 117px rgba(0, 0, 0, 0.5);
			width: 85%;
			height: auto;
			background-color: $color-oscuro-2;
			margin: 0 auto;
			max-width: 50rem;
			padding-bottom: 3rem;
			max-height: 30rem;

			.formulario__contenedor__form {
				.cuerpo__formulario {
					display: grid;
					grid-template-columns: 1fr;
				}
				.parte1__form {
					display: flex;
					flex-wrap: wrap;
				}

				text-align: center;
				gap: 1rem;
				padding: 2rem;

				h3 {
					text-align: center;
					width: 100%;
					margin-bottom: 0.4rem;
					margin-top: 0.4rem;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
						Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
					color: $color-principal;
					font-size: 1rem;
				}

				input {
					width: 80%;
					max-width: 20rem;
					margin: 0 auto 1.5rem auto;
					border: none;
					border-bottom: 2px solid white;
					background-color: $color-oscuro-2;
					color: white;
					text-align: center;
					padding: 1rem;
					outline: none;
					&:hover {
						border-bottom: 2px solid $color-principal;
						transform: scale(1.01);
					}
				}

				textarea {
					width: 80%;
					margin: 1.5rem auto;
					height: 7rem;
					border: 2px solid white;
					background-color: $color-oscuro-2;
					color: white;
					padding: 0.5rem;
					margin-bottom: 3rem;
					outline: none;
					&:hover {
						border: 2px solid $color-principal;
						transform: scale(1.01);
					}
				}
				.btn-form {
					width: 80%;
					margin: 0 auto;
					display: block;
					padding: 0.5rem;

					border: none;
					background-color: $color-principal;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
						Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
					font-weight: 700;
					font-size: 1rem;
					box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.141), 0 0px 5.3px rgba(0, 0, 0, 0.202),
						0 0px 10px rgba(0, 0, 0, 0.25), 0 0px 17.9px rgba(0, 0, 0, 0.298),
						0 0px 33.4px rgba(0, 0, 0, 0.359), 0 0px 80px rgba(0, 0, 0, 0.5);
					max-width: 15rem;
					&:hover {
						transform: scale(1.1);
						transition: 0.5s;
						cursor: pointer;

						background-color: #218b7f;
					}
				}
			}
		}
	}
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------

@media (min-width: 450px) {
}
@media (min-width: 650px) {
}
@media (max-width: 900px) {
	.portafolio {
		gap: 10rem;
	}
}
@media (min-width: 900px) {
	main {
		.portafolio {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(4, 1fr);
			height: 150rem;
			max-height: 300rem;
			.curriculum {
				grid-column: 1/3;
				margin-top: 10rem;
			}
			.portafolio__proyecto.portafolio__proyecto--2 {
				margin-top: 10rem;
			}
			.portafolio__proyecto.portafolio__proyecto--3 {
				margin-top: 10rem;
			}
			.portafolio__proyecto.portafolio__proyecto--4 {
				margin-top: 10rem;
			}
			.portafolio__proyecto.portafolio__proyecto--5 {
				margin-top: 10rem;
			}
			.portafolio__proyecto.portafolio__proyecto--6 {
				margin-top: 10rem;
			}
		}
		.formulario {
			height: 50rem;
			.cuerpo__formulario {
				grid-template-columns: 1fr 1fr;
			}
			.formulario__contenedor__form {
				#mensaje {
					height: 11rem;
				}
			}
		}
	}
}
@media (min-width: 1200px) {
	main {
		.portafolio {
			max-height: 100rem;
			grid-template-columns: repeat(3, 1fr);
			.curriculum {
				grid-column: 1/4;
				margin-top: 10rem;
			}
		}
	}
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
