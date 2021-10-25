import ReactDOM from 'react-dom'

import Arena from './components/Atividade 2/questao1/Arena'
import World from './components/Atividade 2/questao3/World'

const root = document.getElementById('root')
ReactDOM.render(
    <World>
        <Arena />
        <Arena />
        <Arena />
    </World>
    
    , root)