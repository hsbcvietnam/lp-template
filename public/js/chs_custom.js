$(document).ready(function() {
  hide_cards();
  show_cards('gold');
  var bar_height = $(".chs_header_bg").outerHeight() + $(".chs_translate_bg").outerHeight();
  $("a.chs_links_apply.platinum").on('click', function(event) {
    $('html, body').animate({
      scrollTop: $("#chs_cards_platinum").offset().top - bar_height - 5,
    }, 1000);
  });
  $("a.chs_links_apply.cashback").on('click', function(event) {
    $('html, body').animate({
      scrollTop: $("#chs_cards_cashback").offset().top - bar_height - 5,
    }, 1000);
  });
  $("a.chs_links_apply.classic").on('click', function(event) {
    $('html, body').animate({
      scrollTop: $("#chs_cards_classic").offset().top - bar_height - 5,
    }, 1000);
  });
  var screen_width = $(window).width();
  if (screen_width <= 480) {
    $("#myCarousel").removeClass("multi-item-carousel");
  }
  // set_height();
  // alert(header_index);
})

var max_index = 0;
$(window).scroll(function() {
  $(".chs_cards_show>li:last-child").removeClass('active');
  var header_index = $(".chs_header_bg").outerHeight();

  // if ($(window).scrollTop() >= max_index) {
  //   max_index = $(window).scrollTop();
  //   $(".chs_header_bg").addClass("sticky").removeClass("sticky_show");
  //   $(".chs_translate_bg").addClass("sticky").removeClass("sticky_show");
  // } else if ($(window).scrollTop() <= 100) {
  //   max_index = 100;
  //   $(".chs_header_bg").removeClass("sticky").addClass("sticky_show");
  //   $(".chs_translate_bg").removeClass("sticky").addClass("sticky_show");
  // } else {
  //   max_index = $(window).scrollTop();
  //   $(".chs_header_bg").removeClass("sticky").addClass("sticky_show");
  //   $(".chs_translate_bg").removeClass("sticky").addClass("sticky_show");
  // }

})

$(".chs_cards_show>li:first-child").click(function(){
  if($(".chs_cards_show>li:last-child").hasClass('active')){
    $(".chs_cards_show>li:last-child").removeClass('active');
    $(".chs_cards_show>li:first-child").removeClass('active');
  }else{
    $(".chs_cards_show>li:last-child").addClass('active');
    $(".chs_cards_show>li:first-child").addClass('active');
  }
})

$(".chs_cards_show>li:last-child").click(function(){
  $(".chs_cards_show>li:last-child").removeClass('active');
})

$(".chs_tnc_links").click(function(){
  if($(".chs_tnc_links").hasClass("active")){
    $(".chs_tnc_links").removeClass("active");
    $("ol.chs_tnc_details").hide(150);
  }else{
    $(".chs_tnc_links").addClass("active");
    $("ol.chs_tnc_details").show(150);
  }
});

$("ul.chs_offer_box_links li.popup").click(function() {
  removeClass();
  $("ul.chs_box_info_list>li:first-child").addClass("active");
  $("ul.chs_box_info_list>li:nth-child(2)").addClass("active");
  $("ul.chs_box_info_details>li:first-child").addClass("active");
  $(".chs_box_info_text>img").addClass("active");
});
$("ul.chs_box_info_list>li").click(function() {
  if($(this).hasClass("active")){
    removeClass();
  }else{
    removeClass();
    $(this).addClass("active");
    $(".chs_box_info_dash").addClass("active");
    $(this).next().toggleClass("active");

    var num_item = $(this).index();
    if(num_item == 0){
      num_item = 1;
    }else if(num_item == 2){
      num_item = 2;
    }else {
      num_item = 3;
    }
    $("ul.chs_box_info_details>li:nth-child(" + num_item + ")").addClass("active");
    $(".chs_box_info_text>img").addClass("active");
  }
});

$(".chs_box_info_dash").click(function() {
  removeClass();
});
$("ul.chs_box_info_list>li:nth-child(2)").click(function() {
  removeClass();
});
$("ul.chs_box_info_list>li:nth-child(4)").click(function() {
  removeClass();
});
$("ul.chs_box_info_list>li:nth-child(6)").click(function() {
  removeClass();
});

function removeClass(){
  $("ul.chs_box_info_details li").removeClass("active");
  $(".chs_box_info_dash").removeClass("active");
  $("ul.chs_box_info_list li").removeClass("active");
  // $(".chs_box_info_text>img").show();
  $(".chs_box_info_text>img").removeClass("active");
}

var show_tab_item;

function set_height(){
  // --------- HEIGHT CARDS ------------
  //title_tnc
  // var height_tnc = $(".title_tnc").height();
  // var x = document.getElementsByClassName("title_tnc");
  // for(var i = 0; i < 3; i++){
  //   x[i].style.height = height_tnc + 20 + "px";
  // }

  //btn_list
  var height_btn_list = $(".chs_box_item_btn_list").height();
  var z = document.getElementsByClassName("chs_box_item_btn_list");
  for(var i = 0; i < 3; i++){
    z[i].style.height = height_btn_list + 20 + "px";
  }

  //title_offer
  var height_offer = $(".title_offer").height();
  var y = document.getElementsByClassName("title_offer");
  for(var i = 0; i < 3; i++){
    y[i].style.height = height_offer + 20 + "px";
  }

  // var height_box_item = height_tnc + height_offer + height_btn_list;
  var height_box_item = height_offer + height_btn_list;
  var height_item = document.getElementsByClassName("chs_offer_box_item cards");
  for(var i = 0; i < 3; i++){
    height_item[i].style.height = height_box_item + 150 + "px";
  }

  // -------------- HEIGHT OFFER -------------
  //height offer text
  var height_box_offer = $(".merchants").height();
  var height_box_offer_item = document.getElementsByClassName("chs_offer_box_item offer_items");
  for(var i = 0; i < 3; i++){
    height_box_offer_item[i].style.height = height_box_offer + 100 + "px";
  }


}

