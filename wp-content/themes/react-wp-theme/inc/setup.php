<?php
/**
 * This file is used to get the Create React App assets enqueued properly
 */

/**
 * Gets the contents of the Create React App manifest file
 *
 * @return array|bool|string
 */
function get_app_manifest() {
	$manifest = file_get_contents( get_template_directory_uri() . '/app/build/asset-manifest.json' );
	$manifest = (array) json_decode( $manifest );

	return $manifest;
}

/**
 * Gets the path to the stylesheet compiled by Create React App
 *
 * @return string
 */
function get_app_stylesheet() {
	$manifest = get_app_manifest();

	return get_template_directory_uri() . '/app/build/' . $manifest['main.css'];
}

/**
 * Gets the path to the built javascript file compiled by Create React App
 *
 * @return string
 */
function get_app_script() {
	$manifest = get_app_manifest();

	return get_template_directory_uri() . '/app/build/' . $manifest['main.js'];
}

/**
 * Enqueues the scripts
 */
add_action( 'wp_enqueue_scripts', function() {
	enqueue_react_app();
} );

/**
 * Enqueues the stylesheet and js
 */
function enqueue_react_app() {
	wp_enqueue_script( 'react-wp-theme', get_app_script(), array(), false, true );
	wp_enqueue_style( 'react-wp-theme', get_app_stylesheet(), array(), false, false );
}
