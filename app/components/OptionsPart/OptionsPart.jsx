"use client"

import {useRef} from "react";
import Image from "next/image";

export default function OptionsPart() {

    const menuContainerRef = useRef(null);

    function handleClick(e) {
        e.preventDefault();
        // ADD THE ACTIVE CLASS TO THE MENU CONTAINER
        menuContainerRef.current.classList.toggle('active');
    }


    return(
        <div className={'menu__container'} id={'menu__container'} ref={menuContainerRef}>
            <button className={'ADD__BUTTON'} onClick={handleClick}>
                <Image src={'/plus.svg'} alt={'add'} width={50} height={50}/>
            </button>
            {/*  BUTTONS  */}
            <button className={'MENU__BUTTON btn__1'}>
                <Image src={'/plus.svg'} alt={'search'} width={50} height={50}/>
            </button>
            <button className={'MENU__BUTTON btn__2'}>
                <Image src={'/plus.svg'} alt={'filter'} width={50} height={50}/>
            </button>
            <button className={'MENU__BUTTON btn__3'}>
                <Image src={'/plus.svg'} alt={'sort'} width={50} height={50}/>
            </button>
        </div>
    )
}