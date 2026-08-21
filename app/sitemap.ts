// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://localhost:3000/'; // Replace with your actual live domain

  // Define your static pages
  const routes = [
    '',
    '/about',
    '/courses',
    '/placement',
    '/campus',
    '/career',
    '/book',
    '/blogs',
    '/gallery',
    '/contact',
  ];

  // Inside your app/sitemap.ts file, update the return statement to this:
return routes.map((route) => {
  // Clean up any double slashes cleanly
  const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
  
  return {
    url: `${baseUrl}${cleanRoute}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  };
});

}

