export enum ColorMode {
  LIGHT = 'light',
  DARK = 'dark'
}

export type ColorModeContextProps = {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
}
