import { createContext } from 'react'

import { ColorMode, ColorModeContextProps } from '~/presentation/common/types'

export default createContext<ColorModeContextProps>({
  colorMode: ColorMode.LIGHT,
  setColorMode: () => {}
})
