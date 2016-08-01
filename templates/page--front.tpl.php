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
          <a href="<?php echo $n->href ?>"><img src="<?php echo $n->image['x1270'] ?>" alt=""></a>

          <div class="headline-overlay">
            <h2><a href="<?php echo $n->href ?>">سياسة</a></h2>
            <h3><a href="<?php echo $n->href ?>"><?php echo $n->title ?></a></h3>
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
          <div class="rightbar">
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
        <?php foreach ($nq['featured'] as $article):
          ?>
          <div class="cell-3">
            <article class="snippet fxdhgt">
              <?php if ($article->type == "video") { ?>
                <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
              <?php } ?>
              <a href="<?php echo $article->href ?>">
                <img src="<?php echo $article->image['x300'] ?>" alt="">
              </a>
              <div class="text">
                <h3>
                  <a href="<?php echo $article->href ?>">
                    <?php echo $article->title ?>
                  </a>
                </h3>
                <ul class="tags">
                  <?php echo $article->tags['html'] ?>
                </ul>
              </div>
            </article>
          </div>
          <?php
        endforeach;
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

      <div id="hero2">
        <?php foreach ($nq['hero_2'] as $n): ?>
          <div class="hero-2 item">
            <article class="post-<?php echo $n->id ?>">
              <?php if ($n->type == "video") { ?>
                <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
              <?php } ?>
              <a href="<?php echo $n->href ?>"><img src="<?php echo $n->image['x960'] ?>" alt=""></a>
              <div class="headline">
                <h3><a href="<?php echo $n->href ?>"><?php echo $n->title ?></a></h3>
                <ul class="tags">
                  <?php echo $n->tags['html'] ?>
                </ul>
              </div>
            </article>
          </div>
        <?php endforeach ?>
      </div>

      <div class="row">
        <?php
        for ($i = 1; $i <= 3; $i++):
          ?>
          <div class="cell-3">
            <article
              class="snippet <?php echo $nq['latest'][$i]->image != '' ? '' : 'no-img ' ?><?php echo $nq['latest'][$i]->type ?> <?php echo $nq['latest'][$i]->type == 'social' ? $nq['latest'][$i]->social_channel : '' ?>">
                <?php if ($nq['latest'][$i]->type == "video") { ?>
                <span class="playicon-over"><img style="width:30px;height:30px;border-radius:0;" src="<?php echo base_path() . path_to_theme() ?>/assets/playicon.png" alt=""></span>
              <?php } ?>
              <?php if ($nq['latest'][$i]->image): ?>
                <img src="<?php echo $nq['latest'][$i]->image['x300'] ?>" alt="" />
              <?php endif ?>
              <div class="text">
                <h3 class='customfont'>
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
                  <ul class="tags customtag">
                    <?php echo $nq['latest'][$i]->tags['html'] ?>
                  </ul>
                <?php endif ?>
              </div>
            </article>
          </div>
        <?php endfor; ?>
      </div>
      <div class="row" style="overflow: hidden; margin-bottom: 20px; max-height: 517px;padding: 15px;">
        <div class="cell-3" style="padding: 0px;">
          <div class="strike-through-header" style="overflow: hidden;">
            <h3 class="bold">New Videos API</h3>
            <ol class="topfive" id="vertical-slide">
              <?php
              for ($i = 0; $i < 5; $i++) {
                $img = "http://admin.mangomolo.com/analytics/" . $mv[$i]->img;
                $title = $mv[$i]->title_ar;
                $cat_name = $mv[$i]->cat_ar;
                $views = $mv[$i]->today_views;
                $date_temp = strtotime($mv[$i]->publish_time);
                $date = render_ar_date($date_temp);
                $id = $mv[$i]->id;
                $url = $base_url . "/episode/" . $id;
                ?>
                <li data-img="<?php echo $img; ?>" data-url="<?php echo $url ?>" data-title="<?php echo $title ?>" class="<?php echo (0==$i)?"active":""?>">
                  <span><?php echo $i + 1 ?></span>
                  <h4><?php echo $title ?></h4>
                  <small><?php echo $views; ?></small>
                </li>    
              <?php } ?> 
              <!--              <li>
                              "رئاسي الوفاق" يعلن من راس لانوف استئناف "تصدير النفط" 
                              <small>7,030</small>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>2</span>
                                غادة عبدالرازق تظهر بلا"ماكياج" وتثير ردودا.. شاهد
                                <small>7,030</small>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>3</span>
                                قادة في داعش يتنقلون سرا على الحدود بين ليبيا وتونس
                                <small>7,030</small>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>4</span>
                                السؤال الكبير: ماذا يحصل في العاصمة طرابلس؟
                                <small>7,030</small>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>5</span>
                                "فوشيك" بـ 10 مليارات دولار للتواصل بين "الإرهابيين"
                                <small>7,030</small>
                              </a>
                            </li>-->
            </ol>
          </div>
        </div>
        <div style="float: right;width: 66%;">
          <div class="center-cropped-slide" style="background-image: url(http://admin.mangomolo.com/analytics/<?php echo $mv[0]->img; ?>)">
            <a href="<?php echo $base_url . "/episode/" . $mv[0]->id; ?>">
              <img src="http://admin.mangomolo.com/analytics/<?php echo $mv[0]->img; ?>" />
              <i class="fa fa-play" data-reactid=".0.1.2.0.1"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell-1">
          <section class="videos-today">
            <div class="">
              <div class="bth-mbshr2"><a href="#" class="bth-mbshr">البث المباشر &nbsp;&nbsp;&nbsp;<i class="fa fa-play"></i></a></div>
              <h3>تشاهدون اليوم</h3>
            </div>
            <div id="liveshow-rail">
              <div class="toplisting"></div>
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
              <h3>البث المباشر 
                <img src="<?php echo base_path() . path_to_theme() ?>/assets/play.png" width="28px"/>
              </h3>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell-1">
          <div class="strike-through-header">
            <h3 class="bold">أفضل خمس مقالات</h3>
            <ol class="topfive">
              <li>
                <a href="/content/%D8%B1%D8%A6%D8%A7%D8%B3%D9%8A-%D8%A7%D9%84%D9%88%D9%81%D8%A7%D9%82-%D9%8A%D8%B9%D9%84%D9%86-%D9%85%D9%86-%D8%B1%D8%A7%D8%B3-%D9%84%D8%A7%D9%86%D9%88%D9%81-%D8%A7%D8%B3%D8%AA%D8%A6%D9%86%D8%A7%D9%81-%D8%AA%D8%B5%D8%AF%D9%8A%D8%B1-%D8%A7%D9%84%D9%86%D9%81%D8%B7">
                  <span>1</span>
                  "رئاسي الوفاق" يعلن من راس لانوف استئناف "تصدير النفط" 
                  <small>7,030</small>
                </a>
              </li>
              <li>
                <a href="content/%D8%BA%D8%A7%D8%AF%D8%A9-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%A7%D8%B2%D9%82-%D8%AA%D8%B8%D9%87%D8%B1-%D8%A8%D9%84%D8%A7-%D9%85%D8%A7%D9%83%D9%8A%D8%A7%D8%AC-%D9%88%D8%AA%D8%AB%D9%8A%D8%B1-%D8%B1%D8%AF%D9%88%D8%AF%D8%A7-%D8%B4%D8%A7%D9%87%D8%AF">
                  <span>2</span>
                  غادة عبدالرازق تظهر بلا"ماكياج" وتثير ردودا.. شاهد
                  <small>7,030</small>
                </a>
              </li>
              <li>
                <a href="content/%D9%82%D8%A7%D8%AF%D8%A9-%D9%81%D9%8A-%D8%AF%D8%A7%D8%B9%D8%B4-%D9%8A%D8%AA%D9%86%D9%82%D9%84%D9%88%D9%86-%D8%B3%D8%B1%D8%A7-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%AD%D8%AF%D9%88%D8%AF-%D8%A8%D9%8A%D9%86-%D9%84%D9%8A%D8%A8%D9%8A%D8%A7-%D9%88%D8%AA%D9%88%D9%86%D8%B3">
                  <span>3</span>
                  قادة في داعش يتنقلون سرا على الحدود بين ليبيا وتونس
                  <small>7,030</small>
                </a>
              </li>
              <li>
                <a href="content/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84-%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1-%D9%85%D8%A7%D8%B0%D8%A7-%D9%8A%D8%AD%D8%B5%D9%84-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%B7%D8%B1%D8%A7%D8%A8%D9%84%D8%B3%D8%9F">
                  <span>4</span>
                  السؤال الكبير: ماذا يحصل في العاصمة طرابلس؟
                  <small>7,030</small>
                </a>
              </li>
              <li>
                <a href="content/%D9%81%D9%88%D8%B4%D9%8A%D9%83-%D8%A8%D9%80-10-%D9%85%D9%84%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-%D8%AF%D9%88%D9%84%D8%A7%D8%B1-%D9%84%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%A5%D8%B1%D9%87%D8%A7%D8%A8%D9%8A%D9%8A%D9%86">
                  <span>5</span>
                  "فوشيك" بـ 10 مليارات دولار للتواصل بين "الإرهابيين"
                  <small>7,030</small>
                </a>
              </li>
              <?php foreach ($popular as $k => $p): ?>
                <li>
                  <a href="<?php echo render_href($p->nid) ?>">
                    <span><?php echo $k + 1 ?></span>
                    <?php echo $p->node_title ?>
                    <small>7,030</small>
                  </a>
                </li>
              <?php endforeach ?>
            </ol>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell-1">
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


