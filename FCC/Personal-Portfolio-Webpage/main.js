/**
 * set fullpages configs
 */
$(document).ready(() => {
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionsColor: ['#d1f8f6', '#40d3e6', '#61f2f5'],
    menu: '#myMenu',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],

    //
    easingcss3: 'linear',
    scrollingSpeed: 500,

    //
    keyboardScrolling: true,


  })

	$.fn.fullpage.setAllowScrolling(true)
})


// ul > li 的 active 类切换问题
$(document).ready( () => {
  let changeActive = $('ul.navbar-nav > li')
  for (let i=0; i<changeActive.length; i++) {
    changeActive[i].onclick = e => {
      $(changeActive[i]).siblings().removeClass('active')
      $(changeActive[i]).addClass('active')
    }
  }
})