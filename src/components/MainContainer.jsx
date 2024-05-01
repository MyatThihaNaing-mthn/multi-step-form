import Step from "./Step";
import FormComponent from "./FormComponent";
import ButtonSection from "./ButtonSection";
import { createContext, useState } from "react";
import Completion from "./Completion";

export const FormContext = createContext();

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    billingOption: "",
    selectedPlan: "",
    addon: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
    },
    };

function MainContainer() {
    const [step, setStep] = useState(1);
    const [validName, setValidName] = useState();
    const [validEmail, setValidEmail] = useState();
    const [validPhone, setValidPhone] = useState();
    const [confirm, setConfirm] = useState(false);

    const[formData, setFormData] = useState(initialFormData);

    let formOrCompletion = <FormComponent step={step} setStep={setStep}/>;
    if(confirm){
        formOrCompletion = <Completion/>
    }

    return (
        <div className="relative flex flex-col xl:flex-row lg:flex-row items-center w-screen h-screen">
            <FormContext.Provider value={{validEmail, setValidEmail, validName, setValidName, validPhone, setValidPhone, formData, setFormData}}>
                <div className="relative flex items-center justify-center w-full lg:w-1/4 xl:w-1/4 lg:h-full xl:h-full  lg:items-start xl:items-start">
                    <Step step={step}/>
                </div>
                <div className="relative flex flex-col items-center xl:flex xl:items-center xl:justify-center xl:w-3/4 xl:h-full lg:flex lg:items-start lg:justify-center lg:w-3/4 lg:h-full grow">
                    {formOrCompletion}
                    <ButtonSection step={step} setStep={setStep} setConfirm={setConfirm} confirm={confirm}/>
                </div>
            </FormContext.Provider>
        </div>
    )

 }
export default MainContainer;