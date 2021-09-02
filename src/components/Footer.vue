<template>
	<footer id="sociales">
		<h2>Israel Palomo</h2>
		<p>
			Desarrollador y <br /><br />
			programador web
		</p>
		<hr />
		<div class="footer__sociales">
			<a href="https://www.instagram.com/diplodev/" target="_blank"
				><i class=" icono fab fa-instagram-square"></i
			></a>
			<a href="https://twitter.com/DevDiplo" target="_blank"
				><i class="icono fab fa-twitter-square"></i
			></a>
			<a href="https://www.linkedin.com/in/israel-palomo-espa%C3%B1a-544b05206/" target="_blank"
				><i class="icono fab fa-linkedin"></i
			></a>
			<a href="https://github.com/IsraelPalomo" target="_blank"
				><i class="icono fab fa-github-square"></i
			></a>
		</div>
	</footer>
	<div class="copy"><p>&copy; 2021 Israel Palomo España</p></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
footer {
	width: 100%;
	height: 25rem;
	box-shadow: 0 0px 1.8px rgba(0, 0, 0, 0.105), 0 0px 4px rgba(0, 0, 0, 0.155),
		0 0px 6.7px rgba(0, 0, 0, 0.191), 0 0px 10.2px rgba(0, 0, 0, 0.222),
		0 0px 14.7px rgba(0, 0, 0, 0.25), 0 0px 20.7px rgba(0, 0, 0, 0.278),
		0 0px 29.4px rgba(0, 0, 0, 0.309), 0 0px 42.7px rgba(0, 0, 0, 0.345),
		0 0px 65.8px rgba(0, 0, 0, 0.395), 0 0px 117px rgba(0, 0, 0, 0.5);
	background-color: #252525;
	margin-top: -15rem;
	h2 {
		font-family: $tipografia-titulos;
		color: $color-blanco;
		letter-spacing: 5px;
		text-align: center;
		padding-top: 4rem;
	}
	p {
		font-family: $tipografia-subtitulos;
		color: $color-blanco;
		letter-spacing: 4px;
		text-align: center;
		padding-top: 2rem;
		font-weight: 900;
		color: $color-principal;
	}
	hr {
		margin-top: 3rem;
	}
	.footer__sociales {
		margin-top: 5rem;
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		align-items: center;
		.icono {
			font-size: 1.7rem;
			color: $color-blanco;
			cursor: pointer;
			&:hover {
				transform: scale(1.3);
				color: $color-principal;
			}
		}
	}
}
.copy {
	width: 100%;
	height: 3rem;
	color: black;
	text-align: center;
	background-color: $color-principal;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: $tipografia-subtitulos;
	font-weight: 900;
}
</style>
