import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  // 状态管理
  const [menuItems, setMenuItems] = useState(initialMenuItems); // 菜单项状态
  const [newMenuItem, setNewMenuItem] = useState(""); // 新菜单项输入框状态
  const [filter, setFilter] = useState(""); // 过滤输入框状态

  // 添加菜单项的回调函数
  const addMenuItem = useCallback(() => {
    if (newMenuItem.trim()) {
      setMenuItems([...menuItems, newMenuItem]); // 将新菜单项添加到菜单项列表
      setNewMenuItem(""); // 清空输入框
    }
  }, [menuItems, newMenuItem]);

  // 过滤菜单项
  const filteredMenuItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* 过滤输入框 */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      <br />

      {/* 新菜单项输入框 */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />

      {/* 添加菜单项按钮 */}
      <button onClick={addMenuItem}>Add Item</button>
      <br />

      {/* 渲染过滤后的菜单项 */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}