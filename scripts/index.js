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
const skillsContainer = document.getElementById('skills')
const message = document.getElementById('result')
const btnReset = document.getElementById('reset')
const endSection = document.getElementById('end')


let playerSkillSequence = []
let playerSkills
let enemySkillSequence = []
let enemySkills
let playerWins = 0
let enemyWins = 0
let kopetoms = []
let buttons = []
let skillSet
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
    btnReset.addEventListener('click', resetGame)

    selectSkill.style.display = 'none'
    endSection.style.display = 'none'
}

function selectPetPlayer(){

    let petImg = document.createElement('img')
    
    if(inputHipodoge.checked){
        playerPet.innerHTML = hipodoge.name
        petImg.src = hipodoge.img
        playerSkills = hipodoge.skill
    }else if(inputCapipepo.checked){
        playerPet.innerHTML = capipepo.name
        petImg.src = capipepo.img
        playerSkills = capipepo.skill
    }else if(inputRatigueya.checked){
        playerPet.innerHTML = ratigueya.name
        petImg.src = ratigueya.img
        playerSkills = ratigueya.skill
    }else if(inputLangostelvis.checked){
        playerPet.innerHTML = langostelvis.name
        petImg.src = langostelvis.img
        playerSkills = langostelvis.skill
    }else if(inputTucapalma.checked){
        playerPet.innerHTML = tucapalma.name
        petImg.src = tucapalma.img
        playerSkills = tucapalma.skill
    }else if(inputPydos.checked){
        playerPet.innerHTML = pydos.name
        petImg.src = pydos.img
        playerSkills = pydos.skill
    }else{
        alert('SELECT A PET PLEASE.')
        resetGame()
    }
    playerCard.insertBefore(petImg, playerPet)
    selectPetEnemy()
    showSkills()
    selectPet.style.display = 'none'
    selectSkill.style.display = 'flex'
}

function showSkills(){
    playerSkills.forEach((skill)=>{
        skillSet = `
            <button type="button" id=${skill.id} class="skill">${skill.name}</button>
        `
        skillsContainer.innerHTML += skillSet
    })
    buttons = document.querySelectorAll('.skill')
    skillSequence()
}

function skillSequence(){
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if(e.target.textContent === '💥'){
                playerSkillSequence.push('FIRE')
                btn.disabled = true
            }else if(e.target.textContent === '🌋'){
                playerSkillSequence.push('EARTH')
                btn.disabled = true
            }else if(e.target.textContent === '💦'){
                playerSkillSequence.push('WATER')
                btn.disabled = true
            }
            if(playerSkillSequence.length == 5){
                battle()
            }
        })
    })
}

function selectPetEnemy(){
    let petImg = document.createElement('img')
    let randomPet = random(0,kopetoms.length -1)
    console.log(randomPet)
    enemyPet.innerHTML = kopetoms[randomPet].name
    petImg.src = kopetoms[randomPet].img
    enemySkills = kopetoms[randomPet].skill
    enemySkills.sort(()=>Math.random()-0.5).forEach((s)=>{
        enemySkillSequence.push(s.id.toUpperCase())
    })
    enemyCard.insertBefore(petImg, enemyPet)
}



function battle(){

    for (let i = 0; i < 5; i++) {
        if(playerSkillSequence[i] === enemySkillSequence[i]){
            createMessage(playerSkillSequence[i], enemySkillSequence[i])
            // createMessageResult('DRAW')
        }else if(playerSkillSequence[i] === "WATER" && enemySkillSequence[i] === "FIRE" || playerSkillSequence[i] === "FIRE" && enemySkillSequence[i] === "EARTH" || playerSkillSequence[i] === "EARTH" && enemySkillSequence[i] === "WATER"){
            createMessage(playerSkillSequence[i], enemySkillSequence[i])
            // createMessageResult('WIN')
            playerWins++
        }else{
            createMessage(playerSkillSequence[i], enemySkillSequence[i])
            // createMessageResult('LOSE')
            enemyWins++
        }
        
    }

    if(playerWins > enemyWins){
        createMessageResult('NICE, YOU WIN!!')
    }else if(playerWins === enemyWins){
        createMessageResult("IT'S A DRAW")
    }else{
        createMessageResult('SORRY, YOU LOSE')
    }
}



function createMessage(player, enemy){
    let playerSkillUsed = document.createElement('p')
    let enemySkillUsed = document.createElement('p')
    playerSkillUsed.innerHTML = player
    enemySkillUsed.innerHTML = enemy
    playerLog.appendChild(playerSkillUsed)
    enemyLog.appendChild(enemySkillUsed)
}

function createMessageResult(result){
    spanEnemyLife.innerHTML = enemyWins
    spanPlayerLife.innerHTML = playerWins
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