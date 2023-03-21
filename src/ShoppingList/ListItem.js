import { useState } from "react";
function ListItem({ items, title, onCheckItem, onClose }) {
  const [search, setsearch] = useState("");
  return (
    <div className="space-y-3">
      <span className="text-blue-700 text-[11px]">
        {title} ( {items.length} )
      </span>
      <input
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        type="text"
        placeholder="Search an item"
        className="w-full bg-gray-100 p-2 rounded outline-none text-[11px]"
      />

      <ul className="space-y-2">
        {items
          .filter((v) => v.name.toLowerCase().includes(search?.toLowerCase()))
          .map((v, i) => (
            <li
              key={i}
              className="flex flex-row items-center justify-between text-[12px] font-bold px-1 border-b py-3"
            >
              <div className="flex flex-row gap-3 items-center">
                <input
                  checked={v.isPacked}
                 onChange={() => onCheckItem(v)}
                  type="checkbox"
                  
                  className="w-[15px] h-[15px]"
                />
                <span className="text-gray-700">{v.name}</span>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <span className="text-gray-700">{v.price}$</span>
                <button onClick={()=>onClose(v)}>
                <svg fill="#EA2828" width="17px" height="17px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListItem;
