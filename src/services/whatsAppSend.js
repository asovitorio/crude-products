const wbm = require('wbm');
const dateBirthDay = require('../database/dao/queryFactory')
const moment = require('moment')
const whatsApp = {

    send: () => {
        const date = moment(Date.now())
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
                        const message = ('*Parabens para Você!* Sr(a) {{name}} Feliz Aniversário!! Eu sou um Robô Testando API => A cada 5min  você vai receber uma msg por 3x !!!\n Falta só o front-end')

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