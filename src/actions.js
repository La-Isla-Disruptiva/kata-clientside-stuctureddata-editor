import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { db } from "./db";
import Ajv from "ajv";
import yaml from "js-yaml";

const ajv = new Ajv();
const schema = {
  type: "object",
  properties: {
    name: {type:'string'},
    email: {type:'string'},
    password: {type:'string'}
  },
  required: ["name","email",'password'],
  additionalProperties: false
}

export default class apiModule{
    addItemToDB(title){
       db.documents.add({ title: title})
    }    

    getItemsFromDB(){
       let items = useObservable(liveQuery(async () => {
            return await db.documents.toArray();
          }));
       return items;   
    }

    updateItemFromDB(){
        console.log('inside update item')
    }

    deleteItemFromDB(item){
        db.documents.delete(item)
    }

    validateYaml(title){
       let jsobj = yaml.load(title.trim())
       let validate = ajv.compile(schema)
       let valid = validate(jsobj)
       if (!valid) {
         return false;
       }else {
         this.addItemToDB(title);
         return true;
       }
        
    }

    validateMarkdown(){
        console.log('inside validate markdown')
    }

    
    

    
}



    
