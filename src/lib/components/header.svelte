<script>
    // Create a reactive variable to track if the menu is active
    let isMenuOpen = false;
  
    // Toggle function to open or close the menu
    function handleToggle() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  

    <div class="h-1/3 lg:h-[70px] w-full bg-gradient-to-t from-indigo-200 i">
      <nav class="w-full top-0">
        <div class="w-[90%] mx-auto flex justify-between items-center pt-2">
          <div class="flex items-center gap-2">
            <img src="https://prismatic-vacherin-4f22e8.netlify.app/logo.png" alt="Logo" class="h-12 w-16" />
            <h1>HK Portfolio</h1>
          </div>
          <div>
            <ul
              class="hidden md:flex gap-4 space-x-10 justify-center items-center text-gray-600 font-bold text-sm"
            >
              <li class="hover:text-gray-400"><a href="#">Home</a></li>
              <li class="hover:text-gray-400"><a href="/blogs">Blogs</a></li>
              <li class="hover:text-gray-400"><a href="#">Content</a></li>
              <li class="hover:text-gray-400"><a href="">About Us</a></li>
              <li class="hover:text-gray-400 border-[0.5px]
               border-indigo-300 rounded-full py-2 px-4 transition duration-[1s] ease-in-out hover:bg-gradient-to-t from-[#6f38d7] to-[#9198e5] hover:text-white "><a href="">ContactUs <span>&rarr;</span></a></li>
            </ul>
          </div>
          <div
            id="hamburger"
            class=" space-y-1 md:hidden block z-index:0;"
            on:click={handleToggle}
          >
            <div class="w-6 h-0.5 bg-black"></div>
            <div class="w-6 h-0.5 bg-black"></div>
            <div class="w-6 h-0.5 bg-black"></div>
          </div>
        </div>
      </nav>
      <ul
        class:bg-blue-900={isMenuOpen}
        class:hidden={!isMenuOpen}
        class="absolute top-0 left-0 md:hidden w-[50%] h-1/3 lg:h-screen p-8 space-y-5 text-white"
        id="menuu"
      >
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Content</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <!--  Close Menu  content here -->

<!---box area start from hier-->    
    <div class="w-fill bg-gray-800">
   
<!---box area end hier-->         
    </div>

  