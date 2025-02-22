<script>
    import { Shield, Clock, MapPin, Heart, Phone, Mail } from 'lucide-svelte';
    import Navbar from '../lib/components/Navbar.svelte';
  
  
    const features = [
      {
        title: "24/7 Exclusive Service",
        description: "Round-the-clock transportation service exclusively for women, ensuring safety and peace of mind at any hour.",
        icon: Clock
      },
      {
        title: "Women Empowerment",
        description: "Creating employment opportunities for women drivers, fostering financial independence and professional growth.",
        icon: Heart
      },
      {
        title: "Advanced GPS Tracking",
        description: "Real-time vehicle tracking with updates every 10 minutes, keeping your loved ones informed of your journey.",
        icon: MapPin
      },
      {
        title: "Premium Comfort",
        description: "Experienced drivers and well-maintained vehicles ensuring comfortable and relaxing rides for every passenger.",
        icon: Shield
      }
    ];
  
    const teamMembers = [
      {
        name: "Priya Sharma",
        role: "Founder & CEO",
        image: "/api/placeholder/300/300"
      },
      {
        name: "Anjali Mehta",
        role: "Operations Head",
        image: "/api/placeholder/300/300"
      }
    ];
  </script>
  
  <div class="w-full ">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-5"></div>
      <!-- Added pt-20 for mobile and adjusted desktop padding -->
      <div class="container mx-auto px-4 pt-20 md:py-24 relative z-10">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Left Column with increased top padding on mobile -->
          <div class="space-y-6 md:space-y-8 text-center md:text-left md:px-8 pt-8 md:pt-0">
            <div class="space-y-4">
              <h1 class="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Booking Driver<br>
                <span class="text-pink-600">Exclusively</span>
                <br class="hidden md:block"/>for Women
              </h1>
              <p class="text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                Safe, reliable, and comfortable rides by women, for women. Experience travel with confidence.
              </p>
            </div>
  
            <!-- Booking Card -->
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-md mx-auto md:mx-0">
              <div class="flex items-center gap-4 md:gap-6 mb-6">
                <div class="w-16 md:w-20 h-16 md:h-20 rounded-full bg-pink-100 ring-4 ring-pink-50 overflow-hidden">
                  <img src="girl-img.jpg" alt="Driver" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 class="text-lg md:text-xl font-semibold text-gray-800">Angaliya Fernandes</h3>
                  <p class="text-sm md:text-base text-pink-500 font-medium">Student of MIT</p>
                </div>
              </div>
              <button class="w-full bg-pink-500 text-white py-3 md:py-4 px-6 md:px-8 rounded-xl font-semibold 
                             hover:bg-pink-600 transform hover:-translate-y-0.5 transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                Book Now
              </button>
            </div>
          </div>
  
          <!-- Right Column -->
          <div class="relative mt-8 md:mt-0 md:block">
            <div class="absolute -top-8 -right-8 w-48 md:w-64 h-48 md:h-64 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
            <div class="absolute -bottom-8 -left-8 w-48 md:w-64 h-48 md:h-64 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
            <div class="flex items-center justify-center">
              <div class="w-full max-w-xs md:max-w-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="mobile-hero.png" 
                  alt="App Demo" 
                  class="w-4/5 md:w-3/5 mx-auto h-auto drop-shadow-2xl rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Features Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Nari Keliye</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {#each features as feature}
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div class="mb-4">
                <svelte:component this={feature.icon} class="w-12 h-12 text-pink-500" />
              </div>
              <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
              <p class="text-gray-600">{feature.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
  
    <!-- Quote Section -->
    <section class="bg-pink-50 py-16 px-4">
      <div class="container mx-auto text-center max-w-3xl">
        <blockquote class="text-2xl md:text-3xl font-serif italic text-gray-800">
          "Empowering women with safe mobility isn't just about transportation - it's about freedom, independence, and the right to move through the world without fear."
        </blockquote>
      </div>
    </section>
  
    <!-- Team Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {#each teamMembers as member}
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <div class="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img src={member.image} alt={member.name} class="w-full h-full object-cover" />
              </div>
              <h3 class="text-xl font-semibold">{member.name}</h3>
              <p class="text-gray-600">{member.role}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
  
    <!-- Careers Section -->
    <section class="bg-pink-50 py-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold text-center mb-12">Join Nari Keliye</h2>
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <p class="text-gray-600 mb-8 text-center">
            Be part of our mission to make transportation safer for women. We're looking for passionate individuals to join our team.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="flex items-center gap-4">
              <Phone class="w-6 h-6 text-pink-500" />
              <p>+91 (XXX) XXX-XXXX</p>
            </div>
            <div class="flex items-center gap-4">
              <Mail class="w-6 h-6 text-pink-500" />
              <p>careers@narikeliye.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .bg-pattern {
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f9a8d4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  </style>