import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

function App() {

  /* o Switch é uma abstração para não deixar duas rotas serem iguais (e não dar erro por termos o 'rooms/' 2 vezes)
  * o exact é para especificar que a rota do Home é apenas com a raiz da nossa página. 
  * :id => torna nossa rota dinamica. Os dois pontos faz com que depois do rooms/ possa vir um milhão de coisas
  */ 
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />  
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
    );
}

export default App;
