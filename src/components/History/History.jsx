import { Box, Flex, Image, Text } from '@chakra-ui/react';
import photoHistory from '../../assets/photoHistory.png';

const History = () => {
  return (
    <Flex
      alignItems="center"
      id="history"
      marginX={130}
      mt={100}
      justifyContent={'space-between'}
    >
      <Flex flexDirection="column">
        <Text fontSize="50px" mb={4} mt={80} color="#820ad1">
          Nossa História
        </Text>
        <Flex flexDirection="column" alignItems="flex-start">
          <Text fontSize="23px" width={650}>
            O Nubank foi fundado em maio de 2013 pelo colombiano David Vélez, a
            brasileira Cristina Junqueira e o norte-americano Edward Wible.{' '}
          </Text>
          <Text fontSize="23px" width={650}>
            A empresa começou sua operação na cidade de São Paulo como uma
            pequena startup focada em resolver problemas financeiros das pessoas
            usando a tecnologia – por isso também é chamada de fintech, uma
            palavra que vem do inglês “financial technology”, ou “tecnologia
            financeira”.
          </Text>
          <Text fontSize="23px" width={650}>
            Em 2019 o Nubank chegou ao México e, em 2020, chegamos também à
            Colômbia. Desde o fim de 2021, somos uma empresa de capital aberto,
            listada na Bolsa de Valores de Nova York (NYSE). No primeiro
            trimestre de 2023, registramos lucro recorde e quase dobramos a
            receita.
          </Text>
          <Text fontSize="23px" width={650}>
            Hoje, com cerca de 80 milhões de clientes em três países, o Nubank é
            a quinta instituição financeira com mais clientes no Brasil. Além
            disso, pela segunda vez consecutiva, o Nu México foi reconhecido
            pela Forbes em sua lista dos Melhores Bancos do Mundo.
          </Text>
        </Flex>
      </Flex>
      <Box>
        <Image src={photoHistory} alt="Nubank" width={800} />
      </Box>
    </Flex>
  );
};

export default History;
