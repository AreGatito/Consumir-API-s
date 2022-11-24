const printComments = (el) => {
    const commentlist = JSON.parse(localStorage.getItem('commentlist'));

    const body = commentlist.map(comment => {
        return (
            `
                <li>
                    <h5>${comment.name}</h5>
                    <p><b>correo:</b> ${comment.email}</p>
                    <spam><b>comentario:</b> ${comment.body}</spam>
                </li>
            `
        )
    }).join('')
    el.innerHTML = body;
}

export default printComments