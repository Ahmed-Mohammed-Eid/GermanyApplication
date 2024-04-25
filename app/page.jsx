import Image from "next/image";
import LogoPart from "@/app/components/LogoPart/LogoPart";
import OptionsPart from "@/app/components/OptionsPart/OptionsPart";
import BackgroundStars from "@/app/components/BackgroundStars/BackgroundStars";

export default function Home() {
    return (
        <div className={'content__container'}>
            <LogoPart />
            <OptionsPart />
        </div>
    )
}