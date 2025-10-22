import { useState } from 'react';
import { CheckCircle2, Circle, ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

const SEOQuickFixSheet = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const fixes = [
    {
      id: 1,
      category: "Intent-Driven Rubriker",
      icon: Target,
      problem: "Din rubrik låter bra – men matchar inte vad folk faktiskt söker efter.",
      badExample: "Välkommen till Stockholms bästa webbyrå",
      goodExample: "Letar du efter en webbyrå i Stockholm? Vi bygger sajter som hittas på Google",
      why: "Google rankar sidor som matchar *sökintention*. 'Välkommen till' matchar ingen sökning. 'Letar du efter' matchar tusentals.",
      quickFix: "Skriv om din H1 till en fråga som dina kunder faktiskt skriver i Google.",
      proTip: "Kolla Googles 'Folk frågar också' – där hittar du exakta fraser folk använder."
    },
    {
      id: 2,
      category: "3-sekundersklarhetstestet",
      icon: Zap,
      problem: "Besökare fattar inte vad du gör inom 3 sekunder.",
      badExample: "Vi skapar innovativa digitala lösningar för moderna företag.",
      goodExample: "Vi hjälper småföretag att få fler kunder med SEO och webbutveckling.",
      why: "Om besökaren inte förstår vad du erbjuder direkt, backar de. Hög bounce rate = Google tror att sidan är irrelevant.",
      quickFix: "Skriv WHO du hjälper + WHAT du gör + RESULTAT de får i din första mening.",
      proTip: "Läs din startsida högt. Behöver du förklara den efteråt? Skriv om den."
    },
    {
      id: 3,
      category: "Rätt nyckelordsplacering (utan att överdriva)",
      icon: Sparkles,
      problem: "Du nämner din tjänst en gång – men Google behöver se den på rätt ställen.",
      checkList: [
        "✓ I din H1 (huvudrubrik)",
        "✓ I första 100 orden",
        "✓ I minst en H2-rubrik",
        "✓ I din metabeskrivning",
        "✓ I bilders alt-text (naturligt)"
      ],
      badExample: "Våra tjänster → Webbutveckling",
      goodExample: "Webbutveckling i Stockholm – Skräddarsydda sajter som rankar",
      why: "Googles algoritm väger dessa platser olika. Missar du dem – missar du rankingen.",
      quickFix: "Sök (Cmd+F) efter ditt huvudnyckelord. Om det syns mindre än 3–5 gånger: optimera.",
      proTip: "Använd varianter som 'webbdesign', 'webbdesigner', 'hemsidesdesign' – de räknas också."
    }
  ];

  const bonusTip = {
    title: "Kan du hitta dig själv?",
    description: "Öppna ett inkognitofönster. Sök efter '[din tjänst] + [din stad]'. Är du på sida 1?",
    reality: "Om inte – så hittar dina kunder istället dina konkurrenter. Oavsett hur snygg din hemsida är.",
    action: "Det här Quick Fix Sheetet ger dig starten. Vill du ha hela systemet? Se SEO Copy Kit 👇"
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <header className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-black text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 tracking-wide">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              SEO QUICK FIX
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black mb-4 sm:mb-6 leading-[0.9] tracking-tight px-2">
              SEO Copy<br />
              Quick Fix Sheet
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-normal max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
              3 konkreta ändringar. 5 minuter. Börja ranka idag.
            </p>
          </div>

          <div className="flex justify-center mb-12 sm:mb-16 px-4">
            <div className="bg-gray-50 border border-gray-200 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl w-full max-w-sm text-center">
              <p className="text-sm font-semibold text-black">Av Christoffer Wallman</p>
              <p className="text-sm text-gray-600">SEO-konsult & webbutvecklare</p>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-600 p-4 sm:p-6 lg:p-8 rounded-r-xl mx-4 sm:mx-0">
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              <strong className="text-black">Realtitetstest:</strong> De flesta hemsidor är skrivna för människor men ignoreras av Google.
              De här 3 fixarna löser det – utan att göra texterna robotaktiga.
            </p>
          </div>
        </header>

        {/* Main Fixes */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {fixes.map((fix, index) => {
            const Icon = fix.icon;
            
            return (
              <article key={fix.id} className="group">
                {/* Mobile-first header layout */}
                <div className="mb-8 sm:mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    <div className="flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm font-bold text-white bg-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full self-center sm:self-start">
                          FIX #{index + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black leading-tight px-2 sm:px-0">{fix.category}</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 sm:space-y-10 lg:space-y-12 sm:pl-20 lg:pl-24">
                  {/* Problem */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 lg:p-8 rounded-r-xl mx-4 sm:mx-0">
                    <p className="text-xs sm:text-sm font-semibold text-red-900 mb-2 sm:mb-3 uppercase tracking-wide">
                      Problemet
                    </p>
                    <p className="text-sm sm:text-base text-red-800 leading-relaxed font-medium">{fix.problem}</p>
                  </div>

                  {/* Examples - Stack on mobile */}
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
                    <div className="border-2 border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl">
                      <p className="text-xs font-bold text-gray-500 mb-3 sm:mb-4 uppercase tracking-wide">
                        ❌ FÖRE (Generiskt)
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">"{fix.badExample}"</p>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-200 p-4 sm:p-6 lg:p-8 rounded-xl">
                      <p className="text-xs font-bold text-blue-900 mb-3 sm:mb-4 uppercase tracking-wide">
                        ✅ EFTER (SEO-optimerat)
                      </p>
                      <p className="text-sm sm:text-base text-black font-semibold leading-relaxed">"{fix.goodExample}"</p>
                    </div>
                  </div>

                  {/* Checklist */}
                  {fix.checkList && (
                    <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl mx-4 sm:mx-0">
                      <p className="text-xs sm:text-sm font-bold text-black mb-4 sm:mb-6 uppercase tracking-wide">
                        Här ska nyckelorden finnas
                      </p>
                      <div className="space-y-3 sm:space-y-4">
                        {fix.checkList.map((item, i) => (
                          <div
                            key={i}
                            onClick={() => toggleCheck(`${fix.id}-${i}`)}
                            className="flex items-center gap-3 sm:gap-4 cursor-pointer hover:bg-white p-3 sm:p-4 rounded-lg transition-all duration-200 active:scale-95"
                          >
                            {checkedItems[`${fix.id}-${i}`] ? (
                              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                            ) : (
                              <Circle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
                            )}
                            <span className={`text-sm sm:text-base font-medium ${checkedItems[`${fix.id}-${i}`] ? 'text-gray-500 line-through' : 'text-black'}`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Why it works */}
                  <div className="border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl mx-4 sm:mx-0">
                    <p className="text-xs sm:text-sm font-bold text-black mb-3 sm:mb-4 uppercase tracking-wide">
                      Varför det funkar
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{fix.why}</p>
                  </div>

                  {/* Quick Fix */}
                  <div className="bg-black text-white p-4 sm:p-6 lg:p-8 rounded-xl mx-4 sm:mx-0">
                    <p className="text-xs sm:text-sm font-bold mb-3 sm:mb-4 flex items-center uppercase tracking-wide">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                      Snabbfix (Gör detta nu)
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-6 leading-relaxed">{fix.quickFix}</p>
                    <div className="bg-white/10 p-4 sm:p-6 rounded-lg border border-white/20">
                      <p className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-blue-300 uppercase tracking-wide">
                        Proffstips
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed">{fix.proTip}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bonus Section */}
        <section className="mt-20 sm:mt-28 lg:mt-32">
          <div className="bg-black text-white p-6 sm:p-10 lg:p-16 rounded-2xl mx-4 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight px-4">
                Bonus: Realtitetstestet
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
              <div className="text-center px-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{bonusTip.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">{bonusTip.description}</p>
                <div className="bg-red-600/20 border-2 border-red-500/50 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base font-semibold text-red-200 leading-relaxed">{bonusTip.reality}</p>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{bonusTip.action}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 sm:mt-16">
          <div className="bg-gray-50 border border-gray-200 p-6 sm:p-10 lg:p-16 rounded-2xl text-center mx-4 sm:mx-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black mb-4 sm:mb-6 px-4">
              Vill du ha hela systemet?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
              Quick Fix Sheetet täcker grunderna. Men det finns mer:
            </p>
            
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              {[
                "10+ mallar för rubriker, CTA:er och hero-sektioner",
                "Bloggmallar med inbyggd SEO-struktur", 
                "AI-prompter som skriver i din ton",
                "Beprövade copyformler (PAS, AIDA, 4C's)"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="px-4">
              <a
                href="https://wallman5.gumroad.com/l/bvjyxr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-xl text-base sm:text-lg transition-all duration-200 hover:scale-105 shadow-lg active:scale-95"
              >
                Få SEO Copy Kit → Endast 99 k
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
                Samma metoder jag använder för kunder som betalar 20 00+ kr
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 sm:mt-20 lg:mt-24 text-center border-t border-gray-200 pt-12 sm:pt-16 px-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <span className="text-2xl sm:text-3xl font-black text-white">C</span>
          </div>
          <p className="text-base sm:text-lg text-gray-700 mb-2">
            Skapad av <strong className="text-black font-bold">Christoffer Wallman</strong>
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Webbutvecklare & SEO-konsult | Hjälper småföretag att växa online
          </p>
          <a
            href="https://wallmanswebbyra.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold border-2 border-blue-600 hover:border-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base active:scale-95"
          >
            wallmanswebbyra.se
          </a>
        </footer>
      </div>
    </div>
  );
};

export default SEOQuickFixSheet;