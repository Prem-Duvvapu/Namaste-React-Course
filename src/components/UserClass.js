import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Default name",
                location: "Default location",
            },
        };
        
        // console.log(this.props.name + " constructor in UserClass");
    }

    async componentDidMount() {
        // console.log(this.props.name + " componentDidMount in User Class");

        //API calls here

        const data = await fetch("https://api.github.com/users/Prem-Duvvapu");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("componentDidUpdate in User Class");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount in User Class");
    }

    //method
    render() {
        // console.log(this.props.name + " render in UserClass");
        // debugger;
        return (
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1, //this will update only count, count2 is not changed
                    });
                }}>
                    Increase Count
                </button>
                {/* <h1>Count2 : {this.state.count2}</h1> */}
                {/* <h2>Name: {this.props.name}</h2>
                <h3>Location: Andhra Pradesh</h3> */}

                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <img src={this.state.userInfo.avatar_url}  />
            </div>
        );
    }
}

export default UserClass;