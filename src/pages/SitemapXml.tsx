import { useEffect } from "react";

const SitemapXml = () => {
  useEffect(() => {
    // Определяем базовый URL сайта
    const baseUrl = window.location.origin;
    
    // Текущая дата в формате YYYY-MM-DD для lastmod
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Создаем XML-содержимое
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/sitemap</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/care</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/varieties</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/problems</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/propagation</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/gallery</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/glossary</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/resources</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>0.5</priority>
  </url>
</urlset>`;

    // Устанавливаем Content-Type для XML
    document.documentElement.innerHTML = '';
    document.body.innerHTML = '';
    
    // Создаем pre-элемент для отображения XML в читаемом виде
    const pre = document.createElement('pre');
    pre.textContent = xmlContent;
    document.body.appendChild(pre);
    
    // Устанавливаем заголовок Content-Type
    const metaTag = document.createElement('meta');
    metaTag.httpEquiv = 'Content-Type';
    metaTag.content = 'application/xml; charset=utf-8';
    document.head.appendChild(metaTag);
    
    // Это позволит скачать файл при необходимости
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'sitemap.xml';
    downloadLink.textContent = 'Скачать sitemap.xml';
    downloadLink.style.display = 'block';
    downloadLink.style.margin = '20px';
    document.body.appendChild(downloadLink);
  }, []);

  return null; // компонент ничего не возвращает, так как мы напрямую манипулируем DOM
};

export default SitemapXml;
