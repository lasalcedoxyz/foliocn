import * as React from 'react';
import { Outlet } from 'react-router';

export function EditorLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
