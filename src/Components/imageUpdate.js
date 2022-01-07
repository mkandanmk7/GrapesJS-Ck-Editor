export const imageUpdate = (editor) => {
  editor.on("component:update", () => {
    const selectedComponent = editor.getSelected().attributes.src;
    const el = document.getElementById("change_image");
    if (el && el.src !== selectedComponent) {
      document.getElementById("change_image").src = selectedComponent;
    }
  });
};
