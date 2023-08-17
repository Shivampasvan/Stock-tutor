import DefaultFooter from "../Components/DefaultFooter";
import DefaultNavbar from "../Components/DefaultNavbar";
import SPart1 from "./STMP/SPart1";
import SPart2 from "./STMP/SPart2";
import SPart3 from "./STMP/SPart3";
import HomeTestimonial from "./STMP/SPart5";
import SPart4 from "./STMP/SPart4";
import SPart6 from "./STMP/SPart6";
import SPart7 from "./STMP/SPart7";


export default function STMP(){
    return(
        <div>
            <DefaultNavbar />
            <SPart1 />
            <SPart2 />
            <SPart3 />
            <SPart4 />
            <HomeTestimonial />
            <SPart6 />
            <SPart7 />
            <DefaultFooter />
        </div>
    )
}