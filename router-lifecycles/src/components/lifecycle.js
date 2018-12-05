import React, { Component } from 'react'

export default class Life extends Component {
//  1.Get the default props

// 2. Set the default state if any
  state = {
      title : 'Life Cycle'
  }

// 3. Before render
componentWillMount(){
    console.log('3. Before render');
}

// 4. render JSX
  render() {
      console.log('4',this.props);
      
    return (
      <div>
          <h3>{this.state.title}</h3>
      </div>
    )
  }

  // 5. After JSX
  componentDidMount(){
      console.log('5. After render');
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
