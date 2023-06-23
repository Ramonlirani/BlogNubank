import { useEffect } from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import CartaoNubankHeader from '../../assets/photoCartoesNubank.png';

const HomePage = () => {
  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let interval = null;
    const nameElement = document.querySelector('.title');

    const animateName = (target) => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        target.innerText = target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    if (nameElement) {
      animateName(nameElement);
    }

    const handleMouseOver = (event) => {
      animateName(event.target);
    };

    if (nameElement) {
      nameElement.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (nameElement) {
        nameElement.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'space-between'}
      marginX={300}
      id="home"
    >
      <Text fontSize={'45px'} textColor={'black'} mt={200}>
        Olá, <br /> Bem vindo ao <br />
        <Text
          as="span"
          className="title"
          data-value="Blog Nubank"
          style={{
            background: 'linear-gradient(to right, #820ad1, #b283d1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Blog Nubank
        </Text>{' '}
      </Text>
      <Box mt={200}>
        <Image src={CartaoNubankHeader} alt="Nubank" width={500} />
      </Box>
    </Flex>
  );
};

export default HomePage;
