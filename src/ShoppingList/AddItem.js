import {useState} from 'react';
function AddItem({onAdd}) {
    const [item, setitem] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

      onAdd(item);
      setitem({});
    }
    return <form onSubmit={handleSubmit} className="flex flex-row items-center gap-3 w-full">
        <input  value={item.name} onChange={(e)=>setitem(v=>({...v,name:e.target.value}))} type="text" name="name" placeholder="Item name" className="w-[170px] bg-gray-100 p-2 text-[11px] rounded outline-none" />
        <input value={item.price} onChange={(e)=>setitem(v=>({...v,price:e.target.value}))}  type="number" name="price" placeholder="Price" className="w-[80px] bg-gray-100 p-2 text-[11px] rounded outline-none"/>
        <button type="submit" className="py-2 px-4 rounded-md uppercase border border-blue-500 text-blue-500 text-xs">Add</button>
    </form>;
}

export default AddItem;