import { Container , VStack , Heading , Input , Text , Button } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleForm=(e)=>{
        e.preventDefault()

        const users=[
        {
            email:`aman@gmail.com`,
            password: 'aman123',
            role:'admin'
        },
        {
            email:`vend@gmail.com`,
            password: 'vend123',
            role:'vendor'
        },
        {
            email:`user@gmail.com`,
            password: 'user123',
            role:'user'
        }
    ]

        const user = users.find(user => user.email === email && user.password === password);

        if(user){
            switch(user.role){
                case 'admin':
                    navigate('/dashboard')
                    break;
                case 'vendor':
                    navigate('/vendordashboard');
                    break;
                case 'user':
                    navigate('/userdashboard');
                    break;
                default:
                    navigate('/signup')

            }      
        }else{
            navigate('/signup')
        }
    }

    return (
        <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
            <form onSubmit={handleForm}>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
                    <Heading>
                        Welcome Back
                    </Heading>
                    <Input placeholder={'Email'} type={"email"} value={email} required focusBorderColor={"purple.500"} onChange={(e) => setEmail(e.target.value)}
                        />
                    <Input placeholder={'Password'} type={"password"} value={password} required focusBorderColor={"purple.500"}  onChange={(e) => setPassword(e.target.value)}/>
                    <Button variant={"link"} alignSelf={"flex-end"}>
                        <Link to={'/forgetpassword'}>Forget Password?</Link>
                    </Button>
                    <Button colorScheme={'purple'} type="submit">Log In</Button>

                    <Text textAlign={'right'}>New User? {' '}
                        <Button variant={"link"} colorScheme={'purple'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Login
