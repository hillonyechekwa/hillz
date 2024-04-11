import {defineCollection, z} from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        publishDate: z.date(),
        description: z.string(),
        tags: z.array(z.string()),
        title: z.string(),
    })
});


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

export const collections = {
    posts: postsCollection,
    projects: projectsCollection
}