let image = new Image()
image.src = 'image.webp'
let donate = new Image()
donate.src = 'donate.webp'

let progress = document.getElementsByClassName('progress-bar')[0]
let percentageText = document.getElementById('percentage')
let _window = document.getElementById('window')
let yesBtn = document.getElementById('yes')
let noBtn = document.getElementById('no')
let text = document.getElementById('text')
let cRoubles = document.getElementById('cRoubles')

let percentage = 0
let p = '0%'
const tRoubles = Math.floor(Math.random() * 50000000) + 50000000
document.getElementById('tRoubles').innerText = tRoubles
const gachiPercentage = Math.floor(Math.random() * 84) + 15

const yes = () => {
    percentage += 1
    if (percentage == gachiPercentage) {
        _window.style.backgroundImage = `url('${donate.src}')`
        document.body.style.backgroundImage = `url('${image.src}')`
        document.getElementById('website').textContent = 'Bondage gay website'
        let currency = document.getElementsByClassName('currency')
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
        _window.style.backgroundImage = "url('donate.webp')"
        text.innerText = 'КАЗИНО взломано. Деньги пошли на оплату fisting.'
        noBtn.disabled = 'disabled'
        yesBtn.disabled = 'disabled'
    }
}
