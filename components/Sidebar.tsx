import Link from 'next/link'

const Sidebar = () => {
  return (
    <Box as="nav" width="200px" height="100vh" bg="gray.100" p={4}>
      <VStack align="stretch" spacing={4}>
        <Link href="/dashboard">
          <Text>Dashboard</Text>
        </Link>
        <Link href="/ai-tools">
          <Text>AI Tools</Text>
        </Link>
        <Link href="/profile">
          <Text>Profile</Text>
        </Link>
      </VStack>
    </Box>
  )
}

export default Sidebar