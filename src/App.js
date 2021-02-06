import logo from './logo.svg';
import './App.css';
import JokeCard from './Components/JokeCard';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return(<div>
    <Header/>
    <JokeCard
    question="Did you hear about the mathematician who’s afraid of negative numbers?"
    awnser="He’ll stop at nothing to avoid them."/>
    <JokeCard
    question="Why do we tell actors to “break a leg?"
    awnser="Because every play has a cast."/>
    <JokeCard
    question="Helvetica and Times New Roman walk into a bar."
    awnser="“Get out of here!” shouts the bartender. “We don’t serve your type.”"/>
    <Footer/>
  </div>)
}

export default App;