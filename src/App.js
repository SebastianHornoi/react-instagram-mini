import './App.css';
import Header from './components/Header';
import Posts from './components/Posts';
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
       <div className="header">
         <Header />
       </div>
       <div className="content">
         <Stories />
        <Posts />
       </div>
       <div className="footer">
         <img className='footer__icons' src="./img/home.png" alt="" />
         <img className='footer__icons' src="./img/search.png" alt="" />
         <img className='footer__icons' src="./img/reels.png" alt="" />
         <img className='footer__icons' src="./img/bag.png" alt="" />
         <img className='footer__icons br-radius' src="https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
       </div>
    </div>
  );
}

export default App;
