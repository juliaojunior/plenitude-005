// Arquivo de Contexto de Autenticação
// Este arquivo define um Contexto React para gerenciar o estado de autenticação do usuário em toda a aplicação.
// Ele utiliza o Firebase para autenticação e fornece informações do usuário e funções de login/logout.

'use client'; // Necessário para Contextos em Next.js App Router

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase'; // Importa a configuração do Firebase e o provedor Google

// Define a interface para o valor do contexto de autenticação
interface AuthContextType {
  user: User | null; // Objeto do usuário do Firebase ou nulo se não estiver logado
  loading: boolean; // Indica se o estado de autenticação ainda está carregando
  signInWithGoogle: () => Promise<void>; // Função para login com Google
  signOut: () => Promise<void>; // Função para logout
}

// Cria o Contexto de Autenticação com um valor padrão undefined
// Usamos undefined para poder verificar se o contexto foi realmente fornecido por um Provider
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook customizado para facilitar o uso do AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Garante que o hook seja usado dentro de um AuthProvider
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Props para o AuthProvider
interface AuthProviderProps {
  children: ReactNode; // Componentes filhos que terão acesso ao contexto
}

// Componente Provedor do Contexto de Autenticação
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Estado para armazenar o usuário logado
  const [loading, setLoading] = useState(true); // Estado para indicar o carregamento inicial da autenticação

  // Efeito para observar mudanças no estado de autenticação do Firebase
  useEffect(() => {
    // onAuthStateChanged retorna uma função para cancelar a inscrição (unsubscribe)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Atualiza o estado do usuário
      setLoading(false); // Define o carregamento como concluído
    });

    // Função de limpeza: cancela a inscrição ao desmontar o componente
    return () => unsubscribe();
  }, []); // Array de dependências vazio para executar o efeito apenas uma vez (montagem/desmontagem)

  // Função para realizar login com o Google
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider); // Abre o popup de login do Google
      // O onAuthStateChanged cuidará de atualizar o estado do usuário e loading
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
      setLoading(false); // Garante que o loading seja desativado em caso de erro
    }
  };

  // Função para realizar logout
  const signOut = async () => {
    setLoading(true);
    try {
      await firebaseSignOut(auth); // Desloga o usuário do Firebase
      // O onAuthStateChanged cuidará de atualizar o estado do usuário para null e loading
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      setLoading(false); // Garante que o loading seja desativado em caso de erro
    }
  };

  // Valor fornecido pelo contexto
  const value = {
    user,
    loading,
    signInWithGoogle,
    signOut,
  };

  // Retorna o Provider com o valor do contexto, disponibilizando-o para os componentes filhos
  // Não renderiza os filhos até que o carregamento inicial da autenticação esteja completo
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

