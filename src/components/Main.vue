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
					unas bases solidas para el mundo del desarrollo web , ademas manejo otras tecnologias como
					Sass, Webpack, Vue.Js, Nuxt, Npm y mas. Tambien estoy enfocado en buenas practicas con
					metodologias como BEM , Git y GitHub.
				</p>
			</div>
		</div>
		<img
			class="separador__portafolio"
			id="proyectos"
			src="..\assets\triangleAsymmetrical.svg"
			alt=""
		/>
		<h2 class="portafolio__titulo">Mis Proyectos</h2>
		<section class="portafolio">
			<div class="portafolio__proyecto portafolio__proyecto--1">
				<div class="portafolio__proyecto__img portafolio__proyecto__img--1"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Proyecto de pagina web para ventas de casas y solares , buen proyecto para iniciarse en
						el mundo del desarrollo web. Algunas de las tecnolagias usadas son Html, Css
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

			<div class="portafolio__proyecto portafolio__proyecto--2">
				<div class="portafolio__proyecto__img portafolio__proyecto__img--2"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Proyecto construido con Vue.js y con Firibase , buen proyecto para practicar bases de
						datos y inicio de sesion con Firebase y todo los relacionado con Vue. Ademas hemos
						incluido Vuetify para los estilos.
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://auth-google-facebook.netlify.app" target="_blank"
						><button>Ver Sitio</button></a
					>
					<a href="https://github.com/IsraelPalomo/auth-google-facebook" target="_blank"
						><button>Ver Codigo</button></a
					>
				</div>
			</div>
			<div class="portafolio__proyecto portafolio__proyecto--3">
				<div class="portafolio__proyecto__img portafolio__proyecto__img--3"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Proyecto de Ajedrez para practicar jugadas y aperturas , marcandote las amezas
						potenciales en la posicion addemas de poder cambiar entre las piezas y resetear el
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
			<div class="portafolio__proyecto portafolio__proyecto--4">
				<div class="portafolio__proyecto__img portafolio__proyecto__img--4"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						LadingPage de un Hotel, construido con Html, Css y JavaScripts. Ademas de otras
						tecnologias con Webpack y Sass, buen proyecto para practicar la ceacion desde 0 con
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

			<div class="portafolio__proyecto portafolio__proyecto--5">
				<div class="portafolio__proyecto__img portafolio__proyecto__img--5"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Aplicacion de clima en distintas zonas. Pudiendo mirar desde Paises y ciudades hasta
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
			<div class="portafolio__proyecto portafolio__proyecto--6">
				<div class="portafolio__proyecto__img portafolio__proyecto__img--6"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Aplicacion Web que consume una API externa y nos muestra los paises por poblacion. Buen
						proyecto para practicar estilos y como consumir una API.
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<a href="https://buscador-paises.netlify.app" target="_blank"
						><button>Ver Sitio</button></a
					>
					<a href="https://github.com/IsraelPalomo/Bucador-Paises" target="_blank"
						><button>Ver Codigo</button></a
					>
				</div>
			</div>
		</section>
		<img class="separador__portafolio--2" src="..\assets\triangleAsymmetrical.svg" alt="" />
		<div class="relleno"></div>
		<section class="formulario">
			<div class="formulario__titulo">Contactame...</div>
			<div class="formulario__contenedor">
				<form
					class="formulario__contenedor__form"
					id="contacto"
					method="POST"
					name="contact"
					netlify
				>
					<div class="parte1__form">
						<h3>Nombre</h3>

						<input type="text" name="nombre" id="name" required placeholder="Tu nombre" />
						<h3>Email</h3>

						<input type="text" name="correo" id="email" required placeholder="Tu Email" />
					</div>

					<h3>Mensaje</h3>

					<textarea
						name="mensaje"
						id="mensaje"
						cols="30"
						rows="10"
						placeholder="Escribe AQUI..."
					></textarea>
					<button type="submit">Enviar Formulario</button>
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

	padding-top: 10rem;

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
		margin: 10rem auto 0 auto;
		max-width: 15rem;
		z-index: 9999;
		color: $color-principal;
		font-family: $tipografia-subtitulos;
	}

	.portafolio {
		background-color: $color-principal;
		z-index: 9999;
		height: 270rem;
		width: 100%;
		margin-top: -8.2rem;
		padding-top: 5rem;
		display: grid;
		position: relative;
		grid-template-columns: 1fr;

		.portafolio__proyecto.portafolio__proyecto--1 {
			margin-top: 10rem;
		}

		.portafolio__proyecto {
			width: 90%;
			margin: 0 auto;
			background-color: $color-oscuro;
			padding-top: 2rem;
			max-height: 33rem;
			border-radius: 15px;
			max-width: 30rem;
			min-width: 15rem;

			.portafolio__proyecto__img {
				width: 80%;
				height: 15rem;
				margin: 0 auto;
			}
			.portafolio__proyecto__img--1 {
				background-image: url("../assets/proyecto1.png");
				background-position: left;
				background-size: cover;
			}
			.portafolio__proyecto__img--2 {
				background-image: url("../assets/proyecto2.png");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__img--3 {
				background-image: url("../assets/proyecto3.png");
				background-position: left;
				background-size: cover;
			}
			.portafolio__proyecto__img--4 {
				background-image: url("../assets/proyecto4.png");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__img--5 {
				background-image: url("../assets/proyecto5.png");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__img--6 {
				background-image: url("../assets/proyecto6.png");
				background-position: center;
				background-size: cover;
			}
			.portafolio__proyecto__texto {
				width: 90%;
				height: auto;
				margin: 0 auto;
				text-align: justify;
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
					font-family: $tipografia-subtitulos;
					font-weight: 700;
					font-size: 1rem;
					border-radius: 5px;
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
		height: 35rem;
		background-color: $color-oscuro;
		margin-top: -30rem;
		z-index: 99;
	}
	.formulario {
		background-color: $color-oscuro;
		height: 70rem;
		margin-bottom: 10rem;
		margin-top: 5rem;

		.formulario__titulo {
			text-align: center;
			padding: 1rem;
			background-color: $color-oscuro;

			width: auto;
			margin: 0 auto;
			max-width: 15rem;

			color: $color-principal;
			font-family: $tipografia-subtitulos;
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
			padding-bottom: 5rem;

			.formulario__contenedor__form {
				.parte1__form {
					display: flex;
					flex-wrap: wrap;
				}
				display: grid;
				grid-template-columns: 1fr;
				text-align: center;
				gap: 1rem;
				h3 {
					text-align: center;
					width: 100%;
					margin-bottom: 2rem;
					margin-top: 2rem;
					font-family: $tipografia-subtitulos;
					color: $color-principal;
					font-size: 0.9rem;
				}

				input {
					width: 80%;
					max-width: 20rem;
					margin: 0 auto 2rem auto;
					border: none;
					border-bottom: 2px solid white;
					background-color: $color-oscuro-2;
					color: white;
					text-align: center;
					padding: 1rem;
				}
				button {
					width: 80%;
					margin: 5rem auto 0 auto;

					padding: 0.5rem;
					border: none;
					background-color: $color-principal;
					font-family: $tipografia-subtitulos;
					font-weight: 700;
					font-size: 1rem;
					border-radius: 5px;
					max-width: 15rem;
					&:hover {
						transform: scale(1.1);
						transition: 0.5s;
						cursor: pointer;

						background-color: #218b7f;
					}
				}
				textarea {
					width: 80%;
					margin: 0 auto;

					border: 2px solid white;
					background-color: $color-oscuro-2;
					color: white;
					padding: 0.5rem;
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
@media (min-width: 900px) {
	main {
		.portafolio {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(4, 1fr);
			height: 140rem;
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
	}
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
