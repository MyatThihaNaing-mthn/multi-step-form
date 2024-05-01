import { useContext, useState } from "react";
import { getImageUrl } from "../utils"
import { FormContext } from "./MainContainer";
import StepFour from "./StepFour";
import StepThree from "./StepThree";

function FormComponent({ step, setStep }) {
    let stepElement;
    if (step == 1) {
        stepElement = <StepOne />;
    } else if (step == 2) {
        stepElement = <StepTwo />
    }else if (step == 3){
        stepElement = <StepThree/>
    }else if(step == 4){
        stepElement = <StepFour setStep={setStep}/>
    }
    return (
        <form className="w-11/12 border lg:border-0 xl:border-0 rounded-lg p-6 self-center justify-self-center mt-8 bg-white">
            {stepElement}
        </form>
    );
}


function StepOne() {

    const { validName, setValidName, validEmail, setValidEmail, validPhone, setValidPhone, formData, setFormData } = useContext(FormContext);


    const nameChangeHandler = (event) => {
        const name = event.target.value;
        setFormData((formData) => (
            {
                ...formData,
                name: name,
            }
        ));
    }

    const nameHandler = (event) => {
        const name = event.target.value;
        if (name != "") {
            setValidName(true);
        } else {
            setValidName(false);
        }
    }

    const emailChangeHandler = (event) => {
        const email = event.target.value;
        setFormData((formData) => (
            {
                ...formData,
                email: email,
            }
        ));
    }

    const emailHandler = (event) => {
        const email = event.target.value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    }

    const phoneNumberChangeHandler=(event) => {
        const phoneNumber = event.target.value;
        setFormData((formData) => (
            {
                ...formData,
                phone: phoneNumber,
            }
        ));
    }

    const phoneNumberHandler = (event) => {
        const phoneNumberRegex = /^\+65\d{7}$/;
        const phoneNumber = event.target.value;

        if (phoneNumber.match(phoneNumberRegex)) {
            setValidPhone(true);
        }else{
            setValidPhone(false);
        }
    }

    const invalidBorder = "border-red-700";



    return (
        <div className="step-one">
            <h1 className="text-3xl font-bold">Personal Info</h1>
            <p className="font-extralight my-4">Please Provide your name, email address and phone number</p>
            <div className="mb-2 text-sm flex justify-between items-center">
                <label className="">Name</label> <br></br>
                <span className={`text-xs text-red-700 font-bold ${validName==false? "" : "hidden"} `}>This field is required</span>
            </div>
            <input className={`border rounded w-full h-10 mb-4 text-sm p-3 focus:ring focus:border-0 focus:border-blue-700 outline-0 ${validName || validName == undefined ? "" : invalidBorder} `}
                type="text" placeholder="e.g. Stephen King"
                onChange={nameChangeHandler}
                onBlur={nameHandler}
                value={formData.name} /><br></br>

            <div className="mb-2 text-sm flex justify-between items-center">
                <label className="">Email Address</label><br></br>
                <span className={`text-xs text-red-700 font-bold ${validEmail==false? "" : "hidden"} `}>This field is required</span>
            </div>
            <input className={`border rounded w-full h-10 mb-4 text-sm p-3 focus:ring focus:border-0 focus:border-blue-700 outline-0 ${validEmail || validEmail === undefined ? "" : invalidBorder} `}
                type="text" placeholder="e.g. stephenking@lorem.com"
                onChange={emailChangeHandler}
                onBlur={emailHandler}
                value={formData.email} /><br></br>

            <div className="mb-2 text-sm flex justify-between items-center">
                <label className="">Phone Number</label><br></br>
                <span className={`text-xs text-red-700 font-bold ${validPhone==false? "" : "hidden"} `}>This field is required</span>
            </div>
            <input className={`border rounded w-full h-10 mb-4 text-sm p-3 focus:ring focus:border-0 focus:border-blue-700 outline-0 ${validPhone || validPhone === undefined ? "" : invalidBorder} `}
                type="text" placeholder="+65 123 456 789"
                onChange={phoneNumberChangeHandler}
                onBlur={phoneNumberHandler}
                value={formData.phone} /><br></br>
        </div>
    )
}

