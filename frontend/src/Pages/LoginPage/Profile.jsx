import React,{use,useEffect,unState, useState} from 'react'
import Service from '../../utils/http'
import { Avatar,Center,Text } from '@mantine/core';
import { Stack, Button } from '@mantine/core';

const service = new Service();
export default function Profile() {
    const[profileData,setProfileData]=useState(null);
    async function getProfileData()
    {
        let data = await service.get("user/me");
        setProfileData(data);
        console.log(data);
    }
    useEffect(()=>{
    getProfileData()},[])
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="md"
    >
    <div>
        <Center><Avatar src = {profileData?.avatar} size="xl"/></Center>
        <Text>{profileData?.email}</Text>
        <Text>{profileData?.name}</Text>
    </div>
    </Stack>
  )
}
