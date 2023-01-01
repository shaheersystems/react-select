import "./App.css";
import HeroSection from "./components/HeroSection";
import Select from "./components/select/Select";
function App() {
  return (
    <div className='App'>
      <HeroSection />
      <div className='max-w-6xl m-auto h-fit gap-5 flex py-5 items-center justify-center'>
        <p className='font-semibold'>Assigned to: </p>
        <Select />
      </div>
    </div>
  );
}

export default App;
