// https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#sitemapformat
// Additional notes about XML sitemaps
//   Google ignores <priority> and <changefreq> values.
//   Google uses the <lastmod> value if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate.
// TODO any future blog will need dynamic blog posts. For now, just entered the one post manually.

// sitemap GET() is from https://kit.svelte.dev/docs/seo#manual-setup-sitemaps
export async function GET() {
    return new Response(
        `		
        <?xml version="1.0" encoding="UTF-8" ?>		
        <urlset			
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"			
            xmlns:xhtml="https://www.w3.org/1999/xhtml"			
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"			
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"			
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"			
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"		
        >			
            <url>
                <loc>https://cwlogo.vercel.app/</loc>
            </url>
            <url>
                <loc>https://cwlogo.vercel.app/projects/cognitiv-web-app</loc>
            </url>
            <url>
                <loc>https://cwlogo.vercel.app/projects/method-minder</loc>
            </url>
            <url>
                <loc>https://cwlogo.vercel.app/blog/a11y-navigation-buttons</loc>
            </url>
        </urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}