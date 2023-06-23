import { Avatar, Flex, Link, Text, WrapItem } from '@chakra-ui/react';
import LogoLinkedin from '../../assets/logosSkills/iconlinkedin.svg';
import LogoGithub2 from '../../assets/logosSkills/icongithub2.svg';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      justifyContent={'flex-end'}
      alignItems={'center'}
      style={{ borderTop: '1px solid #820ad1' }}
      mt={50}
    >
      <Text color={'black'}>
        Blog criado por{' '}
        <Text
          style={{
            background: 'linear-gradient(to right, #820ad1, #b283d1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          }}
        >
          Ramon Lirani
        </Text>{' '}
        Para a disciplina Comunicação aplicada,{' '}
        <Text
          style={{
            background: 'linear-gradient(to right, #820ad1, #b283d1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline',
          }}
        >
          Obrigado{' '}
        </Text>
      </Text>
      <Flex>
        <WrapItem>
          <Link
            href="https://www.linkedin.com/in/ramon-lirani-8941a0193/"
            isExternal
            target="_blank"
            _hover={{ opacity: 0.8 }}
          >
            <Avatar name="Linkedin" src={LogoLinkedin} width={35} ml={30} />
          </Link>
        </WrapItem>
        <WrapItem>
          <Link
            href="https://github.com/Ramonlirani"
            isExternal
            target="_blank"
            _hover={{ opacity: 0.8 }}
          >
            <Avatar
              name="Github"
              src={LogoGithub2}
              width={35}
              ml={15}
              mr={20}
            />
          </Link>
        </WrapItem>
      </Flex>
    </Flex>
  );
};

export default Footer;
