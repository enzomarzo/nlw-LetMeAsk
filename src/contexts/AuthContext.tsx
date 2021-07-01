import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
type AuthContextType = {
    /* estou tipando as variáveis. O 'user'pode ser undefined pois na hora
    * que eu crio o useState() ele está indo vazio. Pois não tem usuário logado 
    * se não tem usuário logado é igual undefined! */  
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode
}

/* criando contexto de autenticação. Porque?
* para que eu consiga acessar as informações do usuári autenticado
* em qualquer página do meu site */
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) { 

    const[user, setUser] = useState<User>();

    /* useEffect vai servir para monitorar se o login está efetaudo
    * caso contrário, se o usuário der F5 ou atualizar a página, as informações dele se perderiam
    * com o termo 'use' percebemos que se trata de um hook */
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => { 
        if (user) { 
          const { displayName, photoURL, uid } = user
    
          if (!displayName || !photoURL) { 
            throw new Error('Missing information from Google Account.');
          }
    
          setUser ({ 
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
      })
  
      //parar de ouvir => boa prática em event listenners
      return() => { 
        unsubscribe();
      }
    }, [] )
  
    async function signInWithGoogle() { 
      //criando variável que vai fazer o login com o Google
      const provider = new firebase.auth.GoogleAuthProvider();
  
      //fazendo a autenticação com popup
      const result = await auth.signInWithPopup(provider);
  
      if (result.user) { 
        const { displayName, photoURL, uid } = result.user
    
        if (!displayName || !photoURL) { 
          throw new Error('Missing information from Google Account.');
        }
  
        setUser ({ 
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}