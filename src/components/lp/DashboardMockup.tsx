export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#222] bg-[#111] shadow-[0_0_80px_-20px_rgba(255,106,0,0.35)] ${className}`}
      role="img"
      aria-label="Pré-visualização da interface do dashboard Teorize"
    >
      <div className="flex items-center gap-2 border-b border-[#222] bg-[#0a0a0a] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6a00]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#666]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#444]" />
        <span className="ml-2 text-xs text-[#666]">app.teorize.com.br</span>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-[1fr_2fr]">
        <div className="space-y-3">
          <div className="h-24 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#111] ring-1 ring-[#222]" />
          <div className="h-32 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#111] ring-1 ring-[#222]" />
        </div>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {["Lucro", "ROAS", "CAC", "LTV"].map((label) => (
              <span
                key={label}
                className="rounded-lg bg-[#0a0a0a] px-3 py-1.5 text-xs font-medium text-[#a0a0a0] ring-1 ring-[#222]"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="h-40 rounded-xl bg-[linear-gradient(135deg,rgba(255,106,0,0.15),transparent)] ring-1 ring-[#222]" />
          <div className="grid grid-cols-3 gap-2">
            {[68, 42, 91].map((n, i) => (
              <div
                key={i}
                className="h-20 rounded-lg bg-[#0c0c0c] ring-1 ring-[#222]"
                style={{
                  backgroundImage: [
                    "linear-gradient(180deg, rgba(255,106,0,0.22) 0%, transparent 100%)",
                    "linear-gradient(180deg, rgba(255,106,0,0.18) 0%, transparent 100%)",
                    "linear-gradient(180deg, rgba(255,106,0,0.26) 0%, transparent 100%)",
                  ][i],
                }}
              >
                <div className="p-2 text-[10px] text-[#666]">KPI {i + 1}</div>
                <div className="px-2 text-lg font-semibold text-white">{n}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
