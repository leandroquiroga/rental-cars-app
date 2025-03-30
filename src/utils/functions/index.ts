// Check if the current path matches the href and if the theme is set to 'system'
export const resolveTheme = (theme: string, systemTheme: string) => theme === 'system' ? systemTheme : theme;