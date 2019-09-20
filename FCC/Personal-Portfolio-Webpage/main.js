/**
 * set fullpages configs
 */
$(document).ready(function() {
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
