<script lang="ts">
  import { navigating } from '$app/stores';
</script>

{#if $navigating}
  <div class="fixed top-0 left-0 w-full z-50">
    <div class="h-1 bg-gradient-to-r from-pink-500 to-purple-600 animate-loading-bar"></div>
  </div>
{/if}

<style>
  @keyframes loading-bar {
    0% { width: 0; }
    50% { width: 70%; }
    100% { width: 100%; }
  }

  .animate-loading-bar {
    animation: loading-bar 1s ease-in-out forwards;
  }
</style>