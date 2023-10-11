import React, { useEffect, useRef } from 'react';
import '../Home.css';

function Home() {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Add the sliding effect after the component mounts
        if (textRef.current) {
            textRef.current.classList.add('slide-in-text');
        }
        if (imageRef.current) {
            imageRef.current.classList.add('slide-in-image');
        }
    }, []);

    return (
        <div className="homepage">
            <h1 ref={textRef}>Max Beales <br/> 
                MSc <span style={{color:'#66FF00'}}>Computer Science </span>  
                graduate <br/> 
                <span style={{color:'#66FF00'}}>Data</span> Enthusiast
            </h1>

            <img src="/images/home_image.png" alt="Descriptive Alt Text" ref={imageRef} />
        </div>
    );
}

export default Home;