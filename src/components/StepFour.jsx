import { useContext } from "react";
import { FormContext } from "./MainContainer";

function StepFour({setStep}){
    const{formData, setFormData} = useContext(FormContext);
    const isMonthly = formData.billingOption=="monthly"? true : false;
    const plan = formData.selectedPlan;
    const addOns = formData.addon;
    let total = 0;
    let onlineServiceOption;
    let largerStorageOption;
    let customizableProfileOption;
    let totalArea;
    let planOption;

    if(isMonthly){
        if(plan==="Arcade"){
            planOption = <Plan selectedPlan={plan} billingOption="Monthly" subtotal="$9/mo" setStep={setStep}/>
            total += 9;

        }else if(plan==="Advanced"){
            planOption = <Plan selectedPlan={plan} billingOption="Monthly" subtotal="$12/mo" setStep={setStep}/>
            total += 12;

        }else{
            planOption = <Plan selectedPlan={plan} billingOption="Monthly" subtotal="$15/mo" setStep={setStep} />
            total += 15;
        }
    }else{
        if(plan==="Arcade"){
            planOption = <Plan selectedPlan={plan} billingOption="Yearly" subtotal="$90/yr" setStep={setStep} />
            total += 90;

        }else if(plan==="Advanced"){
            planOption = <Plan selectedPlan={plan} billingOption="Yearly" subtotal="$120/yr" setStep={setStep} />
            total += 120;

        }else{
            planOption = <Plan selectedPlan={plan} billingOption="Yearly" subtotal="$150/yr" setStep={setStep}/>
            total += 150;

        }
    }

    if(addOns.onlineService){
        if(isMonthly){
            onlineServiceOption =  <AddOnOption addOn="Online Service" subtotal="+1$/mo"/>;
            total += 1;
        }else{
            onlineServiceOption =  <AddOnOption addOn="Online Service" subtotal="+10$/yr"/>;
            total += 10;
        }
    }
    if(addOns.largerStorage){
        if(isMonthly){
            largerStorageOption =  <AddOnOption addOn="Larger Storage" subtotal="+2$/mo"/>;
            total += 2;
        }else{
            largerStorageOption =  <AddOnOption addOn="Larger Storage" subtotal="+20$/yr"/>;
            total += 20;
        }
    }
    if(addOns.customizableProfile){
        if(isMonthly){
            customizableProfileOption =  <AddOnOption addOn="Customizable Profile" subtotal="+2$/mo"/>;
            total += 2;
        }else{
            customizableProfileOption =  <AddOnOption addOn="Customizable Profile" subtotal="+20$/yr"/>;
            total += 20;
        }
    }

    if(isMonthly){
        totalArea = <TotalSection totalLabel="Total(Monthly)" total={"$"+total + "/mo"} />
    }else{
        totalArea = <TotalSection totalLabel="Total(Yearly)" total={"+$"+total+ "/yr"} />
    }



    return(
        <div className="step-four">
        <h1 className="text-3xl font-bold">Finishing up</h1>
                <p className="font-extralight mt-3 mb-6 text-sm">Double check everything looks OK before confirming.</p>
            <div className="bg-blue-50 rounded-lg flex flex-col justify-center items-center">
                {planOption}
                <div className="w-5/6 h-px bg-gray-300 ">

                </div>
                {onlineServiceOption}
                {largerStorageOption}
                {customizableProfileOption}
            </div>
            {totalArea}
        </div>
    )
}

function Plan({selectedPlan, billingOption, subtotal, setStep}){
    const clickHandler = () => {
        setStep(2);
    }

    return (
        <div className="w-full h-10vh flex bg-blue-50 p-5 rounded-lg items-center mt-2vh justify-between leading-snug">
            <div className="flex flex-col justify-center text-left pr-8">
                <h1 className="text-sm font-bold">{selectedPlan} ({billingOption})</h1>
                <span className="text-sm text-blue-700 hover:cursor-pointer underline"
                        onClick={clickHandler}>Change</span>
            </div>
            <span className="text-sm font-light">{subtotal}</span>
        </div>
    )
}

function AddOnOption({addOn, subtotal}){
    return (
        <div className="w-full h-7vh flex justify-between p-5 text-sm font-light">
            <span>{addOn}</span>
            <span>{subtotal}</span>
        </div>
    )
}

function TotalSection({totalLabel, total}){
    return (
        <div className="w-full h-7vh flex justify-between p-5 text-sm">
            <span>{totalLabel}</span>
            <span className="text-blue-700 font-bold ">{total}</span>
        </div>
    )
}

export default StepFour;