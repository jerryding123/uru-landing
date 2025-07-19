import { chakra, HTMLChakraProps, Image, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  const textColor = useColorModeValue('#231f20', '#fff')
  
  return (
    <chakra.div {...props}>
      <Flex align="center">
        <Image 
          src="/static/images/uru.png" 
          alt="Uru Logo" 
          maxHeight="35px"
        />
        <Text 
          ml={3} 
          fontSize="xl" 
          fontWeight="bold" 
          color={textColor}
        >
          Uru
        </Text>
      </Flex>
    </chakra.div>
  )
}