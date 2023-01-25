import React,{useState} from 'react'
import Cart from './Cart'

function NavBar({newArray}) {
  const[isTrue,setIsTrue]=useState(true)

  function handleClick(){
    setIsTrue(!isTrue)
  }
