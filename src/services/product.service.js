import db from './../lib/connection';

export const getProducts = async () => {
    const productList = [];
    const snapshot = await db.ref('/shop/products/').once('value');
    snapshot.forEach(snap => {
        if (snap.val()){
            const data = snap.val();
            productList.push({
                ...data,
                id: snap.key
            });
        }                
    });

    return productList;        
}

export const addNewProduct = async (item) => {
    try{
     await db.ref('/shop/').child('products').push(item).key;
    }catch(err){

    }   
}

export const incrAvailable = async (item) => {
    
    if (!item.id) {
        return;

    }
    try {
        await db.ref('/shop/products/'+item.id).update({available: item.available});
    } catch(err){

    }   
}


export const decrAvailable = async (item) => {
    if (!item.id) {
        return;
    }

    try{
        await db.ref('/shop/products/'+item.id).update({available: --item.available});
    }catch(err){

    }   
}


export const returnInitAvailable = async (item) => {
    
    if (!item.id) {
        return;

    }
    try {
        await db.ref('/shop/products/'+item.id).update({available: item.available});
    } catch(err){

    }  
}


