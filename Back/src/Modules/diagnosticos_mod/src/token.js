//CONFIGURACION DE MI TOKEN:
//npm install --save axios-oauth-client axios-token-interceptor axios
const axios = require('axios')
const oauth = require('axios-oauth-client')

const getToken = oauth.client(axios.create(), {
    url: 'https://icdaccessmanagement.who.int/connect/token',
    grant_type: 'client_credentials',
    client_id: '385a1edf-201e-423e-b02e-9f1dae5ad4d1_8b6fb519-e0d7-4830-9682-6af13eca68d4',
    client_secret: 'KwwhO/APqoOisKs60/faUaRoJmw3XqLHhg7DVRRuv70=',
    scope: 'icdapi_access'
})

module.exports = { getToken }

/*
const token_endpoint = 'https://icdaccessmanagement.who.int/connect/token'
const client_id = '385a1edf-201e-423e-b02e-9f1dae5ad4d1_8b6fb519-e0d7-4830-9682-6af13eca68d4'
const client_secret = 'KwwhO/APqoOisKs60/faUaRoJmw3XqLHhg7DVRRuv70='
const scope = 'icdapi_access'
const grant_type = 'client_credentials'
uri = 'https://id.who.int/icd/entity'
*/