import './App.css';
import NavMenu from './components/Post/NavMenu';
import PostedImages from './containers/PostedImages/PostedImages';

const postNames = [];
for (let i = 0; i < 11; i++) {
  const postName = `wrestler${i+1}.jpg`;
  postNames.push(postName);
  
}
function App() {
  return (
    <div className="App">
      <NavMenu/>
      <div className='row-layout'>
        <h3>Wrestlers of Instagram</h3>
        <p>The #80's/90's #wrestlersofinstagram</p>

        <PostedImages postNames={postNames}/>
      </div>
    </div>
  );
}

export default App;
