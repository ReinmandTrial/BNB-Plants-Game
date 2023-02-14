function show_line(e) {
    var bg_up = document.getElementById('bg_up_line')
    var bg_down = document.getElementById('bg_down_line')
    bg_up.classList.remove('d-none')
    bg_down.classList.remove('d-none')
    document.addEventListener('click', e => close_show_line(e))
}

function close_show_line(e) {
    if (e.explicitOriginalTarget.attributes.id != undefined) {
        if (e.explicitOriginalTarget.attributes.id.nodeValue == 'modal_registr') {
            var bg_up = document.getElementById('bg_up_line')
            var bg_down = document.getElementById('bg_down_line')
            bg_up.classList.add('d-none')
            bg_down.classList.add('d-none')
            document.removeEventListener('click', e => close_show_line(e))
        }
    }
}

function menu() {
    var podmenu = document.querySelector('.podmenu__block')
    podmenu.classList.add('animate-right')

    var div = document.createElement('div')
    div.style.transition = '1s'
    div.style.width = '100vw'
    div.style.height = '100vh'
    div.style.position = 'absolute'
    div.style.top = '0px'
    div.style.left = '0px'
    div.style.zIndex = '100'
    div.setAttribute('id', 'blackmenu');
    // document.querySelector('.podmenu__block').appendChild(div)
    document.body.appendChild(div)
    setTimeout(function () {
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'

        let block = document.querySelector('.podmenu__block')
        block.addEventListener('click', backmenu)
    }, 10)

    document.getElementsByTagName('html')[0].classList.add('hide')
}

function backmenu() {
    if (event.target.closest('.podmenu')) return
    var podmenu = document.querySelector('.podmenu__block')
    var blackmenu = document.getElementById('blackmenu')
    podmenu.classList.remove('animate-right')
    blackmenu.style.backgroundColor = 'rgba(0, 0, 0, 0)'

    setTimeout(function () {
        document.body.removeChild(blackmenu)
        // document.querySelector('.podmenu__block').removeChild(blackmenu)
    }, 1000)
    document.getElementsByTagName('html')[0].classList.remove('hide')
}