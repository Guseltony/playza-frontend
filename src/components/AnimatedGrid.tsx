export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>
      
      {/* Neon glow lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-magenta-500 to-transparent opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}