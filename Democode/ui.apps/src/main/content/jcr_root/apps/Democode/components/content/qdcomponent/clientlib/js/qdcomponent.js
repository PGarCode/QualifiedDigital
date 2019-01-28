
/* QD Demo code Component JS */
;(function() {

  function qdDemo() {
    $('.cta-link').each( function( index, element ) {
      var ctaVal = $(this).attr('href');
      if (ctaVal.indexOf('/content') > -1) {
        if(ctaVal[ctaVal.length -1] === "/") {
          ctaVal = ctaVal.slice(0,-1);
        }
        $(this).attr('href', ctaVal + ".html")
      } else {
        $(this).attr('href', ctaVal)
      }
    });
  }

  function hideInfo() {
    $('.info-parent').each( function (index, element) {
      if (!($(this).hasClass('hidden'))) {
        $(this).addClass('hidden');
      }
    })
    $('.logo').each( function (index, element) {
      if (!($(this).hasClass('dim'))) {
        $(this).addClass('dim');
      }
    })
  }

  $('.logo').on('click', function() {
    if ( $('.info-parent.'+$(this).attr('Id')).hasClass('hidden') ) {
      hideInfo()
      $('.info-parent.'+$(this).attr('Id')).removeClass('hidden');
      $(this).removeClass('dim');
    } else {
      hideInfo();
      $(this).addClass('dim');
    }
  });

  if($("#qd-demo-root")) {
      new qdDemo();
  }
}());