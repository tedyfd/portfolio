import '../App.css';
import About from '../components/About';
import Hero from '../components/Hero';
import ObjectCanvas from '../components/ObjectCanvas';
import Project from '../components/Projects';

export default function Home() {
  return (
    <>
      <Hero/>
      <Project/>
      <About/>
      <ObjectCanvas />
    </>
  )
}
