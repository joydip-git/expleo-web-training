//data access logic
class MyFileReader {
    filePath: string;
    constructor(path: string) {
        if (path) {
            this.filePath = path;
        }
    }
    public readData() {
        //filepath
        return [];
    }
}

class Provider {
    public static provide(): MyFileReader {
        return new MyFileReader('');
    }
}
//business logic
//DataTransformer is dependent on the object of FileReader
//DataTransformer is 'dependent party'
//FilReader is 'dependency factor'
class DataTransformer {
    reader: MyFileReader = null;
    constructor(readerRef: MyFileReader) {
        // this.reader = new FileReader('path');
        // this.reader = Factory.create();
        this.reader = readerRef;
    }
    sortData() {
        if (this.reader !== null) {
            let data = this.reader.readData();
            //data.sort()
            return data;
        }
        return null;
    }
    filterData() {
        let data = this.reader.readData();
        //data.filter()
        return data;
    }
}
// //Presentation Logic
// class Ui {
//     showData() {
//         const transformer = 
//         let transformedData = transformer.sortData()
//         console.log(transformData)
//     }
// }

let dtf = new DataTransformer(Provider.provide())