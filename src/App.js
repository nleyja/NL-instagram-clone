import './App.css';
import PostedImages from './containers/PostedImages/PostedImages';

const postNames = [];
for (let i = 0; i < 6; i++) {
  const postNames = `wrestler${i+1}.jpg`;
  postNames.push(postNames);
  
}
function App() {
  return (
    <div className="App">
      <div>
        <h3>Wrestlers of Instagram</h3>
        <p>The #80's/90's #wrestlersofinstagram</p>

        <PostedImages postNames={postNames}/>
      </div>



    </div>
  );
}

export default App;
