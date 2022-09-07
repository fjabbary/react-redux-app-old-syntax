import './App.css';
import Header from './components/Header';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
