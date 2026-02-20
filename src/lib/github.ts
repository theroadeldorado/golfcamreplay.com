export interface ReleaseInfo {
  version: string;
  downloadUrl: string;
  fileName: string;
  fileSize: number;
  publishedAt: string;
  htmlUrl: string;
}

export async function getLatestRelease(): Promise<ReleaseInfo | null> {
  try {
    const res = await fetch(
      'https://api.github.com/repos/theroadeldorado/golf-swing-replay/releases/latest',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const exeAsset = data.assets?.find(
      (a: { name: string }) => a.name.endsWith('.exe')
    );

    if (!exeAsset) return null;

    return {
      version: data.tag_name,
      downloadUrl: exeAsset.browser_download_url,
      fileName: exeAsset.name,
      fileSize: exeAsset.size,
      publishedAt: data.published_at,
      htmlUrl: data.html_url,
    };
  } catch {
    return null;
  }
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
