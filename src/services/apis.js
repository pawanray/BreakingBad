import HTTP from "../utiles/_HTTP";

class Apis{
    getAllCharacters(query){
        return HTTP.get(`/characters`,{
            params:{
            ...query
        }})
    }
    getCharacterById(id){
        return HTTP.get(`/characters/${id}`)
    }
   
    getAllEpisodes(query){
        return HTTP.get(`/episodes`,{
            params:{
            ...query
        }})
    }
}

export default new Apis();