function show_cards(show_tab_item) {
  hide_cards();
  show_cards_title(show_tab_item);
  $(".chs_cards_offer_" + show_tab_item).show();
}

function hide_cards() {
  $(".chs_cards_offer_hide").hide();
}
var num_title = "";

function show_cards_title(num_title) {
  hide_cards();
  hide_cards_title();
  $(".cards_" + num_title).show();
  remove_cards_tnc();
  show_cards_tnc(num_title);
}

function remove_cards_tnc(num_title){
  $(".chs_tnc_box span").removeClass("classic");
  $(".chs_tnc_box span").removeClass("gold");
  $(".chs_tnc_box span").removeClass("platinum");
}
function show_cards_tnc(num_title){
  $("span.vietnamese").addClass(num_title);
  $("span.foreigner").addClass(num_title);
  $("span.business_owner").addClass(num_title);
}
function hide_cards() {
  $(".chs_cards_offer_hide").hide();
}

function hide_cards_title() {
  $(".cards_platinum").hide();
  $(".cards_gold").hide();
  $(".cards_classic").hide();
}
var pageOption = {
  language: 'vietnamese',
};

if (document.URL.indexOf("pid=") != -1 || document.URL.indexOf("cid=") != -1) {
  jQuery("a[href*=' /1/2/vnm2/lead/card/the-tin-dung-hsbc-credit-card']").map(function() {
    $(this).attr("href", $(this).attr("href").split("?")[0] + "?" + document.URL.match(/[^&?]*?=[^&?]*/)[0])
  });
};
// /*dash selection*/
// $('#select-hometown').selectize();
// $('#select-income').selectize();


// $(".slick").slick({
//   dots: true,
//   arrows: !0,
//   slidesToShow: 3,
//   centerMode: !0,
//   centerPadding: "0",
//   prevArrow: '<img class="slick-prev" src="images/cashback/slick-arrow-left.png" alt=""/>',
//   nextArrow: '<img class="slick-next" src="images/cashback/slick-arrow-right.png" alt=""/>',
//   responsive: [{
//     breakpoint: 1200,
//     settings: {
//       dots: true,
//       arrows: !1,
//       slidesToShow: 1,
//       centerPadding: "25%"
//     }
//   }, {
//     breakpoint: 600,
//     settings: {
//       dots: true,
//       arrows: !0,
//       slidesToShow: 1,
//       centerPadding: "3rem"
//     }
//   }]
// });
// $(".slick").slick({
//   draggable: !1,
//   swipe: !1,
//   touchMove: !1,
//   dots: true,
//   arrows: !1,
//   autoplay: !0,
//   autoplaySpeed: 5e3
// })

/* --------------------------------------------------------------------
|
| -- Tagging Events
|
----------------------------------------------------------------------*/

var trackEvent = function(options, name) {
  // console.warn(options, name);
  TMS.trackEvent(options);
};

var trackView = function(options, name) {
  // console.warn(options, name);
  TMS.trackView(options);
};

$('form').on('focus', 'input, select', function(e) {

  var event_action = '',
    event_content = '';

  if ($(this).attr('type') === 'select-one') {
    event_action = "dropdown";
    event_content = $(this).closest('.form-group').find('select').attr('name');
  } else {
    event_action = $(this).attr('type');
    event_content = $(this).attr('name');
  }

  trackEvent({
    "page_name": utag_data.page_name + ":fill in details expanded",
    "event_category": "content",
    "event_action": 'Input ' + event_action,
    "event_content": event_content
  }, 'fields');
});

/**
* Merge two object and deduplicate
*/
var extend = function () {
  // Create a new object and
  var extended = {};
  // Merge the object into the extended object
  var merge = function (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        // Push each value from `obj` into `extended`
        extended[prop] = obj[prop];
      }
    }
  };

  // Loop through each object and conduct a merge
  for (var i = 0; i < arguments.length; i++) {
    merge(arguments[i]);
  }

  return extended;
};

/**
* Format query string into Object
*/
var getQueryObject = function(queries) {
  var queries = queries.split('&');
  var queryObject = {};

  queries.forEach(function(query) {
    var group = query.split('=');
    queryObject[decodeURIComponent(group[0])] = decodeURIComponent(group[1]);
  });

  return queryObject;
}

/**
* Build query string
*/
var buildQueryString = function(currentQueryObject, queryObject) {
  var finalObject = extend(currentQueryObject, queryObject)
  var queryArray = [];
  var keys = Object.keys(finalObject);
  keys.forEach(function(key, index) {
    queryArray.push(encodeURIComponent(key) + '=' + encodeURIComponent(finalObject[key]))
  });

  return queryArray.join('&');
}


$(function(){
  var currentSearchQuery = window.location.search;
  var currentURL = window.location.href
  var links = document.querySelectorAll('a');

  if(currentSearchQuery.length > 0) {
    var queries = window.location.search.substring(1);
    var queryObject = getQueryObject(queries);

    Array.prototype.forEach.call(links, function (link) {
      var href = link.href;
      // ignore url with hash and empty urls
      if(!href.match(/#+/g) && href !== currentURL) {
        if(link.search.length > 0) {
          var currentQueryObject = getQueryObject(link.search.substring(1));
          link.href = link.protocol + '//' + link.host + link.pathname + '?' + buildQueryString(currentQueryObject, queryObject)
        } else {
          link.href = link.href + currentSearchQuery
        }
      }
    });
  }
});
