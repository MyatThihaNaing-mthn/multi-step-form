import { useContext, useRef } from "react"
import { FormContext } from "./MainContainer";

const monthly_add_ons = [
    {
        name : "Online Service",
        description: "Access to multiplayer games",
        price : "+$1/mo",
    },
    {
        name : "Larger Storage",
        description: "Extra 1TB of cloud save",
        price : "+$2/mo",
    },
    {
        name : "Customizable Profile",
        description: "Custom theme on your profile",
        price : "+$2/mo",
    },
];

const yearly_add_ons = [
    {
        name : "Online Service",
        description: "Access to multiplayer games",
        price : "+$10/yr",
    },
    {
        name : "Larger Storage",
        description: "Extra 1TB of cloud save",
        price : "+$20/yr",
    },
    {
        name : "Customizable Profile",
        description: "Custom theme on your profile",
        price : "+$20/yr",
    },
];

function StepThree(){

    const {formData, setFormData} = useContext(FormContext);

    let selectedOptions = [];
    if(formData.addon.onlineService){
        selectedOptions.push(monthly_add_ons[0].name);
    }
    if(formData.addon.largerStorage){
        selectedOptions.push(monthly_add_ons[1].name);
    }
    if(formData.addon.customizableProfile){
        selectedOptions.push(monthly_add_ons[2].name);
    }

    let addOnsOption;
    if(formData.billingOption === "yearly"){
        addOnsOption = yearly_add_ons.map((addOn) => (
            <AddOn key={addOn.name} 
                addOnObj={addOn}
                initialState={selectedOptions}
                />
        ));
    }else{
        addOnsOption = monthly_add_ons.map((addOn) => (
            <AddOn key={addOn.name} 
                    addOnObj={addOn}
                    initialState={selectedOptions}
                    />
        ));
    }

    return(
        <div className="step-three">
            <h1 className="text-3xl font-bold">Pick add-ons</h1>
            <p className="font-extralight my-4">Add-ons help enhance your gaming experience.</p>
            {addOnsOption}
        </div>
    )
}

function AddOn({addOnObj, initialState}){
    const {formData, setFormData} = useContext(FormContext);
    const checkboxRef = useRef(null);

    const updateFormData=(addOnOption, isSelected)=>{
        if(addOnOption.toLowerCase() === "online service"){
            setFormData(formData => ({
                ...formData,
                addon : {
                    ...formData.addon,
                    onlineService: isSelected,
                }
            }))
        }else if(addOnOption.toLowerCase()==="larger storage"){
            setFormData(formData => ({
                ...formData,
                addon : {
                    ...formData.addon,
                    largerStorage: isSelected,
                }
            }))
        }else if(addOnOption.toLowerCase()==="customizable profile"){
            setFormData(formData => ({
                ...formData,
                addon : {
                    ...formData.addon,
                    customizableProfile : isSelected,
                }
            }))
        }
    }

    const clickHandler = () => {
        const newState = !checkboxRef.current.checked;
        checkboxRef.current.checked = newState;
        const option = checkboxRef.current.id;
        updateFormData(option, newState);
    }

    console.log(formData);
    


    return(
        <div className="w-full h-10vh flex bg-blue-50 p-4 rounded items-center mt-2vh hover:cursor-pointer"
            onClick={clickHandler}>
            <input type="checkbox" 
                    className={`hover:cursor-pointer checked:bg-blue-500 checked:ring-0 ring-0 border-blue-500 `} 
                    id={addOnObj.name}
                    ref={checkboxRef}
                    defaultChecked={initialState.includes(addOnObj.name)}
                    />
            <div className="ml-4 flex flex-col justify-center">
                <label className="text-sm font-bold" htmlFor={addOnObj.name}>{addOnObj.name}</label>
                <span className="text-xs font-extralight">{addOnObj.description}s</span>
            </div>
            <span className="text-xs font-bold text-blue-800 ml-auto mr-4">{addOnObj.price}</span>
        </div>
    )
}

export default StepThree;