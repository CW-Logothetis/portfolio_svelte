const projectsText = {
  heading: "Projects",
  intro: "Each project has a page with more screenshots and information about how I built the site, what problems I had to solve and my future plans for it.",
  projects: [
    {
      image: "/cog_app/cog_reviewer.png",
      title: "AI Document Review",
      description: "Front-end development work for Cognitiv+ MVP.",
      stack: "SvelteKit | GraphQL",
      link: "../cognitiv-web-app",
      bg: "cognitiv"
    },
    {
      image: "/array_homescreen.png",
      title: "Array reference with OpenAI",
      description: "JS array methods with OpenAI generated content.",
      stack: "React | SvelteKit",
      link: "../openai",
      bg: "openai"
    },
    {
      image: "/theatres-landscape.png",
      title: "Ancient Greek Theatres",
      description: "Mobile-first web design, with Vanilla JS components.",
      stack: "Vanilla JS & CSS",
      link: "../ancient-theatres",
      bg: "theatres"
    }
    // Add more projects as needed
  ]
};

export { projectsText };