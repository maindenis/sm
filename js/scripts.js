function getTitleParams() {
    if($(".title_height").length> 0) {
        height = $(".title_height").height();
        $(".animate_title").css({
            "min-height" : height + "px"
        });
    }
}

function getTitleParams() {
    if($(".title_height").length> 0) {
        height = $(".title_height").height();
        $(".animate_title").css({
            "min-height" : height + "px"
        });
    }
}

function getRespParams() {
    if($(document).scrollTop() > 0) {
        $("#header").addClass("scroll");
    } else {
        $("#header").removeClass("scroll");
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
    getTitleParams();
    getRespParams();
});

$(document).scroll(function() {
    getRespParams();
});

$(document).ready(function() {

    getTitleParams();
    getRespParams();

    // ---------------

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'<span class="cursor"></span></span>';
        var that = this;
        var delta = 150 - Math.random() * 100;
        if (this.isDeleting) { delta /= 2; }
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        // var css = document.createElement("style");
        // css.type = "text/css";
        // css.innerHTML = ".typewrite > .wrap { border-right: 2px solid #292A2E;}";
        // document.body.appendChild(css);
    };

    // ---------------

    $(".respBtn").on("click", function(e) {
        e.preventDefault();
        $(".modal_nav").fadeIn(300);
        $(".respBtn").addClass("active");
        setTimeout(function() {
            $(".modal_nav").addClass("visible");
        }, 500);
    });

    $(".closeModalNav").on("click", function(e) {
        e.preventDefault();
        $(".modal_nav").removeClass("visible");
        $(".respBtn").removeClass("active");
        setTimeout(function() {
            $(".modal_nav").fadeOut(300);
        }, 500);
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".modal_nav").removeClass("visible");
            setTimeout(function() {
                $(".modal_nav").fadeOut(300);
            }, 500);
        }
    });

    if( $(".slider").length > 0 ) {
        $(".slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            appendDots: $(".slider_dots"),
            appendArrows: $(".slider_arrows"),
            // fade: true,
            responsive: [
                {
                  breakpoint: 1125,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                // {
                //   breakpoint: 540,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                //   }
                // }
              ]
        });
    }

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // -----------------

    $(".tab_link").on("click", function(e) {
        parent = $(this).closest(".tabs_list");
        parent.find(".tab_link").removeClass("active");
        $(this).addClass("active");
    });

    // -----------------

    Fancybox.bind("[data-fancybox]", {});

    // -----------------

    $(".dr_parent").each(function() {
        if(!$(this).hasClass("active")) {
            dr = $(this).find(".dr_content");
            dr.slideUp(300);
        }
    });

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_parent");
      sl = parent.find(".dr_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {               
        sl.slideUp(300);
        parent.removeClass("active");
      }
    });

    // ----------------

    $( ".hovder_dr_item" ).bind({
      mouseenter: function() {
        $(this).addClass( "active" );
        dr = $(this).find(".hovder_dr_item_content");
        height = $(this).find(".dr_inner_wrapp").outerHeight();
        dr.stop().animate({
            "height" : height + "px"
        }, 700, function() {
            dr.css({
                "height" : "auto"
            });
        });
      },
      mouseleave: function() {
        $(this).removeClass( "active" );
        dr = $(this).find(".hovder_dr_item_content");
        height = $(this).find(".dr_inner_wrapp").outerHeight();
        dr.stop().animate({
            "height" : "0"
        }, 700);
      }
    });

    // --------------

    if( $(".icons_slider").length > 0 ) {
        $(".icons_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            variableWidth: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true
        });
    }

    // -------------

    $(".price_thumb_wrapp").each(function () {
        height = $(this).find(".price_thumb_content").height();
        $(this).height(height);
    });

    $( ".price_thumb" ).bind({
      mouseenter: function() {
        $(this).addClass( "active" );
        dr = $(this).find(".dr_content_price_height");
        height = $(this).find(".dr_content_price").outerHeight();
        dr.stop().animate({
            "height" : height + "px"
        }, 300, function() {
            dr.css({
                "height" : "auto"
            });
        });
      },
      mouseleave: function() {
        $(this).removeClass( "active" );
        dr = $(this).find(".dr_content_price_height");
        height = $(this).find(".dr_content_price").outerHeight();
        dr.stop().animate({
            "height" : "0"
        }, 300);
      }
    });

    // --------------

    $(".form_link").on("click", function(e) {
        e.preventDefault();
        id=$(this).attr("id");
        $(".hideCallText").addClass("hidden");
        setTimeout(function() {
            $(".form_js_input").removeClass("visible");
            $("[data-id = '"+id+"']").addClass("visible");
        }, 500);
    });

    $(".pl_text span").on("click", function(e) {
        e.preventDefault();
        id = $(this).attr("data-sub-id");
        $(".form_js_input").removeClass("visible");
        $("[data-id = '"+id+"']").addClass("visible");
    });

    $( ".subBtn" ).bind({
      mouseenter: function() {
        parent = $(this).closest(".formn_templ");
        parent.addClass( "active" );
      },
      mouseleave: function() {
        parent = $(this).closest(".formn_templ");
        parent.removeClass( "active" );
      }
    });

    if($("[type='tel']").length > 0) {
        $("[type='tel']").inputmask({"mask": "+7(999)999-99-99"});
    }

    // -----------------

   $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      topCoord = $(document).scrollTop();
      $("body").addClass("fixed");
      $("body").css({
          "top" :  -1 * topCoord + "px",
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup]").each(function() {
        popupNameActive = $(this).attr('data-popup');
        if(popupNameActive != popupName) {
            $(this).fadeOut(300);
        }
      });
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").removeClass("fixed");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").attr("style", "");
      $("[data-popup]").fadeOut(300);
      $(".popup_bg").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").removeClass("fixed");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").attr("style", "");      
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");    
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // ----------------

    $("#headerContact .mail_link").on("mouseover", function () {
        $(".dr_contacts_wrapp").addClass("mailDr");
    });

    $("#headerContact .tel_link").on("mouseover", function () {
        $(".dr_contacts_wrapp").addClass("telDr");
    });

    $("#headerContact.dr_contacts_wrapp").on("mouseleave", function () {
        $(this).removeClass("mailDr");
        $(this).removeClass("telDr");
    });

    // ---------------

    $('.marquee').marquee({
        duration: 20000,
        startVisible: true,
        duplicated: true
    });



});