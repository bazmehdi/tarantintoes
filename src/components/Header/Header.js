import React, {Component} from 'react';
import {TweenMax, Power3} from 'gsap';
import { NavLink } from 'react-router-dom'
import './Header.scss';

class Header extends Component {
    constructor() {
        super();
        this.logoItem = React.createRef();
    }

    componentDidMount() {
        console.log(this.logoItem.current);
        TweenMax.to(
            this.logoItem.current,
            0.5,
            {
                opacity: 1,
                y:-10,
                ease: Power3.easeOut
            }
        )
    }

    render() {
        return (
        <header>
            <div>
                <div className="logo" ref={this.logoItem}>
                    <NavLink to="/">TARANTINTOES</NavLink>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;