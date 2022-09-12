let kopetoms = []

class Kopetom {
    constructor(name, img, life){
        this.name = name
        this.img = img
        this.life = life
        this.skill = []
    }
}

let hipodoge = new Kopetom('Hipodoge', './assets/img/hipodoge.png', 3)
let capipepo = new Kopetom('Capipepo', './assets/img/capipepo.png', 3)
let ratigueya = new Kopetom('Ratigueya', './assets/img/ratigueya.png', 3)
let tucapalma = new Kopetom('Tucapalma', './assets/img/tucapalma.png', 3)
let langostelvis = new Kopetom('Langostelvis', './assets/img/langostelvis.png', 3)
let pydos = new Kopetom('Pydos', './assets/img/pydos.png', 3)

hipodoge.skill.push(
    {name: '💦', id: 'water'},
    {name: '💦', id: 'water'},
    {name: '💦', id: 'water'},
    {name: '💥', id: 'fire'},
    {name: '🌋', id: 'earth'}
)
capipepo.skill.push(
    {name: '🌋', id: 'earth'},
    {name: '🌋', id: 'earth'},
    {name: '🌋', id: 'earth'},
    {name: '💦', id: 'water'},
    {name: '💥', id: 'fire'}
)
ratigueya.skill.push(
    {name: '💥', id: 'fire'},
    {name: '💥', id: 'fire'},
    {name: '💥', id: 'fire'},
    {name: '💦', id: 'water'},
    {name: '🌋', id: 'earth'}
)
tucapalma.skill.push(
    {name: '💦', id: 'water'},
    {name: '💦', id: 'water'},
    {name: '💥', id: 'fire'},
    {name: '💥', id: 'fire'},
    {name: '🌋', id: 'earth'}
)
langostelvis.skill.push(
    {name: '🌋', id: 'earth'},
    {name: '🌋', id: 'earth'},
    {name: '💦', id: 'water'},
    {name: '💦', id: 'water'},
    {name: '💥', id: 'fire'}
)
pydos.skill.push(
    {name: '💥', id: 'fire'},
    {name: '💥', id: 'fire'},
    {name: '🌋', id: 'earth'},
    {name: '🌋', id: 'earth'},
    {name: '💦', id: 'water'}
)

kopetoms.push(hipodoge, capipepo, ratigueya, tucapalma, langostelvis, pydos)

const petCards = document.getElementById('pet-cards')

kopetoms.forEach((kopetom) => {
    kopetomOptions = `
    <input type="radio" name="pet" id=${kopetom.name.toLowerCase()} >
    <label class="pet-card" for=${kopetom.name.toLowerCase()} >
        ${kopetom.name}
        <img src=${kopetom.img} alt=${kopetom.name.toLowerCase()}>
    </label>
    `
    petCards.innerHTML += kopetomOptions
})

const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputLangostelvis = document.getElementById('langostelvis')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')


const selectPet = document.getElementById('select-pet')
const selectSkill = document.getElementById('select-skill')
const playerCard = document.getElementById('player-card')
const playerPet = document.getElementById('player-pet')
const spanPlayerLife = document.getElementById('player-lifes')
const playerLog = document.getElementById('player-log')
const enemyCard = document.getElementById('npc-card')
const enemyPet = document.getElementById('npc-pet')
const spanEnemyLife = document.getElementById('npc-lifes')
const enemyLog = document.getElementById('npc-log')
const btnPetPlayer = document.getElementById('select')
const btnFire = document.getElementById('fire')
const btnWater = document.getElementById('water')
const btnEarth = document.getElementById('earth')
const message = document.getElementById('result')
const btnReset = document.getElementById('reset')
const endSection = document.getElementById('end')


let playerSkill
let enemySkill
let playerLifes = 3
let enemyLifes = 3
let battleResult


function startGame(){

    btnPetPlayer.addEventListener('click', selectPetPlayer)
    btnFire.addEventListener('click', skillFire)
    btnWater.addEventListener('click', skillWater)
    btnEarth.addEventListener('click', skillEarth)
    btnReset.addEventListener('click', resetGame)

    selectSkill.style.display = 'none'
    endSection.style.display = 'none'
}

