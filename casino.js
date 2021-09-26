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

const audioFiles = {
    'Ляпис Трубецкой - Cumпитал (<a href="https://www.youtube.com/watch?v=yukHZvo5mnw" target="_blank">remix Чисто Своим</a>)': new Audio('https://d9.hotplayer.ru/download/b8c4c3580e577c6915eb43684756927f/173987600_456240364/71e549683f8a-87b2307d32e4-1a7dbb8b3f34/gachi%20mix%20-%20CUM%D0%BF%D0%B8%D1%82%D0%B0%D0%BB.mp3'),
    'Кино - Cockушка (remix <a href="https://www.youtube.com/c/chystosvoim" target="_blank">Чисто Своим</a>, удалён жадными капиталистами)': "new Audio('https://d9.hotplayer.ru/download/1593c04f781283480aa23581fabe2329/173698285_456239675/127cc39dbf01b-df23fa070c07-98db726133f/%E2%99%82%20Gachi%20Remix%20%E2%99%82%20-%20%D0%9A%D0%B8%D0%BD%D0%BE%20-%20%D0%9A%D1%83%D0%BA%D1%83%D1%88%D0%BA%D0%B0%20%28Right%20Version%29.mp3')",
    'Кино - Закрой за мной door (<a href="https://www.youtube.com/watch?v=cmZ-V3iwHG8" target="_blank">remix Чисто Своим</a>)': "new Audio('https://d4.hotplayer.ru/download/1593c04f781283480aa23581fabe2329/224231713_456239027/1009d66d78026-131eaec601a74-fec40b6981d/%D0%9A%D0%B8%D0%BD%D0%BE%20-%20%D0%97%D0%B0%D0%BA%D1%80%D0%BE%D0%B9%20%D0%97%D0%B0%20%D0%9C%D0%BD%D0%BE%D0%B9%20%D0%94%D0%B2%D0%B5%D1%80%D1%8C%20%28Gachi%20Remix%29.mp3')",
    'Кино - Спокойная ночь (<a href="https://www.youtube.com/watch?v=8Sei0RH7GCU" target="_blank">remix Чисто Своим</a>)': "new Audio('https://d9.hotplayer.ru/download/1593c04f781283480aa23581fabe2329/366577945_456239558/1107196ca08ed-7861f951dfa3-8d88b6b59d1/Gachi%20remixes%20-%20%D0%A1%D0%BF%D0%BE%D0%BA%D0%BE%D0%B9%D0%BD%D0%B0%D1%8F%20%D0%BD%D0%BE%D1%87%D1%8C%20%28%D0%9A%D0%B8%D0%BD%D0%BE%29.mp3')",
    '♂лег Гassман♂в - Мои assные дни (<a href="https://www.youtube.com/watch?v=8ZKWjlRxdok" target="_blank">remix by zerodovich</a>)': "new Audio('https://d4.hotplayer.ru/download/2e5c00397da8e6af8d680e1d3b3924cd/239404079_456240867/e5a0c1276740-58fcea596488-b890368938c/zerodovich%20-%20%E2%99%82%D0%9C%D0%BE%D0%B8%20%D1%8F%D1%81%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BD%D0%B8%E2%99%82.mp3')",
    'Серёга - Чёрный finger (<a href="https://www.youtube.com/watch?v=lzgmAAAvj4o" target="_blank">remix by zerodovich</a>)': "new Audio('https://d4.hotplayer.ru/download/2e5c00397da8e6af8d680e1d3b3924cd/454807933_456239175/855b7bf733f7-c14d7e7628de-1382345c120e/zerodovich%20-%20%D0%A1%D0%B5%D1%80%D1%91%D0%B3%D0%B0%20-%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9%20%D0%91%D1%83%D0%BC%D0%B5%D1%80%20%28right%20version%E2%99%82%29%20Gachi%20Remix.mp3')",
    'Валерия - Чassики (<a href="https://www.youtube.com/watch?v=9MiVaICMs_Y" target="_blank">remix by zerodovich</a>)': "new Audio('https://d4.hotplayer.ru/download/cac2026a51698ba6e8986f6f8689757c/147005786_456239783/111bdbc4937c7-b72ec054cd39-273fdf5fc9f/%D0%92%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D1%8F%20-%20%D0%A7%D0%B0%D1%81%D0%B8%D0%BA%D0%B8%20%28gachi%20remix%29.mp3')",
    'Кино - Перемен (<a href="https://www.youtube.com/watch?v=q3JKyqGXJc4" target="_blank">remix by Icy Wiener</a>)': "new Audio('https://d7.hotplayer.ru/download/1593c04f781283480aa23581fabe2329/547754092_456239945/7544de1fe10b-ed699691fcdc-1b5d2e56a33a/Gachi%20remixes%20-%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%20%28%D0%9A%D0%B8%D0%BD%D0%BE%29.mp3')",
    'Big Baby Gay - Gimme the Loot (<a href="https://www.youtube.com/watch?v=V4VBPMUGQ00" target="_blank">remix by Icy Wiener</a>)': "new Audio('https://d9.hotplayer.ru/download/42b7890e044b193c82cf5e9aa71f6d39/437724862_456239794/f6c1169aee3f-23460ce36a6b-1a1d22410778/Big%20Baby%20Gay%20-%20Gimme%20the%20loot%20-%20Right%20version%20%28gachi%20remix%29.mp3')",
    'Любэ - Давай за (<a href="https://www.youtube.com/watch?v=r4bFGuJOfSk" target="_blank">remix by Shoshon Elephant</a>)': "new Audio('https://d7.hotplayer.ru/download/5b08ed0f88121a2a484fa87facd77e94/63423040_456240102/4a74087f0d0f-684b5b78bd89-15adcf416597/%D0%9B%D1%8E%D0%B1%D1%8D%20-%20%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%20%D0%97%D0%B0%28%E2%99%82right%20version%E2%99%82%29.mp3')",
    '♂лег Гassман♂в - Свежий ветер (<a href="https://www.youtube.com/watch?v=qTAFsQ9A0fw" target="_blank">remix by Shoshon Elephant</a>)': "new Audio('https://d9.hotplayer.ru/download/4ae427a2b15935c38651dd0c9afab7a7/68170383_456240949/6a1c68624940-11e3498949b2-b76e044bf19/%D0%9E%D0%BB%D0%B5%D0%B3%20%D0%93ass%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%20-%20%D0%A1%D0%B2%D0%B5%D0%B6%D0%B8%D0%B9%20%D0%B2%D0%B5%D1%82%D0%B5%D1%80%28%E2%99%82right%20version%E2%99%82%29.mp3')",
    'MORGAYSLAVE & Тимати - El Problema (<a href="https://www.youtube.com/watch?v=Zh9dBqIht-g" target="_blank">remix by Rat TV</a>)': "new Audio('https://d9.hotplayer.ru/download/7ba354245d0319d6d1e73bd8544d23e9/2000138346_456244509/688dd4fab8c0-60c5cb5f5c42-160863c65902/%E2%99%82Rat%20TV%E2%99%82%20-%20El%20Problema%20%28%E2%99%82RIGHT%20VERSION%E2%99%82%29%20%7C%20%E2%99%82Gachi%20Remix%E2%99%82.mp3')"
}

