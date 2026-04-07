import { HelmetProvider } from "react-helmet-async"
import AppNavigation from "./navigation/Navigation"

function App() {

  return (
    <>
      <HelmetProvider>
        <AppNavigation />
      </HelmetProvider>
    </>
  )
}

export default App