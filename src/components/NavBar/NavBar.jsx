import { Avatar, Flex, Link, WrapItem } from '@chakra-ui/react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import LogoNubank from '../../assets/nubank.svg';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Flex
      px={8}
      py={6}
      position="fixed"
      top={0}
      width="100%"
      height={60}
      backgroundColor="#e8e8e8"
      zIndex={100}
      justifyContent={'center'}
    >
      <Flex alignItems="center" mr={200}>
        <WrapItem>
          <Link target="_blank">
            <Avatar name="LogoNubank" src={LogoNubank} width={50} ml={50} />
          </Link>
        </WrapItem>
      </Flex>

      <Flex alignItems="center" mr={400}>
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
          activeClass={'active'}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#820ad1' }}
            _hover={{ opacity: 0.8 }}
          >
            Inicio
          </span>
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#820ad1' }}
            _hover={{ opacity: 0.8 }}
          >
            Sobre
          </span>
        </ScrollLink>
        <ScrollLink
          to="services"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#820ad1' }}
            _hover={{ opacity: 0.8 }}
          >
            Serviços
          </span>
        </ScrollLink>
        <ScrollLink
          to="history"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#820ad1' }}
            _hover={{ opacity: 0.8 }}
          >
            Nossa história
          </span>
        </ScrollLink>
        <ScrollLink
          to="responsability"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#820ad1' }}
            _hover={{ opacity: 0.8 }}
          >
            Responsabilidades
          </span>
        </ScrollLink>
        <ScrollLink
          to="marketDiff"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ marginLeft: 20 }}
        >
          <span
            style={{ cursor: 'pointer', marginRight: 20, color: '#820ad1' }}
            _hover={{ opacity: 0.8 }}
          >
            Diferenciais mercadológicos
          </span>
        </ScrollLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
