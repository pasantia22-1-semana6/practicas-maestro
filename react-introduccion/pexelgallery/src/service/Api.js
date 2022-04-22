import  Axios  from "axios"
export const getImages = async () => {
    try {
        const response = await Axios({
            method: "get",
            url: "https://api.pexels.com/v1/search?query=nature&per_page=1",
            headers: {
                authorization: "563492ad6f917000010000012112044965d347109c2d8d07f4042d65"
            }
        })
        return response.data.photos
        
    } catch (error) {
        return error
    }
}