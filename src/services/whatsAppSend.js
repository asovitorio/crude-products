const wbm = require('wbm');
const dateBirthDay = require('../database/dao/queryFactory')
const format = require('date-fns/format')
const whatsApp = {

    send: () => {
        const date = format(new Date(Date.now()), 'yyyy-MM-dd')
        console.log(date)
        dateBirthDay.findDateBirth(date)
            .then(res => {

                const contacts = []
                res.map(item => {
                    contacts.push({
                        phone: item.cellphone,
                        name: item.name
                    })
                })
                return contacts
            }).then(birthDayCustomers => {
                if (birthDayCustomers.length > 0) {
                    wbm.start().then(async () => {
                        const contacts = birthDayCustomers;
                        // const message = ''+ contacts.name + ' '
                        const message = (`Eu sou Lucas Ferreira,\nO mais jovem Vereador eleito na Câmara Municipal de São Bernardo do Campo, graças a sua confiança em acreditar no meu caráter e honestidade. 
                        Quero colocar meu gabinete a disposição para ouvir as necessidades do seu Bairro, e estar sempre disponível para ajudá-los no que for possível. 
                        Você sabia que um dos papéis fundamentais de um Vereador é fiscalizar a Administração Pública, cuidando da aplicação dos recursos e da qualidade dos serviços públicos oferecidos a você? 
                        Por esse motivo, aderi ao Cidadão Participa. Um canal de atendimento que amplia o serviço de demandas variadas, e permite seu contato direto com o gabinete.
                        \nAcesse o link abaixo:\nhttps://www.cidadaoparticipa.com.br/vereadorlucasferreira/\n \nConte comigo. Vamos juntos!\nLUCAS FERREIRA\nVEREADOR\nWatsApp: 95969-7959\nContato do meu gabinete: 4331 - 4362\nMeu Facebook: Lucas Ferreira \n
                        Meu Instagram: lucasferreiravereador\n\n*Confome Combinado com o William é um teste da api whats*
                        `)
                        await wbm.send(contacts, message);
                        await wbm.end();
                    }).catch(err => console.log(err));

                } else {
                    console.log('No bodys having a birthday!')
                }
            })
    }
}

module.exports = whatsApp