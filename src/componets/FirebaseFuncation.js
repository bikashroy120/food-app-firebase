import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"; 
import {firestore} from '../firebaseConfig'

export const saveItem = async(data)=>{
    await setDoc(doc(firestore,"foodItem",`${Date.now()}`),data,{
        merge:true
    })
}


export const getData = async ()=>{
    const items = await getDocs(
        query(collection(firestore,"foodItem",), orderBy("id","desc"))
    );
    return items.docs.map((doc)=> doc.data())
}