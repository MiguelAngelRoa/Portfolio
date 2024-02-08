<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <title>
        <?php bloginfo('name'); ?>
        &raquo;
        <?php is_front_page()
            ? bloginfo('description')
            : wp_title('');
        ?>
    </title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header>
        <div class="navbar">
            <ul class="navbar-nav">
                <li class="logo">
                    <img src="<?php 
                        $ruta_imagen = get_template_directory_uri() . '/images/logoPortfolio.png';
                        echo esc_url($ruta_imagen);
                    ?>" alt="LogoPortfolio">
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Jobs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Contact</a>
                </li>
            </ul>
        </div>
    </header>