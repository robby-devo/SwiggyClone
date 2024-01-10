
import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log("props",props)

        this.state={

            userInfo:{
                name:"",
                location:""

            }
            // count:0,
            // count2:0
        }

       
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/robby-devo")

        const json = await data.json();

        console.log("json",json)

        this.setState({
            userInfo:json,
        })
    }


    render(){

const {name,location,contact} = this.props;
console.log("setstate",this.state.userInfo)

const {count} = this.state
        return (
            <div className="user-card">

            {/* <h2>Name : {this.props.name} </h2>
            <h3>Location: {this.props.locations}</h3>
            <h4>Contact: {this.props.contact}</h4> */}

{/* <h2>Count: {this.state.count}</h2>
<h2>Count2: {this.state.count2}</h2> */}

{/* <button onClick={()=>{
    this.setState({
        count:this.state.count+1,
        count2:this.state.count2+1
    })
}}>Count Increase</button> */}

<h2>Name : {this.state.userInfo.name} </h2>
            <h3>Location: { this.state.userInfo.location}</h3>

            <div>

                <img src={this.state.userInfo.avatar_url} alt="" />
            </div>
            {/* <h4>Contact: {contact}</h4> */}
    
        </div>
        )

    }

}

export default UserClass