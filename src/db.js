import Dexie from "dexie";

export const db=new Dexie("itemsDB");

db.version(1).stores({
    documents: "++id, title, annotation, content",
})





