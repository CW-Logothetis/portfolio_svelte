export let introData = {
  title: "Cognitiv+ <br> AI Document Review",
  subtitle: "from MVP to First Release",
  para: [
    "Cognitiv+ is an AI-powered platform for automating document review and classification tasks by extracting key information.",
    "The company first built and sold an app using an Angular front-end and early ML models.",
    "After I joined, work started on an MVP for faster models. It was an opportune moment to switch to Svelte and SvelteKit.",
    "Kit was then in beta and Svelte didn't have the support, UI libraries or packages it does today. So there was a lot of fun to be had and custom components to build.",
    `"Start-up life" means we've not always had a UI/UX designer either; the MVP is a work in progress and very rough around the edges.`
  ],
  techStack: [
    { title: "Stack:", description: "SvelteKit &nbsp;&nbsp;|&nbsp;&nbsp; GraphQL &nbsp;&nbsp;|&nbsp;&nbsp; Playwright &nbsp;&nbsp;|&nbsp;&nbsp; Figma" },
    {
      title: "Demo:",
      description: "<a href=\"https://cloud.cognitivplus.com/accounts/register/\" class=\"intro--para-col-2\" target=\"_blank\" rel=\"noreferrer\">Sign up for free trial</a>"
    }
  ]
};

export let heroImage = {
  src: "/cog_app/cog_reviewer.png",
  alt: "Screenshot of Cognitiv plus Document Reviewer."
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