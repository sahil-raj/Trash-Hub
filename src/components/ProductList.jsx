import React from 'react'
import Products from './Products'
import {Container,Stack,Flex,Box,Heading,Text,Image,Icon,useColorModeValue,} from "@chakra-ui/react";
import placeHolder from "../assets/placeHolder.jpg";
import Manufacturer from './Manufacturer';
export default function ProductList() {
  return (
    <>
    <Manufacturer/>
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
  </>
  )
}
