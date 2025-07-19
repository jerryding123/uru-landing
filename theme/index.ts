import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'
import components from './components'
import { fontSizes } from './foundations/typography'

// Define your custom colors
const colors = {
  primary: {
    50:  '#ffffff',   // White
          100: '#f9f9f9',   // Ultra-light gray
          200: '#f2f2f2',   // Soft neutral
          300: '#e5e5e5',   // Light gray base
          400: '#FFF95C',   // Primary button color (lemon yellow)
          500: '#d4d4d4',   // Mid gray for borders or text
          600: '#8a8a8a',   // Secondary text
          700: '#4d4d4d',   // Subhead text / UI depth
          800: '#2a2a2a',   // Soft black
          900: '#000000',   // Pure black

/*           50:  '#ffffff',   // Pure white
          100: '#fafafa',   // Ultra-light neutral
          200: '#FFFDE4',   // White blended with yellow
          300: '#FFFCA8',   // Subtle lemon haze
          400: '#FFF95C',   // Bright lemon (accent)
          500: '#EAE946',   // Muted tech yellow
          600: '#525252',   // Mid gray (structure)
          700: '#333333',   // Dark gray (UI base)
          800: '#1a1a1a',   // Near black
          900: '#000000',   // Absolute black */
  },
  // You can keep or modify other colors as needed
}

// Customize the button component
const customComponents = {
  ...components,
  Button: {
    // Extend the current button styles
    variants: {
      primary: {
        bg: 'primary.500',
        color: 'black', // This changes the text color to black
        _hover: {
          bg: 'primary.600',
          color: 'black', // Maintain black text on hover
        },
        _active: {
          bg: 'primary.700',
          color: 'black', // Maintain black text when active
        },
      },
      // You can also customize other button variants here if needed
    },
  },
}

export const theme = extendTheme(
  {
    colors,
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    fonts: {
      heading: 'Inter Variable, Inter, sans-serif',
      body: 'Inter Variable, Inter, sans-serif',
    },
    fontSizes,
    components: customComponents, // Use the extended components
  },
  baseTheme,
)