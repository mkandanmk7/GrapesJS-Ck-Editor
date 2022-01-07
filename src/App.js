import "./App.css";
import { GrapesjsReact as Editor } from "grapesjs-react";
import "../node_modules/grapesjs/dist/css/grapes.min.css";
import { plugIn } from "./Components/MyPlugin";
// import grapesjs from "grapesjs";

import gjsCKEDITOR from "grapesjs-plugin-ckeditor";

function App() {
  return (
    <Editor
      id="grapesjs-react"
      plugins={["grapesjs-mjml", gjsCKEDITOR, plugIn]}
      pluginsOpts={{
        "gjs-plugin-ckeditor": {
          position: "right",
          options: {
            language: "en",
            // skin: "moono-dark",
          },
        },
      }}
      storageManager={{
        type: "remote",
        stepsBeforeSave: 3,
        urlStore: "http://localhost:3000/template.json",
        urlLoad: "http://localhost:3000/template.json",
      }}
    ></Editor>
  );
}

export default App;
