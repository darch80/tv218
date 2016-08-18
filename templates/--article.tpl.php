<?php
global $base_url;
render($page['content']);
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

    var lastidsend = null;
    var eventfire = false;
    jQuery(window).data('ajaxready', true).scroll(function (e) {
      if (jQuery(window).data('ajaxready') == false)
        return;

      if (jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - 50) {
        jQuery(window).data('ajaxready', false);
        jQuery(".loadernode").show();

        loadpage();
      }
    });
    function loadpage() {
      jQuery(".loadernode").hide();
      var idnode = jQuery(".main").last().attr("id");
      var nextnode = jQuery(".main").last().attr("data-next-node");

      jQuery.get(ajax_base + "/load-ajax/node/next/" + nextnode + "/1", function (data) {
        jQuery(".w-main").append(data);
        jQuery(window).data('ajaxready', true);
        //jQuery('.footer').waypoint(function(direction){ loadpage(); this.destroy() });
        var title = jQuery("#" + nextnode).attr("data-title");
        var url = jQuery("#" + nextnode).attr("data-url");
        window.history.pushState(nextnode, title, url);

        addthis.update('share', 'url', url);
        addthis.update('share', 'title', title);
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
      <div class="row">
        <div class="cell-1">          
          <div class="pdc bg-white">          
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
            <?php if ($n->field_image['und'][0]['uri']): ?>
              <img src="<?php echo render_image('x585', $n->field_image['und'][0]['uri']); ?>" alt=""/>
            <?php endif ?>

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
            <?php
            $partner_related = <<<EOT
<div class="partner_related">
<div id="POSTQUARE_WIDGET_89044__{$n->nid}"></div>
<script>
(function(P,o,s,t,Q,r,e){P['PostquareObject']=Q;P[Q]=P[Q]||function(){ (P[Q].q=P[Q].q||[]).push(arguments)},P[Q].l=1*new Date();r=o.createElement(s), e=o.getElementsByTagName(s)[0];r.async=1;r.src=t;e.parentNode.insertBefore(r,e) })(window,document,'script','//widget.engageya.com/_pos_loader.js','__posWidget');
__posWidget('createWidget',{wwei:'POSTQUARE_WIDGET_89044__{$n->nid}',pubid:165623,webid:129638,wid:89044,on:'postquare'});
</script>
</div>
EOT;
            echo $partner_related;
            ?>
          </div>
        </div>
      </div>
    </div>

    <div class="second">
      <?php if (count($readlist)) { ?>
        <div class="row">
          <div class="cell-1">
            <div class="grey-list">
              <h3 class="bold">الأكثر قراءة </h3>
            </div>
            <ol class="topfive">
              <?php
              for ($i = 0; $i < count($readlist); $i++) {
                $no = $readlist[$i];
                ?>
                <li>
                  <a href="<?php echo render_href($no->nid) ?>">
                    <span><?php echo $i + 1 ?></span>
                    <?php echo $no->title ?>
                  </a>
                </li>
              <?php } ?>
            </ol>
          </div>
        </div>
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
        <div class="row">
          <div class="cell-1">
            <div class="grey-list">
              <h3 class="bold">تصفح المزيد</h3>
            </div>
            <ol class="topfive">
              <?php
              for ($i = 0; $i < count($related); $i++) {
                $no = $related[$i];
                ?>
              <li><a href="<?php echo render_href($no->nid) ?>"><span><?php echo $i+1;?></span> <?php echo $no->title ?></a></li>

              <?php } ?>
            </ol>
          </div>
        </div>
      <?php } ?>
    </div>
  </div>
</div>
<div class="loadernode" style="margin:0 auto;text-align:center;display:none">
</div>