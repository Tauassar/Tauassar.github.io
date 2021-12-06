// YAIR EVEN OR
// 2014

const sections_to_append_active = [
    'univero',
    'uniup',
    'typipay',
    'animakuro',
]

var getElementsInArea = (function (docElm) {
    var viewportHeight = docElm.clientHeight;

    return function (e, opts) {
        let i;
        // in case of resize
        if (e && e.type == "resize") viewportHeight = docElm.clientHeight;
        // main logic
        for (i = opts.elements.length; i--; ) {
            let elm = opts.elements[i],
                pos = elm.getBoundingClientRect(),
                topPerc = (pos.top / viewportHeight) * 100,
                bottomPerc = (pos.bottom / viewportHeight) * 100,
                middle = (topPerc + bottomPerc) / 2,
                inViewport = middle > opts.zone[1] && middle < 100 - opts.zone[1];
            if (sections_to_append_active.includes(elm.id)) elm.classList.toggle(opts.markedClass, inViewport);
        }
    };
})(document.documentElement);

const sections_to_append_dark_bg = [
    'first-page',
]

var getElementsOutArea = (function (docElm) {
    var viewportHeight = docElm.clientHeight;

    return function (e, opts) {
        let i;
        // in case of resize
        if (e && e.type == "resize") viewportHeight = docElm.clientHeight;
        // main logic
        for (i = opts.elements.length; i--; ) {
            let elm = opts.elements[i],
                pos = elm.getBoundingClientRect(),
                bottomPerc = (pos.bottom / viewportHeight) * 100,
                inViewport = bottomPerc < opts.zone;
            if (sections_to_append_dark_bg.includes(elm.id)) elm.classList.toggle(opts.markedClass, inViewport);
        }
    };
})(document.documentElement);

////////////////////////////////////
// How to use:

window.addEventListener("scroll", f);
window.addEventListener("resize", f);

function f(e) {
    getElementsOutArea(e, {
        elements: document.querySelectorAll("section"),
        markedClass: "dark_bg",
        zone: 30 // percentage distance from top & bottom
    });

    getElementsInArea(e, {
        elements: document.querySelectorAll("section"),
        markedClass: "active",
        zone: [30, 30] // percentage distance from top & bottom
    });
}
