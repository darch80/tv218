<?php
$nodes = $GLOBALS['_nodes'];
$cm = $GLOBALS['class_map'];
$popular = $GLOBALS['popular'];
?>
<div class="w-main">
  <div class="main">

    <div class="first">

      <div class="row">
        <div class="cell-1">
          <article class="article">
            <?php if ($nodes[0]->type == "video") { ?>
              <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="sites/all/themes/tv218/assets/playicon.png" alt=""></span>
            <?php } ?>
            <a href="<?php echo render_href($nodes[0]->nid) ?>">
              <img src="<?php echo render_image('x633', $nodes[0]->field_image['und'][0]['uri']) ?>" alt="">
            </a>

            <h3>
              <a href="<?php echo render_href($nodes[0]->nid) ?>">
                <?php echo $nodes[0]->title ?>
              </a>
            </h3>
            <p><?php echo render_teaser($nodes[0]) ?></p>
            <ul class="tags">
              <?php echo get_tags($nodes[0])['html']; ?>
            </ul>
          </article>
        </div>
      </div>

      <div class="row">

        <?php
        for ($i = 1; $i < 9; $i++) {
          ?>
          <div class="cell-3">
            <article class="snippet">
              <?php if ($nodes[$i]) { ?>

                <?php if ($nodes[$i]->type == "video") { ?>
                  <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
                <?php } ?>
                <?php if ($nodes[$i]->type != 'blog') { ?>
                  <a href="<?php echo render_href($nodes[$i]->nid) ?>">
                    <img src="<?php echo render_image('x185', $nodes[$i]->field_image['und'][0]['uri']) ?>"
                         alt="">
                  </a>

                  <div class="text">
                    <h3>
                      <a href="<?php echo render_href($nodes[$i]->nid) ?>">
                        <?php echo $nodes[$i]->title ?>
                      </a>
                    </h3>
                  </div>
                <?php } else { ?>

                  <div class="opinion">
                    <a href="<?php echo render_href($nodes[$i]->nid) ?>">
                      <h3><?php echo $nodes[$i]->title; ?></h3>
                    </a>

                    <p>
                      <?php
                      echo render_teaser($nodes[$i], 90);
                      ?>
                      ...
                    </p>
                    <?php $a = get_author($nodes[$i]); ?>
                    <div class="author">
                      <img class="a-img" src="<?php echo $a->image; ?>" alt="">

                      <div class="a-info">
                        <div class="a-name">
                          <?php echo $a->title ?>
                        </div>
                        <div class="a-title">
                          <?php echo $a->description ?>
                        </div>
                      </div>
                    </div>

                  </div>

                <?php } ?>
              <?php } ?>
            </article>
          </div>
        <?php } ?>
      </div>
      <div class="w-pager" style="display:none">
        <?php echo theme('pager', array()); ?>
      </div>
    </div>
    <div class="second">
      <div class="row">
        <div class="cell-1">
          <div class="strike-through-header">
            <h3 class="bold">أفضل خمس مقالات</h3>
            <ol class="topfive">
              <?php foreach ($popular as $k => $p): ?>
                <li>
                  <span><?php echo $k + 1 ?></span>
                  <a href="<?php echo render_href($p->nid) ?>"><?php echo $p->node_title ?></a>
                </li>
              <?php endforeach ?>
            </ol>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell-1">
          <div class="fb-page" data-href="https://www.facebook.com/218tv" data-width="300" data-height="500"
               data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
               data-show-facepile="true" data-show-posts="true">
            <div class="fb-xfbml-parse-ignore">
              <blockquote cite="https://www.facebook.com/218tv"><a href="https://www.facebook.com/218tv">218TV</a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell-1">
          <div class="twitter-block">
            <a class="twitter-timeline" href="https://twitter.com/218Tv" data-widget-id="682228831189626880">Tweets by @218Tv</a>
            <script>!function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location)?'http':'https'; if (!d.getElementById(id)){js = d.createElement(s); js.id = id; js.src = p + "://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); }}(document, "script", "twitter-wjs");</script>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell-1">
          <div class="side-ad">
            <img src="<?php echo base_path() . path_to_theme() ?>/temp/side-ad.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>