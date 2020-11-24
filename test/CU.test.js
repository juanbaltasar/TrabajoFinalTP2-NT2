const CUFactory = require('../Back/src/HU/CUFactory.js')

async function main() {

    const test = await CUFactory.getCUEnviarLink()
    test.invocar(1)
}

main()