function selectPetPlayer(){

    let petImg = document.createElement('img')
    
    if(inputHipodoge.checked){
        playerPet.innerHTML = 'Hipodoge'
        petImg.src = './assets/img/hipodoge.png'
    }else if(inputCapipepo.checked){
        playerPet.innerHTML = 'Capipepo'
        petImg.src = './assets/img/capipepo.png'
    }else if(inputRatigueya.checked){
        playerPet.innerHTML = 'Ratigueya'
        petImg.src = './assets/img/ratigueya.png'
    }else if(inputLangostelvis.checked){
        playerPet.innerHTML = 'Langostelvis'
        petImg.src = './assets/img/langostelvis.png'
    }else if(inputTucapalma.checked){
        playerPet.innerHTML = 'Tucapalma'
        petImg.src = './assets/img/tucapalma.png'
    }else if(inputPydos.checked){
        playerPet.innerHTML = 'Pydos'
        petImg.src = './assets/img/pydos.png'
    }else{
        alert('SELECT A PET PLEASE.')
        resetGame()
    }
    playerCard.insertBefore(petImg, playerPet)
    selectPetEnemy()
    selectPet.style.display = 'none'
    selectSkill.style.display = 'flex'
}

function selectPetEnemy(){
    let petImg = document.createElement('img')
    let randomPet = random(1,6)
    if(randomPet == 1){
        enemyPet.innerHTML = 'Hipodoge'
        petImg.src = './assets/img/hipodoge.png'
    }else if(randomPet == 2){
        enemyPet.innerHTML = 'Capipepo'
        petImg.src = './assets/img/capipepo.png'
    }else if(randomPet == 3){
        enemyPet.innerHTML = 'Ratigueya'
        petImg.src = './assets/img/ratigueya.png'
    }else if(randomPet == 4){
        enemyPet.innerHTML = 'Langostelvis'
        petImg.src = './assets/img/langostelvis.png'
    }else if(randomPet == 5){
        enemyPet.innerHTML = 'Tucapalma'
        petImg.src = './assets/img/tucapalma.png'
    }else if(randomPet == 6){
        enemyPet.innerHTML = 'Pydos'
        petImg.src = './assets/img/pydos.png'
    }
    enemyCard.insertBefore(petImg, enemyPet)
}

function skillFire(){
    playerSkill = 'FIRE'
    selectEnemySkill()
}

function skillWater(){
    playerSkill = 'WATER'
    selectEnemySkill()
}

function skillEarth(){
    playerSkill = 'EARTH'
    selectEnemySkill()
}

function selectEnemySkill(){
    let randomSkill = random(1,3)
    if(randomSkill == 1){
        enemySkill = 'FIRE'
    }else if(randomSkill == 2){
        enemySkill = 'WATER'
    }else if(randomSkill == 3){
        enemySkill = 'EARTH'
    }

    createMessage()
}
function battle(){
    if (playerSkill == enemySkill) {
        battleResult = "DRAW"
    } else if (playerSkill == "FIRE" && enemySkill == "EARTH") {
        battleResult = "WIN"
        enemyLifes--
        spanEnemyLife.innerHTML = enemyLifes
    } else if (playerSkill == "WATER" && enemySkill == "FIRE") {
        battleResult = "WIN"
        enemyLifes--
        spanEnemyLife.innerHTML = playerLifes
    } else if (playerSkill == "EARTH" && enemySkill == "WATER") {
        battleResult = "WIN"
        enemyLifes--
        spanEnemyLife.innerHTML = enemyLifes
    } else {
        battleResult = "LOSE"
        playerLifes--
        spanPlayerLife.innerHTML = playerLifes
    }
}

function checkLifes(){
    if(enemyLifes == 0){
        createMessageResult('Enemy pet died. YOU WIN!!')
    }else if(playerLifes == 0){
        createMessageResult('Your pet died. YOU LOSE :(')
    }
}

function createMessage(){
    let playerSkillUsed = document.createElement('p')
    let enemySkillUsed = document.createElement('p')
    battle()
    message.innerHTML = battleResult
    playerSkillUsed.innerHTML = playerSkill
    enemySkillUsed.innerHTML = enemySkill
    playerLog.appendChild(playerSkillUsed)
    enemyLog.appendChild(enemySkillUsed)
    checkLifes()
}

function createMessageResult(result){
    btnFire.disabled = true
    btnWater.disabled = true
    btnEarth.disabled = true
    message.innerHTML = result
    endSection.style.display = 'block'
}

function resetGame(){
    location.reload()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

window.addEventListener('load', startGame)
