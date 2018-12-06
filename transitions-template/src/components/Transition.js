import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import '../css/App.css';

class TransitionComp extends Component {

    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        });
    }

    render() {
        return (
            <div>
                <Transition in={this.state.show} timeout={{
                    enter:2000,
                    exit: 50
                }}
                    enter = {true}
                    exit = {true}

                    onEnter = { (node) => {
                        console.log('Enter');
                    }}

                    onEntered = { (node) => {
                        console.log('Entered');
                    }}

                    onEntering = { (node) => {
                        console.log('Entering');
                    }}

                    onExit = { (node) => {
                        console.log('Exit');
                    }}

                    onExited= { (node) => {
                        console.log('Exited');
                    }}

                    onExiting = { (node) => {
                        console.log('Exiting');
                    }}
                >
                    {state => 
                        <div className={`square square-${state}`}>
                            {`square square-${state}`}
                        </div>
                    }
                </Transition>

                {/* { this.state.show ? <div style={{
                    background: 'red',
                    height: '100px'
                }}>
                </div> : null }
                 */}

                <div className="showDiv" onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>

        )
    }
}


export default TransitionComp;