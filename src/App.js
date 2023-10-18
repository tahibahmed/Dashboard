import { Space } from "antd";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Headers from "./components/Header";
import TextContent from './components/TextContent'

function App() {
  return (
    <div className="App">
      <Headers />
      <Space className="sidemenu">
        <Sidebar></Sidebar>
        <TextContent></TextContent>
      </Space>
    </div>
  );
}

export default App;
