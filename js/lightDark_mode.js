const lightMode = document.querySelector('#lightMode')
const darkMode = document.querySelector('#darkMode')
const turnOn = document.querySelector('#turnOn')
const turnOff = document.querySelector('#turnOff')
const lightScreen = document.querySelector('.light')

turnOn.addEventListener('click', () => {
    get_button(turnOn)
    put_button(turnOff)
    get_opacity(lightMode)
    put_opacity(darkMode)

    lightScreen.classList.remove('light')
})

turnOff.addEventListener('click', () => {
    get_button(turnOff)
    put_button(turnOn)
    get_opacity(darkMode)
    put_opacity(lightMode)

    lightScreen.classList.add('light')
})

function get_button(button) {
    button.style.display = 'none'
}

function put_button(button) {
    button.style.display = 'block'
}

function get_opacity(icon) {
    icon.style.opacity = '0'
}

function put_opacity(icon) {
    icon.style.opacity = '1'
}