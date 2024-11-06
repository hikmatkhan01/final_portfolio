<script>
    // Expanded blog data with reliable image links
    
    import { blogs } from '$lib/constants/index.js';
  </script>
  
  <div class="w-full text-center py-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
    <h1 class="text-4xl font-semibold">Blogs</h1>
    <p class="text-lg mt-2">Latest insights and stories from the tech world</p>
  </div>
  
  <div class="w-full bg-gray-100 py-10">
    {#each blogs as item}
      <div class="w-[90%] md:w-[60%] lg:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-8 flex hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img src="{item.img}" alt="{item.title}" class="h-[-150px] w-[200px] object-cover">
        <div class="p-6 flex flex-col justify-between">
          <h2 class="text-2xl font-bold text-gray-800">{item.title}</h2>
          <p class="text-gray-600 mt-4">{item.desc}</p>
          <div class="flex mt-6 gap-2">
            {#each item.tags as tag}
            <a href="#" class="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors">{tag}</a>
            {/each}
           
          </div>
        </div>
      </div>
    {/each}
  </div>
  