import React from 'react'
import {VStack} from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <div>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"} my={"16"}>
            <h1 h={"100vh"}>Welcome to Admin dashboard</h1>
        </VStack>
    </div>
  )
}

export default Dashboard
