import Photo from "~/types/photo"
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (src: string) => {
    try {
        const buffer = await fetch(src).then(async (res) =>
            Buffer.from(await res.arrayBuffer())
        );
        const { base64 } = await getPlaiceholder(buffer)
        return base64
    } catch (error: unknown) {
        //error handling
        if (error instanceof Error) return error.message
        else if (error && typeof error === "object" && "message" in error)
            return error.message as string
        else if (typeof error === "string") return error;
        else return "Unexpected error!"
    }
}

interface Response {
    results: Photo[]
    total: number
    total_pages: number
}

export default defineEventHandler(async (event) => {
    const {apiUrl, accessKey} = useRuntimeConfig()
    const { search } = getQuery(event);
    try {
        var data = await $fetch<Response>(`${apiUrl}/search/photos`, {
            method: "get",
            params: {
                client_id: accessKey,
                query: search,
                page: 1,
                per_page: 14
            }
        })
        const photos = data.results.map(async (x) => {
            const placeholder = await getBase64(x.urls.regular)
            return ({
                ...x,
                placeholder
            })
        })
        
        const results = await Promise.all(photos)
        const response = {...data, results}

       
        return response
    } catch (error) {
       throw error
    }
})