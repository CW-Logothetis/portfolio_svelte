export let posts = [
    {
        name: 'Blog',
        blog_post_title: 'Building a Prompt Comparison tool',
        post_seo_title: 'Building an internal Prompt Comparison tool with SvelteKit',
        post_language: 'en',
        slug: 'prompt-comparison-tool',
        author: 'CW',
        tags: ['LLM', 'Svelte'],
        meta_description:
          'a SvelteKit tool to evaluate large language models (LLMs) for contract issue identification and other functionalities at Cognitiv+',
        published_date: '2024-05-22 12:01:18',
        last_modified_date: '2024-05-22T08:02:43.193Z',
        featured_image_url: '$lib/enhanced_img/prompt_comparison/prompt_comparison_history.png?enhanced',
        image01: '',
        status: 'PUBLISHED',
        archived: false,
        post_body: `
            <picture>
              <source 
                sizes=""
                srcset="
                    /blog_images/prompt_comparison/prompt_comparison_history.png"
                type="image/webp"
                />
              <img loading="lazy" height="548" width="1040" src="/blog_images/prompt_comparison/prompt_comparison_history.png" alt="Screenshot of Silktide accessibility Chrome Extension showing statistics for how many people have varying forms of colour-blindness."/>
            </picture>
            <p>Here's a <a href="https://www.cognitivplus.com/blog/prompt-comparison">post</a> I recently wrote on our company blog about our internal prompt comparison tool.</p>
            <p>In summary, I've been given the task of designing and building a new tool using SvelteKit to evaluate the performance of large language models (LLMs).</p>
            <p>The first iteration of tool uses human evaluation to judge the reasoning and accuracy of the LLM. Basically, "how good a lawyer is this LLM?".</p>
            <p>We need to test different models with "mega-prompts" that include extensive checklists, guidelines, and examples. As an old world guide, the prompts could be two or three sheets of A4. And we want to test each prompt with different parameters on different models. Then we want to iterate on the prompt to compare results.</p>
            <p>Our CEO and I, both ex-lawyers, have started human evaluations to categorize results. Using a simple score of -2 to 2, we can then filter good prompts by model or parameter and compare their results to see if the iteration is better or worse, and in time these can be fed back to our ML team.</p>
            <p>I built the tool with SvelteKit, which is what we use for our production web app. The front-end has two pages: a prompt page and a history page. The back end is responsible for managing the API endpoints that interact with various LLMs. At the moment, we're running it locally and exporting to CSV, but we've a couple of improvements in the pipeline.</p>
            <ul>
            <li><strong>Evaluation Suite:</strong> A comprehensive evaluation process involving test responses, secondary LLM reviews, and LLM-generated scores, with less frequent human oversight to ensure accuracy.</li>
            <li><strong>Side-by-side comparison:</strong> Being able to open up two or three previous prompt results from the same prompt, but maybe with different models and/or parameters, to judge which gave the best result. This will be especially helpful when we have our fine-tuned model ready; to compare it to the original LLM, and to compare it to previous versions of itself.</li>
            </ul>
            <p>You can read the full post on the company blog <a href="https://www.cognitivplus.com/blog/prompt-comparison">here</a>.</p>
        `
    },
    {
        name: 'Blog',
        blog_post_title: 'Designs for an LLM Negotiator',
        post_seo_title: 'a new user flow using an LLM to show user\'s issues in draft contracts that they can raise with the other party.',
        post_language: 'en',
        slug: 'llm-contract-negotiation',
        author: 'CW',
        tags: ['LLM', 'Svelte', 'Figma'],
        meta_description:
          'a new user flow using an LLM to show user\'s issues in draft contracts that they can raise with the other party.',
        published_date: '2024-05-23 12:01:18',
        last_modified_date: '2024-05-23T08:02:43.193Z',
        featured_image_url: '$lib/enhanced_img/prompt_comparison/prompt_comparison_history.png?enhanced',
        image01: '',
        status: 'PUBLISHED',
        archived: false,
        post_body: `
            <picture>
              <source 
                sizes="(max-width: 1019px) 100vw, 1019px"
                srcset="
                        /home_page/llm_negotiator/issue_card_SQUOOSH_veoech_c_scale,w_460.webp 460w,
                        /home_page/llm_negotiator/issue_card_SQUOOSH_veoech_c_scale,w_693.webp 693w,
                        /home_page/llm_negotiator/issue_card_SQUOOSH_veoech_c_scale,w_827.webp 827w,
                        /home_page/llm_negotiator/issue_card_SQUOOSH_veoech_c_scale,w_971.webp 971w,
                        /home_page/llm_negotiator/issue_card_SQUOOSH_veoech_c_scale,w_1019.webp 1019w"
                type="image/webp"
                />
              <img loading="lazy" height="570" width="1019" src="/home_page/llm_negotiator/issue_card_SQUOOSH.png" alt="Screenshot of Silktide accessibility Chrome Extension showing statistics for how many people have varying forms of colour-blindness."/>
            </picture>
            <p>Here's a <a href="https://www.cognitivplus.com/blog/llm_negotiator-ai">post</a> I recently wrote on our company blog about our upcoming Contract Negotiator feature.</p>
            <p>I've been given the task of working with the CEO to design a way for users to be notified about issues in a contract. I made wireframes in Figma then a SvelteKit front end. I also added a SvelteKit back end to contract two Mistral models, so that we could get a feel for the process. But in production it will connect to our own fine-tuned model and token pricing will be adjusted.</p>
            <h3>Front-end challenge - Collision</h3>
            <p>One interesting change to our current app was a collision detection implementation for the issue cards.</p>
            <p>In our production Review app, the insight cards all stack on top of each other, and if a user clicks one, the contract scrolls to the correct place. It's fine, it works, but we wanted to add cards at the right place, like comments in say Word or Google Docs. And then we'd give up and down arrows to move through the cards and scroll the page and the cards at the same time.</p>
            <p>But what if there's a place in the contract with two issues together or close? Then the cards would overlap. Here, I used getBoundingClientRect in a map of the cards to move a card down, or move down a selection of cards if needs be.</p>
            <p>Our back-end team first needs to ensure that the ID of the sentence or section that went to the LLM and generated that issue is then inserted into that issue. Then, in the front end, I match the IDs in the contract and the cards, ensuring that the tops of each element are level, unless there's an overlap.</p>
            <p>You can read the full post about the upcoming feature on the company blog <a href="https://www.cognitivplus.com/blog/prompt-comparison">here</a>.</p>
        `
    },
    {
        name: 'Blog',
        blog_post_title: '...on buttons and accessibility',
        post_seo_title: 'Designing Accessible buttons for navigation',
        post_language: 'en',
        slug: 'a11y-navigation-buttons',
        author: 'CW',
        tags: ['a11y', 'UI/UX'],
        meta_description:
          'Designing accessible buttons involves looking at colour schemes, interaction states and ARIA labelling. Small choices in button design can increase accessibility and improve user experience for a diverse audience.',
        published_date: '2024-04-24 12:01:18',
        last_modified_date: '2024-04-24T08:02:43.193Z',
        featured_image_url: '$lib/enhanced_img/text/featured_images/risks_of_bidding.jpg?enhanced',
        image01: '',
        status: 'PUBLISHED',
        archived: false,
        post_body: `
<section>
    <h2>Introduction</h2>
    <p>This is a bit of a deep dive into the intricacies of designing accessible buttons, using my portfolio as a case study.</p>
    <p> It came about due to a task at work as we move from an MVP to a version 1. I’m stripping out Bootstrap from the MVP and re-designing the UI/UX, which includes new buttons with improved accessibility for our older customer base (this’ll be a blog post for the future). By looking at colour schemes, interaction states and ARIA labelling, small choices in button design can increase accessibility and improve user experience for a diverse audience. </p>
    <h3 id="anchor-elements-">A11y Checklist for Anchor Elements</h3>
    <p>In designing and coding them, I had this checklist to hand:</p>
    <p>Anchor elements are primarily used for navigation, guiding users to different pages or specific locations within the same page. Here’s how to optimize them for accessibility:</p>
    <ul>
        <li><strong>Semantic HTML</strong>: Choose the correct element to communicate the purpose to assistive technologies. Consider &lt;a&gt; vs. &lt;button&gt;</li>
        <li><strong>Descriptive Link Text</strong>: Avoid vague phrases like &quot;click here.&quot; Instead, use clear descriptions that convey the destination of the link.</li>
        <li><strong>Proper Use of href</strong>: Always include a valid href attribute to ensure the link is focusable and accessible to screen readers.</li>
        <li><strong>Additional Context</strong>: Use aria-label or aria-labelledby to provide extra information when the link text alone doesn&#39;t fully explain the link’s purpose.</li>
        <li><strong>Visible Focus Styles</strong>: Implement distinct focus styles to aid keyboard navigation, crucial for users relying on keyboards.</li>
        <li><strong>Focus Management in SPAs</strong>: Properly manage focus in single-page applications to maintain usability when navigating between views.</li>
        <li><strong>Avoid New Windows</strong>: Open new windows only when necessary and inform users beforehand using the link text or aria-label.</li>
        <li><strong>Distinguishable Links</strong>: Ensure links stand out from regular text through sufficient color contrast and are identifiable without color reliance, such as underlines or borders.</li>
        <li><strong>High Contrast Mode Support</strong>: Accommodate users who depend on high contrast settings for better visibility.</li>
        <li><strong>Accessibility Testing</strong>: Regularly test your links with screen readers and other assistive tools to ensure they are fully accessible.</li>
    </ul>

    <figure>
        <picture id="examples">
          <source 
            sizes="(max-width: 600px) calc(100vw - 32px), 2000px"
            srcset="
                /blog_images/all_buttons_620w.webp 620w, 
                /blog_images/all_buttons_1232w.webp 1232w"
            type="image/webp"
            />
          <img loading="lazy" height="1413" width="2000" src="/blog_images/all_buttons.png" alt="Screenshot of Silktide accessibility Chrome Extension showing statistics for how many people have varying forms of colour-blindness."/>
        </picture>
        <figcaption>Figma screenshot - designs for buttons and anchors</figcaption>
    </figure>
    
    <h3>Button Examples</h3>
    <p>Have a go with the buttons and links with hover, keyboard focus or click</p>
    
    <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 2rem; margin-block: 3rem">
        <a href="#examples" class="u: in-size-fit button solid">Solid</a>
        <a
            class="u: in-size-fit c: button outline"
            href="#examples"
            aria-label="Example outline button"
        >
            Outline
        </a>
        <a href="#examples" class="button text-only">Text Only</a>
        <a href="#examples" class="button link"> <span class="visually-hidden">Email:</span>Link</a>
        <a href="#examples">&lt;a&gt;</a>
    </div>

</section>

<section>
    <h2>Colours</h2>
    <p>With a nearly black site background, slightly off-white text ensures compliance with WCAG AA and AAA standards. So I alternate between white and black font colour and background for ‘solid’ and ‘outline’ buttons. When a user sees the default button or hovers over it, the black/white change is apparent for any type of colour blindness or the partially sighted.</p>
    <h3>Focus</h3>
    <p>When thinking about the keyboard focus styles my aim was to have something so glaring that the user can immediately find it on the screen. The yellow of the focus-visible state is “JavaScript yellow”, although the inspiration for using it comes from gov.uk, whose design system is widely acknowledged as an excellent example of accessibility best practice. </p>
    <p>Most people affected by color-blindness have issues with green or red, so yellow is a decent choice. For those for which blue is great reduced (1 in 100,000), yellow will appear orange or red and should still contrast against the rest of the site.</p> 
    <details>
        <summary>Aside: Why ARE hyperlinks blue?</summary>  
            <p>Writing this made me wonder about the history of blue hyperlinks. <a href="https://blog.mozilla.org/en/internet-culture/why-are-hyperlinks-blue-revisited/#:~:text=The%20decision%20to%20make%20hyperlinks,blue%20as%20a%20hyperlink%20color">This blog post</a> from Mozilla explains how the choice was the result of tests on reader retention, and so not - as I was wondering - about color-blindness. Ironically, Mozilla switched the blue to red for their Firefox browser...</p>
    </details>
    <figure>    
        <picture>
            <source 
                sizes="(max-width: 600px) calc(100vw - 32px), 2000px"
                srcset="
                    /blog_images/color-blindness_chart_w_620.webp 620w, 
                    /blog_images/color-blindness_chart_w_1048.webp 1048w"
                type="image/webp"
            />
            <img loading="lazy" height="661" width="1048" src="/blog_images/color-blindness_chart.png" alt="Screenshot of Silktide Chrome Extension showing the proportion of population with red, green, blue and overall colour blindness"/>
        </picture>
        <figcaption> Silktide Chrome Extension - proportion of population with colour blindness</figcaption>
    </figure>
    
    <h3>Hyperlinks</h3>
    <p>Many users expect hyperlinks to have the traditional look of blue with an underline. Rather than the standard browser blue I settled on a slightly softer blue that still has a sufficient contrast on black.</p>
    <picture>
      <source 
        sizes="(max-width: 730px) 100vw, 730px"
        srcset="
            /blog_images/blue_contrast__squoosh_w_620.webp 620w,
            /blog_images/blue_contrast__squoosh_w_730.webp 730w"
        type="image/webp"
        />
      <img loading="lazy" height="816" width="730" src="/blog_images/blue_contrast.png" alt="Screenshot of default buttons and their hover state below "/>
    </picture>   
</section>

<section>
    <h2>Interaction States</h2>
    <h3 id="interaction">Hover</h3>
    <p>On hover, I either invert the colours or add a ‘box’. For visual users, the cursor should change from defaultto pointer , which is arguably enough, but I think a clear state change in the button helps too for users whose eyesight means they might miss a cursor change. Many UI libraries like Bootstrap and Material UI use the faintest change in color or shade, which - to be fair - is easy to miss for the best of eyes. Some designers would - with justification - argue that a box is unnecessary ‘clutter’ and that contrasting colours can be off-putting. I can understand that point of view, and it’s a reason why accessibility is difficult to get “right”. The audience is broad, and we can’t please everyone, but I’d say it’s better to err on the side of being as accessible as possible over aesthetics. </p>
    <picture >
      <source 
        sizes="(max-width: 600px) calc(100vw - 32px), 2000px"
        srcset="
            /blog_images/screenshot_hyperlinks_w_620.webp 620w, 
            /blog_images/screenshot_hyperlinks_w_1156.webp 1156w"
        type="image/webp"
        />
      <img loading="lazy" height="170" width="1156" src="/blog_images/screenshot_hyperlinks.png" alt="Screenshot of default buttons and their hover state below "/>
    </picture>   
    <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 2rem; margin-block: 3rem">
        <div>Examples:</div>
        <a href="#interaction" class="button link"> <span class="visually-hidden">Email:</span>Link</a>
        <a href="#interaction">&lt;a&gt;</a>
    </div>
    
    <h3 id="focus-img">Focus</h3>
    <p>For the focus state I actually use focus-visible instead of focus because I only want the styles to apply when the user focuses with a keyboard or similar device, and not with a mouse selection.</p>
    <picture>
      <source 
        sizes="(max-width: 1156px) 100vw, 1156px" 
        srcset="
            /blog_images/screenshot_focus_squoosh_w_620.webp 620w,
            /blog_images/screenshot_focus_squoosh_w_1156.webp 1156w"
        type="image/webp"
        />
      <img loading="lazy" height="102" width="1156" src="/blog_images/screenshot_focus.png" alt="Screenshot of buttons with focus-visible state"/>
    </picture>  
       <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 2rem; margin-block: 3rem">
       <div>Examples:</div>
        <a href="#focus-img" class="u: in-size-fit button solid">Solid</a>
        <a
            class="u: in-size-fit c: button outline"
            href="#focus-img"
            aria-label="Example outline button"
        >
            Outline
        </a>
        <a href="#focus-img" class="button text-only">Text Only</a>
        <a href="#focus-img" class="button link"> <span class="visually-hidden">Email:</span>Link</a>
        <a href="#focus-img">&lt;a&gt;</a>
    </div>
    <p>The key advantage of :focus-visible is that it prevents focus styles from appearing when interacting with a mouse or touch. Contrary to above, this crosses my own line as to aesthetics and cluttering the interface unnecessarily - maybe I’m wrong? But I prefer sticking with focus for form inputs, check boxes and toggles. These inputs aren’t to effect navigation; instead, the user clicks and something dynamic probably happen in the UI, so we want to clearly show that the element is ready for further interaction.</p>
    <p>Style-wise, as well as the glaring yellow, I settled on a dashed outline to make it doubly clear to the user that the keyboard (or other non-mouse device) was focused on the element.</p>
    
    <h3 id="focus-visible">Focus-visible and hover</h3>
     <picture>
          <source 
            sizes="(max-width: 1156px) 100vw, 1156px" 
            srcset="
                /blog_images/screenshot_focus_hover_squoosh_w_620.webp 620w,
                /blog_images/screenshot_focus_hover_squoosh_w_1156.webp 1156w"
            type="image/webp"
            />
      <img loading="lazy" height="207" width="1156" src="/blog_images/screenshot_focus_hover_squoosh.png" alt="Screenshot of buttons when user uses keyboard focus and mouse over"/>
    </picture>  
    <p>On the vast majority of sites or apps I’ve visited, if you use the keyboard to focus on an element, then hover over it with the mouse, nothing changes. Admittedly, this isn’t going to be an everyday occurrence because most users don’t user keyboard AND mouse, so I wonder if it causes much of an accessibility issue. But it bugs me a little that this state change is largely ignored, so I thought it doesn’t hurt to enable it.</p>
       <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 2rem; margin-block: 3rem">
       <div>Examples:</div>
        <a href="#focus-visible" class="u: in-size-fit button solid">Solid</a>
        <a
            class="u: in-size-fit c: button outline"
            href="#focus-visible"
            aria-label="Example outline button"
        >
            Outline
        </a>
        <a href="#focus-visible" class="button text-only">Text Only</a>
        <a href="#focus-visible" class="button link"> <span class="visually-hidden">Email:</span>Link</a>
        <a href="#focus-visible">&lt;a&gt;</a>
    </div>
    <h3>Active</h3>
    <p>Active is a bit of an odd choice of word given that it can just last a split second and is superseded by focus. Indeed, when clicking a link to navigate away, the active state may not even be noticed by the user. Rather unsurprisingly then, a lot of sites don’t bother with a discernible active state for navigation buttons and links, or don’t add an active state at all. (Check boxes and toggles would be an obvious exception, but for my current site I’m just looking at anchors and ‘navigation’ buttons.)</p>
    <p>If we have in mind slow connections and errors though, then having a transient active state at least gives users a sense that a button did ‘click’, even if nothing happens. For this I’ve used transform or scale before (making the button drop down or decrease in size - think neumorphism), but that can create a few headaches with layout shift in certain places or transforming fonts rendering a bit janky. Adding opacity is a simple way of doing it, which you can see if you click here.</p>
    <picture>
      <source 
        sizes="(max-width: 1179px) 100vw, 1179px" 
        srcset="
            /blog_images/screenshot_active_squoosh_w_620.webp 620w,
            /blog_images/screenshot_active_squoosh_w_1179.webp 1179w"
        type="image/webp"
        />
      <img loading="lazy" height="219" width="1179" src="/blog_images/screenshot_active_squoosh.png" alt="Screenshot of buttons when user clicks to activate a button"/>
    </picture> 
    
</section>   
   
<section>   
    <h2 id="specifics">Specifics</h2>
    <h3 id="anchor-links">Anchor links</h3>
 
    <picture>
      <source 
        sizes="(max-width: 1302px) 100vw, 1302px"
        srcset="
            /blog_images/screenshot_anchor_squoosh_w_620.webp 620w,
            /blog_images/screenshot_anchor_squoosh_w_1302.webp 1179w"
        type="image/webp"
        />
      <img loading="lazy" height="118" width="1302" src="/blog_images/screenshot_anchor_squoosh.png" alt="Screenshot of anchor elements with basic styling"/>
    </picture> 
       <p>Here’s an <a href="#specifics">anchor link</a> to hover over, or click, and give focus to.</p>
    <p>By default, it looks like a typical hyperlink. A lot of designers dislike the blue and the underline. The blue we can soften and change to any highly contrasting colour, but the underline should really remain;  WCAG requires controls to be distinguishable and, if you’re colour blind, hyperlinks only shown by colour change might be easily missed.</p>
    <p>On hover, some design systems just remove the line, which to be fair is quite an obvious change, but I prefer a border box around it. Saying that, I actually use outline here as a border would really hug the text, but adding a bit of space around it would require padding. If the padding is only on the hover, then the whole layout of surrounding text will shift on hover (pretty ugly and annoying for the user), and if the padding is always there, then even without hover, the hyperlink text has extra white space around it. Outline solves this as its offset property doesn’t affect surrounding elements.</p>
    <pre>&amp;:hover {
      outline: solid 2px var(--anchor);
      outline-offset: 2px;
    }</pre>
    <h3>Links without underlines</h3>
    <p>Whilst WCAG requires controls to be distinguishable and just using a colour doesn’t help the colour-blind, there are some cases where we can get away without the underlines. Obvious exceptions are header/navbars, footers, sidebars and email addresses. In these zones, users are expecting any text to likely behave as a ‘button’ regardless of whether it’s with or without an icon or has any obvious button styling. </p>
    <picture>
      <source 
        sizes="(max-width: 466px) 100vw, 466px"
        srcset="
            /blog_images/screenshot_anchor_hover_w_400.webp 400w,
            /blog_images/screenshot_anchor_hover_w_466.webp 466w"
        type="image/webp"
        />
      <img loading="lazy" height="281" width="466" src="/blog_images/screenshot_anchor_hover.png" alt="Screenshot of navigation menu where anchors are used without underline"/>
    </picture> 
    <p>Here, I decided to keep the blue that signifies a page navigation, but I don’t want an underline on the email address and certainly not under the icons. I umm-ed and ahh-ed about adding an underline on hover and focus, to show they are navigation links (which GitHub does), but settled on the outline instead.</p>
    <h3>Semantic HTML: &lt;a&gt; or &lt;button&gt;</h3>
    <p>Mistakes are easily made with HTML element selection, especially &lt;a&gt; , &lt;div&gt; and &lt;button&gt; but they make a lot of difference for users with assistive technologies like screen readers. </p>
    <p>In this article, I’d say that the purpose of all the ‘buttons’ so far is navigation as opposed to dynamic change in the UI, so anchor elements are more suitable than a &lt;button&gt;.</p>
    <p>The ‘button’ to open my CV has a few accessibility considerations. First off, I use a &lt;a&gt; element rather than a &lt;button&gt; as the click navigates to a new tab with a PDF document. Users expect links to take them to new content, which may include downloading files or opening them in the browser.</p>
    <div style="display: flex; flex-direction: column; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1rem; margin-block: 3rem">
    <pre>
    &lt;a
        class="u: in-size-fit | c: button outline"
        href="/cv_mounsey-logothetis.pdf"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Open my CV in a new window as a PDF"
    &gt;
        Open CV (pdf)
        &lt;i 
            class="c: fa fa-external-link-alt | e: open-new-window" 
            aria-hidden="true"
        &gt;
        &lt;/i&gt;
    &lt;/a&gt;
    </pre>
        <a
            class="u: in-size-fit | c: button outline"
            href="/cv_mounsey-logothetis.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open my CV in a new window as a PDF"
        >
            Open CV (pdf)
            <i class="c: fa fa-external-link-alt | e: open-new-window" 
            aria-hidden="true">
            </i>
        </a>
    </div>
    <p>There is a general rule of “avoid opening new windows” as it takes control away from the user. Opening documents like PDFs in a new window or tab is an often seen as a UX exception because:</p>
    <ol>
    <li><strong>Preserves User Context</strong>: It keeps the original page open with its navBar, so users can easily return to where they were without losing their place. I don’t want to embed the PDF in the page just to keep the navBar;</li>
    <li><strong>User Experience</strong>: For documents, especially PDFs, users might want to save or print the file, and having it in a separate window facilitates these actions.</li>
    </ol>
    <p>It's beyond the scope of this post, but the PDF itself has a few accessibility challenges. I'd need to consider improving:</p>
    <ol>
    <li><strong>Internal Accessibility</strong>: proper tagging (using tags like &lt;Heading&gt;, &lt;Paragraph&gt; in PDFs), ensuring that the text is selectable and readable by screen readers, and providing alternative text for any images or icons within the PDF.</li>
    <li><strong>Fallback Options</strong>: an alternative way to access the CV, such as offering it in HTML format or another accessible format, especially if the PDF might not be fully accessible.</li>
    </ol>
    <h3>Text and ARIA</h3>
    <p>It’s tempting and commonplace to choose short button text that doesn&#39;t take up much space. The a11y downside here is that the choice of words (or lack of words) means that only fully sighted users can easily grasp what a button is going to activate when it’s clicked.</p>
    <p>For assistive technologies like screen readers we can extend the button text with ARIA. But the description still needs to be unambiguous. On top of this, the WCAG warns against using commonly seen text like “click here” or “learn more”, and suggests we explain “why” the user should click. Naming buttons is as hard as naming variables and functions! And “learn more” or “read more” is used so much around the web that one would think it was clear enough. Still, it’s best to follow WCAG advice unless we’ve a well-founded reason to differentiate (and can leave a comment in the code to explain why). </p>
    <p>”Open my full CV in a new window as a PDF” would be a pretty unwieldy button. It’s a good ARIA label, but for the button itself I chose “Open CV (pdf)” and added an icon to show a new window would open. It’s tempting to remove the “(pdf)”, but it&#39;s generally good practice for buttons or links to inform all users about the file type that it will open, so they can make an informed choice about clicking it. </p>
    <p>I think ‘About’ should be enough text for a portfolio site. I suppose I could have gone with ‘About me’ or ‘My profile’ but, for reasons I can’t explain, I don’t like them. The aria-label is at least “Scroll down to the ‘About me’ section”. </p>
</section>

<section>
    <h2>Summary</h2>
    <p>There’s a lot of nuance even in the sign of anchor buttons, and it underscores the work needed for inclusive web development.</p> 
    <p>I’d be surprised if everything here is 100% a11y best practice because it's no simple matter. But at least by double-checking colour usage, interaction states and ARIA labeling we can try to improve the user experience for everyone.</p>
</section>      
        `
    }
];
