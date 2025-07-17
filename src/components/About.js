import User from "./User";
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <User name={"Prem (function)"} />

            <UserClass name={"Prem (class)"}/>
        </div>
    );
};

export default About;