import About from "./About";
import Footer from "./Footer";
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
            <Footer />
        </div>
     );
}
 
export default Home;