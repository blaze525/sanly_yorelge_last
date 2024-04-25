const formatter = Intl.NumberFormat('en-US', {
  notation: 'compact',
});

export async function getDiscordInfo(): Promise<{
  url: string;
  total: number;
  totalFormatted: string;
  online: number;
  onlineFormatted: string;
}> {
  const response = await fetch(
    '#'
  );
  const json = await response.json();
  return {
    url: `#`,
    total: json.approximate_member_count,
    totalFormatted: formatter.format(json.approximate_member_count),
    online: json.approximate_presence_count,
    onlineFormatted: formatter.format(json.approximate_presence_count),
  };
}
