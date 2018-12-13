

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

export function directorsList(){
    return {
        type: 'DIRECTORS_LIST',
        payload: [
            { id: 1, name:"Martin Scorsese"},
            { id: 1, name:"Steven Spielberg"},
            { id: 1, name:"Christopher Nolan"}
        ]
    }
}