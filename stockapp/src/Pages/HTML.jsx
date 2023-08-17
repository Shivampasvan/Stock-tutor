import DefaultNavbar from "../Components/DefaultNavbar"
import DefaultFooter from "../Components/DefaultFooter"
import HPart1 from "./HTML/HPart1"
import HPart2 from "./HTML/HPart2"
import HPart3 from "./HTML/HPart3"
import HPart4 from "./HTML/HPart4"
import HomeTestimonial from "./HTML/HPart5"
import HPart6 from "./HTML/HPart6"
import HPart7 from "./HTML/HPart7"
export default  function HTML(){
    return (
        <div>
            <DefaultNavbar />
            <HPart1 />
            <HPart2 />
            <HPart3 />
            <HPart4 />
            <HomeTestimonial />
            <HPart6 />
            <HPart7 />
            <DefaultFooter />
        </div>
    )
}