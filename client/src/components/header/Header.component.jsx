import React from 'react'
import { Link } from 'react-router-dom'
import Greeting from '../greeting/Greeting.component'
import {
    NavBar,
    HeaderContainer,
    HeaderTitle

} from './Header.style'

const Header  = ({username}) =>
    (
        <>
            <nav>
                <NavBar>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to="/addTask">
                        AddTask
                    </Link>
                </NavBar>
            </nav>
            <HeaderContainer>
                <HeaderTitle>
                    Welcome, {username}
                <Greeting />
                </HeaderTitle>
            </HeaderContainer>
        </>
        )

export default Header
