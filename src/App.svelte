<script lang="ts">
	import Footer from "./components/Footer.svelte";
	import Main from "./components/Main.svelte";
	import Navbar from "./components/Navbar.svelte";
</script>

<main>
	<Navbar />
	<main>
		<Main />
	</main>
	<Footer />
</main>

<style global lang="scss">
	@import "main.scss";
	main {
		display: flex;
		flex-direction: column;
		height: 100vh;
		main {
			display: block;
		}
	}
</style>
