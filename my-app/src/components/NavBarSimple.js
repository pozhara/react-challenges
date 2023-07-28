import css from './css/NavBarSimple.module.css';
import React from 'react';

class NavBarSimple extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'Hello, guest!',
            buttonText: 'log in',
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
          return {
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
          };
        });
    }

    render(){
        return(
            <div className={css.NavBarSimple}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default NavBarSimple