import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const App = () => (
  <div>
    <h1>React Live Test</h1>
    <LiveProvider code="<strong>Hello World!</strong>">
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  </div>
);

export default App;
