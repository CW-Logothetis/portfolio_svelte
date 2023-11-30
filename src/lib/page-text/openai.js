export let introData = {
  title: "Array Methods & OpenAI",
  para: [
    "Since I was first learning to code, I wanted a quick reference for array methods.",
    "MDN docs were far too advanced for a beginner. And there are a thousand blogs and tutorials and cheatsheets online doing some methods. But I couldn't remember which methods were even available.",
    "So I had the idea to summarise MDN docs for each method, then allow me to select methods for comparison.",
    "I never got around to it - too much content to write. But now OpenAI can do the content for me."
  ],
  techStack: [
    { title: "Stack:", description: "SvelteKit (FE and server) - GitHub" },
    {
      title: "Demo:",
      description: "<a href=\"https://openai-arrays.netlify.app/\" class=\"intro--para-col-2\" target=\"_blank\" rel=\"noreferrer\">Netlify</a>\n"
    }
  ]
};

export let heroImage = "/array_homescreen.png"

export let processData =
  {
    "sectionHeader": "Process",
    "steps": [
      {
        "text": [
          "A simple homepage layout with CSS Grid and Flexbox.",
          "They make it naturally responsive and there's no need for any media queries.",
          "The colour scheme is based on the JavaScript logo."
        ],
        "colorClass": "bubble-4-blue",
        "image": "array_responsive"
      },
      {
        "text": [
          "I prompted chatGPT to write the content for the 37 array method cards.",
          "A first idea was a table. But then I asked it to convert to an object, which populates the cards.",
          "Saved me a huge amount of time. Even in the 'old' days of text-davinci."
        ],
        "colorClass": "bubble-4-blue",
        "image": "array_openai"
      },
      {
        "text": [
          "Set up a dynamic route for the text output page, using SvelteKit's `[parameter]`, passing the array method's ID as a param for the URL.",
          "Each method will have its own 'page', ready for OpenAI generated summary, syntax and examples."
        ],
        "colorClass": "bubble-4-blue",
        "image": "array_page"
      },
      {
        "text": [
          "As the OpenAI API key is private the request lives in a +page.server.js file, which is fetched before the page is rendered.",
          "When the user navigates to this page, SvelteKit's load function outputs the response from OpenAI for the `+page.svelte`"
        ],
        "colorClass": "bubble-4-blue",
        "image": "array_page-server"
      }
    ]
  }