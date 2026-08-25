import React from 'react';

export const LogoTicker: React.FC = () => {
  const logos = [
    { name: 'Linear', tag: 'Fast Issue Tracking' },
    { name: 'Vercel', tag: 'Frontend Cloud' },
    { name: 'Supabase', tag: 'Open Source DB' },
    { name: 'Snowflake', tag: 'Data Cloud' },
    { name: 'Ramp', tag: 'Finance Automation' },
    { name: 'Retool', tag: 'Internal Tools' },
    { name: 'Stripe', tag: 'Payment Infrastructure' },
    { name: 'Scale AI', tag: 'Data Engine' },
  ];

  return (
    <section className="w-full py-12 px-6 lg:px-[120px] relative z-10 border-t border-black/5 bg-white/40 backdrop-blur-xs">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <p className="font-schibsted text-xs font-semibold uppercase tracking-[0.18em] text-black/50 mb-8 text-center">
          Trusted by over 10,000+ data teams and fast-growing modern enterprises
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center opacity-75 hover:opacity-100 transition-opacity">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center group cursor-pointer"
            >
              <span className="font-fustat font-bold text-lg md:text-xl text-black/70 group-hover:text-black transition-colors tracking-tight">
                {logo.name}
              </span>
              <span className="text-[10px] font-schibsted text-black/40 group-hover:text-black/60 transition-colors hidden sm:block">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
