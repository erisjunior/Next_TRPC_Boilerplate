import { useContext } from 'react'

import { ColorMode, ColorModeContextProps } from '~/presentation/common/types'
import { ColorModeContext } from '~/presentation/contexts'

export const useColorModeContext = (): ColorModeContextProps => {
  const context = useContext(ColorModeContext)

  if (context) return context

  return {
    colorMode: ColorMode.LIGHT,
    setColorMode: () => {}
  }
}
