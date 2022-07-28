
import './App.css';
import DemoClassCom from './Components/DemoComponent/DemoClassCom';
import DemoFunctionCom from './Components/DemoComponent/DemoFunctionCom';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout.jsx'
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleWithJSX from './StyleWithJSX/StyleWithJSX';
import StateDemo from './StateDemo/StateDemo/StateDemo';


function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <StyleWithJSX/> */}
      <StateDemo/>
    </div>
  );
}

export default App;
