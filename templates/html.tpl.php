<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="utf-8">
    <base href="<?php echo $GLOBALS['base_path']; ?>"/>
    <link rel="icon" type="image/png" href="<?php echo base_path() . path_to_theme(); ?>/favicon.png">
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0">-->
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />


    <link rel="stylesheet"
          href="<?php echo base_path() . path_to_theme() ?>/css/app.css?<?php echo variable_get('css_js_query_string', '0') ?>" >
          <?php print $styles; ?>
          <?php print $scripts; ?>
    <script>
//        (function (i, s, o, g, r, a, m) {
//            i['GoogleAnalyticsObject'] = r;
//            i[r] = i[r] || function () {
//                    (i[r].q = i[r].q || []).push(arguments)
//                }, i[r].l = 1 * new Date();
//            a = s.createElement(o),
//                m = s.getElementsByTagName(o)[0];
//            a.async = 1;
//            a.src = g;
//            m.parentNode.insertBefore(a, m)
//        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
//
//        ga('create', 'UA-67168629-1', 'auto');
//        ga('send', 'pageview');

    </script>
    <meta property="fb:pages" content="127497010925409" />  
  </head>

  <body class="<?php print $classes; ?> <?php
  if (isset($GLOBALS['body-class'])) {
    echo $GLOBALS['body-class'];
  }
  ?>" <?php print $attributes; ?>>

    <!--- facebook sdk -->

    <div id="fb-root"></div>
    <script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id))
          return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=599028756846382";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

    <!-- end facebook sdk -->
    <div class="w-mtopmenu">
      <div class="mtopmenu">
        <div class="logo">
          <a href="/"><img class="mtoplogo" src="<?php echo base_path() . path_to_theme() ?>/assets/mtoplogo.png" alt=""></a>
        </div>
        <div class="msearch-box">
          <form action="/search/node">
            <input type="text" class="searchtxt" placeholder="ابحث في 218" name="keys">
            <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;"/>


          </form>
        </div>


        <div class="mtwocell">
          <div class="left">

          </div>
          <div class="right">
            <ul>
              <?php foreach ($menus['nav'] as $index => $item): ?>
                <?php
                $url = strtok($_SERVER["REQUEST_URI"], '?');
                $url_hash = md5(parse_url($url, PHP_URL_PATH));
                $url_nav = strtok($item['href'], '?');
                $url_nav_hash = md5(parse_url($url_nav, PHP_URL_PATH));
                ?>
                <li><a class="<?php echo $url_hash == $url_nav_hash ? 'active' : '' ?>"
                       href="<?php echo $item['href'] ?>"><?php echo $item['title'] ?></a></li>
                <?php endforeach ?>

            </ul>

          </div>
        </div>

        <div class="down">

        </div>


      </div>
    </div>


    <nav class="pushy pushy-right">
      <div style='min-height:750px;height:auto;overflow-y:auto'>
        <ul>
          <div class="msearch-box">
            <form action="/search/node">
              <input type="text" class="searchtxt" placeholder="ابحث في 218" name="keys">
              <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;"/>


            </form>
          </div>
        </ul>
        <ul class="social">
          <li><a href="https://www.facebook.com/218tv" target="_blank"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.twitter.com/218tv" target="_blank"><i class="fa fa-twitter"></i></a></li>
          <li><a href="https://plus.google.com/u/0/105631431473587138124/posts" target="_blank"><i
                class="fa fa-google-plus"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCJaQYZQ8X3wOWtNDT6Wn3Rg" target="_blank"><i
                class="fa fa-youtube"></i></a></li>
        </ul>
        <ul>
          <?php foreach ($menus['nav'] as $index => $item): ?>
            <?php
            $url = strtok($_SERVER["REQUEST_URI"], '?');
            $url_hash = md5(parse_url($url, PHP_URL_PATH));
            $url_nav = strtok($item['href'], '?');
            $url_nav_hash = md5(parse_url($url_nav, PHP_URL_PATH));
            ?>
            <li><a class="<?php echo $url_hash == $url_nav_hash ? 'active' : '' ?>"
                   href="<?php echo $item['href'] ?>"><?php echo $item['title'] ?></a></li>
            <?php endforeach ?>

        </ul>
        <ul><li style="height:60px;visibility:hidden"></li></ul>
      </div>
    </nav>

    <?php print $page_top; ?>
    <div class="w-mnav">
      <div class="mnav">
        <?php if (!drupal_is_front_page()) { ?>
          <a href="/">
            <div class="back">
              رجوع
            </div>
          </a>    
        <?php } ?>
        <div class="burger">
          <a class="menu-btn" href="#"><img src="<?php echo base_path() . path_to_theme() ?>/assets/burger.png"
                                            alt=""></a>
        </div>
        <div class="logo">
          <a href="<?php echo base_path() ?>"><img
              src="<?php echo base_path() . path_to_theme() ?>/assets/logo-mobile.svg" alt=""></a>
        </div>

      </div>
    </div>

    <div class="w-header">
      <div class="header">
        <div class="logo">
          <a href="<?php echo base_path() ?>"><img src="<?php echo base_path() . path_to_theme() ?>/assets/logo.svg"
                                                   alt="" height="43px"></a>
        </div>

        <div class="nav">
          <ul>
            <?php
            $skip = 1;
            foreach ($menus['nav'] as $index => $item):
              if (0 < $skip) {
                $skip--;
                continue;
              }
              ?>
              <?php
              $url = strtok($_SERVER["REQUEST_URI"], '?');
              $url_hash = md5(parse_url($url, PHP_URL_PATH));
              $url_nav = strtok($item['href'], '?');
              $url_nav_hash = md5(parse_url($url_nav, PHP_URL_PATH));
              ?>
              <li><a class="<?php echo $url_hash == $url_nav_hash ? 'active' : '' ?>"
                     href="<?php echo $item['href'] ?>"><?php echo $item['title'] ?></a></li>
              <?php endforeach ?>
          </ul>

          <div class="search-box">
            <form action="/search/node">
              <input type="text" class="searchtxt" name="keys">
              <input type="submit" style="position: absolute; left: -9999px; width: 1px; height: 1px;"/>


            </form>
          </div>

          <ul class="social">
            <li><a href="https://www.facebook.com/218tv" target="_blank"><i class="fa fa-facebook-square"></i></a></li>
            <li><a href="https://www.twitter.com/218tv" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://plus.google.com/u/0/105631431473587138124/posts" target="_blank"><i
                  class="fa fa-instagram"></i></a></li>
            <li><a href="https://plus.google.com/u/0/105631431473587138124/posts" target="_blank"><i
                  class="fa fa-google-plus"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCJaQYZQ8X3wOWtNDT6Wn3Rg" target="_blank"><i
                  class="fa fa-linkedin"></i></a></li>
          </ul>
          <div class="weather">
            <ul>
              <li>
                <div class="info">
                  <div>القاهره</div>
                  <div class="weather-temperature-ny"></div>
                </div>
                <div class="icon ny">
                  <img src="" class="weather-icon-ny" alt="Weather Icon"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <?php if (drupal_is_front_page()):
      ?>
      <div class="news-ticker">
        <div class="container">
          <label>عاجل</label>
          <ul id="webticker">
            <?php
            foreach ($ticker as $tn):
              ?><li><?php echo $tn->title; ?></li>
              <?php
            endforeach;
            ?>
          </ul>
        </div>
      </div>
    <?php endif;
    ?>
    <div class="site-overlay"></div>
    <div id="container">
      <?php print $page; ?>
    </div>
    <div class="w-footer">
      <div class="footer">
        <div class="row">
          <div class="cell-3 pd">
            <div class="flogo">
              <a href="<?php echo base_path() ?>"><img
                  src="<?php echo base_path() . path_to_theme() ?>/assets/footer-logo.png" alt="218tv white logo" ></a>
            </div>

            <ul class="nav">
              <?php foreach ($menus['footer'] as $item): ?>
                <li><a href="<?php echo $item['href'] ?>"><?php echo $item['title'] ?></a></li>
              <?php endforeach ?>
            </ul>
          </div>
          <div class="cell-3" style="padding-bottom: 0px;">
            <div class="iphone">
              <img src="sites/all/themes/tv218/assets/218-iphone.png"/>
            </div>
            <ul class="mob-app">
              <li style="font-size:0.6em;">218 APP</li>
              <li><a href="#"><i class="fa fa-apple" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-android" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-windows" aria-hidden="true"></i></a></li>
            </ul>
          </div>

          <div class="cell-3 pd">
            <div class="form-newsletter" style="width: 100%;">
              <h4 style="color: #fff;">اشترك</h4>
              <!-- Begin MailChimp Signup Form -->
              <!--<link href="//cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css">-->
              <style type="text/css">
                /*#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }*/
                /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
                   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
              </style>
              <div id="mc_embed_signup">
                <form action="//ana.us11.list-manage.com/subscribe/post?u=dc3c27747693723b928932a2a&amp;id=37251ca25b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">

                    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="أدخل بريدك الالكتروني" required style="border-radius: 4px;width: 222px;height: 36px;float: right;">
                    <div class="submit_form_btn"><input type="submit" value="<" name="subscribe" id="mc-embedded-subscribe" class="button" style="float: right;width: 36px;height: 36px; background-color: #437e85;border-radius: 4px;text-align: center;vertical-align: middle;"></div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;"><input type="text" name="b_dc3c27747693723b928932a2a_37251ca25b" tabindex="-1" value=""></div>
                  </div>
                </form>
              </div>
              <!--End mc_embed_signup-->
            </div>
            <div class="clearfix"></div>
            <ul class="social">
              <li><a href="https://www.facebook.com/218tv" target="_blank"><i class="fa fa-facebook-square"></i></a></li>
              <li><a href="https://www.twitter.com/218tv" target="_blank"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://plus.google.com/u/0/105631431473587138124/posts" target="_blank"><i
                    class="fa fa-instagram"></i></a></li>
              <li><a href="https://plus.google.com/u/0/105631431473587138124/posts" target="_blank"><i
                    class="fa fa-google-plus"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UCJaQYZQ8X3wOWtNDT6Wn3Rg" target="_blank"><i
                    class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


    <div class="mshrink hide">
      <a class="" href="#"> <?php echo $mlabels[0] ?></a>
    </div>


    <div class="mrelated">
      <a class="" href="#"> <?php echo $mlabels[1] ?></a>
    </div>

    <ul class="msocial">
      <li>
        <a href="#">
          <div class="mface msi"></div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="mtw msi">
          </div>
        </a>
      </li>

      <li>
        <a href="#">
          <div class="mgoogle msi">

          </div>
        </a>
      </li>
    </ul>


    <?php print $page_bottom; ?>


    <script type="text/javascript" src="<?php echo base_path() . path_to_theme() ?>/js/app2.js?<?php echo variable_get('css_js_query_string', '0') ?>"></script>
    <script type="text/javascript" src="<?php echo base_path() . path_to_theme() ?>/js/jquery.webticker.min.js?<?php echo variable_get('css_js_query_string', '0') ?>"></script>

    <script type="text/javascript" src="<?php echo base_path() . path_to_theme() ?>/js/moment-with-locales.js?<?php echo variable_get('css_js_query_string', '0') ?>"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jcarousel/0.3.4/jquery.jcarousel.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jcarousel/0.3.4/jquery.jcarousel-autoscroll.js"></script>

    <script>
      function render_ar_date(date_en) {
        if (moment(date_en).isValid()) {
          moment.locale("ar-sa");
          var ar_month = moment(date_en).format("MMMM");
          var ar_day = moment(date_en).format("dddd");
          var am_pm = moment(date_en).format("A");
          moment.locale("en");
          var en_date = moment(date_en).format("DD");
          var en_date = moment(date_en).format("DD");
          var en_year = moment(date_en).format("YYYY");
          return ar_day + " " + en_date + " / " + ar_month + " / " + en_year;
        } else {
          return date_en;
        }
      }


      (function ($) {
        $(function () {
          $('#hero').jcarousel().jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true
          });

          $('.jcarousel-control-prev')
                  .on('jcarouselcontrol:active', function () {
                    $(this).removeClass('inactive');
                  })
                  .on('jcarouselcontrol:inactive', function () {
                    $(this).addClass('inactive');
                  })
                  .jcarouselControl({
                    target: '-=1'
                  });

          $('.jcarousel-control-next')
                  .on('jcarouselcontrol:active', function () {
                    $(this).removeClass('inactive');
                  })
                  .on('jcarouselcontrol:inactive', function () {
                    $(this).addClass('inactive');
                  })
                  .jcarouselControl({
                    target: '+=1'
                  });
        });
        $("#hero2").owlCarousel({
        items:1,
                singleItem:true,
                autoPlay:true,
                pagination:false,
                navigation: true,
                navigationText:[
                        "<i class='icon - chevron - left icon - white'>&lsaquo;</i>",
                        "<i class='icon - chevron - right icon - white'>&rsaquo;</i>"
                ]
      });
      })(jQuery);
              $(document).ready(function () {
        $("#webticker").webTicker({
          direction: "right", //if to move left or right
          moving: true, //weather to start the ticker in a moving or static position
          startEmpty: true, //weather to start with an empty or pre-filled ticker
          duplicate: false, //if there is less items then visible on the ticker you can duplicate the items to make it continuous
          hoverpause: false
        });

        setTimeout(function () {
          $(".show-episodes li p").each(function () {
            var date_en = $.trim($(this).html());
            if (date_en != '') {
              $(this).html(render_ar_date(date_en));
            }
          });
          $(".show-featured li p").each(function () {
            var date_en = $.trim($(this).html());
            if (date_en != '') {
              $(this).html(render_ar_date(date_en));
            }
          });
          $("#episode-headline .a-date").each(function () {
            var date_ar = $.trim($(this).html());
            console.log(date_ar);
            console.log(moment(date_ar, "LLLL", "ar-tn").format("MMMM"));
            var ar_month = moment(date_ar, "LLLL", "ar-tn").format("MMMM", "ar-sa");
            ar_month = ar_month.replace('أفريل', 'ابريل');
            var ar_day = moment(date_ar, "LLLL", "ar-tn").format("dddd", "ar");
            moment.locale("ar-sa");
            var am_pm = moment(date_ar, "LLLL", "ar-tn").format("A");
            if (am_pm == "PM")
              am_pm = 'مساءً';
            else {
              am_pm = 'صباحًا';
            }
            var en_date = moment(date_ar, "LLLL", "ar-tn").format("DD", "en");
            var en_year = moment(date_ar, "LLLL", "ar-tn").format("YYYY", "en");
            var en_hh = moment(date_ar, "LLLL", "ar-tn").format("hh", "en");
            var en_mm = moment(date_ar, "LLLL", "ar-tn").format("mm", "en");
            var f_date = ar_day + " " + en_date + " / " + ar_month + " / " + en_year + " " + en_hh + ":" + en_mm + " " + am_pm;
            $(this).html(f_date);
          });
        }, 500);
      });
      /*var current_ele = null;     
       $(document).ready(function(){  
       setTimeout(function(){    
       $(".show-episodes li a").click(function(e){ 
       //$(".show-episodes li a").each(function(e){     
       e.preventDefault();    
       var vid = $(this).attr("href").split("/")[2];
       current_ele = this;    
       if(vid!=''){
       var playurl = "<?php echo $base_url; ?>/load-ajax/video/"+vid+"/173";    
       $.get( playurl, function( data ) {
       renderPlayer(data,current_ele);
       });
       
       }
       });
       },1000);
       
       setTimeout(function(){    
       $(".show-featured li a").click(function(e){ 
       //$(".show-episodes li a").each(function(e){     
       e.preventDefault();    
       var vid = $(this).attr("href").split("/")[2];
       current_ele = this;    
       if(vid!=''){
       var playurl = "<?php echo $base_url; ?>/load-ajax/video/"+vid+"/336";    
       $.get( playurl, function( data ) {
       renderPlayer(data,current_ele);
       });
       
       }
       });
       },1000);    
       });
       
       function renderPlayer(playerurl,element){
       
       
       var html = '<div style="display:none" class="video_player">'+playerurl+'</div>';
       $(element).append(html);
       setTimeout(function(){
       $(current_ele).find("img").hide();
       $(current_ele).find(".fa-play").hide();
       $(current_ele).find(".video_player").show();
       // $(".video_player iframe").trigger("click");
       },500);
       }*/
    </script>

    <script>
      function reinitvideoblk() {
        var owl = jQuery('.owl-carousel');
        var owlInstance = owl.data('owlCarousel');
        if (owlInstance != null)
          owlInstance.reinit();


      }
      function renderlive(json) {
        var jobj = $.parseJSON(json);
        var html = '<ul class="row">';
        for (var i = 0; i < 3; i++) {
          if (jobj[i].id != '') {
            console.log(jobj);
            /* if(i==0){ var tvtext = 'يُعرض الآن';} 
             else if(i==1){ var tvtext = 'التالي'; }
             else if(i==2){ var tvtext = 'لاحقاً'; }       */
            html += '<li data-id=' + jobj[i].id + ' class="cell-3"><article class="snippet"> ';
            // html += '<h3>'+tvtext+'</h3>';       
            html += '<a class="toparticles" href="/episode/' + jobj[i].id + '">';
            if (i == 0) {
              //html +='<span class="reddot">مباشر</span>';
              //html +='<span class="playicon"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>';    
            }
            html += '<img src="http://admin.mangomolo.com/analytics/' + jobj[i].img + '">';
            if (i != 0) {
              //html +='<span class="caption">';
              //html +='<span class="titletitle">الليبي يحدد</span>';
              //html +='<time><span class="lytime">'+moment(jobj[i].start_time,'hh:mm:ss').add("3", "hours").format("hh:mm")+'</span> <span class="smtime">'+moment(jobj[i].start_time,'hh:mm:ss').format("hh:mm")+' GMT</span></time></span>';
            }
            html += '</a>';

            //if(i == 0){

            //html +='<p class="showtitle">'+jobj[i].title_ar+'<span>بحر</span></p></li>';   
            //} else {
            html += '<p class="showtitle text"><a  href="/episode/' + jobj[i].id + '">' + jobj[i].title_ar + '</a></p></li>';
            //}
            html += '</article></li>';
          }
        }
        html += "</ul>";

        $("#liveshow-rail .toplisting").html(html);
      }
      jQuery(function () {
        var liveurl = 'ajax/live/load';
        console.log(liveurl);
        $.get(liveurl, function (data) {
          renderlive(data);

        });
        jQuery("form#search-form").hide()
        setTimeout(reinitvideoblk, 500);
        jQuery(".nav  .search-box form").submit(function (e) {
          e.preventDefault();
          var searchval = jQuery(".nav  .search-box form .searchtxt").val();
          if (searchval != '') {
            window.location = jQuery(this).attr("action") + "?keys=" + searchval;

          }
        });

      });
      jQuery(document).ready(function () {

        $(".mpu").bind("click", function () {
          var bannerurl = $(".mpu div.content p a").attr("href");
          window.location = bannerurl;
        });
        /*jQuery("a").click(function(e){
         e.stopPropagation();
         });*/
        if (jQuery("#edit-submitted-attachment-upload-button").length > 0) {
          jQuery("#edit-submitted-attachment-upload-button").val('ارفع الملف');
        }


      });
      jQuery('.mrelated a').on('click', function () {
        jQuery('.first').addClass('first-open');
        jQuery('.second').addClass('hide');
        jQuery('.msocial').addClass('hide');

        jQuery(this).parent().addClass('hide');
        jQuery('.mshrink').removeClass(('hide'));

        //front hero
        jQuery('.w-hero').addClass('hide');
        jQuery('.main').addClass('secondary')
        jQuery(".w-featured").show();

      });

      jQuery('.mshrink a').on('click', function () {
        jQuery('.msocial').removeClass('hide');
        jQuery('.first').removeClass('first-open');
        jQuery('.second').removeClass('hide');

        jQuery(this).parent().addClass('hide');
        jQuery('.mrelated').removeClass(('hide'));
        jQuery('.w-hero').removeClass('hide');
        jQuery('.main').removeClass('secondary')
        jQuery(".w-featured").hide();

      });


    </script>

    <?php if ($is_front) { ?>
      <script>
        jQuery(window).bind('orientationchange resize', function (event) {
          if (event.orientation) {
            if (event.orientation == 'landscape') {
              if (window.rotation == 90) {
                rotate(this, -90);
              } else {
                rotate(this, 90);
              }
            }
          }
        });

        function rotate(el, degs) {
          iedegs = degs / 90;
          if (iedegs < 0)
            iedegs += 4;
          transform = 'rotate(' + degs + 'deg)';
          iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + iedegs + ')';
          styles = {
            transform: transform,
            '-webkit-transform': transform,
            '-moz-transform': transform,
            '-o-transform': transform,
            filter: iefilter,
            '-ms-filter': iefilter
          };
          jQuery(el).css(styles);
        }

        var isMobile = false; //initiate as false
        jQuery(function () {
          var current_width = jQuery(window).width();
          if (current_width < 600) {
            isMobile = true;
          }

          // device detection
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
            isMobile = true;
          if (isMobile == true) {
            jQuery('.w-mnav').addClass('trans');
            jQuery("div.two-items article").each(function () {
              if (jQuery(this).hasClass('with-img')) {
                jQuery(this).removeClass('with-img');
                jQuery(this).find("a.with-img-text").hide();
                jQuery(this).find("h3").attr("style", "margin: 0.8125em 0;height: 2.25em;font-size: 1.075em;line-height: 1.5em");
                jQuery(this).find("h3").show();
                jQuery(this).find("h3 a").attr("style", "bottom:0px;padding:0px;color:#222;text-shadow:none;");
              }
            });
          }
          jQuery('.w-mnav').addClass('hide');
          var waypoint = new Waypoint({
            element: jQuery('.hero'),
            handler: function (direction) {
              jQuery('.w-mnav').removeClass('trans');
            }
          });
          jQuery('.w-mtopmenu').remove();
          jQuery(this).scrollTop(0);
          jQuery('.w-mnav').removeClass('hide');

        });
        jQuery(document).ready(function () {
          if (isMobile == true) {
            jQuery(".hidemob").hide();
            jQuery(".showmob").show();
          }

        });

        var firstrun = true;
        jQuery(window).on('scroll', function (e) {
          if (jQuery(this).scrollTop() > 648 && firstrun) {

            jQuery('.w-mtopmenu').remove();
            //jQuery(this).scrollTop(0);
            jQuery('.w-mnav').addClass('trans');
            //firstrun = false;

            //lol this is to make sure we reached point 1 because scrollTaop changes after removing the first block
          }
          ;
        });

        jQuery(document).ready(function () {
          jQuery('.bth-mbshr').click(function (e) {
            e.preventDefault();
            jQuery('#live-broadcast').html('<iframe frameborder="0" scrolling="no" src="http://admin.mangomolo.com/analytics/index.php/customers/embed/index?id=OTc=&channelid=NDU=&countries=QUQsQUUsQUYsQUcsQUksQUwsQU0sQU8sQVEsQVIsQVMsQVQsQVUsQVcsQVgsQVosQkEsQkIsQkQsQkUsQkYsQkcsQkgsQkksQkosQkwsQk0sQk4sQk8sQlEsQlIsQlMsQlQsQlYsQlcsQlksQlosQ0EsQ0MsQ0QsQ0YsQ0csQ0gsQ0ksQ0ssQ0wsQ00sQ04sQ08sQ1IsQ1UsQ1YsQ1csQ1gsQ1ksQ1osREUsREosREssRE0sRE8sRFosRUMsRUUsRUcsRUgsRVIsRVMsRVQsRkksRkosRkssRk0sRk8sRlIsR0EsR0IsR0QsR0UsR0YsR0csR0gsR0ksR0wsR00sR04sR1AsR1EsR1IsR1MsR1QsR1UsR1csR1ksSEssSE0sSE4sSFIsSFQsSFUsSUQsSUUsSUwsSU0sSU4sSU8sSVEsSVIsSVMsSVQsSkUsSk0sSk8sSlAsS0UsS0csS0gsS0ksS00sS04sS1AsS1IsS1csS1ksS1osTEEsTEIsTEMsTEksTEssTFIsTFMsTFQsTFUsTFYsTFksTUEsTUMsTUQsTUUsTUYsTUcsTUgsTUssTUwsTU0sTU4sTU8sTVAsTVEsTVIsTVMsTVQsTVUsTVYsTVcsTVgsTVksTVosTkEsTkMsTkUsTkYsTkcsTkksTkwsTk8sTlAsTlIsTlUsTlosT00sUEEsUEUsUEYsUEcsUEgsUEssUEwsUE0sUE4sUFIsUFMsUFQsUFcsUFksUUEsUkUsUk8sUlMsUlUsUlcsU0EsU0IsU0MsU0QsU0UsU0csU0gsU0ksU0osU0ssU0wsU00sU04sU08sU1IsU1MsU1QsU1YsU1gsU1ksU1osVEMsVEQsVEYsVEcsVEgsVEosVEssVEwsVE0sVE4sVE8sVFIsVFQsVFYsVFcsVFosVUEsVUcsVU0sVVMsVVksVVosVkEsVkMsVkUsVkcsVkksVk4sVlUsV0YsV1MsWEssWUUsWVQsWkEsWk0sWlc=&w=100%&h=100%&filter=ALLOW&signature=6ac510bca4588d450bcfc976552bc2c7&autoplay=true" allowtransparency="true" width="100%" height="100%" style="min-height:170px;" allowfullscreen></iframe>');
            jQuery('#live-broadcast').css('background', 'none');
          });
        });



      </script>
    <?php } ?>

  </body>
</html>