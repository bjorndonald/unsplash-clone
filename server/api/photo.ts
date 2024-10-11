import Photo from "~/types/photo"
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (imgPath: string) => {
    try {
        const file = await fs.readFile(`public/${imgPath}`)
        const { base64 } = await getPlaiceholder(file)
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

export default defineEventHandler(async (event) => {
    const {apiUrl, accessKey} = useRuntimeConfig()
    
    try {
        const data = await $fetch<Photo[]>(`${apiUrl}/search/photos/`, {
            method: "get",
            params: {
                client_id: accessKey,
                query: "africa,",
                page: 1
            }
        })
       

        return data
    } catch (error) {
        console.log(error)
       throw error
    }
    
})