<script lang="ts">
  import { Shield, Clock, MapPin, Heart, Users, Calendar } from 'lucide-svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock transportation exclusively for women, ensuring safety at any hour."
    },
    {
      icon: Heart,
      title: "Women Empowerment",
      description: "Creating employment opportunities for women drivers, fostering financial independence."
    },
    {
      icon: MapPin,
      title: "Advanced Tracking",
      description: "Real-time GPS tracking with updates every 10 minutes for enhanced security."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Verified women drivers and regularly maintained vehicles for comfortable rides."
    },
    {
      icon: Users,
      title: "Target Audience",
      description: "Tailored services for working professionals and college students."
    },
    {
      icon: Calendar,
      title: "Flexible Plans",
      description: "Monthly plans for working women and pre-booking facility for upcoming rides."
    }
  ];
</script>

<Navbar />

<div class="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
  <!-- Hero Section with modern design -->
  <section class="relative pt-32 pb-24 px-4 overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-100 rounded-bl-full opacity-30 blur-3xl"></div>
    <div class="container mx-auto text-center relative z-10">
      <span class="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
        About Us
      </span>
      <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
        Empowering Women Through
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Safe Mobility
        </span>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        We're revolutionizing women's transportation with security, comfort, and empowerment at our core.
      </p>
    </div>
  </section>

  <!-- Features Grid with modern cards -->
  <section class="py-20 px-4">
    <div class="container mx-auto max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each features as feature}
          <div class="group bg-white/70 backdrop-blur-lg p-8 rounded-2xl hover:bg-white 
                      transition-all duration-300 border border-pink-100/50 hover:border-pink-200
                      transform hover:-translate-y-1 hover:shadow-xl">
            <div class="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-3 rounded-xl
                        w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 
                        transition-transform duration-300">
              <svelte:component this={feature.icon} size={24} />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-pink-600 
                       transition-colors">{feature.title}</h3>
            <p class="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Mission Statement with modern design -->
  <section class="relative py-24 px-4">
    <div class="absolute inset-0 bg-pink-500 skew-y-3 transform origin-top-right"></div>
    <div class="container mx-auto max-w-4xl relative z-10 text-center">
      <div class="bg-white/90 backdrop-blur-lg p-12 rounded-3xl shadow-2xl">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-600 
                   bg-clip-text text-transparent">Our Mission</h2>
        <p class="text-xl text-gray-700 mb-10 leading-relaxed">
          Creating a safer world for women through reliable transportation while fostering 
          employment opportunities for women drivers.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <button class="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 
                         text-white rounded-xl font-semibold overflow-hidden">
            <span class="relative z-10">Join as a Passenger</span>
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 
                        transition-transform duration-300 translate-x-full 
                        group-hover:translate-x-0"></div>
          </button>
          <button class="px-8 py-4 border-2 border-pink-500 text-pink-500 rounded-xl font-semibold 
                         hover:bg-pink-50 transition-colors">
            Become a Driver
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats with modern cards -->
  <section class="py-24 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        {#each [
          { value: '24/7', label: 'Service Available' },
          { value: '10min', label: 'GPS Updates' },
          { value: '100%', label: 'Women Drivers' },
          { value: 'Safe', label: 'Verified Rides' }
        ] as stat}
          <div class="bg-white/70 backdrop-blur-lg p-6 rounded-2xl border border-pink-100 
                      hover:border-pink-200 transition-all duration-300 hover:transform 
                      hover:-translate-y-1 hover:shadow-xl text-center group">
            <div class="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 
                        bg-clip-text text-transparent mb-2 group-hover:scale-110 
                        transition-transform">{stat.value}</div>
            <div class="text-gray-600">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>