import { Container } from "@material-ui/core"

import Nav from "./components/Nav/Nav"
import UserList from "./components/UserList/UserList"

function App() {
  return (
    <div>
      <Container>
        <Nav />
        <UserList />
      </Container>
    </div>
  )
}

export default App
