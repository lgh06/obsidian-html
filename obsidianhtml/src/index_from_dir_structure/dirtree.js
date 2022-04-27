function toggle_dir(dir_button_id) {
  console.log(dir_button_id);
  let id = dir_button_id.split('-')[1]
  let folderContainerElement = document.querySelector('#folder-container-' + id)

  if ( ['block', ''].includes( folderContainerElement.style.display ) ) {
    folderContainerElement.style.display = "none";
  }
  else {
    folderContainerElement.style.display = "block";
  }
}