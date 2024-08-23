import './Projects.css'

export default function Project(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="vertical-center align-left">
                            <h1 className="project-title">
                                Project 1
                            </h1>
                            <p className="project-desc">
                                Project 1
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="middle">
                        <p className='subtitle'>Description 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="middle">
                        <p className='subtitle'>Description 2</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="vertical-center align-right">
                            <h1 className="project-title">
                                Project 1
                            </h1>
                            <p className="project-desc">
                                Project 1
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}