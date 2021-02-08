const wbm = require('wbm');
const  configController = {

    config:(req,res) =>{
        // return res.send({teste:'Hollo World!'})
        wbm.start({showBrowser: true, qrCodeData: true, session: true})
.then(async qrCodeData => {
    console.log(qrCodeData); // show data used to generate QR Code
     await wbm.waitQRCode(true);
    //  waitQRCode() is necessary when qrCodeData is true
    const {whatsApp} = req.params
    // console.log(whatsApp)
    const phone = '55' + whatsApp
    const contacts = [phone];
    // const message = ''+ contacts.name + ' '
    const message = ('Dispositivo configurado com sucesso')
    await wbm.send(contacts, message);
    await wbm.end();
    return  res.status(200).json({config:true})
} ).catch(err => { console.log(err); });

    }
}

module.exports = configController