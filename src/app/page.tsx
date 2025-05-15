// Página Principal (Maná Diário)
// Esta é a nova tela principal da aplicação PLENITUDE, acessível após o login.
// Exibe o "Maná Diário" (texto bíblico e comentário), categorias de meditação e últimas meditações ouvidas.

'use client';

import ProtectedRoute from "@/components/ProtectedRoute"; // Componente para proteger a rota
import Navbar from "@/components/Navbar"; // Componente da barra de navegação
import { useAuth } from "@/contexts/AuthContext"; // Hook para acessar informações do usuário
import { useRouter } from "next/navigation";

// --- Ícones para as Categorias de Meditação ---
// Estes são SVGs simples. Em um projeto real, você poderia usar uma biblioteca de ícones ou SVGs mais elaborados.

const IconAnsiedade = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    {/* Ícone de relógio/tempo pode simbolizar a calma no tempo presente */}
  </svg>
);

const IconGratidao = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    {/* Ícone de coração */}
  </svg>
);

const IconPaz = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-green-300 group-hover:text-green-200 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    {/* Ícone de folha/natureza */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4.083 4.083 0 01-5.656 0M14.828 14.828L19.07 19.07M5.172 5.172a4.083 4.083 0 015.656 0L14.828 9.172" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.13-5.87M12 21a9.004 9.004 0 01-8.13-5.87M12 3a9.004 9.004 0 00-4.472 1.158M12 3a9.004 9.004 0 014.472 1.158" />
  </svg>
);

const IconSabedoria = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4M12 20v-2m5.657-12.343l-1.414 1.414M5.757 16.243l-1.414 1.414M20 12h-2M6 12H4m12.343 5.657l-1.414-1.414M7.172 5.757l1.414-1.414" />
    {/* Ícone de lâmpada/ideia */}
  </svg>
);

const IconSono = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    {/* Ícone de lua */}
  </svg>
);

const IconFoco = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-red-300 group-hover:text-red-200 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="7.5" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    {/* Ícone de alvo */}
  </svg>
);

// --- Componente de Conteúdo da Página Maná Diário ---
function ManaDiarioPageContent() {
  const { user } = useAuth(); // Obtém o usuário logado para personalização (opcional aqui)

  const categorias = [
    { nome: "Ansiedade", Icone: IconAnsiedade, cor: "blue" },
    { nome: "Gratidão", Icone: IconGratidao, cor: "purple" },
    { nome: "Paz", Icone: IconPaz, cor: "green" },
    { nome: "Sabedoria", Icone: IconSabedoria, cor: "yellow" },
    { nome: "Sono", Icone: IconSono, cor: "indigo" },
    { nome: "Foco", Icone: IconFoco, cor: "red" },
  ];

  // Placeholder para últimas meditações
  const ultimasMeditacoes = [
    { id: 1, titulo: "Meditação para Calma Interior", duracao: "10 min" },
    { id: 2, titulo: "Encontrando a Paz na Tempestade", duracao: "15 min" },
    { id: 3, titulo: "Gratidão Matinal", duracao: "5 min" },
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white flex flex-col items-center pt-6 pb-24 px-4">
      {/* Adiciona padding-bottom (pb-24) para não sobrepor a navbar fixa e dar espaço ao conteúdo */}
      
      <header className="mb-8 text-center w-full max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Maná Diário
        </h1>
        {user && (
          <p className="mt-2 text-sm text-blue-300">
            Bem-vindo(a) de volta, {user.displayName || user.email}!
          </p>
        )}
      </header>

      {/* Seção 1: Texto Bíblico e Comentário */}
      <section className="bg-gray-800 bg-opacity-70 p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-3xl mb-10 transform transition-all hover:scale-[1.02] duration-300">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4 border-b-2 border-purple-500 pb-2">
          Palavra do Dia
        </h2>
        <blockquote className="text-lg italic text-blue-200 mb-3 border-l-4 border-blue-400 pl-4">
          &quot;O Senhor é o meu pastor; de nada terei falta. Em verdes pastagens me faz repousar e me conduz a águas tranquilas; restaura-me o vigor.&quot;
        </blockquote>
        <p className="text-right text-sm text-gray-400 mb-4">- Salmos 23:1-3a</p>
        <h3 className="text-xl font-medium text-gray-200 mb-2">Comentário:</h3>
        <p className="text-gray-300 leading-relaxed">
          Este salmo nos lembra da provisão constante e do cuidado amoroso de Deus. Mesmo em meio às dificuldades, podemos encontrar descanso e restauração Nele. Que esta verdade traga paz ao seu coração hoje, sabendo que você é guiado e sustentado pelo Bom Pastor.
        </p>
      </section>

      {/* Seção 2: Categorias de Meditações */}
      <section className="w-full max-w-3xl mb-10">
        <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center border-b-2 border-purple-500 pb-2">
          Categorias de Meditação
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {categorias.map((categoria) => (
            <button 
              key={categoria.nome} 
              className={`group bg-gray-800 bg-opacity-60 hover:bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-transparent hover:border-${categoria.cor}-400`}
              onClick={() => router.push(`/meditacoes/${categoria.nome.toLowerCase()}`)} // Navegação futura
            >
              <categoria.Icone />
              <span className={`font-medium text-gray-200 group-hover:text-${categoria.cor}-300`}>{categoria.nome}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Seção 3: Últimas Meditações */}
      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center border-b-2 border-purple-500 pb-2">
          Últimas Meditações Ouvidas
        </h2>
        <div className="space-y-4">
          {ultimasMeditacoes.length > 0 ? (
            ultimasMeditacoes.map((meditacao) => (
              <div key={meditacao.id} className="bg-gray-800 bg-opacity-60 p-4 rounded-lg shadow-md flex justify-between items-center transform transition-all hover:scale-[1.02] duration-300">
                <div>
                  <h3 className="font-medium text-gray-200">{meditacao.titulo}</h3>
                  <p className="text-sm text-gray-400">{meditacao.duracao}</p>
                </div>
                <button className="p-2 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">Você ainda não ouviu nenhuma meditação.</p>
          )}
        </div>
      </section>

      <Navbar />
    </div>
  );
}

// Envolve o conteúdo da página com o ProtectedRoute para garantir que apenas usuários logados possam acessá-la.
export default function ManaDiarioPage() {
  return (
    <ProtectedRoute>
      <ManaDiarioPageContent />
    </ProtectedRoute>
  );
}

