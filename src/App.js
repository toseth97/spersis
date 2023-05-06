import Navigation from "./components/Navigation";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="w-full flex items-center flex-col dark:bg-gray-900 dark:text-white">
                <HeroPage />
                <About />
                <Services />
                <Experience />
            </div>
            <Footer />
        </div>
    );
}

export default App;
