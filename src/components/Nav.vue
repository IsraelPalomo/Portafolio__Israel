<template>
	<nav>
		<img class="nav__logo" src="..\assets\Logotipo__Blog.svg" alt="" />
		<div @click="menuDesplegable()" class="nav__icono--menu"></div>
		<div class="nav__menu--responsive">
			<a href="#inicio">Inicio <span>|</span></a
			><a href="#sobreMi">Sobre Mi <span>|</span></a
			><a href="#habilidades">Habilidades <span>|</span></a
			><a href="#contacto">Contacto <span>|</span></a
			><a href="#sociales">Sociales <span>|</span></a>
		</div>
	</nav>
	<section class="menu--desplegable">
		<div class="menu__enlaces">
			<a href="#inicio">Inicio</a><a href="#sobreMi">Sobre Mi</a
			><a href="#habilidades">Habilidades</a><a href="#contacto">Contacto</a
			><a href="#sociales">Sociales</a>
		</div>
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
	background-color: #252525;
	box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.245), 0 6.7px 5.3px rgba(0, 0, 0, 0.241),
		0 12.5px 10px rgba(0, 0, 0, 0.225), 0 22.3px 17.9px rgba(0, 0, 0, 0.204),
		0 41.8px 33.4px rgba(0, 0, 0, 0.182), 0 100px 80px rgba(0, 0, 0, 0.16);
	height: 6rem;
	width: 100%;

	position: fixed;
	z-index: 99999;
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
		display: none;
		span {
			margin-left: 1rem;
			color: #5a189a;
		}
		a {
			text-decoration: none;
			color: #ffffff;
			margin-right: 1.5rem;
			font-weight: 600;
			letter-spacing: 3px;
			font-family: "Cormorant Garamond", serif;
		}
	}
}
.menu--desplegable {
	width: 100%;
	height: 100vh;
	background-color: #282828;
	transform: scale(0);
	transition-duration: 0.4s;
	transform-origin: center;
	transition-timing-function: linear;
	display: flex;
	justify-content: center;
	align-items: center;

	.menu__enlaces {
		display: grid;
		grid-template-columns: 1fr;
		gap: 4rem;
		margin-top: 5rem;
		text-align: center;
		a {
			text-decoration: none;
			color: #ffffff;
			font-weight: 600;
			letter-spacing: 3px;
			font-family: "Cormorant Garamond", serif;
			&:hover {
				color: #5a189a;
			}
		}
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
