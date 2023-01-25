import React, {Component} from 'react';
import {gsap, Power1} from 'gsap';
import { NavLink } from 'react-router-dom'
import './Header.scss';

class Header extends Component {
    constructor() {
        super();
        this.logoItem = React.createRef();
    }

    componentDidMount() {
        //console.log(this.logoItem.current);
        gsap.to(
            this.logoItem.current, {
                opacity: 1, 
                y:-10, 
                ease: Power1.easeOut, 
                duration: 0.5
            }
        );
    }

    render() {
        return (
        <header>
            <div>
                <div className="logo" ref={this.logoItem}>
                    <NavLink to='/'>TARANTINTOES</NavLink>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;