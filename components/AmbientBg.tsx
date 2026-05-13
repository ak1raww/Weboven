"use client"

export default function AmbientBg({
  orbs = [
    { width: 600, height: 600, top: "-10%", right: "-10%", color: "rgba(100, 100, 255, 0.05)" },
    { width: 400, height: 400, bottom: "10%", left: "-10%", color: "rgba(180, 160, 255, 0.04)" },
  ]
}: {
  orbs?: Array<{ width: number; height: number; top?: string; bottom?: string; left?: string; right?: string; color: string }>
}) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {orbs.map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: orb.width,
            height: orb.height,
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
            background: `radial-gradient(ellipse at center, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      ))}
    </div>
  )
}
