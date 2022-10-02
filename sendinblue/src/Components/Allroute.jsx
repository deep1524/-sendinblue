import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/Signup"
function AllRoute(){
    return (
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/signup" element={<SignUp/>}></Route>
</Routes>
    )
}
export default AllRoute