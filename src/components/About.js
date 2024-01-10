import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'

// const About = () => {
//   return (
//     <div>
//       This is about page
//       <User name="John" location="New York" contact="@john_doe"/>
//       <UserClass name="John" location="New York" contact="@john_doe"/>
//     </div>
//   )
// }


class About extends Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor")
  }


  componentDidMount(){
    console.log("Parent Component Did Mount")
  }

  render(){
    console.log("")
    return (

      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React</h2>
       <UserClass name="John" location="New York" contact="@john_doe"/>
      </div>
    )
  }
}

export default About
