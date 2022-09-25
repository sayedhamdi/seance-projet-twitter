import {Link} from "react-router-dom";
export default function NavBar(){
    return (
        <div style={{border:'2px solid black',display:'flex',justifyContent:'space-between'}}>
            NavBar
            <Link to="/">Home</Link>
            <Link to="/hsan">Profile</Link>
        </div>
    )
}