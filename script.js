function show_line(e) {
    var bg_up = document.getElementById('bg_up_line')
    var bg_down = document.getElementById('bg_down_line')
    bg_up.classList.remove('d-none')
    bg_down.classList.remove('d-none')
    document.addEventListener('click', e => close_show_line(e))
}

function close_show_line(e) {
    if(e.explicitOriginalTarget.attributes.id != undefined) {
        if(e.explicitOriginalTarget.attributes.id.nodeValue == 'modal_registr') {
            var bg_up = document.getElementById('bg_up_line')
            var bg_down = document.getElementById('bg_down_line')
            bg_up.classList.add('d-none')
            bg_down.classList.add('d-none')
            document.removeEventListener('click', e => close_show_line(e))
        }
    }
}

function menu() {
    var podmenu = document.getElementById('podmenu')
    podmenu.classList.add('animate-right')

    var div = document.createElement('div')
    div.style.transition = '1s'
    div.style.width = '100vw'
    div.style.height = '100vh'
    div.style.position = 'fixed'
    div.style.top = '0px'
    div.style.left = '0px'
    div.style.zIndex = '100'
    div.setAttribute('id', 'blackmenu');
    document.body.appendChild(div)
    setTimeout(function() {
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        div.addEventListener('click', backmenu)
    }, 10)
}

function backmenu() {
    var podmenu = document.getElementById('podmenu')
    var blackmenu = document.getElementById('blackmenu')
    podmenu.classList.remove('animate-right')
    blackmenu.style.backgroundColor = 'rgba(0, 0, 0, 0)'

    setTimeout(function() {
        document.body.removeChild(blackmenu)
    }, 1000)
}