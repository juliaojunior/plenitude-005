// src/app/meditacoes/ansiedade/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Ícone para voltar

// Interface para representar uma meditação (usaremos para os placeholders)
interface Meditacao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string; // Adicionamos a categoria para o link dinâmico
}

// Dados de exemplo para as meditações de Ansiedade
const meditacoesAnsiedade: Meditacao[] = [
  {
    id: "ansiedade001",
    titulo: "Respiração Consciente para Acalmar",
    descricao: "Uma prática guiada para focar na sua respiração e encontrar calma.",
    categoria: "ansiedade",
  },
  {
    id: "ansiedade002",
    titulo: "Liberando a Tensão Corporal",
    descricao: "Solte as tensões acumuladas no corpo e relaxe profundamente.",
    categoria: "ansiedade",
  },
  {
    id: "ansiedade003",
    titulo: "Visualização de um Lugar Seguro",
    descricao: "Crie um refúgio mental para momentos de ansiedade.",
    categoria: "ansiedade",
  },
  {
    id: "ansiedade004",
    titulo: "Aceitando o Momento Presente",
    descricao: "Aprenda a acolher suas emoções sem julgamento.",
    categoria: "ansiedade",
  },
];

export default function MeditacoesAnsiedadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho com botão de voltar e título */}
        <div className="flex items-center mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 mr-4">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Meditações para Ansiedade
          </h1>
        </div>

        {/* Lista de Meditações */}
        <div className="space-y-6">
          {meditacoesAnsiedade.map((meditacao) => (
            <Link
              key={meditacao.id}
              href={`/meditacoes/${meditacao.categoria}/${meditacao.id}`}
              className="block p-6 bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-lg shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-blue-300 mb-2">
                {meditacao.titulo}
              </h2>
              <p className="text-gray-400 text-sm">{meditacao.descricao}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

