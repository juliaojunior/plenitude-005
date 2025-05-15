// src/app/meditacoes/paz/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Ícone para voltar

// Interface para representar uma meditação
interface Meditacao {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
}

// Dados de exemplo para as meditações de Paz
const meditacoesPaz: Meditacao[] = [
  {
    id: "paz001",
    titulo: "Encontrando a Paz Interior",
    descricao: "Uma jornada guiada para acalmar a mente e encontrar serenidade.",
    categoria: "paz",
  },
  {
    id: "paz002",
    titulo: "Meditação da Montanha",
    descricao: "Sinta a estabilidade e a tranquilidade de uma montanha.",
    categoria: "paz",
  },
  {
    id: "paz003",
    titulo: "Soltando Preocupações e Medos",
    descricao: "Libere os pensamentos que perturbam sua paz.",
    categoria: "paz",
  },
  {
    id: "paz004",
    titulo: "O Som do Silêncio",
    descricao: "Conecte-se com a quietude interna e a paz que ela traz.",
    categoria: "paz",
  },
];

export default function MeditacoesPazPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho com botão de voltar e título */}
        <div className="flex items-center mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 mr-4">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Meditações para Paz
          </h1>
        </div>

        {/* Lista de Meditações */}
        <div className="space-y-6">
          {meditacoesPaz.map((meditacao) => (
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

