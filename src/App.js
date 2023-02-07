import logo from './logo.svg';
import './App.css';
import photo1 from './google_logo.png';
import { base64Photo } from './Constant';
import DeleteIcon from './DeleteIcon';
function App() {
  return (
    <div className='container'>
      <div>
        Đây là hướng dẫn dùng ảnh trong ReactJs
      </div>
      <img src =  {photo1} width ="200" height="100" className='img'/>
      <div className='require-title'>Đây là ảnh dùng require</div>
      <img src = {require('./google_logo.png')} width ="200" height="100" className = 'img2'/>
      <div className='require-title'>Đây là ảnh dùng link online</div>
      <img src = 'https://www.tradeinn.com/f/13919/139197171/sd-toys-pokemon-team-pikachu-40x40-cm.jpg' width ="200" height="100" className = 'img3'/>
      <div className='require-title'>Đây là ảnh dùng base64Photo</div>
      <img src = {base64Photo} width ="200" height="100" className = 'img4'/>
      <DeleteIcon />
    </div>
  );
}
App();
export default App;
