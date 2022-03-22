import "./App.css";
import BackgroundLayout from "./components/BackgroundLayout";
import Result from "./components/Result";
import SingleButton from "./components/SingleButton";
function App() {
  return (
    <>
    <a href="https://github.com/TranHBach/calculator.git" style={{margin: '45%'}}>Link to my code</a>
      <BackgroundLayout>
        <Result />
        <SingleButton />
      </BackgroundLayout>
    </>
  );
}

export default App;
