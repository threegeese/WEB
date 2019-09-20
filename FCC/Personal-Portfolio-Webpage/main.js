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

    onLeave: () => {
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
  })

	$.fn.fullpage.setAllowScrolling(true)
})


// ul > li 的 active 类切换问题
$(document).ready( () => {
  let sectionsActive = $('#fullpage > .section')
  let index = 0
  for (let i=0; i<sectionsActive.length; i++) {
    if ($(sectionsActive[i]).has('.active')) {
      index = i
      return
    }
    let navItemActive = $('ul.navbar-nav > li')
    $(navItemActive[index]).siblings().removeClass('active')
    $(navItemActive[index]).addClass('active')
  }
})

