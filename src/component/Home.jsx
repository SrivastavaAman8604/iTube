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
                       At iTube, we believe in the power of visual storytelling to inspire, inform, and connect people worldwide. Our platform has evolved into a vibrant community of creators, viewers, and collaborators united by a shared passion for video content.
                        Our mission is to empower individuals and organizations to share their stories, knowledge, and creativity through the medium of video. We strive to provide a user-friendly platform that fosters creativity, encourages collaboration, and amplifies diverse voices from around the globe.
                        iTube is fueled by a dedicated team of passionate individuals committed to delivering an exceptional user experience. From developers and designers to content strategists and customer support specialists, each member of our team plays a vital role in bringing our vision to life.
                        Join the iTube community today and embark on your journey of creativity, exploration, and connection through the power of video.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}

const Mycarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false}  showArrows={false} showThumbs={false}>
        <Box w="full" h={["50vh","100vh"]}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch the future
            </Heading>
        </Box>
        <Box w="full" h={["50vh","100vh"]}>
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is gaming
            </Heading>
        </Box>
        <Box w="full" h={["50vh","100vh"]}>
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on console
            </Heading>
        </Box>
        <Box w="full" h={["50vh","100vh"]}>
            <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Night life
            </Heading>
        </Box>
    </Carousel>
);


export default Home
