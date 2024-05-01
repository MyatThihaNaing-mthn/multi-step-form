import StepComponent from "./StepComponent";

function Step({step}) {

    const otherSteps = "text-white";
    const currentStep = "bg-white"
    return (
        <div className="steps w-1/2 h-8 flex items-center lg:items-start xl:items-start xl:ml-8 lg:ml-8 justify-between  mt-6 lg:flex-col xl:flex-col lg:justify-start xl:justify-start xl:w-full xl:h-3/5 lg:w-full lg:h-3/5" >
            <div className="xl: flex lg:flex xl:items-center lg:items-center xl:mt-8 lg:mt-8">
                <div className={`border border-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${step==1? currentStep : otherSteps}`}>1</div>
                <StepComponent step="step-1" stepInfo="YOUR INFO"/>
            </div>
            <div className="xl: flex lg:flex xl:items-center lg:items-center xl:mt-8 lg:mt-8">
                <div className={`border border-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${step==2? currentStep : otherSteps}`}>2</div>
                <StepComponent step="step-2" stepInfo="SELECT PLAN"/>
            </div>
            <div className="xl: flex lg:flex xl:items-center lg:items-center xl:mt-8 lg:mt-8">
                <div className={`border border-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${step==3? currentStep : otherSteps}`}>3</div>
                <StepComponent step="step-3" stepInfo="ADD-ON"/>
            </div>
            <div className="xl: flex lg:flex xl:items-center lg:items-center xl:mt-8 lg:mt-8">
                <div className={`border border-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${step==4? currentStep : otherSteps}`}>4</div>
                <StepComponent step="step-4" stepInfo="SUMMARY"/>
            </div>

        </div>
    )
}

export default Step;