function StepTwo() {



    const arcade_image = getImageUrl("icon-arcade.svg");
    const pro_image = getImageUrl("icon-pro.svg");
    const advanced_image = getImageUrl("icon-advance.svg");
    const{formData, setFormData} = useContext(FormContext);


    let initialPlan;
    if(formData.selectedPlan == "" || formData.selectedPlan == "Arcade"){
        initialPlan = 1;
    }else if(formData.selectedPlan == "Advanced"){
        initialPlan = 2;
    }else if(formData.selectedPlan == "Pro"){
        initialPlan = 3;
    }

    let initialMonthly;
    if(formData.billingOption === "monthly" || formData.billingOption === "" ){
        initialMonthly = true;
    }else {
        initialMonthly = false;
    }
    const [selectedPlan, setSelectedPlan] = useState(initialPlan);
    const [isMonthly, setIsMonthly] = useState(initialMonthly);


    const monthly_plans = [
        {
            id: 1,
            title: "Arcade",
            price: "$9/month",
            bonus: "",
            image: arcade_image,
            altText: "arcade plan",
        },
        {
            id: 2,
            title: "Advanced",
            price: "$12/month",
            bonus: "",
            image: advanced_image,
            altText: "advanced plan",
        },
        {
            id: 3,
            title: "Pro",
            price: "$15/month",
            bonus: "",
            image: pro_image,
            altText: "pro plan",
        },
    ];

    const yearly_plans = [
        {
            id: 1,
            title: "Arcade",
            price: "$90/month",
            bonus: "2 months free",
            image: arcade_image,
            altText: "arcade plan",
        },
        {
            id: 2,
            title: "Advanced",
            price: "$120/month",
            bonus: "2 months free",
            image: advanced_image,
            altText: "advanced plan",
        },
        {
            id: 3,
            title: "Pro",
            price: "$150/month",
            bonus: "2 months free",
            image: pro_image,
            altText: "pro plan",
        },
    ];

    const selectHandler=(plan)=>{

        setSelectedPlan(plan.id);
        let currentPlan;
        if(plan.id === 1){
            currentPlan = "Arcade";
        }else if(plan.id === 2){
            currentPlan = "Advanced";
        }else if(plan.id === 3){
            currentPlan = "Pro";
        }
        if(isMonthly){
            setFormData((formData) => ({
                ...formData,
                billingOption: "monthly",
                selectedPlan: currentPlan,
            }));
        }else{
            setFormData((formData) => ({
                ...formData,
                billingOption: "yearly",
                selectedPlan: currentPlan,
            }));
        }
    }

    const monthlyPlans = monthly_plans.map((plan) => (
            <PlanItem
                    plan={plan}
                    selectedId={selectedPlan}
                    clickHandler={()=>selectHandler(plan)}
                    key={plan.id}
                    />));
    const yearlyPlans = yearly_plans.map((plan) => (
            <PlanItem
                    plan={plan}
                    selectedId={selectedPlan}
                    clickHandler={()=>selectHandler(plan)}
                    key={plan.id}
                    />));

    
    console.log("montly in step two", isMonthly);
    console.log(formData);
    return (
        <div className="step-two">
            <h1 className="text-3xl font-bold">Select Your Plan</h1>
            <p className="font-extralight my-4">You have the option of monthly or yearly billing.</p>
            {isMonthly ? monthlyPlans : yearlyPlans}

            <PlanSwitch setIsMonthly={setIsMonthly} isMonthly={isMonthly} />
        </div>
    )
}

function PlanItem({ plan, clickHandler, selectedId}) {

    let selectedPlanClass = "";
    if(plan.id === selectedId){
        selectedPlanClass = "border-blue-700 bg-blue-50";
    }
    return (
        <div className={`flex items-center w-full h-10vh border rounded-lg pl-4 mt-2vh hover:cursor-pointer hover:border-blue-700 ${selectedPlanClass}`}
            onClick={clickHandler}>
            <img src={plan.image} alt={plan.altText} className="w-12 h-12" />
            <div className="flex flex-col  p-4">
                <h2 className="font-bold ">{plan.title}</h2>
                <p className="font-extralight text-sm">{plan.price}</p>
                <p className="font-extralight text-sm">{plan.bonus}</p>
            </div>
        </div>
    )
}

function PlanSwitch({ isMonthly, setIsMonthly }) {
    const{setFormData} = useContext(FormContext);


    const clickHandler = (event) => {
        event.preventDefault();
        const newIsMonthly = !isMonthly;
        setIsMonthly(newIsMonthly);

        const billingOption = newIsMonthly? "monthly" : "yearly";
        setFormData((formData) => ({
            ...formData,
            billingOption : billingOption,
        }))
    }


    return (
        <div className="flex w-full h-12 mt-2vh justify-center items-center bg-bg_color rounded-lg">
            <span>Monthly</span>
            <button className="w-10 h-6 bg-button_color rounded-xl relative mx-4" onClick={clickHandler}>
                <div className={` slider h-4 w-4 bg-white rounded-full absolute left-1 -translate-y-2/4 ${isMonthly ? '' : 'left-5'} `}></div>
            </button>
            <span>Yearly</span>
        </div>
    );
}

export default FormComponent;