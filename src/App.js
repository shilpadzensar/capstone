import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App(props) {
  return (
    <div className="App">

      <Header/>

      {props.children}

      <Footer/>

    </div>
  );
}

export default App;
