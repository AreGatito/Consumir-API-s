
const printCards = (el) => {
    const userlist = JSON.parse(localStorage.getItem('userlist'));

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
        el.innerHTML = body;
}

export default printCards
