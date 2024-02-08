<?php
    // Para favicon
    function agregar_favicon() {
        $favicon_url = get_stylesheet_directory_uri() . '/favicon.png';
        echo '<link rel="shortcut icon" href="' . $favicon_url . '" />';
    }

    add_action('wp_head', 'agregar_favicon');
?>
