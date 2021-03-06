<?php
global $base_url;
?>
<div id="hero" class="jcarousel">
  <ul>
    <?php foreach ($nq['hero'] as $n): ?>
      <li class="hero item">
        <article class="post-<?php echo $n->id ?>">
          <?php if ($n->type == "video") { ?>
            <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
          <?php } ?>
          <?php if ($n->labels): ?>
            <span class="label" href="javascript:void(0)"><?php echo current($n->labels)['name'] ?></span>
          <?php endif ?>
          <a href="<?php echo $n->href ?>"><img src="<?php echo $n->image['x1270']; ?>" alt=""></a>
          <div class="headline-overlay">
            <?php if ($n->field_subtitle['#markup']): ?>
              <h2><a href="<?php echo $n->href; ?>"><?php echo $n->field_subtitle['#markup']; ?></a></h2>
            <?php endif; ?>
            <h3><a href="<?php echo $n->href ?>"><?php echo $n->title; ?></a></h3>
          </div>
        </article>
      </li>
    <?php endforeach ?>
  </ul>
  <a href="#" class="jcarousel-control-prev"><i class='icon-chevron-left icon-white'>&lsaquo;</i></a>
  <a href="#" class="jcarousel-control-next"><i class='icon-chevron-right icon-white'>&rsaquo;</i></a>
