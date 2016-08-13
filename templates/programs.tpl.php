<?php
global $base_url;
?>
<style>
  h1.title{font-size: 1.5em; margin: 20px 0; font-family: "Droid Arabic Kufi", sans-serif; color: #46868c; font-weight: bold; display: inline-block;
           position: relative; z-index: 2; text-transform: uppercase; text-align: right;}
  h4.articletitle{margin: 0.8em 0; font-size: 1.1em; line-height: normal;height:60px}
  .categoryname{margin: 0.5em 0; font-size: 1em; line-height: 1.1em;}
  .date, .epicode{font-size: .8em; margin: 0.3em 0; line-height: 1.1em; color:#999999;}

  .gridview{margin:10px 0 0 0; padding:0px; display:block; width:100%;}
  .gridview li{margin:0px; padding:0px; display:block; width:49%; float:right; margin-left: 2%; padding-bottom:20px; margin-bottom:20px; border-bottom:2px solid #f4f4f4;}
  ul.gridview li:nth-child(3n+3), .gridview li:last-child{ margin-left:0px;}
  .gridview img{ width:100%; height: 209px;}

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
      if ($img) {
        $title = $future_data[$i]['title'];
        $date = $future_data[$i]['date'];
        $id = $future_data[$i]['key'];
        $url = $base_url . "/episode/" . $id;
        ?>
        <li>
          <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>" height="auto"/><i class="fa fa-play" data-reactid=".0.1.2.0.1"></i></a>
            <h4 class="articletitle"> <a href="<?php echo $url ?>"><?php echo $title ?></a> </h4>
            <p class="date"><?php echo $date ?></p>
          </article>
        </li>
      <?php
      }
    }
    ?>    
  </ul>

  <!-- Section two -->
  <div class="section2">
    <ul class="gridview gridviewcolthree">
      <?php
      for ($i = 2; $i < 8; $i++) {
        $img = $future_data[$i]['thumb'];
        if ($img) {
          $title = $future_data[$i]['title'];
          $date = $future_data[$i]['date'];
          $id = $future_data[$i]['key'];
          $url = $base_url . "/episode/" . $id;
          ?>   
          <li>
            <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>" height="auto"/><i class="fa fa-play" data-reactid=".0.1.2.0.1"></i></a>
              <h4 class="articletitle"> <a href="<?php echo $url ?>"><?php echo $title ?></a> </h4>
              <p class="date"><?php echo $date ?></p>
            </article>
          </li>
        <?php }
      }
      ?>    
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
      if ($img) {
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
  <?php }
}
?>    
    <div style="clear:both"></div>    

    <h1 class="title">الأكثر مشاهدة</h1>
    <ul class="gridview gridviewcolthree gridviewprograms">
      <?php
      $mostview_data = getVideos("most_view");
      for ($i = 0; $i < 3; $i++) {
        $img = $mostview_data[$i]['thumb'];
        if ($img) {
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
  <?php }
}
?>    
    </ul>

    <div style="clear:both"></div>    



    <h1 class="title">البرامج</h1>
    <ul class="gridview gridviewcolthree gridviewprograms">
      <?php
      $all_prog = getVideos("all");
      for ($i = 0; $i < count($all_prog); $i++) {
        $img = $all_prog[$i]['thumb'];
        if ($img) {
          $title = $all_prog[$i]['title'];
          $date = $all_prog[$i]['date'];
          $id = $all_prog[$i]['key'];
          $url = $base_url . "/episode/" . $id;
          ?>
          <li>
            <article> <a href="<?php echo $url ?>"> <img src="<?php echo $img ?>" alt="<?php echo $title ?>"> </a></article>
          </li>
  <?php }
}
?>   
    </ul>    
</div>