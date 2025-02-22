<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import PageTransition from '../lib/components/PageTransition.svelte';
  import LoadingBar from '../lib/components/LoadingBar.svelte';
</script>

<LoadingBar />
<PageTransition url={$page.url.pathname}>
  <slot />
</PageTransition>
