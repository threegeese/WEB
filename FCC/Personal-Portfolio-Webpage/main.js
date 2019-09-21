// init homepage
const html = `new Weber({
  a: 1,
  b: 'nihk'
})`
let homeTimer = writeCode('', html, () => {})

/**
 * set fullpages configs
 */
$(document).ready(() => {
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: ['#61f2f5', '#40d3e6', '#61f2f5', '#5584b2'],
    menu: '#myMenu',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],

    //
    easingcss3: 'linear',
    scrollingSpeed: 500,

    //
    keyboardScrolling: true,

    afterLoad: () => {
      homeTimer = writeCode('', html, () => {})
    },

    onLeave: () => {
      changeActive()
      clearInterval(homeTimer)
    }
      
  })

	$.fn.fullpage.setAllowScrolling(true)
})


// ul > li 的 active 类切换问题
function changeActive () {
  $(document).ready( () => {
    let sectionsActive = $('#fullpage > .section')
    let navItemActive = $('ul.navbar-nav > li')
    let index = 0
    for (let i=0; i<sectionsActive.length; i++) {
      if ($(sectionsActive[i]).hasClass('active')) {
        index = i
        break
      }
    }
    $(navItemActive[index]).siblings().removeClass('active')
    $(navItemActive[index]).addClass('active')
  })
}

// HomePage
writeCode('', html, () => {})

function writeCode(prefix, code, fn) {
  let n = 0
  let prompt = document.getElementById("codeWrapper")
  prompt.innerHTML = prefix || ''

  let timer = setInterval(() => {
      if(n >= code.length) {
          clearInterval(timer)
          fn && fn.call()
      }
      n += 1;
      prompt.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.javascript)
  }, 100)
  
  return timer
}
