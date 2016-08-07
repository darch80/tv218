<?php

function tv218_preprocess_html(&$vars)
{
//  http://drupal.stackexchange.com/questions/7274/how-to-theme-a-menu-block
  $vars['menus']['nav'] = render_menu('main-menu');
  $vars['menus']['footer'] = render_menu('menu-footer-menu');

  drupal_add_js(array('core' => array(
      'themePath' => base_path() . path_to_theme()
    )), 'setting');


  $vars['mlabels'] = array('العودة للمقال', 'ذات علاقة');
  if ($vars['is_front']) {
    $vars['mlabels'] = array('أخبار', 'مختارات');
  }
  if (drupal_is_front_page()) {
    // load news ticker
    $tickerType = "ticker";
    $tickerNodes = node_load_multiple(array(), array('type' => $tickerType));
    foreach ($tickerNodes as $tn) {
      $vars['ticker'][] = $tn;
    }
//    if (count($vars['ticker']) < 5) {
//      ftp://212.35.75.45/newsbar.xml
//    }
  }
}

function tv218_preprocess_views_view(&$vars)
{

  $view = $vars['view'];
  if ('taxonomy_term' == $view->name) {

    $nids = array();
    foreach ($vars['view']->result as $node) {
      $nids[] = $node->nid;
    }

    $GLOBALS['_nodes'] = array_values(node_load_multiple($nids));
    $GLOBALS['popular'] = get_v('popular');
    //helpful array for alternate cell classes
    $GLOBALS['class_map'] = array('right', 'left');
    $GLOBALS['body-class'] = 'archive-page';
  }
}

