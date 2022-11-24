export const getPhotos = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos'

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const anotherData = data.slice(0,20);
        localStorage.setItem('photoslist', JSON.stringify(anotherData));
    })
}
