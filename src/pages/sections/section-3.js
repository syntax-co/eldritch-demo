




const BackerImage = () => {

    return(
        <div className="section3-backer-image-holder"
        >   
            <div
            className="w-full h-20 bg-center bg-contain bg-no-repeat" 
            style={{
                backgroundImage:'url(./images/diagnal.png)'
            }}
            />
            <div className="w-full h-[75%] bg-center bg-contain bg-no-repeat" 
            style={{
                backgroundImage:'url(./images/backer-image.png)'
            }}
            />
            <div
            className="w-full h-20 bg-center bg-contain bg-no-repeat" 
            style={{
                backgroundImage:'url(./images/diagnal.png)'
            }}
            />

        </div>
    )
}


const BackerImage2 = () => {

    return(
        <div className="section3-backer-image-holder-2"
        >   
            
            <div className="w-full h-full bg-center bg-contain bg-no-repeat" 
            style={{
                backgroundImage:'url(./images/backer-image.png)'
            }}
            />

        </div>
    )
}



const Section3 = () => {
    return (
        <div className="section3-main-body font-primary"
        >
            
            <div className="section3-sub1"
            >

                <div className="sect3-sub1-text1"
                >
                    Ultimately, the biggest enemy you will face in Eldritch Automata is yourself.
                </div>

                <div className="sect3-sub1-text2"
                >
                    Can you maintain your morale in a world that is constantly trying 
                    to tear it away? Can you navigate the treacherous waters of a brave 
                    new world and survive the horrors that lurk around every corner? The 
                    answers to these questions are up to you.
                </div>

            </div>

            <div className="section3-sub2"
            >

                <div className="w-full h-[80%] flex "
                >

                    <div className="section3-signup-holder "
                    >
                        <div className="signup-holder-left"
                        >
                            <div className="section3-signup-holder-title"
                            >
                                Get Ready for Eldritch Automata
                            </div>

                            <BackerImage2 />

                            <div className="section3-signup-form"
                            >
                                
                                <div className="w-fit mx-auto "
                                >
                                    <div className="ml-4 mb-2 mr-auto text-2xl"
                                    >
                                        E-Mail
                                    </div>
                                    <div className="w-[300px] h-[40px] rounded-full
                                    border border-white flex items-center justify-center
                                    px-4"
                                    >

                                        <input className="w-full text-xl"
                                        type="text"
                                        />

                                    </div>

                                    
                                </div>

                                <div className="full mt-10 flex justify-end
                                cursor-pointer "
                                >

                                    <div className="w-fit px-10 py-2 bg-purple rounded-full"
                                    >
                                        Sign-Up
                                    </div>


                                </div>

                            </div>
                        </div>

                        

                        <BackerImage />



                    </div>

                    

                </div>

            </div>

        </div>
    );
}
 
export default Section3;