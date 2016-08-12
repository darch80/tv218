<?php
global $base_url;
?>
<style>
  h1.title{font-size: 1.5em; margin: 20px 0; font-family: "Droid Arabic Kufi", sans-serif; color: #46868c; font-weight: bold; display: inline-block;
           position: relative; z-index: 2; text-transform: uppercase; text-align: right;}
  h4.articletitle{margin: 0.8em 0; font-size: 1.1em; line-height: 1.1em;}
  .categoryname{margin: 0.5em 0; font-size: 1em; line-height: 1.1em;}
  .date, .epicode{font-size: .8em; margin: 0.3em 0; line-height: 1.1em; color:#999999;}

  .gridview{margin:10px 0 0 0; padding:0px; display:block; width:100%;}
  .gridview li{margin:0px; padding:0px; display:block; width:49%; float:right; margin-left: 2%; padding-bottom:20px; margin-bottom:20px; border-bottom:2px solid #f4f4f4;}
  ul.gridview li:nth-child(3n+3), .gridview li:last-child{ margin-left:0px;}
  .gridview img{ width:100%;}

  .gridviewcolthree li{width:32%;}
  .gridviewprograms li{ margin-bottom: 0px; border-bottom:0px solid #f4f4f4;}
  .mostview img{display:block;}
  .mostview img{width:100%; height: 117px; -moz-border-radius-bottomleft: 6px; -webkit-border-bottom-left-radius: 6px;
                border-bottom-left-radius: 6px; -moz-border-radius-topleft: 25px; -webkit-border-top-left-radius: 25px; border-top-left-radius: 25px; -moz-border-radius-topright: 6px;
                -webkit-border-top-right-radius: 6px; border-top-right-radius: 6px; -moz-border-radius-bottomright: 25px; -webkit-border-bottom-right-radius: 25px;border-bottom-right-radius: 25px; }
  @media (min-width: 320px) and (max-width: 640px) {
    .gridviewcolthree li{width:100%;}
    .gridview li{width:100%;}

  }
  .gridview li a {position:relative}    
  .gridview li a i {
    position: absolute;
    left: 10px;
    bottom: 20px;
    background-color: #FFF;
    padding: 4px 8px;
    padding-left: 12px;
    color: #26bfb5;
    font-size: 1.125em;
    line-height: 1.44444em;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
  }    
</style>
<div class="main">
  <!-- Section one -->
  <h1 class="title">مختارات</h1>
  <ul class="gridview">
    <?php
    $future_data = getVideos();
    for ($i = 0; $i <= 1; $i++) {
      $img = $future_data[$i]['thumb'];
      $title = $future_data[$i]['title'];
      $date = $future_data[$i]['date'];
      $id = $future_data[$i]['key'];
      $url = $base_url . "/episode/" . $id;
      ?>
      <li>
        <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>" height="250px"/><i class="fa fa-play" data-reactid=".0.1.2.0.1"></i></a>
          <h4 class="articletitle"> <a href="<?php echo $url ?>"><?php echo $title ?></a> </h4>
          <p class="date"><?php echo $date ?></p>
        </article>
      </li>
    <?php } ?>    
  </ul>

  <!-- Section two -->
  <div class="section2">
    <ul class="gridview gridviewcolthree">
      <?php
      for ($i = 2; $i < 8; $i++) {
        $img = $future_data[$i]['thumb'];
        $title = $future_data[$i]['title'];
        $date = $future_data[$i]['date'];
        $id = $future_data[$i]['key'];
        $url = $base_url . "/episode/" . $id;
        ?>   
        <li>
          <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>" height="170px"/><i class="fa fa-play" data-reactid=".0.1.2.0.1"></i></a>
            <h4 class="articletitle"> <a href="<?php echo $url ?>"><?php echo $title ?></a> </h4>
            <p class="date"><?php echo $date ?></p>
          </article>
        </li>
      <?php } ?>    
    </ul>
  </div>
  <div style="clear:both"></div>    

  <!-- Section three -->
  <h1 class="title">أحدث الفيديوهات</h1>
  <ul class="gridview gridviewcolthree">    
    <?php
    $latest_data = getVideos("latest");
    for ($i = 0; $i < 6; $i++) {
      $img = $latest_data[$i]['thumb'];
        $title = $latest_data[$i]['title'];
        $date = $latest_data[$i]['date'];
        $id = $latest_data[$i]['key'];
        $url = $base_url . "/episode/" . $id;
        ?>   
        <li>
          <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>" height="170px"/><i class="fa fa-play" data-reactid=".0.1.2.0.1"></i></a>
            <h4 class="articletitle"> <a href="<?php echo $url ?>"><?php echo $title ?></a> </h4>
            <p class="date"><?php echo $date ?></p>
          </article>
        </li>
    <?php } ?>    
    <div style="clear:both"></div>    

    <h1 class="title">الأكثر مشاهدة</h1>
    <ul class="gridview gridviewcolthree gridviewprograms">
      <?php
      $mostview_data = getVideos("most_view");
      for ($i = 0; $i < 3; $i++) {
       $img = $mostview_data[$i]['thumb'];
        $title = $mostview_data[$i]['title'];
        $date = $mostview_data[$i]['date'];
        $id = $mostview_data[$i]['key'];
        $url = $base_url . "/episode/" . $id;
        ?>   
        <li>
          <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>" height="170px"/><i class="fa fa-play" data-reactid=".0.1.2.0.1"></i></a>
            <h4 class="articletitle"> <a href="<?php echo $url ?>"><?php echo $title ?></a> </h4>
            <p class="date"><?php echo $date ?></p>
          </article>
        </li>
      <?php } ?>    
    </ul>

    <div style="clear:both"></div>    



    <h1 class="title">البرامج</h1>
    <ul class="gridview gridviewcolthree gridviewprograms">
      <?php
      $all_prog = get_all_programs();
      for ($i = 0; $i < count($all_prog); $i++) {

        $img = "http://admin.mangomolo.com/analytics/" . $all_prog[$i]->icon;
        $title = $all_prog[$i]->title_ar;
        $cat_name = $all_prog[$i]->cat_ar;
        $views = $all_prog[$i]->today_views;
        $date_temp = strtotime($all_prog[$i]->publish_time);
        $date = render_ar_date($date_temp);
        $id = $all_prog[$i]->id;
        $url = $base_url . "/show/" . $id;
        ?>
        <li>
          <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>"> </a>
          <!--<h4 class="articletitle"> <a href="<?php echo $url ?>"><?php echo $title ?></a> </h4>-->
          </article>
        </li>
      <?php } ?>   
    </ul>    
</div>

<!--<div id="show-page" class="w-show-featured all-programs">
        <div id="show-episodes" class="show-episodes">
        </div>
</div>-->

<?php

function get_feature()
{
  $future_url = "http://admin.mangomolo.com/analytics/index.php/nand/featured?user_id=97&key=f1905b5d102ce9e9cdd8d6d4b29d0da1";
  $future_data = file_get_contents($future_url);
  $future_data = json_decode($future_data);
  return $future_data;
}

function get_latest()
{
  $latest_url = "http://admin.mangomolo.com/analytics/index.php/nand/latest?user_id=97&key=f1905b5d102ce9e9cdd8d6d4b29d0da1&start=1&end=7
";
  $latest_data = file_get_contents($latest_url);
  $latest_data = json_decode($latest_data);
  return $latest_data;
}

function get_mostview()
{
  $most_view_url = "http://admin.mangomolo.com/analytics/index.php/nand/most?user_id=97&key=f1905b5d102ce9e9cdd8d6d4b29d0da1";
//$most_view_url = "http://admin.mangomolo.com/analytics/index.php/nand/latest?user_id=97&key=f1905b5d102ce9e9cdd8d6d4b29d0da1&start=6&end=12";
  $mostview_data = file_get_contents($most_view_url);
  $mostview_data = json_decode($mostview_data);
  return $mostview_data;
}

function get_all_programs()
{
//$most_view_url = "http://admin.mangomolo.com/analytics/index.php/nand/most?user_id=97&key=f1905b5d102ce9e9cdd8d6d4b29d0da1";
  $all_prog_url = "http://admin.mangomolo.com/analytics/index.php/plus/category?id=45&o=channel&user_id=97&key=f1905b5d102ce9e9cdd8d6d4b29d0da1";
  $all_prog_data = file_get_contents($all_prog_url);
  $all_prog_data = json_decode($all_prog_data);
  return $all_prog_data;
}

function getVideos($type = "feature")
{
  switch ($type) {
    case "latest":
      $url = "https://www.vod-platform.net/integration/VODList?user=api@218tv.net&pass=4pi!32n8tZ&PageNo=1&PageSize=5";
      break;
    case "most_view":
      $url = "https://vod-platform.net/integration/stats/getmostplayed/7?user=api@218tv.net&pass=4pi!32n8tZ&top=2";
      break;
    case "all":
      $url = "";
      break;
    case "feature":
      $url = "https://www.vod-platform.net/integration/VODList?user=api@218tv.net&pass=4pi!32n8tZ&PageNo=1&PageSize=7";
    default:
      break;
  }
  $resultArray = array();
  $result = file_get_contents($url);
  $xmlResult = simplexml_load_string($result);
  foreach ($xmlResult as $value) {
    $na = array();
    $na['thumb'] = $value->thumbnail;
    $na['title'] = $value->title;
    $na['date'] = render_ar_date(strtotime($value->ModificationDate));
    $na['key'] = $value->key;
    $resultArray[] = $na;
  }
  return $resultArray;
}
?>    