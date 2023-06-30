const XLSX = require('xlsx');
const saveAs = require('file-saver');
const data = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }
]

const wopts = { bookType:"xlsx", bookSST:false, type:"array" };

const workSheet = XLSX.utils.json_to_sheet(data)

const workbook = XLSX.utils.book_new()
workbook.SheetNames = ["sheet1"]
workbook.Sheets = {["sheet1"]: workSheet};

XLSX.writeFile(workbook, "out.xlsx");