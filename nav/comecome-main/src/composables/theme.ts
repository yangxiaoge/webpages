import type { Theme } from '@/types'
import { themeList } from '@/utils'
import preset from '@/preset.json'

type ThemeVar = keyof Theme
type ThemeVars<T extends Theme> = { [K in keyof T]: Ref<string> }

const settingsCache = loadSettings()
const defaultTheme: string = settingsCache ? settingsCache.theme : preset.settings.theme
function camelToCssVar(str: string) {
  return `--${str.replace(/[A-Z]|[0-9]+/g, (match: string) => `-${match.toLowerCase()}`)}`
}

const currentTheme = themeList.find(item => item.enName === defaultTheme)!.value
export const themeVars: ThemeVars<Theme> = Object.keys(
  currentTheme).reduce(
  (obj, key) => {
    const cssVar = camelToCssVar(key)
    document.documentElement.style.setProperty(cssVar, currentTheme[key as ThemeVar])
    obj[key as ThemeVar] = useCssVar(cssVar)
    return obj
  },
  {} as Partial<ThemeVars<Theme>>,
) as ThemeVars<Theme>

export function toggleTheme(theme: string) {
  const newTheme = themeList.find(item => item.enName === theme)!.value
  for (const key in newTheme) {
    themeVars[key as ThemeVar].value = newTheme[key as ThemeVar]
  }
}
