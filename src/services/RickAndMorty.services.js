import { API_RM } from "../constants/Api.constants";

class  RickAndMortyServices {
    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        // interceptor
        return response.json();
    }

    async getAllCharactersById(id){
        const response = await fetch(API_RM.CHARACTERS(id));
        // interceptor
        return response.json();
    }
}

export default new RickAndMortyServices();