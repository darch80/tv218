<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55ffe86a9942511b"
async="async"></script>


<?php if ($tabs): ?>
  <div class="node-tabs">
    <?php print render($tabs); ?>
  </div>
<?php endif; ?>

<div class="w-main">
  <div class="main">
    <div class="first">

      <?php
      $vidkey = explode('/', $_GET['q']);
      $vidkey = $vidkey[1];
      $result = file_get_contents("https://vod-platform.net/integration/VODdetails?user=api@218tv.net&pass=4pi!32n8tZ&videokey=$vidkey");
      $xmlResult = simplexml_load_string($result);
      ?>
      <div id="episode-headline">
        <?php echo $xmlResult->Video->title; ?>
      </div>
      <div id="episode-page">
        <iframe src="http://vod-platform.net/Embed/<?php echo $vidkey; ?>?autoplay=1&HideControls=1&responsive=1&noads=1" height="550px" width="100%"></iframe>
      </div>

      <div id="episode-body">
        <?php echo $xmlResult->Video->Description; ?>
      </div>


    </div>
    <div class="second">
      <div class="strike-through-header">
        <h3 class="bold">ذات علاقة</h3>
      </div>
      <div id="episode-related"></div>


      <?php if (count($popular)) { ?>
        <div class="strike-through-header">
          <h3 class="bold">الأكثر قراءة  </h3>
        </div>
        <ol class="topfive">


          <?php
          for ($i = 0; $i < count($popular); $i++) {
            $no = $popular[$i];
            ?>
            <li><a href="<?php echo render_href($no->nid) ?>"><?php echo $no->node_title ?></a></li>

          <?php } ?>
        </ol>

      <?php } ?>
    </div>
  </div>
</div>
</div>