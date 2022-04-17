'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', [{
      id: '1',
      acronym: 'AC',
      name: 'Acre'
    },
    {
      id: '2',
      acronym: 'AL',
      name: 'Alagoas'
    },
    {
      id: '3',
      acronym: 'AM',
      name: 'Amazonas'
    },
    {
      id: '4',
      acronym: 'AP',
      name: 'Amapá'
    },
    {
      id: '5',
      acronym: 'BA',
      name: 'Bahia'
    },
    {
      id: '6',
      acronym: 'CE',
      name: 'Ceará'
    },
    {
      id: '7',
      acronym: 'DF',
      name: 'Distrito Federal'
    },
    {
      id: '8',
      acronym: 'ES',
      name: 'Espírito Santo'
    },
    {
      id: '9',
      acronym: 'GO',
      name: 'Goiás'
    },
    {
      id: '10',
      acronym: 'MA',
      name: 'Maranhão'
    },
    {
      id: '11',
      acronym: 'MG',
      name: 'Minas Gerais'
    },
    {
      id: '12',
      acronym: 'MS',
      name: 'Mato Grosso do Sul'
    },
    {
      id: '13',
      acronym: 'MT',
      name: 'Mato Grosso'
    },
    {
      id: '14',
      acronym: 'PA',
      name: 'Pará'
    },
    {
      id: '15',
      acronym: 'PB',
      name: 'Paraíba'
    },
    {
      id: '16',
      acronym: 'PE',
      name: 'Pernambuco'
    },
    {
      id: '17',
      acronym: 'PI',
      name: 'Piauí'
    },
    {
      id: '18',
      acronym: 'PR',
      name: 'Paraná'
    },
    {
      id: '19',
      acronym: 'RJ',
      name: 'Rio de Janeiro'
    },
    {
      id: '20',
      acronym: 'RN',
      name: 'Rio Grande do Norte'
    },
    {
      id: '21',
      acronym: 'RO',
      name: 'Rondônia'
    },
    {
      id: '22',
      acronym: 'RR',
      name: 'Roraima'
    },
    {
      id: '23',
      acronym: 'RS',
      name: 'Rio Grande do Sul'
    },
    {
      id: '24',
      acronym: 'SC',
      name: 'Santa Catarina'
    },
    {
      id: '25',
      acronym: 'SE',
      name: 'Sergipe'
    },
    {
      id: '26',
      acronym: 'SP',
      name: 'São Paulo'
    },
    {
      id: '27',
      acronym: 'TO',
      name: 'Tocantins'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {})
  }
}
