const editor = new EasyMDE({
  element: document.getElementById("my-text-area"),
  status: false,
  autofocus: true,
  hideIcons: ["guide", "fullscreen"],
});
editor.toggleFullScreen();
