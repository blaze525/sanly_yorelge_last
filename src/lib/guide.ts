import type { MarkdownFileType } from './file';

export interface GuideFrontmatter {
  title: string;
  description: string;
  author: {
    name: string;
    url: string;
    imageUrl: string;
  };
  canonicalUrl?: string;
  // alternate path where this guide has been published
  excludedBySlug?: string;
  seo: {
    title: string;
    description: string;
  };
  isNew: boolean;
  type?: 'Wideo görnüşde' | 'Tekst';
  date: string;
  sitemap: {
    priority: number;
    changefreq: 'her gün' | 'her hepde' | 'her aý' | 'her ýyl';
  };
  tags: string[];
}

export type GuideFileType = MarkdownFileType<GuideFrontmatter> & {
  id: string;
};

/**
 * Generates id from the given guide file
 * @param filePath Markdown file path
 *
 * @returns unique guide identifier
 */
function guidePathToId(filePath: string): string {
  const fileName = filePath.split('/').pop() || '';

  return fileName.replace('.md', '');
}

/**
 * Gets all the guides sorted by the publishing date
 * @returns Promisifed guide files
 */
export async function getAllGuides(): Promise<GuideFileType[]> {
  // @ts-ignore
  const guides = import.meta.glob<GuideFileType>(
    '/src/data/guides/*.md',
    {
      eager: true,
    }
  );

  const guideFiles = Object.values(guides) as GuideFileType[];
  const enrichedGuides = guideFiles.map((guideFile) => ({
    ...guideFile,
    id: guidePathToId(guideFile.file),
  }));

  return enrichedGuides.sort(
    (a, b) =>
      new Date(b.frontmatter.date).valueOf() -
      new Date(a.frontmatter.date).valueOf(),
  );
}

/**
 * Gets the guide by the given id
 * @param id Guide identifier
 * @returns Promisified guide file
 */
export async function getGuideById(
  id: string,
): Promise<GuideFileType | undefined> {
  const allGuides = await getAllGuides();

  return allGuides.find((guide) => guide.id === id);
}
