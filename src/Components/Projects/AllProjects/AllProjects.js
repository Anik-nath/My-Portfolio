import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Showcase from './Showcase';

const AllProjects = () => {
    const [project,setProject] = useState([]);
    useEffect(()=>{
        fetch('./projects.json')
        .then(res=> res.json())
        .then(data => setProject(data))
    },[])
    return (
        <div className="bg-dark text-white py-5">
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h3>ALL Projects</h3>
                </div>
                {
                    project.length === 0 && 
                    <Spinner className="mx-auto" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
            </div>
            <div className="row">
                {
                    project.map(project => <Showcase key={project.id}
                    project={project}
                    ></Showcase>)
                }
            </div>
        </div>
        </div>
    );
};

export default AllProjects;