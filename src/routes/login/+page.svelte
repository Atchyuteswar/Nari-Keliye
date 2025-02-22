<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
</script>

<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100">
  <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mx-4">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h1>
    
    <form method="post" action="?/login" use:enhance class="space-y-6">
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">
          Username
          <input 
            name="username" 
            class="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 
                   focus:ring-pink-500 focus:border-pink-500 transition-colors"
            placeholder="Enter your username"
          />
        </label>
      </div>

      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">
          Password
          <input 
            type="password" 
            name="password" 
            class="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 
                   focus:ring-pink-500 focus:border-pink-500 transition-colors"
            placeholder="Enter your password"
          />
        </label>
      </div>

      {#if form?.message}
        <p class="text-red-500 text-sm">{form.message}</p>
      {/if}

      <div class="space-y-4">
        <button 
          type="submit"
          class="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold 
                 hover:bg-pink-600 transform hover:-translate-y-0.5 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Login
        </button>

        <button 
          formaction="?/register"
          class="w-full bg-white text-pink-500 py-3 rounded-xl font-semibold border-2 border-pink-500
                 hover:bg-pink-50 transform hover:-translate-y-0.5 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Register
        </button>
      </div>
    </form>

    <p class="mt-8 text-center text-sm text-gray-600">
      Need help? 
      <a href="/contact" class="text-pink-500 hover:text-pink-600 font-medium">Contact Support</a>
    </p>
  </div>
</div>
