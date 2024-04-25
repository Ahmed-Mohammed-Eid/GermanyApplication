import Image from "next/image";

export default function LogoPart() {
    return (
        <div className={'STEPS__HEADER'}>
            <div className={'mb-2 flex justify-center items-center'}>
                <Image src={'/logo.png'} alt={'logo'} width={300} height={80.70}/>
            </div>
            <div className={'flex justify-center'}>
            </div>
        </div>
    )
}