// Note: cannot use Svelte enhanced:enhanced_img in an if/else block
// so I have to write the <picture><enhanced_img> block manually and put images in 'static' folder, not lib
// and manually process each image with squoosh and responsivebreakpoints.com
// TODO - investigate serving every image from Cloudinary - svelte.cloudinary.dev - or cloudinary API for build script
// fallback image is a compressed png from squoosh, but as of 2024 it'll only be served for IE
// thumbnail image is a compressed png from squoosh, and is in CSS url() so not currently a webp option
// TODO - research how to change CSS url() path from png w/IE to webp for all other browsers
// TODO - research using jpgXL which may improve on webp, but not available in all browsers or cloudinary CDN option

const projectsText = {

  heading: "Projects",
  intro: "Each project has a page with more screenshots and information about how I built the site, what problems I had to solve and my future plans for it.",
  projects: [
    {
      thumbnail_fallback: "/home_page/cog/cog_reviewer_thumbnail.png", // for CSS url() so must be a very small png to load fast. webp won't work on IE.
      thumbnail_next_gen: "/home_page/cog/cog_reviewer_thumbnail.webp", // for CSS image-set(), which can take webp
      picture: {
        sizes: "(max-width: 922px) 100vw, 922px",
        srcset: "/home_page/cog/cog_reviewer_squoosh_yh4c2j_c_scale,w_480.webp 480w, " +
                "/home_page/cog/cog_reviewer_squoosh_yh4c2j_c_scale,w_726.webp 726w," +
                "/home_page/cog/cog_reviewer_squoosh_yh4c2j_c_scale,w_922.webp 922w",
        type: "image/webp",
        height: "571",
        width: "922",
        fallback_img: "/home_page/cog/cog_reviewer_squoosh.png", // if browser doesn't support webp (IE)
        alt: "screenshot of a blog post about my work at Cognitiv plus."
      },
      title: "AI Document Review",
      description: "Front-end development work for Cognitiv+ MVP.",
      stack: "SvelteKit | GraphQL",
      url: "../projects/cognitiv-web-app",
      bg: "cognitiv",
      card_bg: "project_bg"
    },
    {
      thumbnail_fallback: "/home_page/flashcards/flashcards_thumbnail_squoosh.png",
      thumbnail_next_gen: "/home_page/flashcards/flashcards_thumbnail_squoosh.webp",
      picture: {
        sizes: "(max-width: 1400px) 100vw, 1400px",
        srcset: "/home_page/flashcards/flashcards_original_x6rdq1_c_scale,w_200.webp 200w, " +
                "/home_page/flashcards/flashcards_original_x6rdq1_c_scale,w_886.webp 886w, " +
                "/home_page/flashcards/flashcards_original_x6rdq1_c_scale,w_1387.webp 1387w, " +
                "/home_page/flashcards/flashcards_original_x6rdq1_c_scale,w_1400.webp 1400w",
        type: "image/webp",
        height: "814",
        width: "1406",
        fallback_img: "/home_page/flashcards/flashcards_squoosh.png",
        alt: "screenshot of a blog post about my JavaScript flashcard web-app"
      },
      title: "MethodMinder: LLM FlashCards",
      description: "Revising JS methods with spaced repetition and AI flashcards.",
      stack: "React Router",
      url: "../projects/method-minder",
      bg: "cognitiv",
      card_bg: "project_bg"
    },
    {
      thumbnail_fallback: "/home_page/buttons/all_buttons_thumbnail_squoosh.png",
      thumbnail_next_gen: "/home_page/buttons/all_buttons_thumbnail_squoosh.webp",
      picture: {
        sizes: "(max-width: 1122px) 100vw, 1122px",
        srcset: "/home_page/buttons/all_buttons_squoosh_flxrc5_c_scale,w_200.webp 200w, " +
          "/home_page/buttons/all_buttons_squoosh_flxrc5_c_scale,w_750.webp 750w, " +
          "/home_page/buttons/all_buttons_squoosh_flxrc5_c_scale,w_1122.webp 1122w",
        type: "image/webp",
        height: "786",
        width: "1122",
        fallback_img: "/home_page/buttons/all_buttons_squoosh.png",
        alt: "screenshot of a blog post about accessible links and links that are styled as buttons."
      },
      title: "...on buttons",
      description: "Best practice for accessible navigation 'buttons'.",
      stack: "a11y",
      url: "../blog/a11y-navigation-buttons",
      bg: "theatres",
      card_bg: "blog_bg"
    },
    {
      thumbnail_fallback: "/home_page/prompt-comp/prompt_history_SQUOOSH.png",
      thumbnail_next_gen: "/home_page/prompt-comp/prompt_history.webp",
      picture: {
        sizes: "(max-width: 1040px) 100vw, 1040px",
        srcset: "/home_page/prompt-comp/prompt_history_w_460.webp 460w," +
                "/home_page/prompt-comp/prompt_history_w_1040.webp 1040w,",
        type: "image/webp",
        height: "548",
        width: "1040",
        fallback_img: "/home_page/prompt-comp/prompt_history_SQUOOSH.png",
        alt: "screenshot of a blog post about building a prompt comparison tool."
      },
      title: "Building a Prompt Comparison Tool",
      description: "a SvelteKit tool to evaluate large language models (LLMs) for contract issue identification and other functionalities at Cognitiv+",
      stack: "SvelteKit | LLM",
      url: "../blog/prompt-comparison-tool",
      bg: "theatres",
      card_bg: "blog_bg"
    },
  ]
};

export { projectsText };