import heroImg from "$lib/enhanced_img/cog_app/cog_reviewer.png?enhanced"
import cogFigma from "$lib/enhanced_img/cog_app/cog_figma.png?enhanced"
import cogCreateProject from "$lib/enhanced_img/cog_app/cog_create_project.png?enhanced"
import cogDocList from "$lib/enhanced_img/cog_app/cog_doc_list.png?enhanced"
import cogReviewer from "$lib/enhanced_img/cog_app/cog_reviewer.png?enhanced"
import cogNextSteps from "$lib/enhanced_img/cog_app/cog_next_steps.png?enhanced"

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
  src: heroImg,
  alt: "Screenshot of Cognitiv plus Document Reviewer."
}

export let processData =
  {
    "sectionHeader": "Process",
    "steps": [
      {
        "text": [
          "<strong>User Stories, flows and initial design</strong>",
          "Stories were drafted in Confluence, then flows in FigJam before a UI/UX designer made Figma mock-ups",
          "<strong>NOTE:</strong> these aren’t the company's final flows or designs. Just here for illustrative purposes."
        ],
        "colorClass": "bubble-4-blue",
        "image": cogFigma,
        "alt": "Screenshot of Figma designs."
      },
      {
        "text": [
          "<strong>Add a project</strong>",
          "Built a multi-step form “Wizard” for users to create a new project, which will hold sets of documents that they will upload for classification and review."
        ],
        "colorClass": "bubble-4-blue",
        "image": cogCreateProject,
        "alt": "Screenshot of create project wizard."
      },
      {
        "text": [
          "<strong>Project main page: a Document List</strong>",
          "An HTML table, sortable by using a Svelte Store and GraphQL query.",
          "Document list updated by polling."
        ],
        "colorClass": "bubble-4-blue",
        "image": cogDocList,
        "alt": "Screenshot of document list."
      },
      {
        "text": [
          "<strong>Reviewing a document</strong>",
          "Final part of the MVP is a review of the various data types that the ML models extracted.",
          "The big design and technical challenge here is presenting the data in the page and linking it to expanded details in the card."
        ],
        "colorClass": "bubble-4-blue",
        "image": cogReviewer,
        "alt": "Screenshot of contract opened in Review mode."
      }
    ]
  }

export let nextStepsData =
  {
    "sectionHeader": "Next Steps",
    "steps": [
      {
        "text": [
          "<strong>Training the ML models</strong>",
          "The models aren’t always 100% correct. So the user needs to be able to add missing data, or edit incorrect data.",
          "This will probably be a wizard in a modal, to handle the 250+ clause types and 15+ ML models that the user may want to correct.",
          "Plus, we need reporting, dashboards, multi-user assignment and notifications, and a workflow for starting and ending the review or a document and project."
        ],
        "colorClass": "bubble-4-blue",
        "image": cogNextSteps,
        "alt": "Screenshot of draft modal for adding insights."
      }
    ]
  }