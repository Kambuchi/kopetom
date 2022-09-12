const petCards = document.getElementById('pet-cards')
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
let kopetoms = []
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos

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

function startGame(){

    kopetoms.forEach((kopetom) => {
        kopetomOptions = `
        <input type="radio" name="pet" id=${kopetom.name.toLowerCase()} />
        <label class="pet-card" for=${kopetom.name.toLowerCase()}>
            ${kopetom.name}
            <img src=${kopetom.img} alt=${kopetom.name.toLowerCase()}>
        </label>
        `
        petCards.innerHTML += kopetomOptions

        
    })
    inputHipodoge = document.getElementById('hipodoge')
    inputCapipepo = document.getElementById('capipepo')
    inputRatigueya = document.getElementById('ratigueya')
    inputLangostelvis = document.getElementById('langostelvis')
    inputTucapalma = document.getElementById('tucapalma')
    inputPydos = document.getElementById('pydos')

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
        playerPet.innerHTML = hipodoge.name
        petImg.src = hipodoge.img
    }else if(inputCapipepo.checked){
        playerPet.innerHTML = capipepo.name
        petImg.src = capipepo.img
    }else if(inputRatigueya.checked){
        playerPet.innerHTML = ratigueya.name
        petImg.src = ratigueya.img
    }else if(inputLangostelvis.checked){
        playerPet.innerHTML = langostelvis.name
        petImg.src = langostelvis.img
    }else if(inputTucapalma.checked){
        playerPet.innerHTML = tucapalma.name
        petImg.src = tucapalma.img
    }else if(inputPydos.checked){
        playerPet.innerHTML = pydos.name
        petImg.src = pydos.img
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
        enemyPet.innerHTML = hipodoge.name
        petImg.src = hipodoge.img
    }else if(randomPet == 2){
        enemyPet.innerHTML = capipepo.name
        petImg.src = capipepo.img
    }else if(randomPet == 3){
        enemyPet.innerHTML = ratigueya.name
        petImg.src = ratigueya.img
    }else if(randomPet == 4){
        enemyPet.innerHTML = langostelvis.name
        petImg.src = langostelvis.img
    }else if(randomPet == 5){
        enemyPet.innerHTML = tucapalma.name
        petImg.src = tucapalma.img
    }else if(randomPet == 6){
        enemyPet.innerHTML = 'Pydos'
        petImg.src = pydos.img
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