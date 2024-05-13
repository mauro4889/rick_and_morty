import axios from "axios";
import { ApiResponse } from "../../interfaces/ApiResponse";

export const getCharacters = async () => {
    try {
        const response = await axios.get<ApiResponse>('https://rickandmortyapi.com/api/character')
        return response.data.results
    } catch (error) {
        console.log(error)
        return []
    }
}