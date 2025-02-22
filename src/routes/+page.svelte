<script lang="ts">
    import { Shield, Clock, MapPin, Heart, Phone, Mail } from 'lucide-svelte';
    import Navbar from '../lib/components/Navbar.svelte';
    import Footer from '../lib/components/Footer.svelte';
  
  
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
  
  <div class="w-full">
    <Navbar />
    <!-- Hero Section -->
    <section class="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
        <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <!-- Animated background circles -->
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div class="container mx-auto px-16 pt-32 md:pt-22 relative z-10">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left Column -->
                <div class="space-y-4 text-center md:text-left">
                    <div class="space-y-6">
                        <span class="inline-block px-4 py-2 bg-pink-100/60 backdrop-blur-sm text-pink-600 rounded-full text-sm font-medium">
                            Welcome to Nari Keliye
                        </span>
                        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
                            Safe Travel for
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                                Every Woman
                            </span>
                        </h1>
                    </div>

                    <!-- Booking Card -->
                    <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100/50">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-1">
                                <img src="girl-img.jpg" alt="Driver" class="w-full h-full object-cover rounded-full" />
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                                  Angelina Fernandes
                                </h3>
                                <p class="text-gray-600 font-medium">Student of MIT</p>
                            </div>
                        </div>
                        <button class="group relative w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden">
                            <span class="relative z-10">Book Now</span>
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transition-transform duration-300 translate-x-full group-hover:translate-x-0"></div>
                        </button>
                    </div>
                </div>

                <!-- Right Column with floating mockup -->
                <div class="relative hidden md:block">
                    <div class="relative z-10 transform hover:scale-105 transition-all duration-500 hover:rotate-2">
                        <img 
                            src="mobile-hero.png" 
                            alt="App Demo" 
                            class="w-2/5 mx-auto drop-shadow-2xl rounded-[2.5rem]"
                        />
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
              <p>+91 (987) 654-3215</p>
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

  <Footer />

  <style>

    @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
    }
    
    .animate-blob {
        animation: blob 7s infinite;
    }
    
    .animation-delay-2000 {
        animation-delay: 2s;
    }

    /* Custom Scrollbar Styles */
    :global(::-webkit-scrollbar) {
      width: 8px;
      height: 8px;
    }

    :global(::-webkit-scrollbar-track) {
      background: rgba(249, 168, 212, 0.1);
      backdrop-filter: blur(8px);
    }

    :global(::-webkit-scrollbar-thumb) {
      background: linear-gradient(
        45deg,
        rgba(236, 72, 153, 0.8),
        rgba(217, 70, 239, 0.8)
      );
      border-radius: 100vh;
      border: 2px solid rgba(255, 255, 255, 0.8);
      transition: all 0.3s ease;
    }

    :global(::-webkit-scrollbar-thumb:hover) {
      background: linear-gradient(
        45deg,
        rgba(219, 39, 119, 1),
        rgba(192, 38, 211, 1)
      );
      border-color: rgba(255, 255, 255, 0.9);
    }

    :global(::-webkit-scrollbar-corner) {
      background: transparent;
    }

    /* For Firefox */
    :global(html) {
      scrollbar-width: thin;
      scrollbar-color: rgba(236, 72, 153, 0.8) rgba(249, 168, 212, 0.1);
    }

    /* Smooth Scrolling */
    :global(html) {
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  </style>