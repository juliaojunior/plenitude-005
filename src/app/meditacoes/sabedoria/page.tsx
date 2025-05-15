// src/app/meditacoes/sabedoria/page.tsx
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

// Dados de exemplo para as meditações de Sabedoria
const meditacoesSabedoria: Meditacao[] = [
  {
    id: "sabedoria001",
    titulo: "Reflexão Sobre a Sabedoria Divina",
    descricao: "Medite sobre passagens que inspiram sabedoria e discernimento.",
    categoria: "sabedoria",
  },
  {
    id: "sabedoria002",
    titulo: "Buscando Clareza Mental",
    descricao: "Uma prática para acalmar a mente e encontrar clareza nas decisões.",
    categoria: "sabedoria",
  },
  {
    id: "sabedoria003",
    titulo: "Aprendendo com as Experiências",
    descricao: "Contemple suas vivências e extraia lições valiosas.",
    categoria: "sabedoria",
  },
  {
    id: "sabedoria004",
    titulo: "A Sabedoria do Silêncio Interior",
    descricao: "Descubra a sabedoria que reside na quietude da sua alma.",
    categoria: "sabedoria",
  },
];

export default function MeditacoesSabedoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho com botão de voltar e título */}
        <div className="flex items-center mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 mr-4">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Meditações para Sabedoria
          </h1>
        </div>

        {/* Lista de Meditações */}
        <div className="space-y-6">
          {meditacoesSabedoria.map((meditacao) => (
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

