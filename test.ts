// just teaching myself typescript

console.log('hello world i am typescript')
// tsc test.ts

async function hello() {
    return 'world'
}
// tsc test.ts  ----- craziness ensues
// touch tsconfig.json

// {
//     "compilerOptions": {
//         "target": "esnext",
//         "watch": true
//     }
// }

