import { getUsers } from "./helper/getUsers.js"

window.onload = () => {
    const cardlist = document.querySelector('#card-list');
    getUsers();

    const userlist = JSON.parse(localStorage.getItem('userlist'));

    const printCards = () => {
        const body = userlist.map(user => {
            return ( 
                `
                 <li>
                    <h5>${user.name}<h5>
                    <p><b>correo:</b> ${user.email}</p>
                    <spam><b>telefono</b> ${user.phone}</spam>
                 </li>
                `
            )
        }).join('')
        cardlist.innerHTML = body;
    }

    printCards();
}
