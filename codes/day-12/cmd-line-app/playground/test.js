//JSON => JavaScript Object Notation
//format to represent data
//number, string, boolean, array, object
const jsTrainers =
    [{
        name: "joydip",
        id: 1,
        isTrainer: true,
        subjects: [{
            name: "JS",
            company: "expleo"
        }, {
            name: "JS",
            company: "expleo"
        }]
    }, {
        name: "joydip",
        id: 1,
        isTrainer: true,
        subjects: ["JS", "HTML"]
    }]
const jsonArray = JSON.stringify(jsTrainers)
console.log(jsonArray);
console.log(JSON.parse(jsonArray));

const jsInput = {
    first: 10,
    second: 20
}
const jsonData = JSON.stringify(jsInput)
console.log(jsonData);
console.log(JSON.parse(jsonData));

let p = {
    id: 1,
    name: 'dell',
    price: 100,
    description: 'new laptop'
}
let pJson = JSON.stringify(p);
console.log(pJson);
//XML
/**

 * <?xml version='1.0'>
* <soap:envelope>
    <soap:body>
    <soap:message>
 *   <inputs>
 *      <fisrt>10</first>
 *      <second>20</second>
 * <inputs>
 * </soap:message>
 *  </soap:body>
 * </soap:envelope>
 *
 *
 * <?xml version='1.0'>
 *  <result>
 *      30
 *  <inputs>
 */
