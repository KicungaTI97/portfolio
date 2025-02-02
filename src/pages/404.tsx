import { Home, ArrowLeft, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const NotFount = () => {
const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-2xl w-full text-center">
        {/* Número 404 Animado */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          </div>
        </div>

        {/* Mensagem de Erro */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Oops! Página não encontrada
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/home')}
            className="w-full md:w-auto bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>

          <button
            onClick={() => {"/home"}}
            className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Ir para Home</span>
          </button>

          <button
            onClick={() => window.location.reload()}
            className="w-full md:w-auto bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Recarregar</span>
          </button>
        </div>

        {/* Elemento Decorativo */}
        <div className="mt-16 text-white/10">
          <div className="inline-block border border-white/10 rounded-lg px-4 py-2 text-sm font-mono">
            Error: 404 | Path not found
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
    </div>
  );
};
