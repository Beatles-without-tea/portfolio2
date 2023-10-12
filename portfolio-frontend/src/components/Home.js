import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faNewspaper} from '@fortawesome/free-brands-svg-icons';
import '../Home.css';

function Home() {
    const textRef = useRef(null);
    const textRef2 = useRef(null);


    const imageRef = useRef(null);

    useEffect(() => {
        // Add the sliding effect after the component mounts
        if (textRef.current) {
            textRef.current.classList.add('slide-in-text');
        }
        if (textRef2.current) {
            textRef2.current.classList.add('slide-in-text');
        }
        if (imageRef.current) {
            imageRef.current.classList.add('slide-in-image');
        }
    }, []);

    return (
        <div className="homepage">
            <div style = {{display:'block'}}>
                <h1 ref={textRef}>Max Beales <br/> 
                    MSc <span style={{color:'#66FF00'}}>Computer Science </span>  
                    graduate <br/> 

                    <span style={{color:'#66FF00'}}>Data</span> Enthusiast
                </h1>
                <br></br>
                <p ref={textRef2}>  1.5 years as a intern Data Scientist
                <br/> Experienced with Python, SQL, and a range of other tools
                <br/> Bilingual in French and English
                <br/> Currently looking for new opportunities !</p>
           
            </div>
            <img src="/images/home_image.png" alt="Descriptive Alt Text" ref={imageRef} />
        </div>
    );
}

export default Home;