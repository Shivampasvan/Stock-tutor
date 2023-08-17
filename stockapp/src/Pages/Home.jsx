import DefaultNavbar from "../Components/DefaultNavbar";
import DefaultFooter from "../Components/DefaultFooter";
import Part1 from "./Home/Part1";
import Part2 from "./Home/Part2";
import Part3 from "./Home/Part3";
import Part6 from "./Home/Part6";
import HomeTestimonial from "./Home/Part7";
import Part8 from "./Home/Part8";
import Part9 from "./Home/Part9";
import Part10 from "./Home/Part10";
import Part12 from "./Home/Part12";
// import HomeTestimonial from "./Home/Part11"
export default function Home() {
  return (
    <div>
      <DefaultNavbar />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part12 />
      <Part6 />
      <HomeTestimonial />
      <Part8 />
      <Part9 />
      <Part10 />
      <DefaultFooter />
    </div>
  );
}
