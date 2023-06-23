import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const MarketDiff = () => {
  return (
    <Flex
      id="marketDiff"
      justifyContent={'center'}
      flexDirection={'column'}
      mt={170}
    >
      <Text fontSize={'45px'} textAlign={'start'} marginLeft={100}>
        Quais são nossos <br /> Diferenciais mercadológicos?
      </Text>
      <Accordion defaultIndex={[0]} allowMultiple marginX={100}>
        <AccordionItem mb={100}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  border={0}
                  backgroundColor={'#e5e5e5'}
                  style={{ borderTop: '2px solid black' }}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={'25px'}>
                    Tecnologia e Inovação
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={'20px'} ml={10}>
                O Nubank se destaca por sua abordagem inovadora e tecnológica,
                utilizando plataformas digitais e aplicativos móveis para
                oferecer uma experiência bancária rápida e conveniente.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem mb={100}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  border={0}
                  backgroundColor={'#e5e5e5'}
                  style={{ borderTop: '2px solid black' }}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={'25px'}>
                    Atendimento ao cliente
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={'20px'} ml={10}>
                A empresa valoriza um excelente atendimento ao cliente, com uma
                equipe dedicada pronta para ajudar os clientes por meio de
                diversos canais de comunicação.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem mb={100}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  border={0}
                  backgroundColor={'#e5e5e5'}
                  style={{ borderTop: '2px solid black' }}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={'25px'}>
                    Transparência e Simplicidade
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={'20px'} ml={10}>
                O Nubank se compromete com a transparência em suas operações e
                comunicações, fornecendo informações claras e acessíveis aos
                clientes.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem mb={100}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  border={0}
                  backgroundColor={'#e5e5e5'}
                  style={{ borderTop: '2px solid black' }}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={'25px'}>
                    Diversidade e Inclusão
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={'20px'} ml={10}>
                O Nubank valoriza a diversidade e sabe a importância de um
                ambiente de trabalho inclusivo. <br /> Em setembro de 2021, o
                quadro de funcionários do Nubank no Brasil era composto por 32%
                de pessoas negras ou pardas, 44% de mulheres, e 27% de pessoas
                LGBTQIA+. <br /> Além disso, 60% dos funcionários em posições de
                liderança são de grupos sub-representados.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  border={0}
                  backgroundColor={'#e5e5e5'}
                  style={{ borderTop: '2px solid black' }}
                >
                  <Box as="span" flex="1" textAlign="left" fontSize={'25px'}>
                    Público-alvo
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={'20px'} ml={10}>
                O Nubank direciona seus produtos e serviços principalmente para
                um público mais jovem e digitalmente conectado, <br /> que
                valoriza a praticidade, a transparência e a tecnologia em suas
                experiências bancárias. <br /> No entanto, seus serviços estão
                disponíveis para qualquer pessoa interessada em uma abordagem
                moderna e simplificada para o sistema financeiro.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default MarketDiff;
