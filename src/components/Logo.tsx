
import React from 'react';
import { Text, HStack } from '@chakra-ui/react';

interface LogoProps {
  isRetro?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isRetro = false }) => {
  return (
    <HStack className="logo" spacing={0}>
      <Text 
        fontFamily={isRetro ? "'Press Start 2P', cursive" : "inherit"}
        fontWeight="light" 
        fontSize="xl"
        color="white"
      >
        Skill
      </Text>
      <Text 
        fontFamily={isRetro ? "'Press Start 2P', cursive" : "inherit"}
        fontWeight="normal" 
        fontSize="xl"
        color="#9b87f5" // skill-purple
      >
        S
      </Text>
      <Text 
        fontFamily={isRetro ? "'Press Start 2P', cursive" : "inherit"}
        fontWeight="normal" 
        fontSize="xl"
        color="#38B2AC" // skill-cyan
      >
        S
      </Text>
      <Text 
        fontFamily={isRetro ? "'Press Start 2P', cursive" : "inherit"}
        fontWeight="light" 
        fontSize="xl"
        color="white"
      >
        wap
      </Text>
    </HStack>
  );
};

export default Logo;
