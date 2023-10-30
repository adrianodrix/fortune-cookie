const closedCookiePanel = document.querySelector('.closed-cookie')
const openedCookiePanel = document.querySelector('.opened-cookie')
const closedCookieImg = closedCookiePanel.querySelector('img')
const btnReset = openedCookiePanel.querySelector('button')

closedCookieImg.addEventListener('click', openCookie)
btnReset.addEventListener('click', toogleCookie)

function openCookie() {
    fetch('proverbs.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText)
        }
        return response.text()
    })
    .then(text => {
        const lines = text.split('\n')
        const randomIndex = Math.floor(Math.random() * lines.length)
        const randomLine = lines[randomIndex]
        
        openedCookiePanel
            .querySelector('p')
            .innerText = randomLine
        
        toogleCookie()
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error)
    });
}

function toogleCookie() {
    closedCookiePanel.classList.toggle('hidden')
    openedCookiePanel.classList.toggle('hidden')
}