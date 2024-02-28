import engine from "./core/engine";

const file = `
const simpleObject = {
    oneProperty: 'smth',
    secondProperty: 'something else'
}
for (const key of Object.keys(simpleObject)) {
    console.log(key);
}

for (const chuj of dupa) {
    console.log(Object);
    console.log(Object.keys([]))
}

Object.keys(simpleObject)

for (const chuj of dupa) {
    Object.keys(function() {
        chuj()
    })
}

Object.keys(ciasteczko)
Object.keys(rumianek, cosTam)
Object.keys(something, new Array())
Object.keys(chuj, function () {}, () => {

})
`

const scheme = engine.schemeExpressionToAst('Object.keys(*1, *2)')

const target = engine.schemeExpressionToAst('Obiekt.klucze(*1, *2)', false) //known bug

console.log(engine.replaceMatchingExpressions(file, scheme, target))

// console.log(engine.compareAst({
//     test: {
//         chuj: 'chuj',
//         dupa: 'dupa',
//         chuj2: 'var1'
//     }
// }, {
//     test: {
//         chuj: 'chuj',
//         dupa: 'dupa'
//     } //ignore all variables
// }))