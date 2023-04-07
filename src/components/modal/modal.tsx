import React from 'react';

export default function Modal({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) {
  if (!isOpen) return null;

  return <div className="w-11/12 h-full bg-gray-100">{children}</div>;
}
