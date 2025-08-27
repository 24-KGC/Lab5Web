import React from 'react';

type ListItemProps = {
  item: { id: number; text: string };
  onDelete: (id: number) => void;
};

const ListItem: React.FC<ListItemProps> = React.memo(function ListItem({ item, onDelete }) {
  console.log('Rendering ListItem:', item.id);
  return (
    <li className="flex items-center justify-between px-3 py-2 rounded border bg-gray-100">
      <span className="font-medium text-gray-700">{item.text}</span>
      <button
        onClick={() => onDelete(item.id)}
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-xs"
      >
        Delete
      </button>
    </li>
  );
});

export default ListItem;
