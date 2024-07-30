import './styles/app.scss'
import Header from './components/Header'
import Banner from './components/Banner'
import Modal from './components/Modal'


function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <div id='root'>
    <Banner>
      <Header/>
      <Modal/>
    </Banner>
    </div>
  )
}

export default App
