import React from 'react'
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
    Button,
    useDisclosure,
    VStack,
    HStack
} from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi';


const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure();

    return (
        <>
            <Button
                pos={'fixed'}
                top={'4'}
                left={'4'}
                colorScheme={'purple'}
                zIndex={"overlay"}
                p={'0'}
                w={"10"}
                h={"10"}
                borderRadius="full"
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'}/>
            </Button>
            
            <Drawer isOpen={isOpen} placement="start" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>iTube</DrawerHeader>
                    <DrawerBody>
                    <VStack alignItems={"flex-start"}>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'./home'}>Home</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'./videos'}>Videos</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'./videos?category=Free'}>Free Videos</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'./upload'}>Upload Videos</Link>
                        </Button>
                    </VStack>

                    <HStack pos={'absolute'} onClick={onClose} bottom={"10"} left={"10"} justifyContent={"space-evenly"}>
                        <Button colorScheme={'purple'}>
                            <Link to={'/login'}>Log In</Link>
                        </Button>
                        <Button colorScheme={'purple'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
