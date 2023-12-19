export let introData = {
  title: "Ancient Greek Theatres",
  para: [
    "As I’m a bit of a history nut, I’ve visited quite a few of the archaeological sites in Greece and the southern Balkans. So when I was thinking of a personal project to test my Figma and responsive design skills, I thought this would be a good fit. Especially as I have my own photographs to use.",
    "There are over a hundred Greek and then Roman theatres, so I just selected five from the Greek period, but nipped over the border into modern day Albania to show two that are relatively unknown.",
    "Note: as the aim here was to practice web design, the theatre pages use placeholder or duplicated text."
  ],
  techStack: [
    { title: "Stack:", description: "Vanilla JS - CSS - Git/Github" },
    { title: "Design:", description: "Figma - VS Code - Chrome Dev Tools" },
    {
      title: "Demo:",
      description: "<a href=\"https://ancient-theatres.netlify.app/\" class=\"intro--para-col-2\" target=\"_blank\" rel=\"noreferrer\">Netlify</a>"
    }
  ]
};

export let heroImage = {
  src: "/theatres-hero.png",
  alt: "Screenshot of a project page, with a photo of the theatre at Epidavros."
}

export let processData =
  {
    "sectionHeader": "Process",
    "steps": [
      {
        "text": [
          "With Figma, I laid out detailed plans for the home page and then a template to be used for each of the theatres.",
          "I started mobile first, then adjusted sizes and also layout of element for tablet and laptop/desktop with landscape orientation."
        ],
        "colorClass": "bubble-5-green",
        "image": "theatres-figma"
      },
      {
        "text": [
          "The home page was relatively straightforward, with a hero image, some introductory text and then a timeline.",
          "Everything is set out with CSS Grid, with empty columns for margins and easy alignment.",
          "The timeline’s dividing line is a border to the right of the dates. It needed a little adjustment with different media queries."
        ],
        "colorClass": "bubble-4-green",
        "image": "theatres-grid"
      },
      {
        "text": [
          "The template for the theatre could have had a long scroll, but I added a vanilla JavaScript tab menu."
        ],
        "colorClass": "bubble-3-green",
        "image": "theatres-tabs"
      },
      {
        "text": [
          "The photo gallery allowed me to use a little more JavaScript. And in the future I’ll add a lightbox to enlarge the photos; on mobile they’re too small.",
          "The thumbnails are in a grid so that they’ll wrap on smaller screens."
        ],
        "colorClass": "bubble-2-green",
        "image": "theatres-photos"
      }
    ]
  }


export let nextStepsData =
  {
    "sectionHeader": "Next Steps",
    "steps": [
      {
        "text": [
          "I have a map of the region and I intend to place clickable links on the names of the theatres.",
          "The map allows people to get a sense of each theatre’s location in relation to the others, and also see which one is close to an airport or place they may be visiting."
        ],
        "colorClass": "bubble-5-green",
        "image": "theatres-map-idea"
      },
      {
        "text": [
          "I’ve used MapBox before to design maps, but not its API.",
          "Customising map colours and labels, plus enabling users to plan a trip by car would be a great addition."
        ],
        "colorClass": "bubble-4-green",
        "image": "theatres-mapbox"
      }
    ]
  }

