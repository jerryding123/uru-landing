import { useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'

const ThemeToggle = () => {
  const { setColorMode } = useColorMode()
  
  // Force dark mode on component mount
  useEffect(() => {
    setColorMode('dark')
  }, [setColorMode])

  // Return null instead of the button since we don't need a toggle anymore
  return null
}

export default ThemeToggle