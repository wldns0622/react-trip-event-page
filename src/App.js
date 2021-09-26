import axios from 'axios';
const MOCK_SERVER = 'https://d0f6acf8-864b-4048-909a-2b302f66e04a.mock.pstmn.io';

function App() {
  let result = axios.get(`${MOCK_SERVER}/locations`);
  console.log(result);
  return <h1>Hello World</h1>;
}

export default App;
