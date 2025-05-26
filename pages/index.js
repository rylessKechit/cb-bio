// pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function CEOProfile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Head>
        <title>Alexandre Dubois - CEO & Entrepreneur</title>
        <meta name="description" content="CEO visionnaire de deux entreprises innovantes dans la tech et le luxe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 container mx-auto px-6 py-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header avec photo de profil */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 p-1 shadow-2xl shadow-amber-500/25">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl font-bold text-amber-400">AD</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent" style={{fontFamily: 'Playfair Display'}}>
              Alexandre Dubois
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">CEO & Entrepreneur Visionnaire</p>
            <div className="flex items-center justify-center space-x-2 text-amber-400">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-sm uppercase tracking-wider">Executive Leader</span>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Description personnelle */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 shadow-2xl">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center" style={{fontFamily: 'Inter'}}>
                Entrepreneur passionné avec plus de 15 ans d'expérience dans l'innovation technologique et le développement d'entreprises. 
                Je dirige deux sociétés florissantes, créant des solutions qui transforment les industries et enrichissent la vie de nos clients. 
                Ma vision : <span className="text-amber-400 font-semibold">allier excellence opérationnelle et innovation disruptive</span> pour bâtir l'avenir du business.
              </p>
            </div>
          </div>

          {/* Entreprises */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-400" style={{fontFamily: 'Playfair Display'}}>
              Mes Entreprises
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Entreprise 1 */}
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-gray-800/60 to-black/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30 shadow-2xl hover:shadow-amber-500/20 hover:border-amber-400/50">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-400" style={{fontFamily: 'Playfair Display'}}>TechLux Solutions</h3>
                      <p className="text-gray-300">Fondée en 2018</p>
                    </div>
                  </div>
                  <p className="text-gray-200 mb-4">
                    Société spécialisée dans les solutions technologiques haut de gamme pour les entreprises du secteur du luxe. 
                    Nous développons des plateformes e-commerce sur mesure et des expériences digitales immersives.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">+2M€ CA annuel</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">25 employés</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">Tech & Luxe</span>
                  </div>
                </div>
              </div>

              {/* Entreprise 2 */}
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-to-br from-gray-800/60 to-black/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30 shadow-2xl hover:shadow-amber-500/20 hover:border-amber-400/50">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-400" style={{fontFamily: 'Playfair Display'}}>Premium Invest</h3>
                      <p className="text-gray-300">Fondée en 2020</p>
                    </div>
                  </div>
                  <p className="text-gray-200 mb-4">
                    Cabinet de conseil en investissement et gestion de patrimoine pour une clientèle fortunée. 
                    Nous accompagnons nos clients dans leurs stratégies d'investissement et de diversification patrimoniale.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">+50M€ sous gestion</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">12 employés</span>
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm">Finance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accomplissements */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-400" style={{fontFamily: 'Playfair Display'}}>
              Accomplissements Clés
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-amber-500/20">
                <div className="text-4xl font-bold text-amber-400 mb-2">15+</div>
                <div className="text-gray-300">Années d'expérience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-amber-500/20">
                <div className="text-4xl font-bold text-amber-400 mb-2">2</div>
                <div className="text-gray-300">Entreprises dirigées</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl border border-amber-500/20">
                <div className="text-4xl font-bold text-amber-400 mb-2">37</div>
                <div className="text-gray-300">Collaborateurs</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/30">
              <h2 className="text-2xl font-bold mb-6 text-amber-400" style={{fontFamily: 'Playfair Display'}}>
                Connectons-nous
              </h2>
              <div className="flex justify-center space-x-6">
                <a href="mailto:alexandre@techlux-solutions.com" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>alexandre@techlux-solutions.com</span>
                </a>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="tel:+33123456789" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>+33 1 23 45 67 89</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          background: #000;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </>
  );
}