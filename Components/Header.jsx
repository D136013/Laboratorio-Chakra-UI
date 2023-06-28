import { Box, Button, Center, Text, Flex } from '@chakra-ui/react';

const Header = () => {

    return (
        <>
        <Box  w="90vw" h="240px" pos="relative"></Box>
            <Box
                 bg="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GoZG8owghkaimxG5vOcaRRjuw6CTRAxL5w&usqp=CAU)"
                bgSize="center"
                bgPosition="center"
                height="40vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="30px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Box mt={4}>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Box>
                </Center>
            </Box>
            <br />
            <Box
                bg={`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_8HFE2n0i-ocnjEZAP35Fb-NwLlJujdPfQ&usqp=CAU)`}
                bgSize="cover"
                bgPosition="center"
                height="40vh"
                width="25%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="25px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Flex direction="column" mt={4}>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'white', color: 'blue.500' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

export default Header;