function tv218_preprocess_page(&$vars)
{

  if (drupal_is_front_page()):

    // load homepage promoted menu
    $vars['menus']['promoted'] = render_menu('menu-promoted');

    // load populare content
    $vars['popular'] = get_v('popular');

    $vars['nq'] = array();
    // load hero nodequeue
    $nq_hero = nodequeue_load_nodes(1, false, 0, 5);
    foreach ($nq_hero as $node) {
      $hero[] = n_load($node->nid);
    }
    $vars['nq']['hero'] = $hero;

    $nq_hero2 = nodequeue_load_nodes(7, false, 0, 3);
    foreach ($nq_hero2 as $node) {
      $hero2[] = n_load($node->nid);
    }
    $vars['nq']['hero_2'] = $hero2;

    // load rightbar nodequeue
    $nq_rightbar = nodequeue_load_nodes(6, false, 0, 8);
    foreach ($nq_rightbar as $node) {
      $vars['nq']['rightbar'][] = node_load($node->nid);
    }

    // load promoted nodequeue
    $nq_featured = nodequeue_load_nodes(2, false, 0, 7);
    foreach ($nq_featured as $node) {
      $hide = node_load($node->nid);
      $ft = n_load($node->nid);
      $ft->field_hide_thumbnail = $hide->field_hide_thumbnail["und"][0]["value"];
      $featured[] = $ft;
    }
    $vars['nq']['featured'] = $featured;

    // load latest nodequeue
    $nq_latest = nodequeue_load_nodes(4, false, 0, 12);
    foreach ($nq_latest as $node) {
      $latest[] = n_load($node->nid);
    }
    $vars['nq']['latest'] = $latest;

    // load opinions nodequeue
    $nq_opinions = nodequeue_load_nodes(5, false, 0, 6);
    foreach ($nq_opinions as $node) {
      $opinions[] = $node->nid;
    }
    $vars['nq']['opinions'] = array_values(node_load_multiple($opinions));
  //$vars['opinions'] = array_values(get_vn('taxonomy_term', array('all', 1,'blog'), 5));
  endif;


  /* Node page */
  if (!empty($vars['node'])) {
    $GLOBALS['body-class'] = 'node-page';

    $vars['n'] = node_load($vars['node']->nid);
    $section_id = $vars['n']->field_section['und'][0]['tid'];

    $tags = $vars['n']->field_tags['und'];
    if (count($tags)) {
      $tags_ids = [];
      foreach ($tags as $tag) {
        $tags_ids[] = $tag['tid'];
      }
    }

    $vars['more'] = array_values(get_vn('taxonomy_term', array(join('+', $tags_ids), 1, 'article', $vars['node']->nid), 3));

    $vars['readlist'] = array_values(get_vn('taxonomy_term', array($section_id, 1, 'article+blog+gallery'), 5));
    $vars['related'] = array_values(get_vn('taxonomy_term', array($section_id, 1, $vars['n']->type), 5));


    $vars ['tags'] = get_tags($vars['n']);
    $vars['popular'] = get_v('popular');

    if ($vars['node']->type == 'article') {


      //create dedicated page for node, fuck the drupal nesting shit
      $vars['theme_hook_suggestions'][] = '__article';
      $vars['r'] = node_view($vars['n'])['body'][0]['#markup'];
      $vars['author'] = get_author($vars['n']);
    } else if ($vars['node']->type == 'video') {


      //create dedicated page for node, fuck the drupal nesting shit
      $vars['theme_hook_suggestions'][] = '__video';
      $vars['r'] = node_view($vars['n'])['body'][0]['#markup'];
      $vars['author'] = get_author($vars['n']);
    } else if ($vars['node']->type == 'blog') {

      $vars['theme_hook_suggestions'][] = '__blog';
      $author = get_author($vars['n']);
      $vars['blog']['author'] = $author;

      //pprint($author);
      $element1 = array(
        '#tag' => 'meta', // The #tag is the html tag - <link />
        '#attributes' => array(// Set up an array of attributes inside the tag
          'property' => 'og:image',
          'content' => render_image('x585', $author->image_src)
        )
      );

      $element2 = array(
        '#tag' => 'link', // The #tag is the html tag - <link />
        '#attributes' => array(// Set up an array of attributes inside the tag
          'rel' => 'image_src',
          'type' => 'image/jpeg',
          'href' => render_image('x585', $author->image_src)
        )
      );

      drupal_add_html_head($element1, 'element1');
      drupal_add_html_head($element2, 'element2');

      // load opinions nodequeue
      $nq_opinions = nodequeue_load_nodes(5, false, 0, 6);
      foreach ($nq_opinions as $node) {
        $opinions[] = $node->nid;
      }
      $vars['nq']['opinions'] = array_values(node_load_multiple($opinions));
      $vars['readlist'] = array_values(get_vn('opinions_author', array($vars['blog']['author']->nid, $vars['node']->nid), 5));
    } else if ($vars['node']->type == 'author') {
      $vars['theme_hook_suggestions'][] = '__author';
      $vars['author'] = get_author($vars['n']);

      $element1 = array(
        '#tag' => 'meta', // The #tag is the html tag - <link />
        '#attributes' => array(// Set up an array of attributes inside the tag
          'property' => 'og:image',
          'content' => render_image('x585', $vars['author']->image_src)
        )
      );

      $element2 = array(
        '#tag' => 'link', // The #tag is the html tag - <link />
        '#attributes' => array(// Set up an array of attributes inside the tag
          'rel' => 'image_src',
          'type' => 'image/jpeg',
          'href' => render_image('x585', $vars['author']->image_src)
        )
      );

      drupal_add_html_head($element1, 'element1');
      drupal_add_html_head($element2, 'element2');

      // load opinions nodequeue
      $nq_opinions = nodequeue_load_nodes(5, false, 0, 6);
      foreach ($nq_opinions as $node) {
        $opinions[] = $node->nid;
      }
      $vars['nq']['opinions'] = array_values(node_load_multiple($opinions));
      $vars['opinions_author'] = array_values(get_vn('opinions_author', array($vars['n']->nid, 0), 10));
      //pprint($vars['opinions_author']);
    } else if ($vars['node']->type == 'social') {

      $vars['author'] = get_author($vars['n']);
      $vars['theme_hook_suggestions'][] = '__social';
    } else if ($vars['node']->type == 'page') {
      $vars['theme_hook_suggestions'][] = '__static';
    }
  }
  /* --- Node page ----- */

  /* Taxonomy Term pages */
  if (arg(0) == 'taxonomy' && arg(1) == 'term' && arg(4) == 'blog') {

    // load opinions nodequeue
    $nq_opinions = nodequeue_load_nodes(5, false, 0, 6);
    foreach ($nq_opinions as $node) {
      $opinions[] = $node->nid;
    }
    $vars['nq']['opinions'] = array_values(node_load_multiple($opinions));

    $vars['theme_hook_suggestions'][] = '__opinions';
  }
  /* --- Taxonomy Term pages ----- */
  $most_view_url = "http://admin.mangomolo.com/analytics/index.php/nand/most?user_id=97&key=f1905b5d102ce9e9cdd8d6d4b29d0da1";
  $mostview_data = file_get_contents($most_view_url);
  $mostview_data = json_decode($mostview_data);
  $vars['mv'] = $mostview_data;
}

