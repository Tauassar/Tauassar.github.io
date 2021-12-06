// prettier-ignore
var Slider = function() {
  var total, $images, slider, sliderWidth, increment = 10;
  var on = function() {
    slider = document.getElementsByClassName('slider')[0];
    $images = [].slice.call(document.getElementsByClassName('slider')[0].getElementsByTagName("img"));
    sliderWidth = slider.offsetWidth;
    increment = $images[0].offsetWidth*0.5;
    total = $images.length;
    position();
  }

  var position = function() {
    let sign, x = 0, z = 0, zindex,scaleX = 1.3,scaleY = 1.3, transformOrigin, opacity;
    let active_element = document.getElementsByClassName('active')[0];
    let half = $images.indexOf(active_element);
    $images.map((element, index) => {
      scaleX = scaleY = 1;
      transformOrigin = sliderWidth / 2;
      if(index < half) {
        sign = 1;
        zindex = index + 1;
        // x = sliderWidth / 2 - increment * (half - index + 1);
        x = sign*element.offsetWidth*0.3;
        z =  -increment * (half - index + 1);
      } else if(index > half) {
        sign = -1
        zindex = total - index;
        // x = sliderWidth / 2 + increment * (index - half + 1);
        x = sign*element.offsetWidth*0.3;
        z =  -increment * (index - half + 1);
      } else {
        sign = 0;
        zindex = total;
        x = 0;
        z = 1;
        scaleX = scaleY = 1.2;
        transformOrigin = 'initial';
      }
      if(Math.abs(half-index)>1){
        opacity = 0;
      }
      else{
        opacity = 1;
      }
      let css = {
        transform: 'translate3d(' + calculateX(x, sign, 300) + 'px, 0,' + z + 'px) scale3d(' + scaleX + ',' + scaleY + ', 1)',
        zindex: zindex,
        transformOrigin: transformOrigin+' 0 0',
        opacity: opacity
      };
      Object.assign(element.style, css);
    });
  };

  var calculateX = function(position, sign, width) {
    switch(sign) {
      case 1: return position + width / 2;
      case 0: return position;
      case -1: return position - width / 2;
    }
  }
  
  var recalculateSizes = function() {
    sliderWidth = slider.offsetWidth;
    position();
  }
  
  var clickedImage = function(e) {
    let element = e.target;
    console.log($images.indexOf(element))
    if($images.indexOf(element)<0){
      return;
    }
    if(element.className == 'active') {
      let url = element.getAttribute('data-href');
      window.open(url , '_blank');
    }else{
      let active_element = document.getElementsByClassName('active')[0];
      let active_index = $images.indexOf(active_element);
      let selected_index = $images.indexOf(element);
      let new_active_index=active_index;
      if(selected_index>active_index){
        new_active_index = active_index+1;
      }
      else{
        new_active_index = active_index-1;
      }
      document.getElementsByClassName('active')[0].classList.remove("active");
      let new_active = $images[new_active_index];
      new_active.classList.add('active');
      position();
    }
  }
  
  const addEvents = function() {
    window.addEventListener('resize', function(event) {
      recalculateSizes
    }, true);
    let slider = document.getElementsByClassName('slider')[0];
    slider.addEventListener('click', clickedImage, false)
  }

  
  return {
    init: function() {
      on();
      addEvents();
    }
  };
}();

(function () {
  const slider = Slider.init();
}());;
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
;
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;
