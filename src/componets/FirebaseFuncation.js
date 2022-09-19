import { collection, doc, getDocs, orderBy, query, setDoc,where } from "firebase/firestore"; 
import {firestore} from '../firebaseConfig'

export const saveItem = async(data)=>{
    await setDoc(doc(firestore,"foodItem",`${Date.now()}`),data,{
        merge:true
    })
}

export const OrderCreact = async(data)=>{
    await setDoc(doc(firestore,"orderItem",`${Date.now()}`),data,{
        merge:true
    })
}

// 1662980169246
export const getData = async ()=>{
    const items = await getDocs(
        query(collection(firestore,"foodItem",), orderBy("id","desc"))
    );
    return items.docs.map((doc)=> doc.data())
}


export const getOrder = async ()=>{
    const items = await getDocs(
        query(collection(firestore,"orderItem",), orderBy("id","desc"))
    );
    return items.docs.map((doc)=> doc.data())
}

export const getQuery = async ()=>{
    const items = await getDocs(
        query(collection(firestore,"orderItem",),where("id", "===", "1662980169246"), orderBy("id","desc"))
    );
    return items.docs.map((doc)=> doc.data())
}

export const getUser = async (id)=>{
    const items = await getDocs(
        query(collection(firestore,"user",),where("uid", "==", id), orderBy("id","desc"))
    );
    return items.docs.map((doc)=> doc.data())
}