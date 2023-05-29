<?php

/**
 * Plugin Name:       Bloques Forma
 * Description:       Seria de bloques personalizados por Forma para mejorar la funcionalidad y el diseño de tu sitio web
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Forma
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocksforma
 *
 * @package           blocksforma
 */

function init_forma_blocks()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'init_forma_blocks');
