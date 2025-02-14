import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import bg from '../assets/v1-bg.png';
import branch from '../assets/v1-branch.png';
import mountain1 from '../assets/v1-mountain1.png';
import mountain2 from '../assets/v1-mountain2.png';
import tree_bg from '../assets/v1-tree-bg.png';
import tree from '../assets/v1-tree.png';
import './Project.css';

gsap.registerPlugin(ScrollTrigger);
export default function Project(){
    const bg1 = useRef(null); 
    const img_container = useRef(null); 
    const container = useRef(null); 
    const ref_bg = useRef(null); 
    const ref_mountain1 = useRef(null); 
    const ref_tree = useRef(null); 
    const ref_treebg = useRef(null); 
    const ref_branch = useRef(null); 
    const ref_title = useRef(null); 

    useLayoutEffect(()=>{
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom",
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    scrub: 1,
                    start: "0% 0%",
                }
            })
            .to(ref_bg.current, { y: "-4rem" }, 0)
            .to(ref_mountain1.current, { y: "-4rem" }, 0)
            .to(ref_tree.current, { y: "-2rem" }, 0)
            .to(ref_treebg.current, { y: "2rem" }, 0)
            .to(ref_branch.current, { y: "-3rem" }, 0)
            .to(ref_title.current, { y: "15rem" }, 0)
            .fromTo(container.current, { yPercent: 100, scaleY: 2}, {yPercent: 0, scaleY: 1});
        });
        
        return () => ctx.revert();
    },[]);

    return(
        <>
            <div className="position-relative">
                <div ref={bg1} className="bg-dark1 position-absolutes top-0 start-0 z-n1"></div>
                <section>
                    <div ref={img_container} className="image-container persepective d-flex align-items-center justify-content-center vh-100">
                        <img ref={ref_bg} src={bg} className="img-fluid image " alt="" />
                        <img ref={ref_treebg} src={tree_bg} className="img-fluid image " alt="" />
                        <img ref={ref_mountain1} src={mountain1} className="img-fluid image " alt="" />
                        <div className='position-absolute bottom-50 d-flex flex-column align-items-center justify-content-center text-center text-white'>
                            <h1 ref={ref_title} className='display-1 fw-bold'>
                                <span className='text-stroke'>Project Sample</span>
                            </h1>
                        </div>
                        <img ref={ref_tree} src={tree} className="img-fluid image " alt="" />
                        <img src={mountain2} className="img-fluid image " alt="" />
                        <img ref={ref_branch} src={branch} className="img-fluid image " alt="" />
                    </div>
                    <div ref={container} className="d-flex flex-wrap container-fluid">
                        <div className="row">
                            <div className="col-6 flex-column pb-5">
                                <div className="card">
                                    <img src={sample1} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Report System</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 flex-column pb-5">
                                <div className="card">
                                    <img src={sample2} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Recruitment Management</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 flex-column pb-5 last">
                                <div className="card">
                                    <img src={sample3} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Meeting Room System</h5>
                                        <p className="card-text"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

    </>
    )
}