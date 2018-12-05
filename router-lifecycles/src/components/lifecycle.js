import React, { Component } from 'react'

export default class Life extends Component {
    //  1.Get the default props

    // 2. Set the default state if any
    state = {
        title: 'Life Cycle'
    }

    // 3. Before render
    componentWillMount() {
        console.log('3. Before render');

    }
    //6. Before Update
    componentWillUpdate() {
        console.log('6.Before Update');
    }

    // 4. render JSX
    render() {
        console.log('4. Render');

        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({
                        title: 'Something Else'
                    })}>CLick to Change</div>
            </div>
        )
    }

    // 5. After JSX
    componentDidMount() {
        console.log('5. After render');
        document.querySelector('h3').style.color = 'red';
    }

    //7. After Update
    componentWillUpdate() {
        console.log('7.After Update');
    }

    //8. Check component should update
    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.title);
        console.log(nextState);
        // nextState.title = "change title";
        if(nextState.title == 'Something Else'){
            return false
        }else{
            return true;
        }
        
        
    }

    //9. Listening for new props
    componentWillReceiveProps(){
        console.log('Before Receive props');
    }

    //10. Before a component unmount
    componentWillUnmount(){
        console.log('Unmounted');
        
    }

}

/**
 * Life cycles 
 */

// 1.Get the default props
// 2. Set the default state
// 3. Before render a component it calls componentWillMount() method
// 4. Render jsx call the render method
// 5. After render() method calls componentDidMount.
// Whenever we update the state react will re-render.i.e that is call render() method.
// 6.Before any update react call componentWillUpdate() method.
// 7.After any update react call componentDidUpdate() method.
//shouldComponentUpdate : we can check it can be updated or not. return boolean
