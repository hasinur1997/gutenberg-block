<?php 
/**
* Plugin Name:       Gutenberg Block Components
* Plugin URI:        https://example.com/plugins/the-basics/
* Description:       Handle the basics with this plugin.
* Version:           1.10.3
* Requires at least: 5.2
* Requires PHP:      7.2
* Author:            Hasinur Rahman
* Author URI:        https://author.example.com/
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:       gbc
* Domain Path:       /languages
*/

/**
 * Classs Gutenberg_Block_Components
 */
class Gutenberg_Block_Components {
    /**
     * Initialize
     */
    public function __construct() {
        $this->init_hooks();
    }

    /**
     * Get instance the of the class
     *
     * @return object | bool
     */
    public static function init() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new self();
        }

        return $instance;
    }

    /**
     * Init all required hooks
     *
     * @return void
     */
    public function init_hooks() {
        add_action( 'init', [ $this, 'register_blocks' ] );
        add_action( 'enqueue_block_editor_assets', [ $this, 'admin_scripts' ] );
    }

    /**
     * Enqueue scripts
     *
     * @return void
     */
    public function admin_scripts() {
        wp_enqueue_script('gutenberg-block-components-scripts', plugins_url('dist/index.js', __FILE__), [], time(), true);
    }

    /**
     * Register all blocks
     *
     * @return void
     */
    public function register_blocks() {
        register_block_type('gutenberg-block-components/map', [
            'editor_script' => 'gutenberg-block-components-scripts',
        ]);

        register_block_type('gutenberg-block-components/accordion', [
            'editor_script' => 'gutenberg-block-components-scripts',
        ]);
    }
}

// Kick Off the plugin
Gutenberg_Block_Components::init();