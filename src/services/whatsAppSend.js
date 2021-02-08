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
                        const message = ('*Parabens para Você!* Sr(a) {{name}} Feliz Aniversário!!')

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