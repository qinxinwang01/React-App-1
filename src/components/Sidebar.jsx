import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  
  const [menuItems, setMenuItems] = useState(initialMenuItems); 
  const [newMenuItem, setNewMenuItem] = useState(""); 
  const [filter, setFilter] = useState(""); 

  
  const addMenuItem = useCallback(() => {
    if (newMenuItem.trim()) {
      setMenuItems([...menuItems, newMenuItem]); 
      setNewMenuItem(""); 
    }
  }, [menuItems, newMenuItem]);

 
  const filteredMenuItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <br />

      {}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />

      {}
      <button onClick={addMenuItem}>Add Item</button>
      <br />

      {}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}