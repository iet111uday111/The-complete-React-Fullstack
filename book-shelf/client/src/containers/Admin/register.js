import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, userRegister } from '../../actions';

class Register extends PureComponent {
    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    componentWillMount() {
        this.props.dispatch(getUsers())
    }

    handleInputEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleInputPassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleInputName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleInputLastname = (event) => {
        this.setState({ lastname: event.target.value })
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    showUsers = (user) =>(
        user.users ? 
            user.users.map(item => (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            ))
        :null
    )

    render() {
        console.log(this.props);
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add User</h2>

                    <button type="submit">Add user</button>
                </form>
                <div className="current_users">
                    <h4>Current users:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsers(user)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Register);
