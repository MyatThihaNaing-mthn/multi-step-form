import { getImageUrl } from "../utils"

function BackgroundImage() {
    const bgImage = getImageUrl("bg-sidebar.svg");
    return (
        <div className="background-image w-full h-full items-center flex flex-col lg:flex-row xl:flex-row absolute -z-1 bg-bg_color lg:bg-transparent xl:bg-transparent">
            <div className="bg-image w-full h-1/4 flex lg:w-1/4 xl:w-1/4 lg:h-full xl:h-full justify-center">
                <img src={bgImage} alt="background image" className="object-cover w-full h-full" />
            </div>
        </div>
    )
}

export default BackgroundImage;
