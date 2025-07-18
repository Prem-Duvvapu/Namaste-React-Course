import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass"

class About extends Component {
    constructor(props) {
        super(props);

        console.log("Constructor in About Class");
    }

    componentDidMount() {
        // console.log("componentDidMount in About Class");
    }

    render() {
        // console.log("Render in About Class");

        return (
            <div>
                <h1>About class</h1>
                <User name={"Prem (function)"} />

                <UserClass name={"First (class)"}/>
                {/* <UserClass name={"Second (class)"}/> */}
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={"Prem (function)"} />

//             <UserClass name={"Prem (class)"}/>
//         </div>
//     );
// };

export default About;