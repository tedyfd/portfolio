import './App.css'
// eslint-disable-next-line no-unused-vars
import AquariumCanvas from './components/Aquarium'
import { useRef } from 'react';
import Project from './components/Projects';
import About from './components/About';
import ObjectCanvas from './components/ObjectCanvas';
import Hero from './components/Hero';

function App() {
  // eslint-disable-next-line no-unused-vars
  const scrollContainerRef = useRef(null);
  return (
    <>
      <ObjectCanvas />
      {/* <AquariumCanvas scrollContainer={scrollContainerRef} /> */}
      <Hero/>
      <Project/>
      <About/>

    </>
  )
}

// export default TestAquarium
export default App
