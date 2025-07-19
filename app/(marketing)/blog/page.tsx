import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Badge,
  HStack,
  VStack,
  Flex,
} from '@chakra-ui/react';
import Link from 'next/link';
import { getAllPosts, BlogPostMeta } from '../../../lib/blog';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Interview Preparation Blog | Uru',
  description: 'Expert interview strategies, AI preparation tips, and career insights. Learn how to ace technical and behavioral interviews with Uru\'s comprehensive guides.',
  keywords: 'interview preparation, AI interview assistant, technical interviews, behavioral interviews, job search tips, career advice',
  openGraph: {
    title: 'Interview Preparation Blog | Uru',
    description: 'Expert interview strategies, AI preparation tips, and career insights to help you land your dream job.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interview Preparation Blog | Uru',
    description: 'Expert interview strategies and AI preparation tips for job seekers.',
  },
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Card 
      as={Link} 
      href={`/blog/${post.slug}`}
      variant="outline"
      bg="white"
      _dark={{ bg: 'gray.800', borderColor: 'gray.600' }}
      transition="all 0.2s"
      _hover={{ 
        transform: 'translateY(-4px)', 
        shadow: 'lg',
        textDecoration: 'none' 
      }}
      cursor="pointer"
    >
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          objectFit="cover"
          height="200px"
          width="100%"
          borderTopRadius="md"
        />
      )}
      
      <CardBody>
        <VStack align="start" spacing={3}>
          <HStack justify="space-between" width="100%" fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
            <HStack>
              <Text>📅</Text>
              <Text>{formatDate(post.date)}</Text>
            </HStack>
            <HStack>
              <Text>🕐</Text>
              <Text>{post.readTime} min read</Text>
            </HStack>
          </HStack>

          <Heading size="md" lineHeight="1.3" noOfLines={2}>
            {post.title}
          </Heading>

          <Text color="gray.600" _dark={{ color: 'gray.300' }} noOfLines={3} lineHeight="1.5">
            {post.excerpt}
          </Text>

          <Flex justify="space-between" align="center" width="100%">
            {post.author && (
              <Text fontSize="sm" color="gray.500" _dark={{ color: 'gray.400' }}>
                By {post.author}
              </Text>
            )}
            
            {post.tags && post.tags.length > 0 && (
              <HStack spacing={1} flexWrap="wrap">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} colorScheme="blue" variant="subtle">
                    {tag}
                  </Badge>
                ))}
                {post.tags.length > 2 && (
                  <Text fontSize="xs" color="gray.500" _dark={{ color: 'gray.400' }}>
                    +{post.tags.length - 2} more
                  </Text>
                )}
              </HStack>
            )}
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Box pt={20}>
      {/* Header */}
      <Box bg="white" _dark={{ bg: 'gray.800', borderColor: 'gray.600' }} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl" py={12}>
          <VStack spacing={6} textAlign="center">
            <Heading as="h1" size="2xl" fontWeight="bold">
              Uru Blog
            </Heading>
            <Text fontSize="xl" color="gray.600" _dark={{ color: 'gray.300' }} maxW="2xl">
              Expert interview strategies, AI-powered preparation tips, and career insights to help you land your dream job. Master technical and behavioral interviews with confidence.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Blog Posts */}
      <Box bg="gray.50" _dark={{ bg: 'gray.900' }}>
        <Container maxW="container.xl" py={12}>
        {posts.length === 0 ? (
          <VStack spacing={4} py={12} textAlign="center">
            <Heading size="lg" color="gray.500" _dark={{ color: 'gray.400' }}>
              Coming Soon: Interview Success Stories
            </Heading>
            <Text color="gray.500" _dark={{ color: 'gray.400' }}>
              We&apos;re preparing expert guides on interview preparation, AI tools, and career advancement. Check back soon for insider tips that will transform your interview game!
            </Text>
          </VStack>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        )}
        </Container>
      </Box>
    </Box>
  );
}