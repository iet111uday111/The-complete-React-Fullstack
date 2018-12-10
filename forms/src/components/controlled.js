import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'',
        lastname:''
        
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
        
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form_element">
                        <label>Enter Last Name</label>
                        <input type="text" value={this.state.lastname} onChange={this.handleLastNameChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Controlled;