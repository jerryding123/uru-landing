'use client'

import { Box, Button, FormControl, FormErrorMessage, Input, Stack, Text, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'

interface WaitlistFormProps {
  variant?: 'inline' | 'full'
}

export const WaitlistForm = ({ variant = 'full' }: WaitlistFormProps) => {
  const [email, setEmail] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const toast = useToast()

  useEffect(() => {
    // Load Mailchimp script
    const script = document.createElement('script')
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (!email) {
      setError('Email is required')
      setIsLoading(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      setIsLoading(false)
      return
    }

    try {
      const form = document.createElement('form')
      form.style.display = 'none'
      form.method = 'post'
      form.action = 'https://sellwithuru.us9.list-manage.com/subscribe/post?u=a4c6985742b8f9d7d56041d85&id=46a9770f64&f_id=001f51e1f0'
      form.target = '_blank'

      const emailInput = document.createElement('input')
      emailInput.type = 'email'
      emailInput.name = 'EMAIL'
      emailInput.value = email

      const firstNameInput = document.createElement('input')
      firstNameInput.type = 'text'
      firstNameInput.name = 'FNAME'
      firstNameInput.value = firstName

      const botField = document.createElement('input')
      botField.type = 'text'
      botField.name = 'b_a4c6985742b8f9d7d56041d85_46a9770f64'
      botField.value = ''

      form.appendChild(emailInput)
      form.appendChild(firstNameInput)
      form.appendChild(botField)
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)

      toast({
        title: "You're on the list!",
        description: "Thanks for joining. Check your email to confirm.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: variant === 'inline' ? 'bottom' : 'top',
      })
      setEmail('')
      setFirstName('')
    } catch (err) {
      toast({
        title: 'Error',
        description: "Something went wrong. Please try again.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return variant === 'inline' ? (
    <Box as="form" onSubmit={handleSubmit} width="full">
      <Stack direction="row" spacing={3} align="center">
        <FormControl isInvalid={!!error} width="full">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="md"
            height="46px"
            bg="white"
            borderColor="gray.300"
            _placeholder={{ color: 'gray.500' }}
            _dark={{
              bg: 'gray.800',
              borderColor: 'gray.600',
              _placeholder: { color: 'gray.400' }
            }}
            focusBorderColor="primary.500"
            required
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="primary"
          height="46px"
          px={6}
          rightIcon={<FiArrowRight />}
          isLoading={isLoading}
          loadingText="Joining"
          flexShrink={0}
          fontWeight="semibold"
        >
          Join
        </Button>
      </Stack>
    </Box>
  ) : (
    <Box 
      as="form" 
      onSubmit={handleSubmit}
      maxW="xl"
      mx="auto"
      px={{ base: 4, md: 0 }}
    >
      <Stack spacing={4}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
          <FormControl isInvalid={!!error}>
            <Input
              type="text"
              placeholder="First name (optional)"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              size="lg"
              height="56px"
              bg="white"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
              _dark={{
                bg: 'gray.800',
                borderColor: 'gray.600',
                _placeholder: { color: 'gray.400' }
              }}
              focusBorderColor="primary.500"
            />
          </FormControl>
          <FormControl isInvalid={!!error} flex={1}>
            <Input
              type="email"
              placeholder="Email address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              height="56px"
              bg="white"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
              _dark={{
                bg: 'gray.800',
                borderColor: 'gray.600',
                _placeholder: { color: 'gray.400' }
              }}
              focusBorderColor="primary.500"
              required
            />
            <FormErrorMessage>{error}</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            colorScheme="primary"
            size="lg"
            height="56px"
            px={8}
            rightIcon={<FiArrowRight />}
            isLoading={isLoading}
            loadingText="Joining..."
            flexShrink={0}
            fontWeight="semibold"
          >
            Join Waitlist
          </Button>
        </Stack>
        <Text mt={1} textAlign="center" color="gray.500" _dark={{ color: 'gray.400' }} fontSize="sm">
          * indicates required
        </Text>
      </Stack>
    </Box>
  )
}