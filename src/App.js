import { AboutMe } from "./components/AboutMe";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export const App = () => {
    return (
        <div>
            <Hero/>
            <AboutMe/>
            <Projects/>
        </div>
    );
};
