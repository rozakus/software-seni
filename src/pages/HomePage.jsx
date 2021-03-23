import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserRepos } from '../store/actions/reposAction'

// UI
import { Box, Button, InputGroup, Input, InputRightElement, SimpleGrid, Center, VStack, Text, Badge, Avatar, HStack } from '@chakra-ui/react'

export default function HomePage() {
  const dispatch = useDispatch()

  const { repos } = useSelector((state) => state.reposReducer)
  // console.log(repos)
  const [user, setUser] = useState('')

  // handling
  const handleSearch = () => { dispatch(getUserRepos(user)) }
  const handleToPage = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Box maxW='full' p='12'>
      <Center>
        <InputGroup width='30%'>
          <Input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder='Search repos for github user'
          />
          <InputRightElement width='min-content'>
            <Button
              onClick={() => handleSearch()}
            >
              Search
          </Button>
          </InputRightElement>
        </InputGroup>
      </Center>
      <SimpleGrid columns={4} spacing={10} mt='5'>
        {
          repos.length > 0 ?
            repos.map((repo, index) => {
              return (
                <Box key={index} p='5'>
                  <VStack>
                    <Badge px='5' py='2' borderRadius='full' colorScheme='teal' fontSize="sm">{index + 1} {repo.name}</Badge>
                    <HStack>
                      <Avatar
                        size='xs'
                        src={repo.owner.avatar_url}
                      />
                      <Text size='xs'>{repo.owner.login}</Text>
                      <Button
                        size='xs'
                        onClick={() => { handleToPage(repo.html_url) }}
                      >Go to repo</Button>
                    </HStack>
                    <HStack >
                      <Text fontSize="xs"> Language : </Text>
                      <Text fontSize="xs" color='teal'>{repo.language ?? 'none'}</Text>
                    </HStack>
                    <Text fontSize="xs">created : {repo.created_at.split('T')[0]}</Text>
                    <Text fontSize="xs">last updated : {repo.updated_at.split('T')[0]}</Text>
                  </VStack>
                </Box>
              )
            })
            :
            <>
              <Box></Box>
              <Box>Please search the username</Box>
              <Box></Box>
              <Box></Box>
            </>
        }
      </SimpleGrid>
    </Box>
  )
}