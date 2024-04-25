import axios from "axios";


export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request) {
    // GET DATA FROM REQUEST
    const requestData = await request.json();

    // VALIDATE DATA
    const {
        name,
        company,
        phone,
        address,
        address2,
        email,
        email2,
        password,
        factoryName,
        imei,
        price,
        deliveryDate,
        expectedPickupDate,
        internalNotes
    } = requestData;

    if (!name || !company || !phone || !address || !address2 || !email || !email2 || !password || !factoryName || !imei || !price || !deliveryDate || !expectedPickupDate || !internalNotes) {
        return Response.json({message: 'Bitte füllen Sie alle Felder aus.'}, {status: 400})
    }

    // SEND THE HTTP REQUEST
    // http://80.79.6.214:1310/ords/shop/cust_dev/cust_dev?FULL_NAME=0000&MOBILE_NUMBER=0000&ADDRRES=000&EMAIL=000&COMPANY=000&COPM_ADD=0000&COPM_EMAIL=0&KEY_LOCK=0&MANUFACTURER_MODEL=0&IMEI=0&DELIVERY_DATE=0&EXPECTED_PICKUP_DATE=0&INTERNAL_INFORMATION=00

    axios.post('http://80.79.6.214:1310/ords/shop/cust_dev/cust_dev', {}, {
        params: {
            FULL_NAME: name,
            MOBILE_NUMBER: phone,
            ADDRRES: address,
            EMAIL: email,
            COMPANY: company,
            COPM_ADD: address2,
            COPM_EMAIL: email2,
            KEY_LOCK: password,
            MANUFACTURER_MODEL: factoryName,
            IMEI: imei,
            DELIVERY_DATE: deliveryDate,
            EXPECTED_PICKUP_DATE: expectedPickupDate,
            INTERNAL_INFORMATION: internalNotes
        }
    })
        .then((response) => {
            console.log(response);
            // RETURN THE RESPONSE
            return Response.json({message: 'Ihre Daten wurden erfolgreich gesendet.'}, {status: 201})
        })
        .catch((error) => {
            console.log(error);
            // RETURN THE RESPONSE
            return Response.json({message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'}, {status: 400})
        });


    // RETURN THE RESPONSE
    return Response.json({message: 'Hello World', requestData}, {status: 201})
}