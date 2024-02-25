"use client";

import CustomInput from "@/app/components/customInput/CustomInput";
import {useState} from "react";

export default function StepOne({changeStep}) {

    // STATES
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [password, setPassword] = useState('');

    // HANDLER TO CHANGE THE CURRENT STEP
    const handleStepChange = () => {
        changeStep({
            name,
            company,
            phone,
            address,
            address2,
            email,
            email2,
            password
        });
    };

    return (
        <>
            <div className={'GlassContainer'}>
                <div className={'grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-hidden py-32px'}>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'Nachname Vorname'}
                            onChange={(value) => setName(value)}
                        />
                    </div>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'ggf. Firma'}
                            onChange={(value) => setCompany(value)}
                        />
                    </div>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'Handynummer, wo Sie erreichbar sind für evtl. Rückfragen.'}
                            onChange={(value) => setPhone(value)}
                        />
                    </div>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'Straße, Hausnummer, PLZ, Ort'}
                            onChange={(value) => setAddress(value)}
                        />
                    </div>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'Straße, Hausnummer, PLZ, Ort'}
                            onChange={(value) => setAddress2(value)}
                        />
                    </div>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'E-Mail'}
                            onChange={(value) => setEmail(value)}
                            type={'text'}
                        />
                    </div>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'E-Mail'}
                            onChange={(value) => setEmail2(value)}
                            type={'text'}
                        />
                    </div>
                    <div className={'column mb-6'}>
                        <CustomInput
                            labelText={'Bitte geben Sie Ihre Tastensperre für die notwendige Reparatur an'}
                            onChange={(value) => setPassword(value)}
                        />
                    </div>
                </div>
            </div>
            <button className={'Next__Button'} onClick={handleStepChange}>Next</button>
        </>
    )
}