
const fs=require('fs');

const dataBuffer=fs.readFileSync('1-json.json');

const dataJSON= dataBuffer.toString();

const user=JSON.parse(dataJSON);//converts from JSON to javascript object


user.name='Saksham';//changing the values of js object
user.age=21;


const userJSON=JSON.stringify(user);//converitng from js object ot JSON format

fs.writeFileSync('1-json.json',userJSON);//writing JSON contents to the file