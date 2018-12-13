

export function moviesList(){
    return {
        type: 'MOVIES_LIST',
        payload: [
            { id: 1, name:"Batman Begins"},
            { id: 1, name:"Dark Knight"},
            { id: 1, name:"Dark Knight Rises"}
        ]
    }
}