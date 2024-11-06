/** @type {import('./$types.js').PageServerLoad} */
export async function load({params}) {
    const query = "Fetch from database ";
     console.log("Page laoded");
    return {
        slug:params.slug,
        singleBlog:query,
    }
}

