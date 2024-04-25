"use client";
import {useSearchParams} from 'next/navigation'
import {useEffect} from "react";

export default function Page() {

    // SEARCH PARAMS
    const searchParams = useSearchParams();

    useEffect(() => {
        // GET THE ID FROM THE URL
        const id = searchParams.get('id');

        // FETCH THE DATA

    }, [searchParams]);

    return (
        <div className={'p-8 report__container'}>
            <div className={'p-8 bg-white'}>
                <header className={'text-center grid grid-cols-2 mb-8 header'}>
                    <div>
                        <img src={'/logo.png'} alt={'logo'} className={'logo__image'}/>
                    </div>
                    <div className={"Header_Info"}>
                        <p>Erzbergerstraße 200, 41061,</p>
                        <p>Mönchengladbach, Germany</p>
                        <p>Tell: +49 173 5257532</p>
                        <p>Email: TaniTech@yandex.com</p>
                    </div>
                </header>

                <h2 className={'text-2xl font-bold report__header'}>Kundendaten</h2>

                <div className={'bg-gray-300 p-2 mb-2 section__container'}>
                    <div className={'grid grid-cols-2 gap-2 p-2 bg-white grid__container'}>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>Nachname Vorname</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                John Doe
                            </p>
                        </div>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>ggf. Firma</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                12.12.1980
                            </p>
                        </div>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>Handynummer, wo Sie erreichbar sind für evtl.
                                Rückfragen.</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                12.12.1980
                            </p>
                        </div>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>Straße, Hausnummer, PLZ, Ort</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                12.12.1980
                            </p>
                        </div>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>Straße, Hausnummer, PLZ, Ort</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                12.12.1980
                            </p>
                        </div>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>E-Mail</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                12.12.1980
                            </p>
                        </div>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>E-Mail</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                {/*12.12.1980*/}
                            </p>
                        </div>
                        <div>
                            <p className={'font-bold mb-1 report__title'}>Bitte entsperren Sie Ihre Tastatur für die
                                Reparatur.</p>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                12.12.1980
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className={'text-2xl font-bold report__header'}>Gerät-Informationen</h2>

                <div className={'bg-gray-300 p-2 mb-2 section__container'}>
                    <div className={'grid grid-cols-2 grid-rows-4 gap-2 p-2 bg-white grid__container'}>
                        <div className={'col-start-1 col-end-2'}>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                Hersteller, Modell:
                            </p>
                        </div>
                        <div className={'col-start-1 col-end-2'}>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                IMEI:
                            </p>
                        </div>
                        <div className={'col-start-1 col-end-2'}>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                Abgabe-Datum:
                            </p>
                        </div>
                        <div className={'col-start-1 col-end-2'}>
                            <p className={'p-2 border border-gray-600 bg-white input__value'}>
                                Vorraussichtl. Abhol-Termine:
                            </p>
                        </div>
                        <div className={'col-start-2 col-end- row-start-1 row-end-5'}>
                            <p className={'p-2 border border-gray-600 bg-white input__value note'}>
                                Interne Hinweise:
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className={'text-2xl font-bold report__header'}>ALLGEMEINE GESCHÄFTSBEDINGUNGEN</h2>

                <div className={'bg-gray-300 p-2 license section__container'}>
                    <p className={'text-sm'}>Bei der Reparatur Ihres Mobiltelefons, Tablets oder Notebooks kann es zum
                        Verlust aller gespeiche
                        rten Daten kommen.
                        Des Weiteren k ann es bei bestimmten Reparaturen zu einem Board- oder Softwareschaden kommen,
                        welcher sich als blue oder red screen zu
                        erkennen gibt. Bei Sturzschäden können Folgeschäden entstehen, welche erst im Laufe der
                        Reparatur sichtbar werden. Wenn durch den Sturz das
                        Backcover / der Rahmen verzogen sind, kann es dazu kommen, dass das neue Display nicht mehr
                        einhundertprozentig passt, wofür <b>TaniTech</b> nicht
                        haftbar gemacht werden kann. Die Touchscreen Reparatur an Ihrem Gerät ist eine kostengünstige
                        Alternative, die wir für Sie anbieten,
                        um einen kompletten Displayaustausch (LCD) zu vermeiden. Je nach Schaden der Glasoberfläche
                        besteht die Möglichkeit, dass das LCD ebenfalls
                        beschädigt ist. Selbst wenn Ihr Smartphone/Tablet voll funktionsfähig ist, ist nicht
                        auszuschließen, dass es nicht zu Folgeschäden gekommen ist.
                        können für daraus entstandene Schäden keine Haftung übernehmen!</p>
                    <p className={'text-sm'}>Wenn Ihr Smartphone „gejailbreakt, rooter ist, kann es nach einer Reparatur
                        zu Folgeschäden
                        kommen, wie z.B.: Ausfall vom W-Lan, Akkuleistung
                        lässt nach, Hörmuschel funktioniert nicht, das Display weist Pixelfehler auf etc. TaniTech kann
                        für
                        daraus entstandene Schäden keine Haftung
                        übernehmen! TaniTech Eine Hersteller-Garantie kann durch die Reparatur erlöschen. Die von uns
                        verbauten Ersatzteile gelten nach Einbau nicht
                        mehr als neu und sind somit von der Rückgabe ausgeschlossen. Sie erhalten bis zu 24 Monate
                        Garantie
                        auf viele unsere Reparaturen.
                    </p>
                    <p className={'text-sm'}>

                        . Wenn das Gerät einen Wasserschaden aufweist, können wir für die Funktionstüchtigkeit nicht
                        garantieren. Geräte die einen Wasserschaden
                        aufweisen, können trotz erfolgreicher Reparatur auch Tage, Wochen sogar Monate danach einen
                        erneuten
                        Schaden aufweisen. Sie erhalten bis zu 24
                        Monate Garantie auf unsere Reparaturen ausgeschlossen bei Wasserschäden.
                    </p>
                    <p className={'text-sm'}>Achtung: Garantieansprüche
                        auf Displays entfallen, wenn diese Beschädigt werden !Garantien entfallen bei Schäden an unseren
                        Ersatzteilen.Ersatzteile die wir verbauen, gehören bis zur vollständigen Bezahlung der TaniTech
                        unterliegt den Datenschutzbestimmungen nach §4 BDSG.Ihre Daten werden für Garantieansprüche in
                        unserem Warenwirtschaftsprogramm erfasst und nich an Dritte weitergegeben.Wenn das Gerät 4
                        Wochen nach Reparatur nicht abgeholt wird, erlaubt sich die TaniTech Aufbewahrungspauschale in
                        Höhe von 1 % vom Gesamt Reparaturpreis pro Tag zu berechnen.
                    </p>
                    <p className={'text-sm'}>
                        Mit Ihrer Auftragserteilung bestätigen Sie die Kenntnisnahme und Anerkennung unserer AGB.
                    </p>
                </div>

                <div className={'grid grid-cols-3 type__names'}>
                    <div className={'bg-white type__part'}>
                        <p className={'bg-gray-300'}>Unterschrift Kunde</p>
                        <div className={'name__signature'}>
                        </div>
                    </div>
                    <div className={'bg-gray-300 type__part'}></div>
                    <div className={'bg-white type__part'}>
                        <p className={'bg-gray-300 type__part'}>TaniTech</p>
                        <div className={'name__signature'}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}