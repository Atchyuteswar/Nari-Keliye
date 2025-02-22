<script lang="ts">
  import { fly } from 'svelte/transition';
  import { pageTransitionDuration } from '$lib/stores/transition';

    export const url: string = '';
</script>

<div
  in:fly={{ y: 50, duration: $pageTransitionDuration, delay: $pageTransitionDuration }}
  out:fly={{ y: -50, duration: $pageTransitionDuration }}
>
  <slot />
</div>