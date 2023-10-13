import Router from "./router/Router"
import { useAuth } from "./hooks/use_auth";
import Loading from "./components/Loading";


function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />
  }

  return (
    <Router />
  )
}

export default App
