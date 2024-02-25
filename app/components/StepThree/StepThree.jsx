"use client";

import {useState} from "react";
import Checkbox from "@/app/components/customCheckbox/CustomCheckbox";


export default function StepThree({changeStep}) {

    const [agreed, setAgreed] = useState(false);

    const handleStepChange = () => {
        changeStep();
    }

    return (
        <>
            <div className={'GlassContainer text-black py-32px'}>
                <p className={'text-black'}>Bei der Reparatur Ihres Mobiltelefons, Tablets oder Notebooks kann es zum
                    Verlust aller gespeicherten
                    Daten kommen.</p>
                <p className={'text-black'}>Des Weiteren kann es bei bestimmten Reparaturen zu einem Board- oder
                    Softwareschaden kommen, welcher
                    sich als blauer oder roter Bildschirm zeigt. Bei Sturzschäden können Folgeschäden entstehen, die
                    erst im Laufe der Reparatur sichtbar werden. Wenn durch den Sturz das Backcover / der Rahmen
                    verzogen ist, kann es dazu kommen, dass das neue Display nicht mehr hundertprozentig passt, wofür
                    TaniTech nicht haftbar gemacht werden kann.</p>
                <p className={'text-black'}>Die Touchscreen-Reparatur an Ihrem Gerät ist eine kostengünstige
                    Alternative, die wir für Sie
                    anbieten, um einen kompletten Displayaustausch (LCD) zu vermeiden. Je nach Schaden der
                    Glasoberfläche besteht die Möglichkeit, dass auch das LCD beschädigt ist. Selbst wenn Ihr
                    Smartphone/Tablet voll funktionsfähig ist, ist nicht auszuschließen, dass es nicht zu Folgeschäden
                    gekommen ist. Wir können für daraus entstandene Schäden keine Haftung übernehmen!</p>
                <p className={'text-black'}>Wenn Ihr Smartphone „gejailbreakt“ oder „gerootet“ ist, kann es nach einer
                    Reparatur zu Folgeschäden
                    kommen, wie z.B.: Ausfall vom W-LAN, nachlassende Akkuleistung, nicht funktionierende Hörmuschel,
                    Pixelfehler im Display etc. TaniTech kann für daraus entstandene Schäden keine Haftung übernehmen!
                    Eine Hersteller-Garantie kann durch die Reparatur erlöschen. Die von uns verbauten Ersatzteile
                    gelten nach dem Einbau nicht mehr als neu und sind somit von der Rückgabe ausgeschlossen.</p>
                <p className={'text-black'}>Sie erhalten bis zu 24 Monate Garantie auf viele unserer Reparaturen. Wenn
                    das Gerät einen
                    Wasserschaden aufweist, können wir für die Funktionstüchtigkeit nicht garantieren. Geräte, die einen
                    Wasserschaden aufweisen, können trotz erfolgreicher Reparatur auch Tage, Wochen oder sogar Monate
                    später einen erneuten Schaden aufweisen. Sie erhalten bis zu 24 Monate Garantie auf unsere
                    Reparaturen, ausgenommen bei Wasserschäden.</p>
                <p className={'text-black'}><strong>Achtung:</strong> Garantieansprüche auf Displays entfallen, wenn
                    diese beschädigt werden!
                    Garantien entfallen bei Schäden an unseren Ersatzteilen. Ersatzteile, die wir verbauen, gehören bis
                    zur vollständigen Bezahlung der TaniTech und unterliegen den Datenschutzbestimmungen gemäß §4 BDSG.
                    Ihre Daten werden für Garantieansprüche in unserem Warenwirtschaftsprogramm erfasst und nicht an
                    Dritte weitergegeben.</p>
                <p className={'text-black'}>Wenn das Gerät 4 Wochen nach der Reparatur nicht abgeholt wird, erlauben wir
                    uns, die
                    TaniTech-Aufbewahrungspauschale in Höhe von 1 % des Gesamtreparaturpreises pro Tag zu berechnen.</p>
                <p className={'text-black'}>Mit Ihrer Auftragserteilung bestätigen Sie die Kenntnisnahme und Anerkennung
                    unserer AGB.</p>

                <div className={'mt-4 flex items-center gap-2'}>
                    <Checkbox
                        onChange={() => {
                            setAgreed(!agreed);
                        }}
                    />
                    <label className={'text-black'}>Ich habe die AGB gelesen und erkläre mich damit einverstanden.</label>
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