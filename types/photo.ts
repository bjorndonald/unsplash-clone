export default interface Photo {
    width: 4000,
    height: 3000,
    color: string,
    description: string,
    user: {
        name: string,
    },
    urls: {
        raw: string,
        full: string,
        regular: string,
    },
}