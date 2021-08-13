'use strict'
const image = new Image()
image.src = 'image.webp'
const donate = new Image()
donate.src = 'donate.webp'

const progress = document.getElementsByClassName('progress-bar')[0]
const percentageText = document.getElementById('percentage')
const _window = document.getElementById('window')
const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('no')
const text = document.getElementById('text')
const cRoubles = document.getElementById('cRoubles')
const composition = document.getElementById('composition')
const playPause = document.getElementById('play-pause')
const playsNow = document.getElementById('plays-now')

let percentage = 0
let p = '0%'
const tRoubles = Math.floor(Math.random() * 50000000) + 50000000
document.getElementById('tRoubles').innerText = tRoubles
const gachiPercentage = Math.floor(Math.random() * 84) + 15

const audioFiles = [
    new Audio('https://cdnfiles.net/down.php?id=dHM4dm1sSDlIUDRuMTRmS09VWTFEUT&name=cumpital-kapital-gachi-mix_(muzo.mobi).mp3'),
    new Audio('https://cdnfiles.net/down.php?id=bDd6bDRYS2JSMVRIcGM0dHkyV2tGZz&name=oleg-gazmanov-moi-yasnie-dni-right-version-gachi-remix_(muzo.mobi).mp3'),
    new Audio('https://cdnfiles.net/down.php?id=dFlEU0M3NUVqRkI1cGZqa21TR3diQT&name=valeriya-casiki-right-version-gachi-remix_(muzo.mobi).mp3'),
    new Audio('https://cdnfiles.net/down.php?id=bXg5cFJ2M2RoT29oclNlSU5tMW15UT&name=big-baby-tape-gimme-the-loot-right-version-gachi-mix_(muzo.mobi).mp3'),
    new Audio('https://cdnfiles.net/down.php?id=OTlTeWhuZWxicXVBVExaZmhrWXN2Zz&name=morgenshtern-timati-el-problema-right-version-gachi-remix_(muzo.mobi).mp3')
]

const audioDescriptions = [
    'Ляпис Трубецкой - Cumпитал (<a href="https://www.youtube.com/watch?v=yukHZvo5mnw" target="_blank">remix Чисто Своим</a>)',
    '♂лег Гassман♂в - Мои assные дни (<a href="https://www.youtube.com/watch?v=8ZKWjlRxdok" target="_blank">remix by zerodovich</a>)',
    'Валерия - Чassики (<a href="https://www.youtube.com/watch?v=9MiVaICMs_Y" target="_blank">remix by zerodovich</a>)',
    'Big Baby Gay - Gimme the Loot (<a href="https://www.youtube.com/watch?v=V4VBPMUGQ00" target="_blank">remix by Icy Wiener</a>)',
    'MORGAYSLAVE & Тимати - El Problema (<a href="https://www.youtube.com/watch?v=Zh9dBqIht-g" target="_blank">remix by Rat TV</a>)',    
]

let audioI = 0

const yes = () => {
    percentage += 1
    if (percentage == gachiPercentage) {
        const audio = document.getElementById('audio')
        audio.hidden = false
        audioFiles[audioI].play()
        playsNow.innerHTML = audioDescriptions[audioI]
        composition.hidden = false
        _window.style.backgroundImage = `url('${image.src}')`
        document.body.style.backgroundImage = `url('${image.src}')`
        document.getElementById('website').textContent = 'Bondage gay website'
        const currency = document.getElementsByClassName('currency')
        for (let i = 0; i < currency.length; i++)
            currency.item(i).textContent = 'bucks'
        document.getElementById('target').textContent = ' fisting ass'
    }
    progress.setAttribute('aria-valuenow', percentage)
    p = String(percentage) + '%'
    progress.style.width = p
    progress.innerText = p
    percentageText.innerText = p
    cRoubles.innerText = Math.floor(tRoubles / 100 * percentage)
    if (percentage == 100) {
        _window.style.backgroundImage = `url('${donate.src}')`
        text.innerText = 'КАЗИНО взломано. Деньги пошли на оплату fisting.'
        noBtn.disabled = 'disabled'
        yesBtn.disabled = 'disabled'
    }
}

const playpause = () => {
    if (playPause.textContent === '▶️') {
        playPause.textContent = '⏸'
        audioFiles[audioI].play()
    } else {
        playPause.textContent = '▶️'
        audioFiles[audioI].pause()
    }
}

const forward = () => {
    audioFiles[audioI].pause()
    audioFiles[audioI].currentTime = 0
    audioI = audioI === audioFiles.length - 1 ? 0 : audioI + 1
    if (playPause.textContent === '⏸')
        audioFiles[audioI].play()
    playsNow.innerHTML = audioDescriptions[audioI]
}

for (let i = 0; i < audioFiles.length; i++) {
    audioFiles[i].onended = forward
}

const back = () => {
    audioFiles[audioI].pause()
    audioFiles[audioI].currentTime = 0
    audioI = audioI === 0 ? audioFiles.length - 1 : audioI - 1
    if (playPause.textContent === '⏸')
        audioFiles[audioI].play()
    playsNow.innerHTML = audioDescriptions[audioI]
}