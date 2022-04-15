import { Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <Stack direction="row" className="navbar" w="100%" p={6} justify="center" spacing="8" wrap="wrap" color="white" >
            <NavLink to="/" style={{letterSpacing: "2px"}}>SAHAYAK</NavLink>
            <Spacer/>
            <NavLink to="/" className="link" exact activeClassName="link--active">Home</NavLink>
            <NavLink to="/services" className="link" activeClassName="link--active">Services</NavLink>
            <NavLink to="/helpers" className="link" activeClassName="link--active">Helpers</NavLink>
            <NavLink to="/blogs" className="link" activeClassName="link--active">Blogs</NavLink>
            <NavLink to="/login" className="link" activeClassName="link--active">Login</NavLink>
        </Stack>
    )
}

export default Navbar
