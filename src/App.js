import Navigation from "./components/Navigation";
import HeroPage from "./components/HeroPage";
import About from "./components/About";
import Services from "./components/Services";

function App() {
    return (
        <div className="App">
            <Navigation />
            <div className="w-full flex items-center flex-col dark:bg-gray-900 dark:text-white">
                <HeroPage />
                <About />
                <Services />
            </div>
        </div>
    );
}

export default App;
