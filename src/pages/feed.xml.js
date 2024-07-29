import rss from "@astrojs/rss"
import { getCollection } from "astro:content"


export async function GET(context) {
    const posts = await getCollection('posts')
    return rss({
        title: 'Hillz The Engine | Blog',
        description: 'My Personal Blog',
        site: 'https://hillonyechekwa.vercel.app',
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.summary,
            link: `/posts/${post.slug}/`,
            pubDate: post.data.pubDate
        })),
        customData: `<language>en-us</language>`
    })
}