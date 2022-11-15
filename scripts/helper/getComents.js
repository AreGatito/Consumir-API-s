export const getComents = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    
    fetch(url)
    .then(res => res.json())
    .then(data=> {
        localStorage.setItem('commentslist',JSON.stringify(data));
    })
}