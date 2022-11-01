import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { db } from "./db";
import Ajv from "ajv";
import yaml from "js-yaml";
import markdownlint from "markdownlint";

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
    addItemToDB(title, annotation, content){
       db.documents.add({ title: title,
                          annotation: annotation,
                          content: content})
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

    validateYaml(annotation){
      let jsobj = yaml.load(annotation.trim())
      let validate = ajv.compile(schema)
      let valid = validate(jsobj)
      if (!valid) {
        return false;
      }else {
        return true;
      }
    }

    validateMarkdown(content){
      const options = {
        "strings": {
          "content": content
        }
      };
  
      let band = false;
      let errMessage = '';

      markdownlint(options, function callback(err, result) {
        if (!err) {
          const resultString = (result || "").toString();
          if (resultString) {
            band = false;
            errMessage = resultString
          }else{
            band = true;
          }
        }
      });

      if(content == ''){
        return false;
      }

      if(band){
        return true;
      }else{
        return false;
      }
    }

    
    

    
}



    
