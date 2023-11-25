const projectsText = {
  heading: "Projects",
  intro: "Each project has a page with more screenshots and information about how I built the site, what problems I had to solve and my future plans for it.",
  projects: [
    {
      image: "/array_homescreen.png",
      title: "Array reference with OpenAI",
      description: "All the array methods on one page, with OpenAI generated summaries, syntax and examples.",
      stack: "SvelteKit",
      link: "../openai",
      bg: "openai"
    },
    {
      image: "/theatres-landscape.png",
      title: "Ancient Greek Theatres",
      description: "Practicing mobile-first web design. Vanilla JS for switching tabs and a gallery.",
      stack: "Vanilla JS & CSS",
      link: "../ancient-theatres",
      bg: "theatres"
    }
    // Add more projects as needed
  ]
};

export { projectsText };