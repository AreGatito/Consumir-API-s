import printCards from "./hooks/printCards.js";
import printComments from "./hooks/printComments.js";
import printPhotos from "./hooks/printPhotos.js";
import { getUsers } from "./helper/getUsers.js";
import {getComments} from "./helper/getComments.js";
import {getPhotos} from "./helper/getPhotos.js";

window.onload = () => {
    const cardlist = document.querySelector('#card-list');
    
    //getUsers();
    //getComments();
    getPhotos();

    

    //printCards(cardlist);
    //printComments(cardlist);
    printPhotos(cardlist);
}
