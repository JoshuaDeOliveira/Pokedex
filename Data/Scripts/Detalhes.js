let HTML;
let InserirHTML = document.querySelector('.Main-Pokedex')

document.querySelector('.Button-Overview').addEventListener('click', () => {
  InserirHTML.innerHTML = ''
  HTML = `<div class="Pokedex-Infos">
          <div class="Pokedex-Descrição">
            <h2 class="Especie-Pokemon">MOUSE POKEMON</h2>
            <p class="Descrição">When several of these POKéMON gather, their electricity could build and cause lightning storms.</p>
          </div>
          <div class="Info-Corpo">
            <ul class="Lista-Corporal">
              <li class="Detalhes-Corporais">Height</li>
              <li class="Tamanho Detalhes-Corporais">0,4m</li>
            </ul>
            <ul class="Lista-Corporal">
              <li class="Detalhes-Corporais">Weight</li>
              <li class="Peso Detalhes-Corporais">6kg</li>
            </ul>
          </div>
          <div class="Type-Pokemon">
            <div class="Div-Type">
              <img class="Type-Icon" src="./CSS/Imagens/Types/electric.svg" alt="">
            </div>
          </div>
          <div class="Info-Dex">
            <p class="Infos">Id: <span class="ID">#025</span></p>
            <p class="Infos">Gender:
              <span class="Masculino"><i class="Gener">&#9794;</i> 50%</span>
              <span class="Feminino"><i class="Gener">&female;</i> 50%</span>
            </p>
            <p class="Infos">Abilities: static, lightning-rod</p>
            <p class="Infos">Catch Rate: 190 (74.51% chance)</p>
            <p class="Infos">Base Friendship: 50 (normal)</p>
            <p class="Infos">Base Exp: 112</p>
            <p class="Infos">Growth Rate: medium</p>
            <p class="Infos">Egg Groups: Ground, Fairy</p>
          </div>
        </div>`
  InserirHTML.innerHTML = HTML
})

document.querySelector('.Button-Stats').addEventListener('click', () => {
  InserirHTML.innerHTML = ''
  HTML = `
  <div class="Status-Infos">
          <div class="Status">
            <div class="Stat">
              <div class="Numb">
                <span>Health:</span>
                <span>35</span>
              </div>
              <meter value="35" min="0" max="255" low="75" high="120" optimum="255">35%</meter>
            </div>
            <div class="Stat">
              <div class="Numb">
                <span>Attack:</span>
                <span>55</span>
              </div>
              <meter value="55" min="0" max="255" low="75" high="120" optimum="255">55%</meter>
            </div>
            <div class="Stat">
              <div class="Numb">
                <span>Defense:</span>
                <span>40</span>
              </div>
              <meter value="40" min="0" max="255" low="75" high="120" optimum="255">40%</meter>
            </div>
            <div class="Stat">
              <div class="Numb">
                <span>Sp.Atk:</span>
                <span>50</span>
              </div>
              <meter value="50" min="0" max="255" low="75" high="120" optimum="255">50%</meter>
            </div>
            <div class="Stat">
              <div class="Numb">
                <span>Sp.Def:</span>
                <span>50</span>
              </div>
              <meter value="50" min="0" max="255" low="75" high="120" optimum="255">50%</meter>
            </div>
            <div class="Stat">
              <div class="Numb">
                <span>Speed:</span>
                <span>90</span>
              </div>
              <meter value="90" min="0" max="255" low="75" high="120" optimum="255">90%</meter>
            </div>
            <div class="Stat">
              <div class="Numb">
                <span>Total::</span>
                <span>320</span>
              </div>
              <meter value="320" min="0" max="1550" low="175" high="500" optimum="1550">70%</meter>
            </div>
          </div>
          <div class="Types">
            <h2 class="Titulos-Type">Fraquezas</h2>
            <div class="Tipos-Detalhes">
              <div class="Type">
                <img src="./CSS/Imagens/Types/electric.svg" alt="">
              </div>
            </div>
            <h2 class="Titulos-Type">Vantagens</h2>
            <div class="Tipos-Detalhes">
              <div class="Type">
                <img src="./CSS/Imagens/Types/electric.svg" alt="">
              </div>
            </div>
          </div>
        </div>`
  InserirHTML.innerHTML = HTML
})

document.querySelector('.Button-Evolution').addEventListener('click', () => {
  InserirHTML.innerHTML = ''
  HTML = `<div class="Evolution-Info">
          <h1 class="Titulos">Arvore de Evolução Principal</h1>
          <div class="Evolution-Tree">
            <div class="Aba-Evolucion">
              <h1 class="Nomes-Pokemons">Pichu</h1>
              <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/172.png" alt="">
            </div>
            <div class="Aba-Evolucion">
              <h1 class="Nomes-Pokemons">Pikachu</h1>
              <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/25.png" alt="">
            </div>
            <div class="Aba-Evolucion">
              <h1 class="Nomes-Pokemons">Raichu</h1>
              <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/26.png" alt="">
            </div>
          </div>
          <h1 class="Titulos">Formas Alternativas</h1>
          <div class="Evolution-Alternative">
            <div class="Alternative">
              <h1 class="Nomes-Pokemons">pikachu-rock-star</h1>
              <img class="Sprite-Pokemon" src="./CSS/Imagens/Sprites-Testes/10080.png" alt="">
            </div>
          </div>
        </div>`
  InserirHTML.innerHTML = HTML
})