<script>
    import { Shield, Clock, MapPin, Heart, Phone, Mail } from 'lucide-svelte';
    import Navbar from '$lib/components/Navbar.svelte';
  
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
    <section class="bg-pink-50 min-h-screen flex items-center px-4 py-16">
      <div class="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Booking Driver<br/>Exclusively for Women</h1>
          <p class="text-gray-600 mb-6">Safe, reliable, and comfortable rides by women, for women</p>
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-full bg-pink-200 overflow-hidden">
                <img src="/api/placeholder/64/64" alt="Driver" class="w-full h-full object-cover" />
              </div>
              <div>
                <h3 class="font-semibold">Book Ride</h3>
                <p class="text-sm text-gray-500">YOU / Female</p>
              </div>
            </div>
            <button class="w-full bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition">
              Book Now
            </button>
          </div>
        </div>
        <div class="relative">
          <img src="/api/placeholder/400/800" alt="App Demo" class="w-full max-w-sm mx-auto" />
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