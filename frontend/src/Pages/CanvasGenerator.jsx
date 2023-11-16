import React from 'react';
import Navbar from '../Components/Home Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import CanvasGeneratorComponent from '../Components/CanvasGenerator/CanvasGenerator';

function CanvasGenerator(props){
    return(
        <div className='canvas-generator-page'>
            <Navbar />
            
            <CanvasGeneratorComponent />

            <Footer />
        </div>
    )
}

export default CanvasGenerator;