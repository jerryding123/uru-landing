import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Simple Pricing',
  description:
    'Simple, transparent pricing for everyone.',
  plans: [
    {
      id: 'free',
      title: 'Free',
      description: 'Try full features for free',
      price: 'Free',
      features: [
        {
          title: '3 Sessions Weekly',
        },
        {
          title: '10 Copilot Use Weekly',
        },
        {
          title: 'Normal Copilot Models',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
    {
      id: 'weekly',
      title: 'Weekly',
      description: 'Popular',
      price: '$10 / week',
      isRecommended: true,
      features: [
        {
          title: '1,000 Copilot Use Weekly',
        },
        {
          title: 'Unlimited Sessions Weekly',
        },
        {
          title: 'Most Powerful Copilot Models',
        },
        {
          title: 'Full Profile & Documents',
        },
        {
          title: 'Full Copilot Customization',
        },
        {
          title: 'Unlimited Interview History',
        },
        {
          title: 'Priority Customer Support',
        },
        null,
        {
          title: 'Promotion: Get 1,000 Copilot use weekly for a limited time!',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
    {
      id: 'quarterly',
      title: 'Quarterly',
      description: 'Best Value',
      price: '$49 / 3 months',
      features: [
        {
          title: '1,000 Copilot Use Weekly',
        },
        {
          title: 'Unlimited Sessions Weekly',
        },
        {
          title: 'Most Powerful Copilot Models',
        },
        {
          title: 'Full Profile & Documents',
        },
        {
          title: 'Full Copilot Customization',
        },
        {
          title: 'Unlimited Interview History',
        },
        {
          title: 'Priority Customer Support',
        },
        null,
        {
          title: 'Promotion: Get 1,000 Copilot use weekly for a limited time!',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://apps.apple.com/us/app/interview-pilot-ai-copilot/id6743263009',
      },
    },
  ],
}
