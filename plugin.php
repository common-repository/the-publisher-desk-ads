<?php
/**
 * Plugin Name: The Publisher Desk - Ads
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Gutenberg Block for Inserting TPD Ad Placements.
 * Author: The Publisher Desk
 * Author URI: https://publisherdesk.com/
 * Version: 1.0.3
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
