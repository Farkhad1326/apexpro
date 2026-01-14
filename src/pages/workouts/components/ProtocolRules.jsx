import React from 'react';

const ProtocolRules = () => {
  const rules = [
    { id: "01", title: "FORM_PRIORITY", text: "Always prioritize technical form over load weight to mitigate injury risk." },
    { id: "02", title: "PROGRESSIVE_OVERLOAD", text: "Maintain a rigorous training log to ensure systematic increases in tension." },
    { id: "03", title: "CNS_RECOVERY", text: "Mandatory rest intervals between sets are essential for neural recovery." },
    { id: "04", title: "HYDRATION_SYNC", text: "Fluid intake must remain constant to support metabolic cellular functions." },
    { id: "05", title: "WARMUP_REQD", text: "Standard 5-10 minute thermal warmup is non-negotiable before deployment." },
    { id: "06", title: "PAIN_THRESHOLD", text: "Terminate exercise immediately if acute or sharp joint pain is detected." },
    { id: "07", title: "PROTEIN_SYNTHESIS", text: "Support protocol with high-quality nutrients for optimal muscle repair." },
    { id: "08", title: "SLEEP_PROTOCOL", text: "7-9 hours of deep sleep is considered an active part of the program." },
    { id: "09", title: "TEMPO_CONTROL", text: "Respect the eccentric and concentric timing as specified in the protocol." },
    { id: "10", title: "CONSULT_EXPERT", text: "Consult professional guidance for any pre-existing physiological conditions." }
  ];

  return (
    <section className="mt-24 pt-20 border-t border-zinc-900 bg-black relative">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-black italic mb-12 flex items-center gap-3 text-white tracking-[0.2em]">
          <span className="text-neon-green">/</span> APEX_SAFETY_&_RULES
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-10">
          {rules.map((rule) => (
            <div key={rule.id} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <span className="text-neon-green font-mono text-[10px] font-black group-hover:animate-pulse">
                  [{rule.id}]
                </span>
                <div className="w-[1px] h-full bg-zinc-900 mt-2 group-hover:bg-neon-green/30 transition-colors"></div>
              </div>

              <div className="pb-4">
                <h5 className="text-neon-green/80 font-black text-[10px] tracking-widest uppercase mb-1">
                  {rule.title}
                </h5>
                <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed group-hover:text-zinc-300 transition-colors uppercase tracking-tight">
                  {rule.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtocolRules;