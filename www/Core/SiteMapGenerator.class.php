<?php
namespace App\Core;

use App\Model\Page as PageModel;
use App\Model\Article;

class SiteMapGenerator 
{
    private static $file_instance = null;
    
    public function __construct()
    {
    }
    
    public static function getInstance() 
    {
        if (is_null(self::$file_instance)) {
            self::$file_instance = fopen('./sitemap.xml', 'w');
        }
        return self::$file_instance;
    }
    
    public static function generateSiteMap()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>' . WEBSITEURL . '/</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.9</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/profile</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.6</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/recettes</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.9</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/cuisiniers</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.9</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/register-login</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/mail-validation</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.4</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/certification-request</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.4</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/pwd-forget</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.3</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/recette</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/recette/edit</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.6</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/create-recette</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/dashboard</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.9</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/list</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/ingredient-reques</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.4</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/settings</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/404</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/modify-email</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.4</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/new-mail-validation</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.3</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/modify-password</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.4</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/create-page</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>' . WEBSITEURL . '/page/edit</loc>
                <lastmod>' . date('Y-m-d') . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.6</priority>
            </url>
            ';
        
        $pageModel = new PageModel();
        $pages = $pageModel->select('page', ['id', 'path', 'updatedAt'])
            ->fetchAll();

        foreach ($pages as $page) {
            $sitemap .= '
            <url>
                <loc>' . WEBSITEURL . '/' . $page->getPath() . '</loc>
                <lastmod>' . date('Y-m-d', strtotime($page->updatedAt)) . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.5</priority>
            </url>
            ';
        }

        $article = new Article();
        $article = $article->select('article', ['title', 'updatedAt'])
            ->fetchAll();

        foreach ($article as $article) {
            $sitemap .= '
            <url>
                <loc>' . WEBSITEURL . '/recette/' . urlencode($article->getTitle()) . '</loc>
                <lastmod>' . date('Y-m-d', strtotime($article->updatedAt)) . '</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.5</priority>
            </url>
            ';
        }
        
        $sitemap .= '</urlset>';
        
        fwrite(self::getInstance(), $sitemap);
    }

    public function __destruct()
    {
        $instance = self::getInstance();
        fclose($instance);
    }
}