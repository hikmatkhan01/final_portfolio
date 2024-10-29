<script>
	import Footer from '$lib/components/footer.svelte';
import Header from '$lib/components/header.svelte';
	import '../app.css';
	
	let { children } = $props();
</script>
<div class="h-screen  bg-gray-100">
    <!-- Start Menu  content here -->
  <Header />
{@render children()}

<Footer />
</div>



