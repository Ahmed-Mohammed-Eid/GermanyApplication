"use client";

import {useState} from "react";
import Stepper from "@/app/components/Stepper/Stepper";
import StepOne from "@/app/components/StepOne/StepOne";
import StepTwo from "@/app/components/StepTwo/StepTwo";
import StepThree from "@/app/components/StepThree/StepThree";
import Image from "next/image";


export default function Home() {

    const [currentStep, setCurrentStep] = useState(0);
    const [stepOneData, setStepOneData] = useState({});
    const [stepTwoData, setStepTwoData] = useState({});

    // HANDLER TO CHANGE THE CURRENT STEP
    const handleStepChange = (step) => {
        setCurrentStep(step);
    };

    return (
        <div className={'content__container'}>
            <div className={'STEPS__HEADER'}>
                <div className={'mb-2'}>
                    <Image src={'/logo.png'} alt={'logo'} width={150} height={40.35} />
                </div>
                <div className={'flex justify-center'}>
                    <Stepper
                        steps={[
                            {label: 'Kundendaten'},
                            {label: 'Gerät-Informationen'},
                            {label: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN'}
                        ]}
                        currentStep={currentStep}
                    />
                </div>
            </div>
            {currentStep === 0 && <StepOne changeStep={(data) => {
                setStepOneData(data)
                handleStepChange(1);
            }}/>}
            {currentStep === 1 && <StepTwo changeStep={(data) => {
                setStepTwoData(data)
                handleStepChange(2);
            }}/>}
            {currentStep === 2 && <StepThree
                stepOneData={stepOneData}
                stepTwoData={stepTwoData}
                changeStep={() => handleStepChange(0)}
            />}
        </div>
    );
}
