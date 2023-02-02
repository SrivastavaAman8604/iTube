import React from 'react'
import {Box, Heading, Image, Container, Stack, Text} from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:" translate(-50%,-50%)",
    textTransform: "uppercase",
    p:"4",
    size:"2xl"
}
const Home = () => {
    return (
        <Box>
            <Mycarousel/> 
            <Container minW={'50vh'} maxW={'container.xl'} minH={'120vh'} p="16">
                <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">
                    Services
                </Heading>
                <Stack h="full" p="7" alignItems={'center'} direction={['column','row']}>
                    <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, consequatur dolor! Repellendus nam dignissimos, dolores magnam ex laudantium dolor nisi quisquam et. Aperiam voluptatibus dolore dicta exercitationem, ad animi debitis.
                        Praesentium eveniet et explicabo, assumenda cumque tenetur dolore consequuntur labore. Ullam a dolor ab, excepturi placeat quae quos quaerat, reiciendis unde, quidem sapiente voluptate suscipit dignissimos numquam. Praesentium, debitis molestiae.
                        Modi delectus nesciunt quod voluptates pariatur perspiciatis architecto molestiae praesentium necessitatibus facilis maxime sit impedit, dolor amet nihil fuga earum voluptas nemo quaerat similique! Neque totam doloribus quae quod maiores.
                        Pariatur, suscipit? Eius ducimus nostrum quam optio sint architecto sed vero, aut, aperiam nihil excepturi possimus nesciunt delectus illum similique velit assumenda deleniti quos tempora consequatur necessitatibus, quaerat reiciendis culpa!
                        Nulla non excepturi nam blanditiis culpa ullam repudiandae, laborum quia eveniet eligendi facere, aspernatur veniam labore vero optio error possimus vitae! Aliquid, distinctio! Repudiandae deserunt nisi obcaecati amet, distinctio sunt?
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const Mycarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false}  showArrows={false} showThumbs={false}>
        <Box w="full" h={"100vh"}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the future
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is gaming
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on console
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night life
            </Heading>
        </Box>
    </Carousel>
);


export default Home
