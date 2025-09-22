"use client";
import { useState } from "react";
import { X } from "lucide-react"; // optional close icon

export default function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 bg-blue-600 text-white rounded"
      >
        Open Drawer
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Panel (LEFT SIDE) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-600"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          {children ? children : <p>Drawer Content</p>}
        </div>
      </div>
    </>
  );
}
