import axios from 'axios';
import { config } from './utils';

const urlParams = new URLSearchParams(window.location.search);
const boardgameId = urlParams.get('id');
console.log(boardgameId);

document.addEventListener('DOMContentLoaded', function() {
    getBoardgame(boardgameId);
})


function getBoardgame(boardgameId) {
    axios.get(`${config.apiBaseUrl}/boardgames/${boardgameId}`)
        .then((response) => {
            drawBoardgameData(response.data);
        })
    
        .catch((error) => {
            console.error('Error fetching boardgames:', error);
        }
    )
}


function drawBoardgameData(boardgame) {

    const container = document.getElementById('sectionBoardgameDetail');

    const cardHTML = `
        <div class="card mx-auto shadow" style="max-width: 600px;">
                <div class="card-body text-center">
                    <div class="game-image-container mb-4">
                        <img src="https://via.placeholder.com/400x600?text=Imagen+del+Juego" alt="Imagen del juego" />
                    </div>
                    <h2 class="card-title mb-3">${boardgame.name}</h2>
                    <p class="card-text text-muted mb-4">${boardgame.description}</p>
                    
                    <ul class="list-group list-group-flush text-start">
                        <li class="list-group-item"><strong>Mínimo jugadores:</strong> ${boardgame.minPlayers} </li>
                        <li class="list-group-item"><strong>Máximo jugadores:</strong> ${boardgame.maxPlayers}</li>
                        <li class="list-group-item"><strong>Categoria:</strong> ${boardgame.category} </li>
                    </ul>

                    <a href="./index.html" type="button" class="btn btn-dark mt-4">Atrás</a>
                    <a href="./edit-boardgame.html?id=${boardgame.id}" type="button" class="btn btn-dark mt-4">Editar</a>
                </div>
        `;
        container.innerHTML = cardHTML;
}



