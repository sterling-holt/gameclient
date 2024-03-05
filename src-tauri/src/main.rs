// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![launch_app])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}


#[tauri::command]
fn launch_app() {
    std::process::Command::new("G:/Steam/steamapps/common/swkotor/swkotor.exe")
        .spawn()
        .expect("Failed to launch the app.");
}
