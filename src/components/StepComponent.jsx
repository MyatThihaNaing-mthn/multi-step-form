function StepComponent({step, stepInfo}){
    return(
        <div className="text-left xs:hidden xl:block lg:block leading-tight ml-8 text-white">
            <p className="text-xs">{step}</p>
            <p className="font-bold  text-sm">{stepInfo}</p>
        </div>
    )
}

export default StepComponent;
