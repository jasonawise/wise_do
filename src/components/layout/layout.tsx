import React from 'react';
import { FloatingButton } from '../floatingButton';

export default function Layout({ children }: { children: React.ReactNode }) {
  function handleFloatingButtonClick() {
    console.log('handleFloatingButtonClick');
  }

  return (
    <div className="p-4">
      {children}
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <FloatingButton handleFloatingButtonClick={handleFloatingButtonClick} />
    </div>
  );
}
