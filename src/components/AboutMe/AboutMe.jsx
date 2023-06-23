import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import photoAbout from '../../assets/photoAbout.png';

const AboutMe = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      <Flex flexDirection="column" id="about" ml={150} mt={200}>
        <Text
          fontSize="50px"
          mb={4}
          color="#820ad1"
          justifyContent={'flex-start'}
        >
          Sobre o Nu
        </Text>
        <Text fontSize="30px" mt={2} width={600}>
          O Nubank é uma fintech brasileira pioneira que oferece serviços
          financeiros inovadores, como cartão de crédito sem anuidade e conta
          digital. Através de seu aplicativo móvel, a empresa proporciona uma
          experiência bancária transparente, acessível e conveniente, com
          rapidez na aprovação do cartão e recursos como pagamentos,
          transferências e investimentos.
        </Text>
      </Flex>
      <Box mt={170}>
        <Image src={photoAbout} alt="Nubank" width={750} mr={150} />
      </Box>
    </Flex>
  );
};

export default AboutMe;
