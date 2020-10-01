let progress = document.getElementsByClassName('progress-bar')[0]
let percentage = 0
let percentageText = document.getElementById('percentage')

const tRoubles = Math.floor(Math.random() * 50000000) + 50000000
const screamPercentage = Math.floor(Math.random() * 85) + 15

document.getElementById('tRoubles').innerText = tRoubles
let cRoubles = document.getElementById('cRoubles')

const yes = () => {
    percentage += 1
    if (percentage == screamPercentage) {
        document.getElementById('window').style.backgroundImage = "url('image.png')"
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
