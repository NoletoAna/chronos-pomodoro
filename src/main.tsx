import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// usando export default function abaixo do componente
// import QualquerCoisa from './App';

// usando export function antes do nome do componente
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* usando export default function abaixo do componente */}
    {/* <QualquerCoisa/> */}
    <App />
  </StrictMode>,
);
