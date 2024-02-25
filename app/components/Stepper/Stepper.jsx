import React from 'react';

// TODO: CHANGE THE ACTIVE STEP TO A DIFFERENT COLOR - DONE
// TODO: SET THE STATES OF THE STEPS - DONE
// TODO: ADD THE OTHER STEPS

const Stepper = ({steps, currentStep}) => {
    return (
        <ol
            className="Stepper__Ol flex flex-wrap gap-2 items-center w-full p-3 space-x-2 text-sm font-medium text-center rounded-lg sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse"
            style={{color: 'rgba(255,255,255,0.8)'}}
        >
            {steps.map((step, index) => (
                <li
                    key={index}
                    className={`flex items-center ${(currentStep === index || currentStep > index) ? 'text-blue-700' : ''}`}
                >
                    <span
                        className={`flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 ${(currentStep === index || currentStep > index) ? 'text-white bg-blue-700' : 'text-black bg-white'}`}>
                    {index + 1}
                    </span>

                    <span className={`text-xs ${(currentStep === index || currentStep > index) ? 'text-blue-700' : 'text-black'}`}>{step.label}</span>

                    {step.subtitle &&
                        <span className="hidden sm:inline-flex sm:ms-2">
                        {step.subtitle}
                    </span>}

                    {((index + 1 < steps.length)) && (
                        <svg
                            className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 12 10"
                        >
                            <path
                                stroke={`black`}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m7 9 4-4-4-4M1 9l4-4-4-4"
                            />
                        </svg>
                    )}
                </li>
            ))}
        </ol>);
};

export default Stepper;
