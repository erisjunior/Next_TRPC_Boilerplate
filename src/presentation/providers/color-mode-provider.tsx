import { useMemo, useState } from 'react'

import { ColorMode } from '~/presentation/common/types'
import { ColorModeContext } from '~/presentation/contexts'

type Props = {
  defaultMode?: ColorMode
  children: React.ReactNode
}
const ColorModeProvider = ({
  defaultMode = ColorMode.LIGHT,
  children
}: Props) => {
  const [colorMode, setColorMode] = useState<ColorMode>(defaultMode)

  const value = useMemo(
    () => ({
      colorMode,
      setColorMode
    }),
    [colorMode, setColorMode]
  )

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider
