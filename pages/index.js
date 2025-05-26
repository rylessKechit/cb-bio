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
        <title>Curtis BLEUBAR - Entrepreneur</title>
        <meta name="description" content="Entrepreneur in business services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-dark">
        <div className={`container mx-auto px-6 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 font-serif">
              Curtis BLEUBAR
            </h1>
            <p className="text-xl text-gray-300 mb-2">Entrepreneur</p>
            <div className="w-16 h-px bg-accent mx-auto"></div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-dark-card rounded-lg shadow-lg border border-dark-border p-8">
              <p className="text-lg text-gray-200 leading-relaxed text-center mb-6">
                Entrepreneur for over <span className="text-white font-medium">20 years</span>, I have had the opportunity to create and manage 4 companies in the service sector. 
                Today, I focus on developing practical solutions that make life easier for businesses and individuals.
              </p>
              <div className="text-center pt-6 border-t border-dark-border">
                <p className="text-accent italic">
                  "Creating useful and sustainable services"
                </p>
              </div>
            </div>
          </div>

          {/* Entreprises actuelles */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-light text-white text-center mb-12 font-serif">
              My Companies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* YOUR SERVICES GROUP */}
              <div className="bg-dark-card rounded-lg shadow-lg border border-dark-border p-8 hover:shadow-xl hover:border-accent transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-1">YOUR SERVICES GROUP</h3>
                    <p className="text-sm text-gray-400">Business Services</p>
                  </div>
                </div>
                
                <p className="text-gray-200 mb-4 leading-relaxed">
                  Company specialized in professional cleaning services, 
                  vehicle transportation and logistics. We support businesses 
                  with their daily operational needs.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <span className="px-3 py-1 bg-dark-tag text-gray-300 rounded-full text-sm">Cleaning</span>
                    <span className="px-3 py-1 bg-dark-tag text-gray-300 rounded-full text-sm">Transport</span>
                  </div>
                  <a 
                    href="https://yourservices-group.com" 
                    className="text-accent hover:text-accent-light text-sm font-medium transition-colors"
                  >
                    Visit website →
                  </a>
                </div>
              </div>

              {/* ITI SERVICES */}
              <div className="bg-dark-card rounded-lg shadow-lg border border-dark-border p-8 hover:shadow-xl hover:border-accent transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-1">ITI SERVICES</h3>
                    <p className="text-sm text-gray-400">Service Solutions</p>
                  </div>
                </div>
                
                <p className="text-gray-200 mb-4 leading-relaxed">
                  Service company dedicated to supporting businesses. 
                  We develop tailored solutions for our clients' specific needs 
                  across various industry sectors.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <span className="px-3 py-1 bg-dark-tag text-gray-300 rounded-full text-sm">Consulting</span>
                    <span className="px-3 py-1 bg-dark-tag text-gray-300 rounded-full text-sm">Services</span>
                  </div>
                  <span className="text-gray-500 text-sm">In development</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-light text-white text-center mb-12 font-serif">
              Background
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-dark-card rounded-lg border border-dark-border">
                <div className="text-3xl font-light text-accent mb-2">20+</div>
                <div className="text-gray-300">Years of experience</div>
              </div>
              <div className="p-6 bg-dark-card rounded-lg border border-dark-border">
                <div className="text-3xl font-light text-accent mb-2">4</div>
                <div className="text-gray-300">Companies founded</div>
              </div>
              <div className="p-6 bg-dark-card rounded-lg border border-dark-border">
                <div className="text-3xl font-light text-accent mb-2">2</div>
                <div className="text-gray-300">Current companies</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-card rounded-lg shadow-lg border border-dark-border p-8 text-center">
              <h2 className="text-2xl font-light text-white mb-6 font-serif">
                Contact
              </h2>
              <div className="space-y-4">
                <a 
                  href="mailto:curtis.b@yourservices-group.com" 
                  className="flex items-center justify-center gap-3 text-gray-200 hover:text-accent transition-colors p-3 rounded-lg hover:bg-dark-hover"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>curtis.b@yourservices-group.com</span>
                </a>
                
                <a 
                  href="tel:+33123456789" 
                  className="flex items-center justify-center gap-3 text-gray-200 hover:text-accent transition-colors p-3 rounded-lg hover:bg-dark-hover"
                >
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
    </>
  );
}