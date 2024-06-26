const formatter = Intl.NumberFormat('en-US', {
  notation: 'compact',
});

const defaultStarCount = 224000;
let starCount: number | undefined = undefined;

export async function countStars(
  repo = 'blaze525/sanly_yorelge_last'
): Promise<number> {
  if (starCount) {
    return starCount;
  }

  try {
    const repoData = await fetch(`#`);
    const json = await repoData.json();

    starCount = json.stargazers_count * 1 || defaultStarCount;
  } catch (e) {
    console.log('Failed to fetch stars', e);
    starCount = defaultStarCount;
  }

  return starCount;
}

export async function getFormattedStars(
  repo = 'blaze525/sanly_yorelge_last'
): Promise<string> {
  const stars = import.meta.env.DEV ? defaultStarCount : await countStars(repo);

  return formatter.format(stars);
}
