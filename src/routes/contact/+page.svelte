<script>
	
  import Icon from '@iconify/svelte';
  import { socialLinks } from '$lib/constants/index.js';

</script>
<div class="w-full text-center py-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
  <h1 class="text-4xl font-semibold">Contact Us</h1>

</div>
<!-- Contact Section -->
<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="mt-12 md:flex md:justify-between">
      <!-- Contact Form -->
      <div class="md:w-1/2 bg-white shadow-md rounded-lg p-8 mb-10 md:mb-0">
        <form action="#" method="POST">
          <div class="mb-6">
            <label for="name" class="block text-gray-700 font-medium">Full Name</label>
            <input type="text" id="name" name="name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Enter your name" required>
          </div>
          <div class="mb-6">
            <label for="email" class="block text-gray-700 font-medium">Email Address</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" required>
          </div>
          <div class="mb-6">
            <label for="subject" class="block text-gray-700 font-medium">Subject</label>
            <input type="text" id="subject" name="subject" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Subject of your message">
          </div>
          <div class="mb-6">
            <label for="message" class="block text-gray-700 font-medium">Message</label>
            <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Type your message here..." required></textarea>
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
        </form>
      </div>

      <!-- Contact Information -->
      <div class="md:w-1/2 md:pl-10 mt-11">
        <h3 class="text-2xl font-semibold text-gray-800">Get in Touch</h3>
        <p class="text-gray-600 mt-4">Feel free to reach out via phone, email, or our social media channels. We're here to help!</p>

        <div class="mt-8 space-y-4">
          <div class="flex items-center">
            <span class="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-4">
              📍
            </span>
            <p class="text-gray-700">3054 Lyssstrasse 20, Schüpfen, Switzerland</p>
          </div>
          <div class="flex items-center">
            <span class="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-4">
              📞
            </span>
            <p class="text-gray-700">+41 7845 789</p>
          </div>
          <div class="flex items-center">
            <span class="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-4">
              ✉️
            </span>
            <p class="text-gray-700">hikmat4533@gmail.com</p>
          </div>
          <div class="flex items-center">
            <span class="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center rounded-full mr-4">
              🌐
            </span>
            <p class="text-gray-700">www.example.com</p>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="flex mt-8 space-x-4">
          
          {#each socialLinks as item}
          <a href="/" class="btn-social w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center hover:bg-indigo-600">
           <Icon icon={item.icon} />
          </a>
          {/each}

        
        </div>
      </div>
    </div>
  </div>
</section>

