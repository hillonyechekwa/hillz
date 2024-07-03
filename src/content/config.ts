import {defineCollection, z} from 'astro:content';


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
    projects: projectsCollection
}