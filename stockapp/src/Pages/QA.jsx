
import DefaultNavbar from "../Components/DefaultNavbar"
import DefaultFooter from "../Components/DefaultFooter"
import QPart1 from "./QA/QPart1"
import QPart2 from "./QA/QPart2"
import QPart3 from "./QA/QPart3"
import QPart4 from "./QA/QPart4"
import HomeTestimonial from "./QA/QPart5"
import QPart6 from "./QA/QPart6"
import QPar7 from "./QA/QPart7"
export default function QA() {
    return (
        <div>
            <DefaultNavbar />
            <QPart1 />
            <QPart2 />
            <QPart3 />
            <QPart4 />
            <HomeTestimonial />
            <QPart6 />
            <QPar7 />
            <DefaultFooter />
        </div>
    )
}