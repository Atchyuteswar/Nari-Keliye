<script>
    let isMenuOpen = false;
    
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  
  <nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Company Name -->
        <a href="/" class="text-2xl font-bold text-pink-600 hover:text-pink-700 transition">
          Nari Keliye
        </a>
  
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a href="/" class="text-gray-700 hover:text-pink-600 transition">Home</a>
          <a href="/about" class="text-gray-700 hover:text-pink-600 transition">About</a>
          <a href="/features" class="text-gray-700 hover:text-pink-600 transition">Features</a>
        </div>
  
        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-gray-700 hover:text-pink-600 focus:outline-none" 
          on:click={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {#if isMenuOpen}
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
  
      <!-- Mobile Navigation -->
      {#if isMenuOpen}
        <div class="md:hidden pb-4">
          <div class="flex flex-col space-y-4">
            <a 
              href="/" 
              class="text-gray-700 hover:text-pink-600 transition px-4 py-2 hover:bg-gray-50 rounded"
              on:click={toggleMenu}
            >
              Home
            </a>
            <a 
              href="/about" 
              class="text-gray-700 hover:text-pink-600 transition px-4 py-2 hover:bg-gray-50 rounded"
              on:click={toggleMenu}
            >
              About
            </a>
            <a 
              href="/features" 
              class="text-gray-700 hover:text-pink-600 transition px-4 py-2 hover:bg-gray-50 rounded"
              on:click={toggleMenu}
            >
              Features
            </a>
          </div>
        </div>
      {/if}
    </div>
  </nav>
  
  <!-- Spacer to prevent content from hiding behind fixed navbar -->
  <div class="h-16"></div>