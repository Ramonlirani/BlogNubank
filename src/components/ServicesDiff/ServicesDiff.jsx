import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import CartaoDigital from '../../assets/contaDigital.png';
import photoCartoesNubank from '../../assets/photoCartoesNubank.png';
import nuVideo from '../../assets/nuVideo.mp4';

const ServicesDiff = () => {
  return (
    <Flex id="services" mt={280} alignItems="center" flexDirection="column">
      <Text fontSize="50px" mb={10} color="#820ad1" mt={100}>
        Serviços
      </Text>
      <Flex justifyContent="space-between">
        <Flex
          flexDirection="column"
          backgroundColor="black"
          alignItems="center"
          p={4}
          borderRadius={4}
        >
          <Text fontSize="30px" mt={2} color="white">
            Conta Digital do Nubank
          </Text>
          <Box>
            <Image src={CartaoDigital} alt="ImagemCartaoDigital" width={400} />
          </Box>
          <Text fontSize="17px" color="white" mt={3}>
            O Nubank oferece uma conta digital completa, que permite aos
            clientes gerenciar suas finanças, realizar transferências, pagar
            contas e receber depósitos.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          backgroundColor="white"
          alignItems="center"
          p={4}
          borderRadius={4}
        >
          <Text fontSize="30px" mt={2} color="black">
            Cartão de Crédito
          </Text>
          <Box>
            <Image
              src={photoCartoesNubank}
              alt="ImagemCartoesNubank"
              width={400}
            />
          </Box>
          <Text fontSize="17px" color="black">
            O Nubank é conhecido por seu cartão de crédito sem tarifas anuais,
            oferecendo uma experiência transparente e conveniente para os
            clientes.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          backgroundColor="black"
          alignItems="center"
          justifyContent="center"
          p={4}
          borderRadius={4}
        >
          <Text fontSize="30px" mt={2} color="white">
            Empréstimos e Investimentos
          </Text>
          <Box>
            <video
              src={nuVideo}
              loop
              autoPlay
              muted
              width="610"
              height="400"
              style={{ borderRadius: '4px' }} // Adicione estilos personalizados conforme necessário
            />
            <Text fontSize="17px" mt={0} color="white">
              O Nubank também oferece opções de empréstimos pessoais e
              investimentos, proporcionando aos clientes acesso a soluções
              financeiras adicionais.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ServicesDiff;
