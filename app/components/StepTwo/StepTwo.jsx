"use client";

import CustomInput from "@/app/components/customInput/CustomInput";
import {useState} from "react";
import CustomTextarea from "@/app/components/customTextArea/CustomTextArea";
import toast from "react-hot-toast";

export default function StepTwo({changeStep}) {

    // STATES
    const [factoryName, setFactoryName] = useState('');
    const [imei, setImei] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');
    const [expectedPickupDate, setExpectedPickupDate] = useState('');
    const [price, setPrice] = useState('');
    const [internalNotes, setInternalNotes] = useState('');

    // HANDLER TO CHANGE THE CURRENT STEP
    const handleStepChange = () => {
        // VALIDATE THE DATA
        if(!factoryName || !imei || !deliveryDate || !expectedPickupDate || !price || !internalNotes){
            toast.error('Bitte füllen Sie alle Felder aus.');
            return;
        }

        changeStep({
            factoryName,
            imei,
            price,
            deliveryDate,
            expectedPickupDate,
            internalNotes
        });
    };

    return (
        <>
            <div className={'GlassContainer'}>
                <div className={'grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-hidden py-32px'}>
                    <div className={'col-span-2 lg:col-span-1 mb-6'}>
                        <CustomInput
                            labelText={'Hersteller, Modell'}
                            onChange={(value) => {
                                setFactoryName(value);
                            }}
                        />
                    </div>
                    <div className={'col-span-2 lg:col-span-1 mb-6'}>
                        <CustomInput
                            labelText={'IMEI'}
                            onChange={(value) => {
                                setImei(value);
                            }}
                        />
                    </div>
                    <div className={'col-span-2 lg:col-span-1 mb-6'}>
                        <CustomInput
                            labelText={'Abgabe-Datum'}
                            onChange={(value) => {
                                setDeliveryDate(value);
                            }}
                        />
                    </div>
                    <div className={'col-span-2 lg:col-span-1 mb-6'}>
                        <CustomInput
                            labelText={'Vorraussichtl. Abhol-Termin'}
                            onChange={(value) => {
                                setExpectedPickupDate(value);
                            }}
                        />
                    </div>
                    <div className={'col-span-2'}>
                        <CustomInput
                            labelText={'Preis'}
                            onChange={(value) => {
                                setPrice(value);
                            }}
                        />
                    </div>
                    <div className={'mb-6 col-span-2'}>
                        <CustomTextarea
                            labelText={'Interne Hinweise'}
                            onChange={(value) => {
                                setInternalNotes(value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <button
                className={'Next__Button'}
                onClick={handleStepChange}
            >
                Next
            </button>
        </>
    )
}