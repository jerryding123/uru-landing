import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTiktok, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Uru',
    description: 'Uru is your AI-powered resale tool that helps you list your secondhand fashion in seconds, generate smart prices, and crosspost across marketplaces with one seamless click.',
  } as NextSeoProps,
  termsUrl: '/terms',
  privacyUrl: '/privacy',
  header: {
    links: [
      {
        id: 'benefits',
        label: 'Features',
      },
      {
        id: 'features',
        label: 'How To Use',
      },
     /*  {
        id: 'testimonials',
        label: 'Reviews', 
      },
      {
        id: 'pricing',
        label: 'Pricing',
      }, */
      {
        id: 'faq',
        label: 'Q&A',
      },
    /*   {
        label: 'Blog',
        href: '/blog',
      }, */
      {
        label: 'Join Waitlist',
        href: '/download/hero',  // Changed from direct App Store URL
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Developed by{' '}
        <Link href="https://www.liberaceai.com">Liberace AI</Link> © 2025 • All Rights Reserved
      </>
    ),
    links: [
      {
        href: 'mailto:Support@LiberaceAI.com',
        label: 'Contact',
      },
      {
        href: '/terms',
        label: 'Terms & Services',
      },
      {
        href: '/privacy',
        label: 'Privacy Policy',
      },
      {
        href: 'https://linkedin.com/company/interview-pilot',
        label: <FaLinkedinIn size="18" />,
      },
      {
        href: 'https://x.com/interview_pilot',
        label: <FaTwitter size="18" />,
      },
      {
        href: 'https://www.tiktok.com/@interview_pilot',
        label: <FaTiktok size="18" />,
      },
      {
        href: 'https://www.instagram.com/interview_pilot?igsh=MWlxdXBraDA3MTBhcQ%3D%3D&utm_source=qr',
        label: <FaInstagram size="18" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig