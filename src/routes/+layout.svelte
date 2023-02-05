<script>    
    import '../global.scss'
    import Footer from "$lib/components/Footer/Footer.svelte";
	import NavBar from '$lib/components/NavBar/NavBar.svelte';

</script> 
    
<NavBar />

<main class="main-grid">
    <slot />
</main>

<Footer />

<style lang="scss">

</style>