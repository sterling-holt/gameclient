'use client'

import { invoke } from '@tauri-apps/api/tauri';

const launchWindowsApp = async () => {
  try {
    await invoke('launch_app');
  } catch (error) {
    console.error('Error launching the app:', error);
  }
};


export const Item = () => {

    return <li onClick={() => launchWindowsApp()}>
        Item
    </li>
}