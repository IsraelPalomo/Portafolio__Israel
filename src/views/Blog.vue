<template>
	<div class="Blog">
		<img src="../assets/desarrollo.png" alt="img blog en desarollo" />
		<div class="container">
			<h2>Blog Actualmente En Desarrollo</h2>
			<button>Volver al inicio</button>
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
		width: 35rem;
		height: 20rem;
		margin-left: -5rem;
	}
	h2 {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
		color: white;
		margin-bottom: 5rem;
	}
	button {
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
</style>
