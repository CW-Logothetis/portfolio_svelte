<script>    
    import Footer from "$lib/components/Footer/Footer.svelte";
	import NavBar from '$lib/components/NavBar/NavBar.svelte';
    
    import '$lib/scss/global.scss'
</script> 

<NavBar />

<main>
    <slot />
</main>

<Footer />
