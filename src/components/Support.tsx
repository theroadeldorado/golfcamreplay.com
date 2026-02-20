import { Coffee, Star, ExternalLink } from 'lucide-react';

export default function Support() {
  return (
    <section id="support" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso">
            Support the Project
          </h2>
          <p className="mt-4 text-lg text-bronze leading-relaxed">
            Golf Cam Replay is free and open source. If it&apos;s helped your game, consider buying
            me a coffee.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://ko-fi.com/theroadeldorado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF5E5B] hover:bg-[#e54e4b] text-white font-semibold px-6 py-3 rounded transition-colors shadow-lg shadow-[#FF5E5B]/20"
            >
              <Coffee size={20} />
              Buy Me a Coffee
            </a>
            <a
              href="https://github.com/theroadeldorado/golf-swing-replay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-sand hover:border-tan text-espresso font-semibold px-6 py-3 rounded transition-colors"
            >
              <Star size={20} />
              Star on GitHub
              <ExternalLink size={14} className="text-bronze" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
