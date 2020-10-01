let progress = document.getElementsByClassName('progress-bar')[0]
let percentage = 0
let percentageText = document.getElementById('percentage')
const tRoubles = Math.floor(Math.random() * 50000000) + 50000000
document.getElementById('tRoubles').innerText = tRoubles
let cRoubles = document.getElementById('cRoubles')
const yes = () => {
    percentage += 1
    if (percentage < 100) {
        progress.setAttribute('aria-valuenow', percentage)
        let p = String(percentage) + '%'
        progress.style.width = p
        progress.innerText = p
        percentageText.innerText = p
        cRoubles.innerText = Math.floor(tRoubles / 100 * percentage)
    }
}

// Success with Before, After and Fade
    var options = {
        'title': 'Click me to view Success with fade!',
        'body': 'Notify me with fade!',
        'icon': 'icon_success.png',
        'fade': 1000,
        before: function() {
            console.log('before')
        },
        after: function() {
            alert('after')
        },
    };

    var scream = new Screamer(options);
    var button = document.querySelector('#fade');
    button.addEventListener('click', function(){
        scream.notify();
    });

    // Warning without fade
    var optionsNotFade = {
        'title': 'Click me to view Warning!',
        'body': 'Notify me with warning!',
        'icon': 'icon_warning.png'
    };

    var screamNotFade = new Screamer(optionsNotFade);
    var buttonNotFade = document.querySelector('#notFade');
    buttonNotFade.addEventListener('click', function(){
        screamNotFade.notify();
    });

    // Error without fade
    var optionsError = {
        'title': 'Click me to view Error!',
        'body': 'Notify me with error!',
        'icon': 'icon_error.png'
    };

    var screamError = new Screamer(optionsError);
    var buttonError = document.querySelector('#error');
    buttonError.addEventListener('click', function(){
        screamError.notify();
    });
