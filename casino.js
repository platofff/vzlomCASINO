let progress = document.getElementsByClassName('progress-bar')[0]
let percentage = 0
let percentageText = document.getElementById('percentage')
let _window = document.getElementById('window')

const tRoubles = Math.floor(Math.random() * 50000000) + 50000000
const screamPercentage = Math.floor(Math.random() * 85) + 15

document.getElementById('tRoubles').innerText = tRoubles
let cRoubles = document.getElementById('cRoubles')

const yes = () => {
    percentage += 1
    if (percentage == screamPercentage) {
        _window.style.backgroundImage = "url('image.png')"
        _window.style.backgroundSize = '400px'
        document.body.style.backgroundImage = "url('image.png')"
        document.body.style.backgroundSize = '100vw'
        document.getElementById('website').textContent = 'Bondage gay website'
        let currency = document.getElementsByClassName('currency')
        for (let i = 0; i < currency.length; i++)
            currency.item(i).textContent = 'bucks'
        document.getElementById('target').textContent = ' fisting ass'
    }
    if (percentage < 100) {
        progress.setAttribute('aria-valuenow', percentage)
        let p = String(percentage) + '%'
        progress.style.width = p
        progress.innerText = p
        percentageText.innerText = p
        cRoubles.innerText = Math.floor(tRoubles / 100 * percentage)
    }
}
