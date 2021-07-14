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
		<section class="portafolio">
			<h2 class="portafolio__titulo">Mis Proyectos</h2>
			<div class="portafolio__proyecto portafolio__proyecto--1">
				<div class="portafolio__proyecto__img"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis perspiciatis
						laboriosam reprehenderit accusamus, architecto autem! Nam error, ipsam tenetur corporis
						ipsa, obcaecati expedita, at dignissimos quam quibusdam iste saepe?
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<button>Ver Sitio</button>
					<button>Ver Codigo</button>
				</div>
			</div>
			<div class="portafolio__proyecto portafolio__proyecto--2">
				<div class="portafolio__proyecto__img"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis perspiciatis
						laboriosam reprehenderit accusamus, architecto autem! Nam error, ipsam tenetur corporis
						ipsa, obcaecati expedita, at dignissimos quam quibusdam iste saepe?
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<button>Ver Sitio</button>
					<button>Ver Codigo</button>
				</div>
			</div>
			<div class="portafolio__proyecto portafolio__proyecto--3">
				<div class="portafolio__proyecto__img"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis perspiciatis
						laboriosam reprehenderit accusamus, architecto autem! Nam error, ipsam tenetur corporis
						ipsa, obcaecati expedita, at dignissimos quam quibusdam iste saepe?
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<button>Ver Sitio</button>
					<button>Ver Codigo</button>
				</div>
			</div>
			<div class="portafolio__proyecto portafolio__proyecto--4">
				<div class="portafolio__proyecto__img"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis perspiciatis
						laboriosam reprehenderit accusamus, architecto autem! Nam error, ipsam tenetur corporis
						ipsa, obcaecati expedita, at dignissimos quam quibusdam iste saepe?
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<button>Ver Sitio</button>
					<button>Ver Codigo</button>
				</div>
			</div>
			<div class="portafolio__proyecto portafolio__proyecto--5">
				<div class="portafolio__proyecto__img"></div>
				<div class="portafolio__proyecto__texto">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque omnis perspiciatis
						laboriosam reprehenderit accusamus, architecto autem! Nam error, ipsam tenetur corporis
						ipsa, obcaecati expedita, at dignissimos quam quibusdam iste saepe?
					</p>
				</div>
				<div class="portafolio__proyecto__btn">
					<button>Ver Sitio</button>
					<button>Ver Codigo</button>
				</div>
			</div>
		</section>
		<img class="separador__portafolio--2" src="..\assets\triangleAsymmetrical.svg" alt="" />
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
	}
	.separador__portafolio--1 {
		transform: rotate(180deg);
		margin-top: 10rem;
	}
	.portafolio {
		background-color: $color-principal;
		height: 210rem;
		width: 100%;
		margin-top: -4px;
		padding-top: 5rem;
		.portafolio__titulo {
			text-align: center;
			padding: 1rem;
			background-color: $color-oscuro;

			width: auto;
			margin: auto;
			max-width: 15rem;

			color: $color-principal;
			font-family: $tipografia-subtitulos;
			margin-bottom: 5rem;
		}
		.portafolio__proyecto {
			width: 90%;
			margin: 0 auto;
			background-color: $color-oscuro;
			padding-top: 2rem;
			margin-bottom: 5rem;
			border-radius: 15px;

			.portafolio__proyecto__img {
				width: 80%;
				height: 15rem;
				margin: 0 auto;

				background-image: url("../assets/proyecto1.png");
				background-position: left;
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
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
