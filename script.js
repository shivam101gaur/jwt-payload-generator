function generateJWT() {

    const outputContainer = document.getElementById('output')
    const duration = document.getElementById('duration').value
    const timeFactor = document.getElementById('timeType').value
    const expInMilliSec = duration * timeFactor

    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + expInMilliSec);

    const payload = {
        "exp": ~~(futureDate.getTime() / 1000),
        "uid": "UWLCOR1234",
        "iat": ~~(currentDate.getTime() / 1000)
    }

    navigator.clipboard.writeText((JSON.stringify(payload).split(',').join(',\n').split('{').join('{\n').split('}').join('\n}'))).then(() => {
        document.getElementById('linkbtn').style.visibility='visible'
        const snackbar = document.getElementById("snackbar");
        snackbar.className = "show";
        setTimeout(() => {
            snackbar.className = snackbar.className.replace("show", "");
        }, 3000);
    });

    // outputContainer.innerHTML = `<code>{"exp":1633589938,<br>"uid":"UWLCOR1234","iat":1633589878}</code>`
    outputContainer.innerHTML = `<code>${(JSON.stringify(payload).split(',').join(',<br>').split('{').join('{<br>').split('}').join('<br>}'))}</code>`
}

function openjwtgenerator(){
    window.open("https://jwt.io/#debugger",
        "", "width=1300, height=700");
}
