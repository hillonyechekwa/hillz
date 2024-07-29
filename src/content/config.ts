import {defineCollection, reference, z} from 'astro:content';


const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        tech: z.array(z.string()),
        image: z.string(),
        siteUrl: z.string(),
        repoUrl: z.string()
    })
})

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        pubDate: z.date(),
        relatedPosts: z.array(reference('posts'))
    })
})

export const collections = {
    projects: projectsCollection,
    posts: postsCollection
}