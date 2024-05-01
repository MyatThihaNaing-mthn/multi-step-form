import { useState, useContext } from "react";
import { FormContext } from "./MainContainer";


function ButtonSection({ setStep, step, setConfirm, confirm }) {
    const { validName, setValidName, validEmail, setValidEmail, validPhone, setValidPhone, formData } = useContext(FormContext);

    const stepOneHandler = () => {
        console.log("step one")

        if (validName && validEmail && validPhone) {
            console.log("correct name and email");
            if (step < 4) {
                setStep(step => step + 1);
            }
        }
        if(validName === undefined || validName === false){
            setValidName(false);
        }
        if(validEmail === undefined || validEmail === false){
            setValidEmail(false);
        }
        if(validPhone === undefined || validPhone === false){
            setValidPhone(false);
        }

    }

    const stepTwoHandler = () => {
        console.log("Step two");
        if (step < 4) {
            setStep(step => step + 1);
        }
    }

    const stepThreeHandler = () => {
        console.log("Step three");
        if (step < 4) {
            setStep(step => step + 1);
        }
    }

    const confirmHandler = () => {
        setConfirm(true);
    }


    const goBackHandler = () => {
        if (step > 1) {
            setStep(step => step - 1);
        }
    }
    let clickHandler;

    if (step == 1) {
        clickHandler = stepOneHandler;
    } else if (step == 2) {
        clickHandler = stepTwoHandler;
    }
    else if (step == 3) {
        clickHandler = stepThreeHandler;
    }

    let myButton = <button className={`next-btn w-32 h-12 bg-next_btn_color rounded text-white ${step===1? "ml-auto" : ""}`}
        onClick={clickHandler}>
        Next Step
    </button>;
    if (step == 4) {
        myButton = <button className="next-btn w-32 h-12 bg-next_btn_color rounded text-white"
            onClick={confirmHandler}>
            Confirm
        </button>;
    }

    if(confirm){
        return(
            <>

            </>
        )
    }else{
        return (
            <div className="button-section w-full h-20 flex justify-between items-center px-10 mt-auto mb-2 bg-white">
                <button className={`back-btn bg-none font-semibold ${step===1? "hidden" : ""} `} onClick={goBackHandler}>
                    Go Back
                </button>
                {myButton}
            </div>
        )
    }
    
}


export default ButtonSection;