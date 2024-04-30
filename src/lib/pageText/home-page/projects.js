const projectsText = {
  heading: "Projects",
  intro: "Each project has a page with more screenshots and information about how I built the site, what problems I had to solve and my future plans for it.",
  projects: [
    {
      image: "/cog_app/cog_reviewer.png",
      title: "AI Document Review",
      description: "Front-end development work for Cognitiv+ MVP.",
      stack: "SvelteKit | GraphQL",
      url: "../projects/cognitiv-web-app",
      bg: "cognitiv",
      card_bg: "project_bg"
    },
    {
      image: "/blog_images/all_buttons.png",
      title: "...on buttons",
      description: "Best practice for accessible navigation 'buttons'.",
      stack: "a11y",
      url: "../blog/a11y-navigation-buttons",
      bg: "theatres",
      card_bg: "blog_bg"
    },
    {
      image: "/array_homescreen.png",
      title: "LLM Array Tutor",
      description: "JS array methods with OpenAI generated content.",
      stack: "React | SvelteKit",
      url: "../projects/openai",
      bg: "cognitiv",
      card_bg: "project_bg"
    },
    // {
    //   image: "/theatres-landscape.png",
    //   title: "Ancient Theatres",
    //   description: "Mobile-first web design, with Vanilla JS components.",
    //   stack: "Vanilla JS & CSS",
    //   url: "../ancient-theatres",
    //   bg: "theatres"
    // }
  ]
};

export { projectsText };