let audioI = 0

const yes = () => {
    percentage += 1
    if (percentage == gachiPercentage) {
        const audio = document.getElementById('audio')
        audio.hidden = false
        Object.values(audioFiles)[audioI].play()
        playsNow.innerHTML = Object.keys(audioFiles)[audioI]
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
        Object.values(audioFiles)[audioI].play()
    } else {
        playPause.textContent = '▶️'
        Object.values(audioFiles)[audioI].pause()
    }
}

const getAudio = (i) => {
    const key = Object.keys(audioFiles)[i]
    if (typeof audioFiles[key] === 'string') {
        audioFiles[key] = eval(audioFiles[key])
        audioFiles[key].onended = forward
    }
    return audioFiles[key]
}

const forward = () => {
    const a = Object.values(audioFiles)[audioI]
    a.pause()
    a.currentTime = 0
    audioI = audioI === Object.keys(audioFiles).length - 1 ? 0 : audioI + 1
    if (playPause.textContent === '⏸')
        getAudio(audioI).play()
    playsNow.innerHTML = Object.keys(audioFiles)[audioI]
}

Object.values(audioFiles)[0].onended = forward

const back = () => {
    const a = Object.values(audioFiles)[audioI]
    a.pause()
    a.currentTime = 0
    audioI = audioI === 0 ? Object.keys(audioFiles).length - 1 : audioI - 1
    if (playPause.textContent === '⏸')
        getAudio(audioI).play()
    playsNow.innerHTML = Object.keys(audioFiles)[audioI]
}
