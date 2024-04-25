"use client";
import {useSearchParams} from 'next/navigation'
import {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

    // SEARCH PARAMS
    const searchParams = useSearchParams();

    useEffect(() => {
        // GET THE ID FROM THE URL
        const id = searchParams.get('id');

        // FETCH THE DATA

    }, [searchParams]);

    return (<div className={'p-8 report__container'}>
        <div className={'p-8 bg-white'}>
            <header className={'text-center grid grid-cols-2 mb-12 header'}>
                <div>
                    <Image src={'/logo.png'} alt={'logo'} className={'logo__image'} width={250} height={100}/>
                </div>
                <div className={"Header_Info"}>
                    <p className={'grid grid-cols-2'}>
                        <span className={'text-left font-bold'}>Rechnungsnr.:</span>
                        <span className={'text-right'}>RE0031</span>
                    </p>
                    <p className={'grid grid-cols-2'}>
                        <span className={'text-left font-bold'}>Kunden-Nr.:</span>
                        <span className={'text-right'}>1234</span>
                    </p>
                    <p className={'grid grid-cols-2'}>
                        <span className={'text-left font-bold'}>Datum:</span>
                        <span className={'text-right'}>12.12.1980</span>
                    </p>
                    <p className={'grid grid-cols-2'}>
                        <span className={'text-left font-bold'}>Lieferdatum:</span>
                        <span className={'text-right'}>1234</span>
                    </p>
                </div>
            </header>
            <section className={'mt-20'}>
                <div className={'grid grid-cols-3 gap-2 mb-20'}>
                    <div className={'col-span-2'}>
                        <p className={'underline mb-4'}>
                            TaniTech, Volmerswerther Str. 1, 40221 Düsseldorf
                        </p>
                        <h3 className={'text-2xl'}>Clever, Tanja</h3>
                    </div>
                    <div className={'col-span-1'}>
                        <p>
                            TaniTech, Volmerswerther Str. 1, 40221 Düsseldorf
                        </p>
                    </div>
                </div>
                <p className={'underline mb-4'}>Unsere Lieferungen/Leistungen stellen wir Ihnen wie folgt in
                    Rechnung.</p>
            </section>
            <section>
                <table className={'w-full mb-4'}>
                    <thead>
                    <tr>
                        <th className={'border border-black text-left p-2'}>Pos.</th>
                        <th className={'border border-black text-left p-2'}>Bezeichnung</th>
                        <th className={'border border-black text-left p-2'}>Menge</th>
                        <th className={'border border-black text-left p-2'}>Einheit</th>
                        <th className={'border border-black text-left p-2'}>Einzel €</th>
                        <th className={'border border-black text-left p-2'}>Gesamt €</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={'border border-black p-2'}>1</td>
                        <td className={'border border-black p-2'}>
                            <b>Akku</b>
                            <p>Samsung S10 plus Akku getauscht</p>
                        </td>
                        <td className={'border border-black p-2'}>1</td>
                        <td className={'border border-black p-2'}>Stück</td>
                        <td className={'border border-black p-2'}>60,00</td>
                        <td className={'border border-black p-2'}>60,00</td>
                    </tr>
                    <tr>
                        <td colSpan={5} className={'border border-black p-2 text-lg font-bold'}>
                            Gesamtbetrag*
                        </td>
                        <td className={'border border-black p-2 text-lg font-bold'}>
                            60,00
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p className={'mb-2'}>* Im Gesamtbetrag von 60,00 € (Netto: 50,42 €) sind USt 19 % (9,58 €)
                    enthalten.</p>
                <p className={'mb-2'}>14</p>
                <p className={'mb-2'}>Vielen Dank für die gute Zusammenarbeit.</p>
                <section className={'grid grid-cols-2 mt-6'}>
                    <div className={'col-span-1'}>
                        <div className={'grid grid-cols-4 gap-2 p-2 border rounded-md'}>
                            <div className={'col-span-3 flex flex-col justify-between'}>
                                <p className={'mb-1 font-bold'}>Bezahlen per PayPal</p>
                                <p className={'mb-1 text-sm'}>Ganz bequem Code scannen</p>
                                <p className={'mb-1 text-sm'}>oder Link verwenden.</p>
                            </div>
                            <div className={'col-span-1'}>
                                <Image src={'/code.png'} alt={'signature'} className={'ml-auto'} width={100}
                                       height={100}/>
                            </div>
                        </div>
                        <Link href={'https://www.paypal.com/paypalme/TaniTech24/60eur'} className={'text-xs text-gray-500'}>
                            https://www.paypal.com/paypalme/TaniTech24/60eur
                        </Link>
                    </div>
                </section>
            </section>
        </div>
    </div>);
}