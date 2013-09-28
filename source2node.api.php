<?php
// $Id$

/**
 * @file
 * Demonstrate the hooks for source2node module
 */
/**
 * Implementation of hook_source2node_node_save
 *
 * @param string $url
 *   The original url, where the source was pulled from
 * @param int $nid
 *   The nid of the Drupal node where this landed
 *
 * @return NULL
 */
function hook_source2node_index($url, $nid) {
  //do something with this match
  
}
