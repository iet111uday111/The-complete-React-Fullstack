import React, { Component } from 'react'
import { addBook } from '../../actions';

class AddBook extends Component {

    state = {
        formdata: {
            name: '',
            author: '',
            rating: '',
            price: '',
            pages: '',
            review: '',
        }
    }

    handleInput = (event, name) => {
        const newFormData = {
            ...this.state.formdata
        }

        newFormData[name] = event.target.value;
        this.setState({
            formdata: newFormData
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.formdata);
    }

    render() {
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add a Review</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={this.state.formdata.name}
                            onChange={(event) => this.handleInput(event, 'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Author"
                            value={this.state.formdata.author}
                            onChange={(event) => this.handleInput(event, 'author')}
                        />
                    </div>

                    <textarea
                        placeholder="Enter your Review"
                        value={this.state.formdata.review}
                        onChange={(event) => this.handleInput(event, 'review')}
                    />

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter pages"
                            value={this.state.formdata.pages}
                            onChange={(event) => this.handleInput(event, 'pages')}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            value={this.state.formdata.rating}
                            onChange={(event) => this.handleInput(event, 'rating')}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter Price"
                            value={this.state.formdata.price}
                            onChange={(event) => this.handleInput(event, 'price')}
                        />
                    </div>

                    <button type="submit">Add Review</button>

                </form>

            </div>
        )
    }
}

export default AddBook;
