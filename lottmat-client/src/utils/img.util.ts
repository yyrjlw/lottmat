export const loadIcon = (fileName: string) =>
    new URL(`../assets/icon/${fileName}`, import.meta.url).href
