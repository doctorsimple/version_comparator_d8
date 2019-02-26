<?php

namespace Drupal\comparator\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "comparator_block",
 *   admin_label = @Translation("Comparator Block"),
 * )
 */
class ComparatorBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
      '#theme' => 'comparator',
      '#attached' => array(
        'library' => array(
          'comparator/comparator-block'
        )
      )
    );
  }

}
