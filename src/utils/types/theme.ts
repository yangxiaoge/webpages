import type { SettingItem, Theme } from '@/types'

export type ThemeSetting = SettingItem<Theme>

export const themeList: ThemeSetting[] = [
  {
    name: '月白',
    enName: 'MoonWhite',
    value: {
      primaryC: '#5e5e5e',
      primaryLightC: '#777777',
      primaryDarkC: '#333333',
      siteHoverC: '#94949430',
      settingBorderC: '#737373',
      settingGroupBgC: '#77777730',
      bgC: '#f3f4f6',
      mainBgC: '#f3f4f6',
      buttonC: '#E7E6E1',
      categoryC: 'rgba(85, 85, 85, 0.16)'
    },
  },
  {
    name: '初春',
    enName: 'EarlySpring',
    value: {
      primaryC: '#0d9488',
      primaryLightC: '#37a399',
      primaryDarkC: '#096b62',
      siteHoverC: '#37a39922', // primaryLightC + 22
      settingBorderC: '#096b62aa', // primaryDarkC + aa
      settingGroupBgC: '#87a8a422', // bgC + 22
      bgC: '#f3f4f6',
      mainBgC: '#f3f4f6',
      buttonC: '#87a8a4',
      categoryC: 'rgba(13, 148, 136, 0.16)'
    },
  },
  {
    name: '瀚海',
    enName: 'VastOcean',
    value: {
      primaryC: '#146C94',
      primaryLightC: '#1a8dc2',
      primaryDarkC: '#115d80',
      siteHoverC: '#1a8dc222',
      settingBorderC: '#115d80aa',
      settingGroupBgC: '#0A4D6822',
      bgC: '#f3f4f6',
      mainBgC: '#f3f4f6',
      buttonC: '#0A4D68',
      categoryC: 'rgba(20, 108, 148, 0.16)'
    },
  },
  {
    name: '大漠',
    enName: 'EndlessDesert',
    value: {
      primaryC: '#bc6c25',
      primaryLightC: '#d47a2a',
      primaryDarkC: '#96561e',
      siteHoverC: '#d47a2a22',
      settingBorderC: '#96561eaa',
      settingGroupBgC: '#BF927022',
      bgC: '#f3f4f6',
      mainBgC: '#f3f4f6',
      buttonC: '#BF9270',
      categoryC: 'rgba(188, 108, 37, 0.16)'
    },
  },
]