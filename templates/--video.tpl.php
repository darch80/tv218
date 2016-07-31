<style>

  section + section {
    margin-top: 0.2em;
  }

  .video {
    position: relative;
    top: 0.5em;
    right: 0;
    width: 100%;
    transition: .5s;
    z-index: 5;
  }
  .aside {
    position: fixed;
    width: 15%;
  }
  h1 {
    padding: 1em;
    transition: opacity .5s;
  }
  .vid-wrap {
    height: 480px;
    background-color: hsl(0,0%,10%);
    transition: .5s;
  }
  .vid-wrap > iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    max-width: 854px;
  }
  .aside .vid-wrap {
    height: 240px;
  }
</style>
<?php render($page['content']); ?>
<?php
global $base_url;
$videoplayer = '';
$video_id = $n->field_videoid['und'][0]['value'];
?>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55ffe86a9942511b"
        async="async"></script>-->
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-569280f151cdc999" async="async"></script>

<script type="text/javascript">
  var addthis_share = {
// ... other options
    url_transforms: {
      shorten: {
        twitter: 'bitly',
        google: 'bitly',
        facebook: 'bitly'
      }
    },
    shorteners: {
      bitly: {}
    }
  }

  var ajax_base = '<?php echo $base_url; ?>';
<?php
if (module_exists('node_load_ajax')) {
  ?>

    //jQuery(document).scroll(function(e){
    /*jQuery(document).ready(function(){
     jQuery('.footer').waypoint(function(direction){ loadpage(); this.destroy() });
     
     });*/
    //});

    var lastidsend = null;
    var eventfire = false;
    //jQuery(window).unbind('scroll'); 
    //jQuery(window).scroll(function() {
    jQuery(window).data('ajaxready', true).scroll(function (e) {
      if (jQuery(window).data('ajaxready') == false)
        return;

      if (jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - 100) {
        jQuery(window).data('ajaxready', false);
        jQuery(".loadernode").show();

        loadpage();
      }
    });
    //});
    function loadpage() {
      jQuery(".loadernode").hide();
      var idnode = jQuery(".main").last().attr("id");
      var nextnode = jQuery(".main").last().attr("data-next-node");

      if (nextnode != "")
        jQuery.get(ajax_base + "/load-ajax/node/next/" + nextnode + "/1", function (data) {
          jQuery(".w-main").append(data);
          jQuery(window).data('ajaxready', true);
          //jQuery('.footer').waypoint(function(direction){ loadpage(); this.destroy() });
          var title = jQuery("#" + nextnode).attr("data-title");
          var url = jQuery("#" + nextnode).attr("data-url");
          window.history.pushState(nextnode, title, url);

          addthis.update('share', 'url', url);
          addthis.update('share', 'title', title);
          //addthis.update('share', 'description', "Hello, I am a description");

        });


    }
<?php } ?>
</script>

<?php if ($tabs): ?>
  <div class="node-tabs">
    <?php print render($tabs); ?>
  </div>
<?php endif; ?>

<div class="w-main">
  <?php $next_node = get_next_node_single($n); ?>
  <div class="main" id="<?php echo $n->nid ?>" data-next-node="<?php echo $next_node ?>">
    <div class="first">

<?php if ($author->title) { ?>

                    <!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55ffe86a9942511b"
                            async="async"></script>-->

        <!--<div class="author">
            <img class="a-img" src="<?php //echo $author->image   ?>" alt="">

            <div class="a-info">
                <div class="a-name"><?php //echo $author->title  ?></div>
                <div class="a-title">
        <?php //echo $author->description  ?>
                    <span class="a-date">
  <?php //echo render_ar_date($n->created);   ?>
                </span>
                </div>
            </div>


        </div>-->
      <?php } else { ?>

        <!--<div class="no-author">
        <?php //echo render_ar_date($n->created);   ?>
        </div>-->

        <?php } ?>
      <div class="no-author">
<?php echo render_ar_date($n->created); ?>
      </div>   

      <ul class="tags">
      <?php echo $tags['html']; ?>
      </ul>
      <?php if (isset($n->field_subtitle)) { ?>
        <span class="subtitle"><?php echo $n->field_subtitle['und'][0]['value'] ?></span>
        <h3 class="node-title" style="margin-top:0.5em !important;"><?php echo $title ?></h3>
      <?php } else { ?>
        <h3 class="node-title"><?php echo $title ?></h3>
<?php } ?>
          <?php if (!empty($video_id)) { ?>
        <div id="video-player-article">
          <section class="video">
        <?php get_video_play_url($video_id, true) ?>
          </section>    
        </div>    
      <?php } else { ?>
        <?php if ($n->field_image['und'][0]['uri']): ?>
          <img src="<?php echo render_image('x585', $n->field_image['und'][0]['uri']); ?>" alt=""/>
        <?php endif ?>
      <?php } ?>
      <?php if (($n->field_image['und'][0]['alt'])) { ?>
        <div class="img-caption"><?php echo $n->field_image['und'][0]['alt'] ?></div>
        <?php } ?>

      <div class="node-body">
