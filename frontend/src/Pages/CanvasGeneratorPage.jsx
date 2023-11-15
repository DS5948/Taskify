import React from 'react';
import Navbar from '../Components/Home Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import './CSS/CanvasGeneratorPage.css'
import CanvasGeneratorComponent from '../Components/CanvasGeneratorComponent/CanvasGenerator';

function CanvasGenerator(props){
    return(
        <div className='canvas-generator-page'>
            <Navbar />
            <div className="canvas-display">
            <CanvasGeneratorComponent />
            </div>
            <Footer />
        </div>
    )
}

export default CanvasGenerator;