/* preloader */
$(window).on('load', function () {
  // var $preloader = $('#page-preloader'),
  //     $spinner   = $preloader.find('.spinner');
  // $spinner.fadeOut();
  // $preloader.delay(350).fadeOut('slow');
});

jQuery(document).ready(function ($) {


// console.log('The path is : ' + window.location.pathname);
  var parts = window.location.pathname.split("/");
  // console.log('Parts - ' + parts);
  var language = parts[parts.length - 2];

  // console.log('The language is : ' + language);


  // if(window.location.pathname !== "/") {
  // 	window.location = "/";
  // }

// console.log('path = ' + window.location.pathname);
  updateScene(window.location.pathname);

  /* RUN SCENE */
  function updateScene(href, action) {
    addOverlay();
    var mainTl;
    if (mainTl == null) mainTl = new TimelineLite({onComplete: removeOverlay});
    // console.log('HREF : ' + href);
    // switch ( href )
    if (href !== "/who-we-are" && href !== "/we-can" && href !== "/we-done" && href !== "/write-to-us") {
      console.log('This is MAIN page');
      mainTl.to(".wrapper", 1, {opacity: 1, ease: Expo.easeOut});
      /* hide */
      mainTl.to(".who-we-figure-1", 1, {opacity: 0, width: 20, ease: Expo.easeOut}, "-=1");
      mainTl.to(".who-we-figure-2", 1, {opacity: 0, ease: Expo.easeOut}, "-=1");
      mainTl.to(".we-done-figure-1", 1, {opacity: 0, ease: Expo.easeOut}, "-=1");
      mainTl.to(".we-done-figure-2", 1, {opacity: 0, ease: Expo.easeOut}, "-=1");
      mainTl.to(".who-we-text", 1, {opacity: 0, ease: Expo.easeOut, zIndex: -50}, "-=1");
      mainTl.to("#call-form", 0.5, {opacity: 0, ease: Expo.easeOut}, "-=2");
      mainTl.to(".portfolio", 0.5, {opacity: 0, ease: Expo.easeOut}, "-=2");
      mainTl.to(".text-wrapper", 0, {opacity: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".text-wrapper-we-can ", 0, {opacity: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".text-wrapper-we-done ", 0, {opacity: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".portfolio", 0, {opacity: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      $('.thanks').hide();
      // mainTl.to(".form-wrapper", 0, {opacity: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      /* show */
      mainTl.to(".logo", 1, {opacity: 0.9, scale: 1, ease: Expo.easeOut, top: '30%'}, "-=1");
      mainTl.to(".main-figure-1", 2, {opacity: 1, top: -100, ease: Expo.easeOut});
      mainTl.to(".main-figure-2", 1, {opacity: 1, scale: 0.7, ease: Expo.easeOut}, "-=2");
      mainTl.to(".who-we-are", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, left: 100, zIndex: 210}, "-=2");
      mainTl.to(".we-can", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, top: 100, zIndex: 210}, "-=2");
      mainTl.to(".write-to-us", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, bottom: -50, zIndex: 210}, "-=2");
      mainTl.to(".we-done", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, right: -50, zIndex: 210}, "-=2");

    } else if (href == "/who-we-are") {
      // console.log('This is WHO-WE-ARE page');
      /* hide */
      mainTl.to(".main-figure-1", 1, {opacity: 0, top: 0, ease: Expo.easeOut});
      mainTl.to(".main-figure-2", 1, {opacity: 0, scale: 0, ease: Expo.easeOut}, "-=1.5");
      mainTl.to(".who-we-are", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-can", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".write-to-us", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-done", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");

      /* show */
      mainTl.to(".logo", 1, {opacity: 0.9, scale: 0.7, ease: Expo.easeOut, top: -100}, "-=0.5");
      mainTl.to(".who-we-figure-1", 1, {opacity: 1, width: 500, ease: Expo.easeOut}, "-=1");
      mainTl.to(".who-we-figure-2", 2, {opacity: 1, ease: Expo.easeOut}, "-=1");
      mainTl.to(".who-we-text", 2, {opacity: 1, ease: Expo.easeOut}, "-=1");
      mainTl.to(".text-wrapper", 1, {opacity: 1, ease: Expo.easeOut, zIndex: 150}, "-=3");

    } else if (href == "/we-can") {
      console.log('This is WE-CAN page');
      /* hide */
      mainTl.to(".main-figure-1", 1, {opacity: 0, top: 0, ease: Expo.easeOut});
      mainTl.to(".main-figure-2", 1, {opacity: 0, scale: 0, ease: Expo.easeOut}, "-=1.5");
      mainTl.to(".who-we-are", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-can", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".write-to-us", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-done", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      /* show */
      mainTl.to(".logo", 1, {opacity: 0.9, scale: 0.7, ease: Expo.easeOut, top: -100}, "-=0.5");
      mainTl.to(".who-we-figure-1", 1, {opacity: 1, width: 500, ease: Expo.easeOut}, "-=1");
      mainTl.to(".main-figure-2", 1, {opacity: 1, scale: 1.3, ease: Expo.easeOut}, "-=1");
      mainTl.to(".we-can-text", 2, {opacity: 1, ease: Expo.easeOut}, "-=1");
      mainTl.to(".text-wrapper-we-can", 1, {opacity: 1, ease: Expo.easeOut, zIndex: 150}, "-=1");

    } else if (href == "/we-done") {
      // console.log('This is WE-DONE page');
      /* hide */
      mainTl.to(".main-figure-1", 1, {opacity: 0, top: 0, ease: Expo.easeOut});
      mainTl.to(".main-figure-2", 1, {opacity: 0, scale: 0, ease: Expo.easeOut}, "-=1.5");
      mainTl.to(".who-we-are", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-can", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".write-to-us", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-done", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      /* show */
      mainTl.to(".logo", 1, {opacity: 0.9, scale: 0.7, ease: Expo.easeOut, top: -100}, "-=0.5");
      mainTl.to(".we-done-figure-1", 1, {opacity: 1, left: '-40vw', ease: Expo.easeOut}, "-=1");
      mainTl.to(".we-done-figure-2", 1, {opacity: 1, right: '-40vw', ease: Expo.easeOut}, "-=1");
      mainTl.to(".portfolio", 2, {opacity: 1, ease: Expo.easeOut, zIndex: 150}, "-=0.5");
      mainTl.to(".we-done-text", 1, {opacity: 1, ease: Expo.easeOut}, "-=2");
      mainTl.to(".text-wrapper-we-done", 1, {opacity: 1, ease: Expo.easeOut, zIndex: 150}, "-=1");

    } else if (href == "/write-to-us") {
      // console.log('This is WRITE-TO-US page');
      /* hide */
      mainTl.to(".main-figure-1", 1, {opacity: 0, top: 0, ease: Expo.easeOut});
      mainTl.to(".main-figure-2", 1, {opacity: 0, scale: 0, ease: Expo.easeOut}, "-=1.5");
      mainTl.to(".who-we-are", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-can", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".write-to-us", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      mainTl.to(".we-done", 1, {opacity: 0, scale: 0, ease: Expo.easeInOut, zIndex: -50}, "-=1");
      /* show */
      $('#call-form').show();
      mainTl.to(".logo", 1, {opacity: 0.9, scale: 0.7, ease: Expo.easeOut, top: -100}, "-=0.5");
      mainTl.to(".who-we-figure-1", 1, {opacity: 1, width: 500, ease: Expo.easeOut}, "-=1");
      mainTl.to("#call-form", 2, {opacity: 1, ease: Expo.easeOut}, "-=0.5");
    }

  }

  $(".hover-scale").hover(
    function () {
      TweenMax.to($(this), 0.3, {scale: 1.2, ease: Expo.easeOut, opacity: 1});
    }, function () {
      TweenMax.to($(this), 0.3, {scale: 1, ease: Expo.easeOut, opacity: 0.7});
    }
  );

  // ?????????????? ???? ???????????? ????????????
  $('.nav-item').on('click', function () {
    var dataHref = $(this).attr('data-href');
    // we will change pathname if it's doesn't equal current nav-item
    if (window.location.pathname !== dataHref) {
      var newUrl = window.location.protocol + "//" + window.location.host + '/' + language + dataHref;
      window.history.pushState({path: newUrl}, '', newUrl);

      updateScene(dataHref);
    }
  });

  /* UPDATE PORTFOLIO */
  $('.portfolio-button').on('click', function () {
    addOverlay();
    var $this = $(this);
    var $currentItem = $('.current-item');
    var nextIndex = 0;
    var itemsLength = $('.portfolio-item').length;
    var $nextElement;
    if ($this.hasClass('button-left')) {

      if ($currentItem.attr('data-index') == 0) {
        nextIndex = itemsLength - 1;
      } else {
        nextIndex = $currentItem.attr('data-index') - 1;
      }

      $nextElement = $('.portfolio-item')[nextIndex];

      TweenMax.fromTo($currentItem, 2, {opacity: 1}, {
        opacity: 0,
        x: 500,
        ease: Expo.easeOut,
        onComplete: removeElement($currentItem)
      });
      TweenMax.fromTo($nextElement, 2, {opacity: 0, x: '-100vw'}, {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut,
        zIndex: 150,
        onComplete: addElement($nextElement)
      });

    } else {

      if ($currentItem.attr('data-index') == itemsLength - 1) {
        nextIndex = 0;
      } else {
        nextIndex = Number($currentItem.attr('data-index')) + 1;
      }

      console.log('next Index is ' + nextIndex);

      $nextElement = $('.portfolio-item')[nextIndex];

      TweenMax.fromTo($currentItem, 2, {opacity: 1, x: '-100vw'}, {
        opacity: 0,
        x: 0,
        ease: Expo.easeOut,
        onComplete: removeElement($currentItem)
      });
      TweenMax.fromTo($nextElement, 2, {opacity: 0, x: '100vw'}, {
        opacity: 1,
        x: 0,
        ease: Expo.easeOut,
        zIndex: 150,
        onComplete: addElement($nextElement)
      });

    }

    function removeElement(el) {
      $(el).removeClass('current-item');
      $(el).addClass('hidden');
      removeOverlay();
    }

    function addElement(el) {
      $($nextElement).removeClass('hidden');
      $($nextElement).addClass('current-item');
    }


  });


  /* OVERLAY */
  // this functions adds and remove overlay which intercepts all mouse
  // click through the animation process
  function addOverlay() {
    console.log('add OVERLAY');
    $('body').append('<div class="overlay"></div>');
  }

  function removeOverlay() {
    console.log('remove OVERLAY');
    $('.overlay').remove();
  }

});

// ???????????????? ?????????? ???? ???????????????? ????????
$("#call-form").submit(function () { // ??e??e????a??????ae?? ????e ?????? ??o?????????? o??????a??????
  var form = $(this); // ??a??????e?? ??o??????, ????o???? ??o??o?? ??e ??????o ????o????e?? ?? this
  var error = false; // ????e????a??????e??????o o??????o?? ??e??
  form.find('input, textarea').each(function () { // ????o??e?????? ??o ??a????o???? ??o???? ?? ??o????e
    if ($(this).val() == '') { // e?????? ??a??o?????? ????????oe
      alert('??a??o????????e ??o??e "' + $(this).attr('placeholder') + '"!'); // ??o??o?????? ??a??o????????!
      error = true; // o????????a
    }
  });
  if (!error) { // e?????? o?????????? ??e??
    var data = form.serialize(); // ??o????o??a????????ae?? ??a??????e
    $.ajax({ // ??????????a????????????e?? ajax ??a????o??
      type: 'POST', // o??????a??????e?? ?? POST ??o????a??e, ??o????o GET
      url: '../ajax.php', // ???????? ??o o????a??o????????a, ?? ??a?? o?? ??e?????? ?? ??o?? ??e ??a????e
      dataType: 'json', // o????e?? ????e?? ?? json ??o????a??e
      data: data, // ??a??????e ?????? o??????a??????
      beforeSend: function (data) { // ??o????????e ??o o??????a??????
        form.find('input[type="submit"]').attr('disabled', 'disabled'); // ??a????????e??, o?????????????? ????o??????, ????o???? ??e ??a???? ??o 100 ??a??
      },
      success: function (data) { // ??o????????e ??o????e ????a????o??o o????a??e?????? ?? ??e????e???? ?? ??o??????e?????? o????e??a
        if (data['error']) { // e?????? o????a??o???????? ??e???????? o??????????
          alert(data['error']); // ??o??a??e?? e?? ??e??????
        } else { // e?????? ????e ????o????o o??
          // ?????????????? ???????? ??????????
          $('#call-form #subject').val('');
          $('#call-form #name').val('');
          $('#call-form #message').val('');
          $('#call-form').hide();
          $('.thanks').show();
        }
      },
      error: function (xhr, ajaxOptions, thrownError) { // ?? ????????ae ??e????a????o??o ??a??e????e?????? ??a????o??a ?? ??e????e????
        alert(xhr.status); // ??o??a??e?? o????e?? ??e????e??a
        alert(thrownError); // ?? ??e?????? o??????????
      },
      complete: function (data) { // ??o????????e ??o????e ??????o??o ??????o??a
        form.find('input[type="submit"]').prop('disabled', false); // ?? ??????o?? ????????ae ?????????????? ????o?????? o????a????o
        // popUpHide();
      }

    });
  }
  return false; // ??????????ae?? ????a????a?????????? o??????a?????? ??o??????
});

