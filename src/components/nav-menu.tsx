import React from 'react'
import { Link } from "gatsby";

const NavMenu = () => {
    return (
        <ul className='nav nav-list'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blog/">Blog</Link>
            </li>
            <li>
                <a href="https://drive.google.com/file/d/1moeEaIOTmg1Px24PzDX6Tj-EM41aOSzi/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span><span className='glyphicon glyphicon-list-alt'></span>Resume</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/mdalzell" target="_blank" rel="noopener noreferrer">
                    <span><span className='glyphicon glyphicon-wrench'></span>Github</span>
                </a>
            </li>
            <li>
                <a href="https://stackoverflow.com/users/story/2570284" target="_blank" rel="noopener noreferrer">
                    <span><span className='glyphicon glyphicon-console'></span>Stack Overflow</span>
                </a>
            </li>
        </ul>
    );
}

export default NavMenu