function tv218_preprocess_node(&$vars)
{
  
}

function tv218_css_alter(&$css)
{
  // Remove defaults.css file.
  unset($css[drupal_get_path('module', 'system') . '/defaults.css']);
  unset($css[drupal_get_path('module', 'system') . '/system.css']);
  unset($css[drupal_get_path('module', 'system') . '/system.menus.css']);
  unset($css[drupal_get_path('module', 'system') . '/system.theme.css']);
  unset($css[drupal_get_path('module', 'user') . '/user.css']);
  // .. etc..
}

function tv218_js_alter(&$javascript)
{
  $javascript['misc/jquery.js']['data'] = drupal_get_path('theme', 'tv218') . '/src/js/jquery-1.12.0.min.js';
}

function tv218_pager($variables)
{
  $tags = $variables['tags'];
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  $quantity = $variables['quantity'];
  global $pager_page_array, $pager_total;

  // Calculate various markers within this pager piece:
  // Middle is used to "center" pages around the current page.
  $pager_middle = ceil($quantity / 2);
  // current is the page we are currently paged to
  $pager_current = $pager_page_array[$element] + 1;
  // first is the first page listed by this pager piece (re quantity)
  $pager_first = $pager_current - $pager_middle + 1;
  // last is the last page listed by this pager piece (re quantity)
  $pager_last = $pager_current + $quantity - $pager_middle;
  // max is the maximum page number
  $pager_max = $pager_total[$element];
  // End of marker calculations.
  // Prepare for generation loop.
  $i = $pager_first;
  if ($pager_last > $pager_max) {
    // Adjust "center" if at end of query.
    $i = $i + ($pager_max - $pager_last);
    $pager_last = $pager_max;
  }
  if ($i <= 0) {
    // Adjust "center" if at start of query.
    $pager_last = $pager_last + (1 - $i);
    $i = 1;
  }
  // End of generation loop preparation.

  $li_first = theme('pager_first', array('text' => (isset($tags[0]) ? $tags[0] : t('الأول')), 'element' => $element, 'parameters' => $parameters));
  $li_previous = theme('pager_previous', array('text' => (isset($tags[1]) ? $tags[1] : t('السابق')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));
  $li_next = theme('pager_next', array('text' => (isset($tags[3]) ? $tags[3] : t('التالي')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));
  $li_last = theme('pager_last', array('text' => (isset($tags[4]) ? $tags[4] : t('الأخير')), 'element' => $element, 'parameters' => $parameters));

  if ($pager_total[$element] > 1) {
    if ($li_first) {
      $items[] = array(
        'class' => array('pager-first'),
        'data' => $li_first,
      );
    }
    if ($li_previous) {
      $items[] = array(
        'class' => array('pager-previous'),
        'data' => $li_previous,
      );
    }

    // When there is more than one page, create the pager list.
    if ($i != $pager_max) {
      if ($i > 1) {
        $items[] = array(
          'class' => array('pager-ellipsis'),
          'data' => '…',
        );
      }
      // Now generate the actual pager piece.
      for (; $i <= $pager_last && $i <= $pager_max; $i++) {
        if ($i < $pager_current) {
          $items[] = array(
            'class' => array(''),
            'data' => theme('pager_previous', array('text' => $i, 'element' => $element, 'interval' => ($pager_current - $i), 'parameters' => $parameters)),
          );
        }
        if ($i == $pager_current) {
          $items[] = array(
            'class' => array('active'),
            'data' => $i,
          );
        }
        if ($i > $pager_current) {
          $items[] = array(
            'class' => array(''),
            'data' => theme('pager_next', array('text' => $i, 'element' => $element, 'interval' => ($i - $pager_current), 'parameters' => $parameters)),
          );
        }
      }
      if ($i < $pager_max) {
        $items[] = array(
          'class' => array(''),
          'data' => '…',
        );
      }
    }
    // End generation.
    if ($li_next) {
      $items[] = array(
        'class' => array('pager-next'),
        'data' => $li_next,
      );
    }
    if ($li_last) {
      $items[] = array(
        'class' => array('pager-last'),
        'data' => $li_last,
      );
    }
    return theme('item_list', array(
      'items' => $items,
      'attributes' => array('class' => array('pager')),
    ));
  }
}

function tv218_form_alter(&$form, &$form_state, $form_id)
{

  if ($form_id == "webform_client_form_3262") {
    /*
      $form['submitted']['attachment']['#description'] = 'يجب أن لا يزيد حجم الملف المرفق عن 2 ميجابايت <br> الملقات المسموحة  gif jpg jpeg png avi mov mp3 mp4 ogg';
      $form['actions']['submit']['#value'] = 'ارسال';
     */
    $form['submitted']['attachment']['#description'] = 'يجب أن لا يزيد حجم الملف المرفق عن 2 ميجابايت <br> الملفات المسموحة  gif jpg jpeg png avi mov mp3 mp4 ogg doc pdf';
    $form['actions']['submit']['#value'] = 'ارسال';
  }

  if ($form_id == 'search_form') {
    unset($form['advanced']);
    $form['basic']['keys']['#title'] = ''; // ' نتائج البحث عن';
    $form['basic']['submit']['#value'] = ''; //'بحث';
    $form['#type'] = 'hidden';
  }
}

function get_prev_articles($no, $node)
{

  $type = $node->type;
  $nid = $node->nid;
  $sql = "select nid from {node} where type = :type and nid < :nid and status = 1 order by changed desc limit $no ";

  $result = db_query($sql, array(':type' => $type, ':nid' => $nid));
  $nids = array();
  foreach ($result as $record) {
    $nids[] = $record->nid;
  }
  return $nids;
}

function set_article_variables($nid)
{
  $rel_node = node_load($nid);
  $related_data = array();
  $section_id = $rel_node->field_section['und'][0]['tid'];

  $tags = $rel_node->field_tags['und'];
  if (count($tags)) {
    $tags_ids = [];
    foreach ($tags as $tag) {
      $tags_ids[] = $tag['tid'];
    }
  }

  $related_data['more'] = array_values(get_vn('taxonomy_term', array(join('+', $tags_ids), 1, 'article', $nid), 3));

  $related_data['readlist'] = array_values(get_vn('taxonomy_term', array($section_id, 1, 'article+blog+gallery'), 5));
  $related_data['related'] = array_values(get_vn('taxonomy_term', array($section_id, 1, $rel_node->type), 5));


  $related_data ['tags'] = get_tags($vars['n']);
  $related_data['popular'] = get_v('popular');

  if ($rel_node->type == 'article') {
    //create dedicated page for node, fuck the drupal nesting shit
    $related_data['r'] = node_view($rel_node)['body'][0]['#markup'];
    $related_data['author'] = get_author($vars['n']);
  }
  return $related_data;
}

function get_next_node_single($node)
{

  $type = $node->type;
  $nid = $node->nid;
  $sql = "select nid from {node} where type = :type and nid < :nid and status = 1 order by changed desc limit 1 ";

  $result = db_query($sql, array(':type' => $type, ':nid' => $nid));
  $nids = array();
  foreach ($result as $record) {
    return $record->nid;
  }
}
