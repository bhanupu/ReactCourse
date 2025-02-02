import React from 'react'
import './style.css'
import Card from './product/card'
import Nav from './Navbars/Nav1'
function App() {
  return (
    <>
        <Nav />
        <Card productname="T-Shirt"  color="Blue"/>
        <Card productname="T-Shirt"  color="Black"/>
        <Card productname="T-Shirt"  color="Red"/>
        <Card productname="T-Shirt"  color="Orange"/>
        <Card productname="T-Shirt"  color="Green"/>
        <Card productname="T-Shirt"  color="Teal"/>
        <Card productname="T-Shirt"  color="Pink"/>
        <Card productname="T-Shirt"  color="Mustard"/>
        <Card productname="T-Shirt"  color="Navy"/>
        <Card productname="T-Shirt" />
    </>


  )
}

export default App
