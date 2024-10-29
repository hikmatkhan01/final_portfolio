<script>
  const blogs = [
    {
        id:1,
        title:'Mock your back-end API and start coding your UI today.',
        desc:"It's hard to put together a meaningful UI prototype without making real requests to an API. By making real requests, you'll uncover problems with application flow, timing, and API design early, improving the quality of both the user experience and API. With Mockaroo, you can design your own mock APIs, You control the URLs, responses, and error conditions. Paralellize UI and API development and start delivering better applications faster today!",
    },
    {
        id:2,
        title:'Why is test data important?',
        desc:"It's hard to put together a meaningful UI prototype without making real requests to an API. By making real requests, you'll uncover problems with application flow, timing, and API design early, improving the quality of both the user experience and API. With Mockaroo, you can design your own mock APIs, You control the URLs, responses, and error conditions. Paralellize UI and API development and start delivering better applications faster today!",
    },
    {
        id:3,
        title:'Why is realistic data important?',
        desc:"It's hard to put together a meaningful UI prototype without making real requests to an API. By making real requests, you'll uncover problems with application flow, timing, and API design early, improving the quality of both the user experience and API. With Mockaroo, you can design your own mock APIs, You control the URLs, responses, and error conditions. Paralellize UI and API development and start delivering better applications faster today!",
    },
    {
        id:4,
        title:'Why Mockaroo?',
        desc:"It's hard to put together a meaningful UI prototype without making real requests to an API. By making real requests, you'll uncover problems with application flow, timing, and API design early, improving the quality of both the user experience and API. With Mockaroo, you can design your own mock APIs, You control the URLs, responses, and error conditions. Paralellize UI and API development and start delivering better applications faster today!",
    }, 

  ];
</script>
 <h1> Blogs </h1>
  {#each blogs as data, i }
     <div class="shadow-sm p-5 bg-white w-full">
        <h1>{i}</h1>
            <h2> {data.title} </h2>
            <hr>
            <p>{data.desc}</p>
            <br>
            <a href="/blogs/{data.id}" class="bg-indigo-700 text-white p-5 rounded-sm"> View More </a>
     </div>   
  {/each}
<style>
  
</style>