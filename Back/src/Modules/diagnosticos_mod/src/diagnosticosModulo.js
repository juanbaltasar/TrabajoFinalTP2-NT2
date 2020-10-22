const axios = require('axios');
const oauth = require('axios-oauth-client');
const tokenProvider = require('axios-token-interceptor');
const { getToken } = require('./token.js')

// ESTE ES EL OBJETO DE AXIOS QUE CONOCE COMO PEGAR A APIS EXTERNAS:
const instance = axios.create()

// ACA LE DIGO AL INSTANCE DE AXIOS QUE PONGA EL TOKEN EN TODAS LAS REQUESTS QUE HAGA, CON UN INTERCEPTOR:
instance.interceptors.request.use(
    oauth.interceptor(tokenProvider, getToken)
)

async function getDiagnosticos() {
	
    /*return instance.get('https://id.who.int/icd/entity', {
        headers: {
            'API-Version': 'v2',
            'Accept-Language': 'es',
            'Accept': 'application/json'
        }
    })*/
    // ACA USO EL INSTANCE PARA PEGAR A LA API, Y COMO HEADERS LE PASO ATRIBUTOS OBLIGATORIOS QUE PIDE WHO:
    return instance.get('http://id.who.int/icd/entity/452386362', {
    headers: {
      'API-Version': 'v2',
      'Accept-Language': 'es',
      'Accept': 'application/json'
    }
     })
        .then(function (response) {
            return response.data;
        })
		 //EN CASO DE QUE FALLE LA PEGADA A WHO, ACA DEVUELVO EL ERROR:
        .catch(function (error) {
            throw error.message
        })
}

module.exports = { getDiagnosticos }

/*TODAS LAS CATEGORIAS DEL CIE-11
    "http://id.who.int/icd/entity/1435254666",
    "http://id.who.int/icd/entity/1630407678",
    "http://id.who.int/icd/entity/1766440644",
    "http://id.who.int/icd/entity/1954798891",
    "http://id.who.int/icd/entity/21500692",
    "http://id.who.int/icd/entity/334423054",
    "http://id.who.int/icd/entity/274880002",
    "http://id.who.int/icd/entity/1296093776",
    "http://id.who.int/icd/entity/868865918",
    "http://id.who.int/icd/entity/1218729044",
    "http://id.who.int/icd/entity/426429380",
    "http://id.who.int/icd/entity/197934298",
    "http://id.who.int/icd/entity/1256772020",
    "http://id.who.int/icd/entity/1639304259",
    "http://id.who.int/icd/entity/1473673350",
    "http://id.who.int/icd/entity/30659757",
    "http://id.who.int/icd/entity/577470983",
    "http://id.who.int/icd/entity/714000734",
    "http://id.who.int/icd/entity/1306203631",
    "http://id.who.int/icd/entity/223744320",
    "http://id.who.int/icd/entity/1843895818",
    "http://id.who.int/icd/entity/435227771",
    "http://id.who.int/icd/entity/850137482",
    "http://id.who.int/icd/entity/1249056269",
    "http://id.who.int/icd/entity/1596590595",
    "http://id.who.int/icd/entity/718687701",
    "http://id.who.int/icd/entity/231358748",
    "http://id.who.int/icd/entity/979408586",
    "http://id.who.int/icd/entity/1801349023"
    */