<?php echo $r ?>
      </div>


<?php if (count($more)) { ?>

        <div class="strike-through-header">
          <h3 class="bold">ذات علاقة</h3>
        </div>




        <div class="w-three-col">
          <div class="one">
            <img src="<?php echo render_image('x307', $more[0]->field_image['und'][0]['uri']); ?>" alt="">

            <a href="<?php echo render_href($more[0]->nid); ?>"><h4><?php echo $more[0]->title ?></h4></a>
          </div>
  <?php if ($more[1]) { ?>
            <div class="two">
              <img src="<?php echo render_image('x307', $more[1]->field_image['und'][0]['uri']); ?>" alt="">


              <a href="<?php echo render_href($more[1]->nid); ?>"><h4><?php echo $more[1]->title ?></h4></a>
            </div>
  <?php } ?>
  <?php if ($more[2]) { ?>
            <div class="three">
              <img src="<?php echo render_image('x307', $more[2]->field_image['und'][0]['uri']); ?>" alt="">
              <a href="<?php echo render_href($more[2]->nid); ?>"><h4><?php echo $more[2]->title ?></h4></a>
            </div>
        <?php } ?>
        </div>

<?php } ?>



    </div>
    <div class="second">

      <?php if (count($readlist)) { ?>
        <div class="strike-through-header">
          <h3 class="bold">قائمة القراءة </h3>
        </div>

        <ol class="topfive">


          <?php
          for ($i = 0; $i < count($readlist); $i++) {
            $no = $readlist[$i];
            ?>
            <li><a href="<?php echo render_href($no->nid) ?>"><?php echo $no->title ?></a></li>

  <?php } ?>
        </ol>

<?php } ?>


      <div class="fb-page" data-href="https://www.facebook.com/218tv" data-width="300" data-height="500"
           data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
           data-show-facepile="true" data-show-posts="true">
        <div class="fb-xfbml-parse-ignore">
          <blockquote cite="https://www.facebook.com/218tv"><a href="https://www.facebook.com/218tv">218TV</a>
          </blockquote>
        </div>
      </div>
      <div class="twitter-block">
        <a class="twitter-timeline" href="https://twitter.com/218Tv" data-widget-id="682228831189626880">Tweets by @218Tv</a>
        <script>!function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
              js = d.createElement(s);
              js.id = id;
              js.src = p + "://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js, fjs);
            }
          }(document, "script", "twitter-wjs");</script>
      </div>
<?php if (count($related)) { ?>

        <div class="strike-through-header">
          <h3 class="bold">تصفح المزيد</h3>
        </div>
        <ol class="topfive">

          <?php
          for ($i = 0; $i < count($related); $i++) {
            $no = $related[$i];
            ?>
            <li><a href="<?php echo render_href($no->nid) ?>"><?php echo $no->title ?></a></li>

        <?php } ?>
        </ol>

<?php } ?>


    </div>

    

  </div>
  <div class="loadernode" style="margin:0 auto;text-align:center;display:none">
    <img src="<?php echo base_path() . path_to_theme() ?>/assets/nodeload.gif">
  </div>
<?php //echo render_other_nodes(4,$n);   ?>
</div>
</div>
<script>
  jQuery(function () {

    /*var vid = jQuery('.video');
     
     var top = vid.offset().top - parseFloat(vid.css('margin-top').replace(/auto/, 0));
     
     jQuery(window).on('scroll', function(event) {
     // what the y position of the scroll is
     var y = $(this).scrollTop();
     
     // whether that's below the form
     if (y >= top) {
     // if so, ad the fixed class
     if ( vid.is('.aside') ) {
     return;
     }
     vid.attr("style","position:fixed");
     vid.addClass('aside');
     jQuery('.video').find("iframe").height("auto");
     } else {
     // otherwise remove it
     vid.removeClass('aside');
     vid.attr("style","position:relative");
     jQuery('.video').find("iframe").height("336");
     }
     });*/

  });

</script>