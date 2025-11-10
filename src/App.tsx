import Calculator from './Components/Calculator/Calculator'
import Result from './Components/Calculator/Result'
import Header from './Components/Header/Header'
import Section from './Components/Section/Section'

function App() {
  return (
    <main className="w-100 h-100 d-flex flex-column align-items-center row-gap-3" style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <Calculator />
      <Result/>
      <Section />
    </main>
  )
}

export default App
