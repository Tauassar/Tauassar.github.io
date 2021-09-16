// change ibg images on background 
(function() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
})();


Array.prototype.map.call(document.getElementsByClassName('wrapper'), (elem) => {
    elem.classList.toggle('loaded')
})

(function() {
    document.getElementsByClassName('icon-menu')[0].addEventListener("click", () => {
        this.classList.toggle('active');
        document.getElementsByClassName('menu_body')[0].classList.toggle("active")
        document.getElementsByTagName('body').classList.toggle('lock')
    })
})();