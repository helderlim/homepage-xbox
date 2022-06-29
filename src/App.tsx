import { Content } from "./components/Content";
import { FaqQuestions } from "./components/FaqQuestions";
import { Footer } from "./components/Footer";
import { Games } from "./components/Games";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
  return (
    <div className="App">
     <Header />
     <Main/>
     <Content/>
     <Games />
     <FaqQuestions />
     <Footer/>
    </div>
  );
}
