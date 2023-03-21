import { useState,useEffect } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
function ShopppingList() {

    const [items, setitems] = useState([]);
    const [total, settotal] = useState(0);

    useEffect(() => {
        if(items.length>0)
            settotal((items.map((item)=>item.price)).reduce((a,b)=>a+b,0));
        else
            settotal(0);
        
    }, [items]);

    const onAdd = (item) => {
        setitems(old=>[item,...old]);
    }
    const onPacked = (item) => {
        setitems(old=>old.map(i=>i.name===item.name?{...i,isPacked:true}:i));
    }
    const onUnpacked = (item) => {
        setitems(old=>old.map(i=>i.name===item.name?{...i,isPacked:false}:i));
    }
    const onRemove = (item) => {
        setitems(old=>old.filter(i=>i.name!==item.name));
    }
    const onMarkedAllUnpacked = () => {
        setitems(old=>old.map(i=>({...i,isPacked:false})));
    }
    
    return <div className="p-4 space-y-6">

        <AddItem onAdd={onAdd} />
        <ListItem items={items.filter((item)=>!item.isPacked)} title="Unpacked items" onCheckItem={onPacked} onClose={onRemove}/>
        <ListItem items={items.filter((item)=>item.isPacked)} title="Packed items" onCheckItem={onUnpacked} onClose={onRemove}/>
        <button onClick={onMarkedAllUnpacked} className="w-full text-center border border-blue-500 text-blue-500 rounded-md text-xs py-3">
            Mark all as unpacked
        </button>

        <div className="flex justify-end">
            <h3 className="text-sm font-bold">Total : {total}$</h3>
        </div>
    </div>;
}

export default ShopppingList;