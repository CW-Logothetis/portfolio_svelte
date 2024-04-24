export let posts = [
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
        post_body: `

<p>This is a bit of a deep dive into the intricacies of designing accessible buttons, using my portfolio as a case study. It came about due to a task at work, where I’m stripping out Bootstrap from our MVP and having to re-design buttons to focus on accessibility for our older customer base (this’ll be a blog post for the future). By looking at colour schemes, interaction states and ARIA labelling, small choices in button design can increase accessibility and improve user experience for a diverse audience. </p>
<p>In designing and coding them, I had this checklist to hand:</p>
<h2 id="anchor-elements-">A11y Checklist for Anchor Elements</h2>
<p>Anchor elements are primarily used for navigation, guiding users to different pages or specific locations within the same page. Here’s how to optimize them for accessibility:</p>
<ul>
    <li><strong>Semantic HTML</strong>: Choose the correct element (&lt;a&gt; vs. &lt;button&gt;) to communicate the purpose to assistive technologies.</li>
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
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/ac317a23-c54a-4314-9bb2-9c4e0bede5ee/Untitled.png" alt="Untitled">
<h2>Colours</h2>
<p>With a nearly black site background, slightly off-white text ensures compliance with WCAG AA and AAA standards. So I alternate between white and black font colour and background for ‘solid’ and ‘outline’ buttons. When a user sees the default button or hovers over it, the black/white change is apparent for any type of colour blindness or the partially sighted.</p>
<h3>Focus</h3>
<p>When thinking about the keyboard focus styles my aim was to have something so glaring that the user can immediately find it on the screen. The yellow of the focus-visible state is “JavaScript yellow”, although the inspiration for using it comes from gov.uk, whose design system is widely acknowledged as an excellent example of accessibility best practice. </p>
<p>Most people affected by color-blindness have issues with green or red, so yellow is a decent choice. For those for which blue is great reduced (1 in 100,000), yellow will appear orange or red and should still contrast against the rest of the site. (Writing this made me wonder if this is why hyperlinks are blue, but this blog from Mozilla explains it’s more to do with retention than accessibility, which wasn’t really a think in the ‘80s. Ironically, Mozilla switched the blue to red for their Firefox browser... <a href="https://blog.mozilla.org/en/internet-culture/why-are-hyperlinks-blue-revisited/#:~:text=The%20decision%20to%20make%20hyperlinks,blue%20as%20a%20hyperlink%20color">https://blog.mozilla.org/en/internet-culture/why-are-hyperlinks-blue-revisited/#:~:text=The decision to make hyperlinks,blue as a hyperlink color</a>.</p>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/f7c3b671-da2b-4819-8919-b6240f637cb7/Untitled.png" alt="Untitled">
<h3>Hyperlinks</h3>
<p>Many users expect hyperlinks to have the traditional look of blue with an underline. Rather than the standard browser blue I settled on a slightly softer blue that still has a sufficient contrast on black.</p>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/1cb4e01b-edad-47ec-a4f6-9788bd034eee/Untitled.png" alt="Untitled">
<h2>Interaction States</h2>
<h3>Hover</h3>
<p>On hover, I either invert the colours or add a ‘box’. For visual users, the cursor should change from defaultto pointer , which is arguably enough, but I think a clear state change in the button helps too for users whose eyesight means they might miss a cursor change. Many UI libraries like Bootstrap and Material UI use the faintest change in color or shade, which - to be fair - is easy to miss for the best of eyes. Some designers would - with justification - argue that a box is unnecessary ‘clutter’ and that contrasting colours can be off-putting. I can understand that point of view and it’s a reason why accessibility is difficult to get “right”. The audience is broad and we can’t please everyone, but I’d say it’s better to err on the side of being as accessible as possible over aesthetics. </p>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/68a288fb-f378-4425-98e1-ce99cc131215/Untitled.png" alt="Untitled">
<h3>Focus</h3>
<p>For the focus state I actually use focus-visible instead of focus because I only want the styles to apply when the user focuses with a keyboard or similar device, and not with a mouse selection.</p>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/a24581f6-3b5f-47af-ae50-445ebf84082a/Untitled.png" alt="Untitled">
<p>The key advantage of :focus-visible is that it prevents focus styles from appearing when interacting with a mouse or touch. Contrary to above, this crosses my own line as to aesthetics and cluttering the interface unnecessarily - maybe I’m wrong? But I prefer sticking with focus for form inputs, check boxes and toggles. These inputs aren’t to effect navigation; instead, the user clicks and something dynamic probably happen in the UI, so we want to clearly show that the element is ready for further interaction.</p>
<p>Style-wise, as well as the glaring yellow, I settled on a dashed outline to make it doubly clear to the user that the keyboard (or other non-mouse device) was focused on the element.</p>
<h3>Focus-visible and hover</h3>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/329526e2-e5f8-46e1-b4d9-c94511a61534/Untitled.png" alt="Untitled">
<p>On the vast majority of sites or apps I’ve visited, if you use the keyboard to focus on an element, then hover over it with the mouse, nothing changes. Admittedly, this isn’t going to be an everyday occurrence because most users don’t user keyboard AND mouse, so I wonder if it causes much of an accessibility issue. But it bugs me a little that this state change is largely ignored, so I thought it doesn’t hurt to enable it.</p>
<h3>Active</h3>
<p>Active is a bit of a odd choice of word given that it can just last a split second and is superseded by focus. Indeed, when clicking a link to navigate away, the active state may not even be noticed by the user. Rather unsurprisingly then, a lot of sites don’t bother with a discernible active state for navigation buttons and links, or don’t add an active state at all. (Check boxes and toggles would be an obvious exception, but for my current site I’m just looking at anchors and ‘navigation’ buttons. )</p>
<p>If we have in mind slow connections and errors though, then having a transient active state at least gives users a sense that a button did ‘click’, even if nothing happens. For this I’ve used transform or scale before (making the button drop down or decrease in size - think neumorphism), but that can create a few headaches with layout shift in certain places or transforming fonts rendering a bit janky. Adding opacity is a simple way of doing it, which you can see if you click here.</p>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/c742d9f3-f4a4-46b8-a79f-ef2e75e39db3/Untitled.png" alt="Untitled">
<h2>Specifics</h2>
<h3>Anchor links</h3>
<p>Here’s an anchor link to hover over and give focus to.</p>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/f2d2a942-9936-4779-83b0-b74b0bfd7e6c/Untitled.png" alt="Untitled">
<p>By default, it looks like a typical hyperlink. A lot of designers dislike the blue and the underline. The blue we can soften and change to any highly contrasting colour, but the underline should really remain;  WCAG requires controls to be distinguishable and, if you’re colour blind, hyperlinks only shown by colour change might be easily missed.</p>
<p>On hover, some design systems just remove the line, which to be fair is quite an obvious change, but I prefer a border box around it. Saying that, I actually use outline here as a border would really hug the text, but adding a bit of space around it would require padding. If the padding is only on the hover, then the whole layout of surrounding text will shift on hover (pretty ugly and annoying for the user), and if the padding is always there, then even without hover, the hyperlink text has extra white space around it. Outline solves this as its offset property doesn’t affect surrounding elements.</p>
<pre>&amp;:hover {
    outline: solid 2px var(--anchor);
    outline-offset: 2px;
}</pre>
<h3>Links without underlines</h3>
<p>Whilst WCAG requires controls to be distinguishable and just using a colour doesn’t help the colour-blind, there are some cases where we can get away without the underlines. Obvious exceptions are header/navbars, footers, sidebars and email addresses. In these zones, users are expecting any text to likely behave as a ‘button’ regardless of whether it’s with or without an icon or has any obvious button styling. </p>
<img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/92b2509f-e24c-4b1f-90ea-28718fdfdbc1/075e502a-d798-4584-a118-244c419040f2/Untitled.png" alt="Untitled">
<p>Here, I decided to keep the blue that signifies a page navigation, but I don’t want an underline on the email address and certainly not under the icons. I umm-ed and ahh-ed about adding an underline on hover and focus, to show they are navigation links (which Github does), but settled on the outline instead.</p>
<h3>Semantic HTML: &lt;a&gt; or &lt;button&gt;</h3>
<p>Mistakes are easily made with HTML element selection, especially &lt;a&gt; , &lt;div&gt; and &lt;button&gt; but they make a lot of difference for users with assistive technologies like screen readers. </p>
<p>In this article, I’d say that the purpose of all the ‘buttons’ so far is navigation as opposed to dynamic change in the UI, so anchor elements are more suitable than a &lt;button&gt;.</p>
<p>The ‘button’ to open my CV has a few accessibility considerations. First off, I use an &lt;a&gt; element rather than a &lt;button&gt; as the click navigates to a new tab with a PDF document. Users expect links to take them to new content, which may include downloading files or opening them in the browser.</p>
<p>There is a general rule of “avoid opening new windows” as it takes control away from the user’s choice. Opening documents like PDFs in a new window or tab is an exception because:</p>
<ol>
<li><strong>Preserves User Context</strong>: It keeps the original page open with its navBar, so users can easily return to where they were without losing their place. I don’t want to embed the PDF in the page just to keep the navBar;</li>
<li><strong>User Experience</strong>: For documents, especially PDFs, users might want to save or print the file, and having it in a separate window facilitates these actions.</li>
</ol>
<p>For further accessibility, I need to consider improving the PDF itself:</p>
<ol>
<li><strong>PDF Accessibility</strong>: This includes proper tagging (using tags like &lt;Heading&gt;, &lt;Paragraph&gt; in PDFs), ensuring that the text is selectable and readable by screen readers, and providing alternative text for any images or icons within the PDF.</li>
<li><strong>Fallback Options</strong>: an alternative way to access the CV, such as offering it in HTML format or another accessible format, especially if the PDF might not be fully accessible.</li>
</ol>
<h3>Text and ARIA</h3>
<p>It’s tempting and commonplace to choose short button text that doesn&#39;t take up much space. The a11y downside here is that the choice of words (or lack of words) means that only fully sighted users can easily grasp what a button is going to activate when it’s clicked.</p>
<p>For assistive technologies like screen readers we can extend the button text with ARIA. But the description still needs to be unambiguous. On top of this, the WCAG warns against using commonly seen text like “click here” or “learn more”, and suggests we explain “why” the user should click. Naming buttons is as hard as naming variables and functions! And “learn more” or “read more” is used so much around the web that one would think it was clear enough. Still, it’s best to follow WCAG advice unless we’ve a really good reason to differentiate (and can leave a comment in the code to explain why). </p>
<p>”Open my full CV in a new window as a PDF” would be a pretty unwieldy button. It’s a good ARIA label, but for the button itself I chose “Open CV (pdf)” and added an icon to show a new window would open. It’s tempting to remove the “(pdf)”, but it&#39;s generally good practice for buttons or links to inform all users about the file type that it will open, so they can make an informed choice about clicking it. </p>
<p>I think ‘About’ should be enough text for a portfolio site. I suppose I could have gone with ‘About me’ or ‘My profile’ but, for reasons I can’t explain, I don’t like them. The aria-label is at least “Scroll down to the ‘About me’ section”. </p>
<h2>Summary</h2>
<p>There’s a lot of nuance even in the design of anchor buttons, and it underscores the work needed for inclusive web development.</p> 
<p>I’d be surprised if everything here is 100% a11y best practice because it's no simple matter. But at least by double-checking colour usage, interaction states and ARIA labeling we can try to improve the user experience for everyone.</p>
        `,
        featured_image_url: '$lib/img/blog/featured_images/risks_of_bidding.jpg?enhanced',
        status: 'PUBLISHED',
        archived: false
    }
];
