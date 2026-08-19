/**
 * Subtle film grain + slow-breathing warm gradient.
 * The grain adds texture/depth. The gradient adds life without being distracting.
 */
export function GrainOverlay() {
  return (
    <>
      {/* Slow-moving gradient mesh — sits behind everything */}
      <div className="fixed inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(ellipse,rgba(232,197,116,0.04)_0%,transparent_70%)] animate-drift-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse,rgba(232,197,116,0.03)_0%,transparent_70%)] animate-drift-slow-reverse" />
        <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.015)_0%,transparent_60%)] animate-drift-mid" />
      </div>

      {/* Film grain — adds tactile quality */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
