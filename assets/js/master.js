function _popup(s) {
    s.classList.toggle('smallMenu')
    let _a = document.querySelectorAll('#link_social')
    _a.forEach((val) => {
        val.classList.toggle('df')
    })
    document.getElementsByClassName("icon-menu-1")[0].classList.toggle('_small')
    document.getElementsByClassName("icon-cancel")[0].classList.toggle('_big')
    document.getElementsByClassName('child')[0].classList.toggle('child1')
    document.getElementsByClassName('child')[1].classList.toggle('child2')
    document.getElementsByClassName('child')[2].classList.toggle('child3')
    document.getElementsByClassName('child')[3].classList.toggle('child4')
    document.getElementsByClassName('child')[4].classList.toggle('child5')
    document.getElementsByClassName('child')[5].classList.toggle('child6')
    setTimeout(() => {
        let _icon = document.querySelectorAll('a>i')
        _icon.forEach((val) => {
            val.addEventListener('mouseenter', (event) => {
                val.style.color = "white"

            })
            val.addEventListener('mouseleave', (event) => {
                val.style.color = "black"

            })
        })
    }, 1000);
}
