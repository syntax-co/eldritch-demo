import { useEffect, useState } from "react";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from "../../../tailwind.config";


const tailConfig = resolveConfig(tailwindConfig)




const Container = ({textPath,imagePath,dex,flipped=false}) => {

    const [text,setText] = useState('')

    const [isMobile,setIsMobile] = useState(false)


    async function setInfo() {
        const _text = await (await fetch(textPath)).text()
        setText(_text)
    }


    function checkMobile() {
        
        const tailSM = parseInt(tailConfig.theme.screens.sm.split('px').join(''))
        const tailMD = parseInt(tailConfig.theme.screens.md.split('px').join(''))


        if (window.innerWidth<=tailMD && window.innerWidth>=tailSM) {
            
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

    }


    useEffect(() => {
        setInfo()
        checkMobile()


        window.addEventListener('resize',checkMobile);


        return () => {
            window.removeEventListener('resize',checkMobile);
        }

    }, []);


    return(
        <div className="section2-container-body font-primary"
        >

            <div className="section2-container-inner-body"
            >
                
                {   
                    (isMobile || (dex && dex%2==1))&&
                    <div className="section2-container-text"
                    >
                        {text}
                    </div>
                    
                }

                <div className="section2-container-image"
                
                >
                    <div className="w-full h-full bg-top bg-contain bg-no-repeat"
                    style={{
                        backgroundImage:`url(${imagePath})`,
                        marginTop:isMobile? '50px':'0px'
                    }} 
                    />
                </div>

                {
                    (!isMobile && dex%2==0) &&
                    
                    <div className="section2-container-text"
                    >
                        {text}
                    </div>
                }


            </div>

        </div>
    )
}



const Section2 = () => {
    return (
        <div className="section2-main-body"
        >


            <Container 
            textPath={'./texts/para-1.txt'}
            imagePath={'./images/book-closed.png'}
            dex={1}
            />

            <Container 
            textPath={'./texts/para-2.txt'}
            imagePath={'./images/standing-mech.png'}
            dex={2}
            />

            <Container 
            textPath={'./texts/para-3.txt'}
            imagePath={'./images/book-open.png'}
            dex={3}
            />


        </div>
    );
}
 
export default Section2;