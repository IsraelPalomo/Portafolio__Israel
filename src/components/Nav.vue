<template>
	<nav>
		<img class="nav__logo" src="..\assets\Logotipo__Blog.svg" alt="" />
		<div @click="menuDesplegable()" class="nav__icono--menu"></div>
		<div class="nav__menu--responsive">
			<a href="#inicio">Inicio</a><a href="#sobreMi">Sobre Mi</a
			><a href="#habilidades">Habilidades</a><a href="#contacto"></a
			><a href="#sociales">Sociales</a>
		</div>
	</nav>
	<section class="menu--desplegable">
		<a href="#inicio">Inicio</a><a href="#sobreMi">Sobre Mi</a><a href="#habilidades">Habilidades</a
		><a href="#contacto"></a><a href="#sociales">Sociales</a>
	</section>
</template>

<script>
export default {
	methods: {
		menuDesplegable() {
			const iconoMenu = document.querySelector(".nav__icono--menu");
			const menu = document.querySelector(".menu--desplegable");
			menu.classList.toggle("ampliar");
		},
	},
};
</script>

<style lang="scss">
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #161616;
	box-shadow: 0 1px 5.3px rgba(0, 0, 0, 0.013), 0 2.1px 10.7px rgba(0, 0, 0, 0.026),
		0 3.5px 16px rgba(0, 0, 0, 0.039), 0 5.3px 21.3px rgba(0, 0, 0, 0.051),
		0 7.6px 26.5px rgba(0, 0, 0, 0.064), 0 10.8px 31.6px rgba(0, 0, 0, 0.076),
		0 15.3px 36.5px rgba(0, 0, 0, 0.088), 0 22.3px 40.9px rgba(0, 0, 0, 0.099),
		0 34.3px 44.3px rgba(0, 0, 0, 0.107), 0 61px 29px rgba(0, 0, 0, 0.07);
	height: 6rem;
	width: 100%;
	.nav__logo {
		height: 5rem;
		width: auto;
	}
	.nav__icono--menu {
		height: 2rem;
		width: 2rem;
		background-image: url("../assets/Icono__Menu--Open.svg");
		background-size: cover;
		background-position: center;
		margin: 1rem 2rem 0 0;
		align-self: center;
	}
	.nav__menu--responsive {
		margin: 1rem 2rem 0 0;
		display: flex;

		gap: 1rem;
		display: none;
		a {
			text-decoration: none;
			color: #5a189a;
			margin-right: 1.5rem;
			&:hover {
				transform: scale(1.5);
			}
			&:nth-child(4) {
				margin-left: -1.5rem;
			}
		}
	}
}
.menu--desplegable {
	width: 100%;
	height: 100vh;
	background-color: red;
	transform: scale(0);
	transition-duration: 0.4s;
	transform-origin: center;
	transition-timing-function: linear;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	a {
		display: block;
		width: 100%;
	}
}
.ampliar {
	transform: scale(1);
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------

@media (min-width: 450px) {
}
@media (min-width: 650px) {
}
@media (min-width: 900px) {
	nav {
		.nav__icono--menu {
			display: none;
		}
		.nav__menu--responsive {
			display: block;
		}
	}
}
@media (min-width: 1200px) {
}
@media (min-width: 2000px) {
}

//*--------------------------------------------Media Queris---------------------------------------------------------------------------
</style>
