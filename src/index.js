import ReactDOM from 'react-dom' //Библиотеканы импрот кылып жатабыз 
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root')) // App ты рендер кылат,элементтерди веб-страницабызга корсотконго жардам берет
// ('root') Бул index.html дин ичиндеги div тин ичинен алынган. и ушул div биздин проектин баарын render кылат