</div>
<div class="w-main">
  <div class="main">
    <div class="first">
      <div class="row">
        <div class="cell-3">
          <div class="rightbar" style="background-image: url(<?php echo base_path() . path_to_theme() ?>/assets/red-corner.png)">
            <ul>
              <?php foreach ($nq['rightbar'] as $article):
                ?>
                <li><a href="<?php echo url('node/' . $article->nid) ?>">
                    <?php echo $article->title; ?>
                  </a></li>
              <?php endforeach;
              ?>
            </ul>
          </div>
        </div>
        <?php
        $fcnt = 0;
        foreach ($nq['featured'] as $article):
          $fcnt++;
          if ($fcnt >= 7) {
            continue;
          }
          ?>
          <div class="cell-3">
            <article class="snippet fxdhgt">
              <?php if ($article->type == "video") { ?>
                <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
              <?php } ?>
              <?php if (!$article->field_hide_thumbnail): ?>
                <a href="<?php echo $article->href ?>">
                  <img src="<?php echo $article->image['x185'] ?>" alt="">
                </a>
              <?php endif; ?>
              <div class="text <?php if ($article->field_hide_thumbnail): ?>pdt20<?php endif; ?>">
                <h3>
                  <a href="<?php echo $article->href ?>">
                    <?php echo $article->title ?>
                  </a>
                </h3>
                <?php if ($article->field_hide_thumbnail): ?>
                  <p><?php echo $article->teaser; ?></p>
                <?php endif; ?>
              </div>
            </article>
          </div>
          <?php
        endforeach;
        if ($nq['social']):
          ?>
          <div class="cell-3">
            <?php
            foreach ($nq['social'] as $article):
              $scClss = "";
              switch ($article->social_channel):
                case 'facebook':
                  $scClss = "fcbk";
                  break;
                case 'twitter':
                  $scClss = "twttr";
                  break;
              endswitch;
              ?>
              <a href="<?php echo $article->href; ?>">
                <div class="scldv <?php echo $scClss; ?>"><span class="sclcn"><i class="fa fa-<?php echo $article->social_channel; ?>"></i></span>
                  <p><?php echo $article->title; ?></p>
                </div>
              </a>
              <?php
            endforeach;
            ?>
          </div>
          <?php
        endif;
        ?>
      </div>
      <div class="row">
        <?php for ($i = count($menus['promoted']) - 1; $i >= 0; $i--): ?>
          <div class="cell-3">
            <div class="featured">
              <div class="label-bg">
                <a href="<?php echo $menus['promoted'][$i]['href'] ?>">
                  <span>
                    <?php echo $menus['promoted'][$i]['title'] ?>
                  </span>
                </a>
              </div>
              <a href="<?php echo $menus['promoted'][$i]['href'] ?>">
                <img src="<?php echo render_image('x185', $menus['promoted'][$i]['image']->uri) ?>" alt="">
              </a>
            </div>
          </div>
        <?php endfor; ?>
      </div>
      <div class="row">
        <div class="cell-1">
          <div id="hero2" dir="ltr">
            <?php foreach ($nq['hero_2'] as $n): ?>
              <div class="hero-2 item">
                <article class="post-<?php echo $n->id ?>">
                  <?php if ($n->type == "video") { ?>
                    <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
                  <?php } ?>
                  <a href="<?php echo $n->href ?>"><img src="<?php echo $n->image['x960'] ?>" alt=""></a>
                  <div class="headline">
                    <h3><a href="<?php echo $n->href ?>"><?php echo $n->title ?></a></h3>
                  </div>
                </article>
              </div>
            <?php endforeach ?>
          </div>
        </div>
      </div>

      <div class="row">
        <?php
        for ($i = 1; $i <= 3; $i++):
          ?>
          <div class="cell-3">
            <article class="snippet fxdhgt">
              <?php if ($nq['latest'][$i]->type == "video") { ?>
                <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
              <?php } ?>
              <?php if ($nq['latest'][$i]->image): ?>
                <a href="<?php echo $nq['latest'][$i]->href ?>">
                  <img src="<?php echo $nq['latest'][$i]->image['x185'] ?>" alt="" />
                </a>
              <?php endif ?>
              <div class="text">
                <h3>
                  <a href="<?php echo $nq['latest'][$i]->href ?>">
                    <?php echo $nq['latest'][$i]->title ?>
                  </a>
                </h3>
                <?php if ($nq['latest'][$i]->type == 'social'): ?>
                  <div class="author">
                    <?php if ($nq['latest'][$i]->author->title != ''): ?>
                      <div><img src="<?php echo $nq['latest'][$i]->author->image ?>" /></div>
                    <?php endif ?>
                    <div><?php echo $nq['latest'][$i]->author->title ?></div>
                  </div>
                <?php else: ?>
                </div>
              <?php endif ?>
            </article>
          </div>
        <?php endfor; ?>
      </div>
      <?php if (is_array($mv)) { ?>
        <div class="row" style="overflow: hidden; margin-bottom: 20px; max-height: 517px;padding: 15px;">
          <div class="cell-3" style="padding: 0px;">
            <div class="grey-list">
              <h3 class="bold">أحدث الفيديوهات</h3>
            </div>
            <ol class="topfive" id="vertical-slide" style="overflow: hidden;">
              <?php
              foreach ($mv as $i => $value) {
                $img = $mv[$i]['thumb'];
                $title = $mv[$i]['title'];
                $date = $mv[$i]['date'];
                $id = $mv[$i]['key'];
                $url = $base_url . "/episode/" . $id;
                ?>
                <li data-img="<?php echo $img; ?>" data-url="<?php echo $url ?>" data-title="<?php echo $title ?>" class="<?php echo (0 == $i) ? "active" : "" ?>">
                  <span><?php echo $i + 1 ?></span>
                  <h4><?php echo $title ?></h4>
                </li>    
              <?php } ?> 
            </ol>
          </div>
          <div style="float: right;width: 66%;">
            <div class="center-cropped-slide" style="background-image: url(<?php echo $mv[0]['thumb']; ?>)">
              <a href="<?php echo $base_url . "/episode/" . $mv[0]['key']; ?>">
                <img src="<?php echo $mv[0]['thumb']; ?>" />
                <i class="fa fa-play" data-reactid=".0.1.2.0.1"></i>
              </a>
            </div>
          </div>
        </div>
      <?php } ?>
      <div class="row">
        <div class="cell-1">
          <section class="videos-today">
            <div>
              <div class=""><a href="live" class="bth-mbshr2">البث المباشر &nbsp;&nbsp;&nbsp;<i class="fa fa-play"></i></a></div>
              <h3>البرامج</h3>
            </div>
            <div id="liveshow-rail">
              <div class="toplisting">
                <ul>
                  <?php
                  foreach ($pv as $p) :
                    $img = $p['thumb'];
                    $title = $p['title'];
                    $date = $p['date'];
                    $id = $p['key'];
                    $url = $base_url . "/episode/" . $id;
                    ?>
                    <li>
                      <a href="<?php echo $url; ?>">
                        <img src="<?php echo $img; ?>"/>
                        <p><?php echo $title; ?></p>
                      </a>
                    </li>
                  <?php endforeach; ?>
                </ul>
                <div class="clearfix"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="row">
        <div class="cell-1">
          <div id="live-broadcast">
            <a href="#" class="bth-mbshr">
              <h3 style="direction: rtl;font-size: 1.8em;font-weight: bold;">البث المباشر 
                <img src="<?php echo base_path() . path_to_theme() ?>/assets/play.png" width="24px"/>
              </h3>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell-1" style="padding-bottom: 0px;">
          <div class="grey-list">
            <h3 class="bold">الأكثر قراءة </h3>
          </div>
          <ol class="topfive">
            <?php foreach ($popular as $k => $p): ?>
              <li>
                <a href="<?php echo render_href($p->nid) ?>">
                  <span><?php echo $k + 1 ?></span>
                  <?php echo $p->node_title ?>
                </a>
              </li>
            <?php endforeach ?>
          </ol>
        </div>
      </div>
      <div class="row">
        <div class="cell-1" style="padding-top: 0px;">
          <?php include_once 'partials/_opinions.php' ?>
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
          <div class="side-ad">
            <img src="<?php echo base_path() . path_to_theme() ?>/temp/side-ad.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>