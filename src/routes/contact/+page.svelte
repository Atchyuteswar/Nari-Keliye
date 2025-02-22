<script lang="ts">
  import { Phone, Mail, MapPin, Clock } from 'lucide-svelte';
  import Navbar from '../../lib/components/Navbar.svelte';
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
          <form class="space-y-6">
            <div>
              <label class="block text-gray-700 mb-2" for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label class="block text-gray-700 mb-2" for="message">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Send Message
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