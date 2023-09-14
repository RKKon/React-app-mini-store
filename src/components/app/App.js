import Header from "../header/Header";
import Footer from "../footer/Footer";
import Store from "../store/Store";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Store />
      <Footer />
    </div>
  );
};

export default App;
