
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Search } from 'lucide-react';
import { 
  Box, 
  Flex, 
  Input, 
  InputGroup, 
  InputLeftElement, 
  Button, 
  Container,
  Link as ChakraLink
} from '@chakra-ui/react';

interface NavBarProps {
  isRetro?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isRetro = false }) => {
  return (
    <Box
      as="nav"
      borderBottom="1px"
      borderColor="rgba(155, 135, 245, 0.2)"
      bg="rgba(7, 7, 7, 0.5)"
      backdropFilter="blur(8px)"
      position="sticky"
      top="0"
      zIndex="50"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex h="16" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap={4}>
            <Link to={isRetro ? '/' : '/home'}>
              <Logo isRetro={isRetro} />
            </Link>
          </Flex>
          
          {!isRetro && (
            <Flex display={{ base: "none", md: "flex" }} flex="1" maxW="lg" mx={8}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Box as={Search} color="#9b87f5" h={4} w={4} />
                </InputLeftElement>
                <Input 
                  type="search" 
                  placeholder="Search skills..." 
                  pl={10} 
                  bg="transparent" 
                  border="1px" 
                  borderColor="rgba(155, 135, 245, 0.3)" 
                  _focus={{ borderColor: "#9b87f5" }}
                  borderRadius="full" 
                />
              </InputGroup>
            </Flex>
          )}
          
          <Flex alignItems="center" gap={4}>
            {isRetro ? (
              <Link to="/home">
                <Button 
                  bg="#9b87f5" 
                  color="white" 
                  fontWeight="light" 
                  fontSize="sm" 
                  borderRadius="md" 
                  _hover={{ bg: "#a797f7" }}
                  px={4}
                  py={2}
                >
                  GET STARTED
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/">
                  <ChakraLink 
                    color="rgba(255, 255, 255, 0.7)" 
                    _hover={{ color: "white" }}
                    transition="colors 0.2s"
                    fontWeight="light"
                  >
                    Back to Intro
                  </ChakraLink>
                </Link>
                <Link to="#">
                  <Button 
                    bg="rgba(155, 135, 245, 0.9)" 
                    _hover={{ bg: "#9b87f5" }} 
                    color="white" 
                    fontWeight="light" 
                    borderRadius="md"
                    px={4}
                    py={2}
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
