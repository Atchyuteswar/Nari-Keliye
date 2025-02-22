<script lang="ts">
  import { Phone, Mail, MapPin, Clock } from 'lucide-svelte';
  import Navbar from '../../lib/components/Navbar.svelte';
  import emailjs from '@emailjs/browser';
  import { env } from '$env/dynamic/public';
  import { onMount } from 'svelte';

  let loading = false;
  let success = false;
  let error = '';

  onMount(() => {
    // Initialize EmailJS with your public key
    emailjs.init(env.PUBLIC_EMAILJS_PUBLIC_KEY);
  });

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    loading = true;
    error = '';

    try {
      const result = await emailjs.sendForm(
        env.PUBLIC_EMAILJS_SERVICE_ID,
        env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        env.PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        success = true;
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      error = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
    } finally {
      loading = false;
      if (success) {
        setTimeout(() => {
          success = false;
        }, 5000);
      }
    }
  };
</script>

<Navbar />

<div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
  <!-- Hero Section -->
  <section class="relative pt-32 pb-24 px-4 overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-100 rounded-bl-full opacity-30 blur-3xl"></div>
    <div class="container mx-auto text-center relative z-10">
      <span class="inline-block px-4 py-2 bg-pink-100/60 backdrop-blur-sm text-pink-600 rounded-full text-sm font-medium mb-6">
        Get in Touch
      </span>
      <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
        Contact <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Us</span>
      </h1>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="py-16 px-4 relative">
    <div class="container mx-auto max-w-6xl">
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="bg-pink-100 p-3 rounded-xl">
                  <Phone class="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p class="text-gray-600">Call Us</p>
                  <p class="text-gray-800 font-semibold">+91 123 456 7890</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="bg-pink-100 p-3 rounded-xl">
                  <Mail class="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p class="text-gray-600">Email Us</p>
                  <p class="text-gray-800 font-semibold">contact@narikeliye.com</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="bg-pink-100 p-3 rounded-xl">
                  <Clock class="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p class="text-gray-600">Working Hours</p>
                  <p class="text-gray-800 font-semibold">24/7 Service Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
          
          <form class="space-y-6" on:submit={handleSubmit}>
            <!-- Success Message -->
            {#if success}
              <div class="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-xl">
                Message sent successfully!
              </div>
            {/if}

            <!-- Error Message -->
            {#if error}
              <div class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
                {error}
              </div>
            {/if}

            <div class="group">
              <label class="block text-gray-700 mb-2" for="name">Name</label>
              <input 
                type="text" 
                name="user_name"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 
                       group-hover:border-pink-200 focus:ring-2 focus:ring-pink-500 
                       focus:border-transparent transition-all duration-200
                       bg-white/50 backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>
            
            <div class="group">
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input 
                type="email" 
                name="user_email"
                required
                class="w-full px-4 py-3 rounded-xl border border-gray-200 
                       group-hover:border-pink-200 focus:ring-2 focus:ring-pink-500 
                       focus:border-transparent transition-all duration-200
                       bg-white/50 backdrop-blur-sm"
                placeholder="Your email"
              />
            </div>
            
            <div class="group">
              <label class="block text-gray-700 mb-2" for="message">Message</label>
              <textarea 
                name="message"
                required
                rows="4"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 
                       group-hover:border-pink-200 focus:ring-2 focus:ring-pink-500 
                       focus:border-transparent transition-all duration-200
                       bg-white/50 backdrop-blur-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              class="group relative w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 
                     text-white rounded-xl font-semibold overflow-hidden disabled:opacity-70"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                {#if loading}
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                {/if}
                {loading ? 'Sending...' : 'Send Message'}
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 
                          transition-transform duration-300 translate-x-full 
                          group-hover:translate-x-0"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  /* Add any additional component-specific styles here */
  :global(input:focus, textarea:focus) {
    outline: none;
  }
</style>