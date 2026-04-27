export default function AmbientBg({ orbs = [] }) {
  const defaultOrbs = [
    { width: 700, height: 700, top: '-20%', left: '-15%', color: 'rgba(232,213,176,0.06)' },
    { width: 500, height: 500, bottom: '10%', right: '-10%', color: 'rgba(180,160,120,0.05)' },
  ]
  const list = orbs.length ? orbs : defaultOrbs
  return (
    <div className="ambient" aria-hidden>
      {list.map((o, i) => (
        <div
          key={i}
          className="ambient-orb"
          style={{
            width: o.width,
            height: o.height,
            top: o.top,
            left: o.left,
            bottom: o.bottom,
            right: o.right,
            background: o.color,
          }}
        />
      ))}
    </div>
  )
}
