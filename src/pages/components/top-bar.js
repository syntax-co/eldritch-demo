import Launchcounter from "./launch-counter";

const Topbar = () => {
    return (
        <div className="bar-main-body"
        >

            <div className="mr-auto h-full "
            >
                <Launchcounter 
                />
            </div>

            <div className="ml-auto h-full"
            >
                <div className="top-bar-image-holder"
                style={{
                    backgroundImage:'url(./images/gehenna-gaming-white.png)'
                }}
                />
            </div>

        </div>
    );
}
 
export default Topbar;