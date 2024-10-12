export default interface Photo {
    id: string
    width: number,
    height: number,
    color: string,
    description: string,
    placeholder?: string,
    location?: {
        city: string,
        country: string,
    },
    user: {
        name: string,
    },
    urls: {
        raw: string,
        full: string,
        regular: string,
    },
}