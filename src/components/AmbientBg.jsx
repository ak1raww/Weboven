/**
 * AmbientBg — background orbs decorativi
 *
 * FIX iOS: la versione originale usava position:fixed nel CSS
 * (.ambient), che su iOS Safari forza il browser a ricomporre
 * l'intera pagina ad ogni frame di scroll. Ora è position:absolute
 * (vedi global.css). Questo componente rimane identico; il fix
 * è nel CSS .ambient class.
 *
 * Se hai bisogno di orb veramente fissi usa sparingly e solo
 * su desktop con una media query (pointer:fine).
 */
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
