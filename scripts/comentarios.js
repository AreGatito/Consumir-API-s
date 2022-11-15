 import {getComents} from "./helper/getComents"

window.onload = () => {
    const commentlist = document.querySelector('#comment-list');
    getComents();

    const commentslist = JSON.parse(localStorage.getItem('commentslist'));

    const printCards2 = () => {
        const body2 = commentslist.map(comments => {
            return (
                ` 
                <li>
                    <h5>${comments.name}<h5>
                    <p><b>correo:</b> ${comments.email}</p>
                    <spam><b>comentario</b> ${comments.body}</spam>
                </li>
                `
            )
        }).join()
        commentlist.innerHTML = body2;
    }
    printCards2();
}