export const getUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    /*Metodo GET*/

    fetch(url)
    .then(res => res.json())
    .then(data=> {
        localStorage.setItem('userlist',JSON.stringify(data));
    })

    /*otros metodos de fetch API son : 
    PUT 
    DELTE
    POST
    */
}
