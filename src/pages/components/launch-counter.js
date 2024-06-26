


const Launchcounter = () => {
    return (
        <div className="launch-main-body font-primary"
        >

            <div className="text-white absolute z-[1]
            text-xl "
            >
                Launch: 00 00 00
            </div>

            <div className=" w-full h-full bg-center bg-contain bg-no-repeat
                            "
            style={{
                backgroundImage:'url(./images/button.png)'
            }}
            />


        </div>
    );
}
 
export default Launchcounter;