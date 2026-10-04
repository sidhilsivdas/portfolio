export const isBrowser = typeof window !== 'undefined';
export const isMobile = isBrowser ? window.matchMedia('(pointer: coarse)').matches : false;
export const canUseDOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
export const isApple: boolean = canUseDOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// Set at build time for GitHub Pages, where the site is served from /<repo-name>
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const withBasePath = (path: string) => `${basePath}${path}`;
