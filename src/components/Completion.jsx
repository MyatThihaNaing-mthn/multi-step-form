import { getImageUrl } from "../utils"

function Completion(){
    const thankyouImg = getImageUrl("icon-thankyou.svg");
    return(
        <div className="w-11/12 border lg:border-0 xl:border-0 rounded-lg p-6 self-center justify-self-center mt-8 bg-white flex flex-col items-center leading-relaxed">
            <img src={thankyouImg} alt="Thank you icon" className=" w-16 h-16 mt-10 mb-8"/>
            <h1 className="font-extrabold text-xl"> Thank you!</h1>
            <p className="text-slate-600 font-light">Thanks for confirming your subscription.</p>
            <p className="text-center mx-4 text-slate-600 mb-10 font-light" >We hope you have fun using our platform. If you ever need support, please feel free to contact us at support@loremgaming.com</p>
        </div>
    )
}

export default Completion;