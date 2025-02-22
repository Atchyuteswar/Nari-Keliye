<script lang="ts">
  import { onMount } from 'svelte';

  let isMobile = false;
  let isMenuOpen = false;
  let activeDropdown: number | null = null;

  export let links = [
    { href: '/', text: 'HOME' },
    { href: '/about', text: 'ABOUT' },
    { href: '/contact', text: 'CONTACT' },
    { href: '/login', text: 'SIGN IN' }
  ];
  export let textColor = 'text-pink-500'; // Changed from text-pink to text-pink-500
  export let navClass = ''; 

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleDropdown(index: number) {
    if (isMobile) {
      activeDropdown = activeDropdown === index ? null : index;
    }
  }

  function checkMobile() {
    isMobile = window.innerWidth <= 768;
  }

  onMount(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>

<nav class={`absolute top-0 w-full z-50 bg-transparent ${navClass}`}>
  <div class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
    <div>
      <a href="/" class="flex items-center">
        <img src="raising_hand.png" alt="Climate Action Front" class="h-14 rounded w-auto" />
      </a>
    </div>
    
    <!-- Mobile Menu Toggle -->
    {#if isMobile}
      <button 
        on:click={toggleMenu} 
        class="text-pink-500 hover:text-pink-700 focus:outline-none"
        aria-label="Toggle Menu"
      >
      
        {#if isMenuOpen}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    {/if}

    <!-- Desktop and Mobile Menu -->
    {#if !isMobile || isMenuOpen}
      <div class="{isMobile ? 'fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col justify-center items-center' : 'flex space-x-8'}">
        {#each links as link, index}
          {#if link.subLinks}
            <div class="relative group"
              on:mouseenter={!isMobile ? () => activeDropdown = index : null}
              on:mouseleave={!isMobile ? () => activeDropdown = null : null}
            >
              <button 
                on:click={() => toggleDropdown(index)}
                class={`
                  text-lg font-medium 
                  ${textColor} 
                  ${isMobile ? 'text-2xl my-4' : ''} 
                  hover:text-[#6ab04c] 
                  transition-colors
                  flex items-center
                `}
              >
                {link.text}
                {#if isMobile}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5 ml-2 transform transition-transform {activeDropdown === index ? 'rotate-180' : ''}" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                {/if}
              </button>
              
              <!-- Dropdown for Desktop -->
              {#if !isMobile && activeDropdown === index}
                <div class="absolute top-full left-0 rounded-xl p-2 w-64 z-50 transform origin-top transition-all duration-300 ease-in-out">
                  {#each link.subLinks as subLink}
                    <a 
                      href={subLink.href} 
                      class="
                        block 
                        text-lg
                        font-medium 
                        text-white
                        px-6 
                        py-3 
                        rounded-lg 
                        hover:text-[#6ab04c] 
                        hover:pl-6 
                        group 
                        relative">
                      <span class="transition-all duration-200 ease-in-out">
                        {subLink.text}
                      </span>
                    </a>
                  {/each}
                </div>
              {/if}
              
              <!-- Dropdown for Mobile -->
              {#if isMobile && activeDropdown === index}
                <div class="w-full pl-4 space-y-2">
                  {#each link.subLinks as subLink}
                    <a 
                      href={subLink.href} 
                      class="
                        block 
                        text-lg 
                        text-white 
                        hover:text-[#6ab04c] 
                        hover:pl-4 
                        transition-all 
                        duration-300 
                        ease-in-out
                      "
                      on:click={toggleMenu}
                    >
                      {subLink.text}
                    </a>
                  {/each}
                </div>
              {/if}
            </div>
          {:else}
            <a 
              href={link.href} 
              class={`
                text-lg font-medium 
                text-pink-500
                ${isMobile ? 'text-2xl my-4' : ''} 
                hover:text-pink-700
                transition-colors
              `}
              on:click={isMobile ? toggleMenu : null}
            >
              {link.text}
            </a>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</nav>

<style>
  /* Ensure mobile menu covers full screen when open */
  @media (max-width: 768px) {
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0,0,0,0.9) !important;
    }
  }
</style>