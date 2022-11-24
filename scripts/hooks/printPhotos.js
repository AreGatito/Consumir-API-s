const printPhotos = (el) => {
    const photoslist = JSON.parse(localStorage.getItem('photoslist'));

        const body = photoslist.map(photos => {
            return ( 
                `
                 <li>
                    <img src="${photos.url}">
                    <h3>${photos.title}<h3>
                 </li>
                `
            )
        }).join('')
        el.innerHTML = body;
}

export default printPhotos