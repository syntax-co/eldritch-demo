

import SignupAnchor from "../components/signup-anchor";


const Section1 = () => {
    return (
        <div className="outer-body"
        >

            <div className="inner-body"
            >

            {/* left panel */}
            <div className="section1-left-panel"
            >

                <div className="w-full h-1/3 bg-no-repeat bg-left bg-contain"
                style={{
                backgroundImage:'url(./images/eldritch-title.png)'
                }}
                />

                <div className="text-white text-2xl w-[80%] font-primary
                leading-[45px] my-auto"
                >
                Welcome to Eldritch Automata
                <br />
                Where the only certainty is uncertainty.
                </div>


                <div className="w-full h-1/6 my-auto "
                >
                <SignupAnchor 
                />
                </div>

            </div>

            {/* right panel */}
            <div className="section1-right-panel"
            >
                
                <div className="sketch-figures"
                style={{
                backgroundImage:'url(./images/f2-bordered.png)'
                }} 
                />

                <div className="sketch-figures"
                style={{
                backgroundImage:'url(./images/f3-bordered.png)'
                }} 
                />

                <div className="sketch-figures"
                style={{
                backgroundImage:'url(./images/f4-bordered.png)'
                }} 
                />


            </div>

            </div>

        </div>
    );
}
 
export default Section1;