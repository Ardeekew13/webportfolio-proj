import React from "react";
import { useEffect,useState } from "react";
import {BiArrowFromBottom} from 'react-icons/bi';

function Backtotopbutton(){
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {if(
        window.scrollY > 300) {
            setBackToTopButton(true)
        }else{
            setBackToTopButton(false)
        }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return <div className="fixed bottom-2 right-2">
        {backToTopButton && (
            <button style={{
                position: "fixed", 
                textAlign: 'center',
                bottom:"50px",
                right:"50px",
                height:"100px",
                width:"80px",
                fontSize:"50px",
            }}  onClick={scrollUp}><BiArrowFromBottom/></button>
        )}
    </div>;
}
export default Backtotopbutton;