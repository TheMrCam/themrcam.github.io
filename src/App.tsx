import { ActionIcon, Box, Center, Group, Stack, Text } from '@mantine/core'
import { FaGithub, FaLinkedin, FaMastodon } from 'react-icons/fa'

function App() {
  return (
    <Center h='100vh'>
      <Stack>
        <Box>
          <Text>My name is Cameron</Text>
          <Text>Welcome to my website</Text>
        </Box>
        <Group grow>
          <ActionIcon
            size='lg'
            variant='light'
            color='hobu.6'
            component='a'
            href='https://fosstodon.org/@themrcam'
            target='_blank'
          >
            <FaMastodon size={20} />
          </ActionIcon>
          <ActionIcon
            size='lg'
            variant='light'
            color='hobu.6'
            component='a'
            href='https://github.com/themrcam'
            target='_blank'
          >
            <FaGithub size={20} />
          </ActionIcon>
          <ActionIcon
            size='lg'
            variant='light'
            color='hobu.6'
            component='a'
            href='https://linkedin.com/in/themrcam/'
            target='_blank'
          >
            <FaLinkedin size={20} />
          </ActionIcon>
        </Group>
      </Stack>
    </Center>
  )
}

export default App
