import { Flex, Text, Box, Image } from '@chakra-ui/react';
import React from 'react';
import photoResponsability from '../../assets/photoResponsability.png';

const Responsibility = () => {
  return (
    <Flex
      id="responsability"
      mt={100}
      height={600}
      backgroundColor={'#820ad1'}
      justifyContent="space-between"
      padding={50}
      alignItems={'center'}
    >
      <Box flex={1}>
        <Image
          src={photoResponsability}
          alt="ImagemCartaoDigital"
          width={600}
        />
      </Box>
      <Box flex={1}>
        <Flex alignItems="center" justifyContent="center">
          <Text color={'white'} fontSize={'35px'}>
            Missão
          </Text>
        </Flex>
        <Text color={'white'} fontSize={'22px'} textAlign={'center'}>
          Revolucionar o sistema financeiro para dar às pessoas o controle sobre
          suas vidas financeiras.
        </Text>
        <Flex alignItems="center" justifyContent="center">
          <Text color={'white'} fontSize={'35px'}>
            Visão
          </Text>
        </Flex>
        <Text color={'white'} fontSize={'22px'} textAlign={'center'}>
          Ser a empresa mais amada pelos clientes, por criar produtos e serviços
          que realmente atendam às suas necessidades.
        </Text>
      </Box>
      <Box flex={1}>
        <Flex alignItems="center" justifyContent="center">
          <Text color={'white'} fontSize={'35px'}>
            Valores
          </Text>
        </Flex>
        <Text color={'white'} fontSize={'22px'} textAlign={'center'}>
          O Nubank baseia-se em valores como transparência, simplicidade,
          autonomia, diversidade e tecnologia. A empresa busca oferecer uma
          experiência bancária transparente e simples, capacitando os clientes a
          tomar decisões informadas sobre suas finanças. Além disso, o Nubank
          valoriza a diversidade de perspectivas e utiliza a tecnologia para
          impulsionar sua inovação contínua.
        </Text>
      </Box>
    </Flex>
  );
};

export default Responsibility;
