import path from 'node:path';
import fs from 'node:fs/promises';

async function getRoadmapIds() {
  return fs.readdir(path.join(process.cwd(), 'src/data/roadmaps'));
}

async function getBestPracticesIds() {
  return fs.readdir(path.join(process.cwd(), 'src/data/best-practices'));
}

export function shouldIndexPage(pageUrl) {
  return ![
    'http://localhost/404',
    'http://localhost/terms',
    'http://localhost/privacy',
    'http://localhost/pdfs',
    'http://localhost/g',
  ].includes(pageUrl);
}

export async function serializeSitemap(item) {
  const highPriorityPages = [
    'http://localhost:3000',
    'http://localhost:3000/about',
    'http://localhost:3000/roadmaps',
    'http://localhost:3000/best-practices',
    'http://localhost:3000/guides',
    'http://localhost:3000/videos',
    ...(await getRoadmapIds()).flatMap((id) => [
      `http://localhost:3000/${id}`,
      `http://localhost:3000/${id}/topics`,
    ]),
    ...(await getBestPracticesIds()).map(
      (id) => `http://localhost:3000/best-practices/${id}`
    ),
  ];

  // Roadmaps and other high priority pages
  for (let pageUrl of highPriorityPages) {
    if (item.url === pageUrl) {
      return {
        ...item,
        // @ts-ignore
        changefreq: 'monthly',
        priority: 1,
      };
    }
  }

  // Guide and video pages
  if (
    item.url.startsWith('#') ||
    item.url.startsWith('#')
  ) {
    return {
      ...item,
      // @ts-ignore
      changefreq: 'monthly',
      priority: 0.9,
    };
  }

  return undefined;
}
