import { Flex, Text, Icon, Link, Box } from '@chakra-ui/react';
import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const MoreInfo = () => {
  return (
    <Flex mt={150} justifyContent={'center'}>
      <Link
        href="https://blog.nubank.com.br"
        isExternal
        target="_blank"
        display="flex"
        alignItems="center"
      >
        <Box display={'flex'} alignItems={'center'}>
          <Text fontSize={'25px'} color={'#820ad1'}>
            Clique aqui e fique por dentro das notícias no blog oficial da
            Nubank{' '}
          </Text>
          <Icon
            as={ExternalLinkIcon}
            color={'#820ad1'}
            width={25}
            height={25}
            ml={10}
          />
        </Box>
      </Link>
    </Flex>
  );
};

export default MoreInfo;
