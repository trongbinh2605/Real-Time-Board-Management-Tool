import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppRoutes from "./routes";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppRoutes />
    </DndProvider>
  );
}

export default App;
