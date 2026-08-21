// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'http://localhost:3000'; // Replace with your actual live domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Protect private backend/admin routes from search results
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
