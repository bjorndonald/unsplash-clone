import Photo from "~/types/photo"

export default defineEventHandler(async (event) => {
    const { apiUrl, accessKey } = useRuntimeConfig()

    const id = getRouterParam(event, 'id')

    try {
        var data = await $fetch<Photo>(`${apiUrl}/photos/${id}`, {
            method: "get",
            params: {
                client_id: accessKey,
                query: "africa",
                page: 1
            }
        })

        return data
    } catch (error) {
        throw error
    }
})