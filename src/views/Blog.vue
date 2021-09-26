<template>
	<div class="Blog">
		<img src="../assets/desarrollo.webp" alt="img blog en desarollo" />
		<div class="container">
			<h2>Blog Actualmente En Desarrollo</h2>
			<router-link to="/"><button>Volver al inicio</button></router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Blog {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #1b1b1b;
	img {
		width: 30rem;
		height: 17rem;
		margin-left: -5rem;
	}
	h2 {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
		color: white;
		margin-bottom: 5rem;
		margin-left: auto;
		margin-right: auto;
		width: 70%;
		text-align: center;
	}
	button {
		margin-left: auto;
		margin-right: auto;
		margin: 2rem 2rem;
		padding: 0.5rem;
		border: none;
		background-color: #37aa9c;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
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
	.container {
		text-align: center;
	}
}
@media (max-width: 2000px) {
}
@media (max-width: 1200px) {
	.Blog {
		display: grid;
		grid-template-columns: 1fr;
		justify-content: center;
		text-align: center;
		h2 {
			margin-bottom: 1rem;
			margin-top: -9rem;
		}
		img {
			margin: 0 auto;
			padding: 0;
		}
	}
}
@media (max-width: 900px) {
}
@media (max-width: 900px) {
}
@media (max-width: 650px) {
}
@media (max-width: 450px) {
	.Blog {
		img {
			width: 17rem;
			height: 10rem;
		}
	}
}
</style>
