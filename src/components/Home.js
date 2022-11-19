import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Landing from "./Landing";
import Projects from "./Projects";

const Home = () => {
    return ( 
        <div>
            <Header />
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
     );
}
 
export default Home;