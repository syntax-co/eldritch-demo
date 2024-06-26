



const SignupAnchor = () => {
    return (
        <div className="w-fit relative flex items-center justify-center
        cursor-pointer"
        >


            <div className="w-[250px] h-[100px] bg-center bg-contain bg-no-repeat"
            style={{
                backgroundImage:'url(./images/button.png)'
            }}
            >

            </div>


            <div className="text-white text-2xl absolute font-primary"
            >
                Sign-Up
            </div>

        </div>
    );
}
 
export default SignupAnchor;