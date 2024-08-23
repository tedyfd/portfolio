import './App.css'
import AquariumCanvas from './components/Aquarium'
import { useRef } from 'react';
import Project from './components/Projects';
import About from './components/About';

// eslint-disable-next-line no-unused-vars
function App() {
  const scrollContainerRef = useRef(null);
  return (
    <>
      <AquariumCanvas scrollContainer={scrollContainerRef} />
      <div className="full-container">
        <div className="title-page">
          <h1 className='sub-title'>
            Tedy Fernando  
          </h1>
          <h1 className='title'>
            Web Developer
          </h1>
        </div>
      </div>
      <Project/>
      <About/>

    </>
  )
}

// export default TestAquarium
export default App
