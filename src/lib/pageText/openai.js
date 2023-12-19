export let introData = {
  title: "Array Methods & OpenAI",
  para: [
    "Since first learning to code, I've wanted a quick, short reference for array methods.",
    "So I had the idea to summarise MDN docs for each method, then write a couple of short examples. I never got around to it - too much content to write. But now an LLM can do explanations, syntax and examples for me.",
    "For a comparison, I built the app in React and Svelte, deploying to Netlify and Vercel.",
    "NOTE: during periods of high usage, OpenAI API calls can time out after 10s. I need to handle this."
  ],
  techStack: [
    { title: "Stack:", description: "React (client only)  &nbsp; | &nbsp; SvelteKit (client and server)" },
    {
      title: "Demo:",
      description: "<a href=\"https://array-openai-react.vercel.app/\" class=\"intro--para-col-2\" target=\"_blank\" rel=\"noreferrer\">React & Vercel</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href=\"https://openai-arrays.netlify.app/\" class=\"intro--para-col-2\" target=\"_blank\" rel=\"noreferrer\">Svelte & Netlify</a>\n"
    }
  ]
};

export let heroImage = {
  src: "/array_homescreen.png",
  alt: "Screenshot of the app's home screen with cards for each array method."
}

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