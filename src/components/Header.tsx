import { Bell, ChevronDown } from 'lucide-react'

export function Header() {
  return (
    <header style={{
      height: 56,
      background: '#0c0c17',
      borderBottom: '1px solid #1a1a28',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: '#13132a', border: '1px solid #1e1e30',
          borderRadius: 7, padding: '5px 10px',
          color: '#e2e8f0', fontSize: 12, cursor: 'pointer',
        }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
          ATH-29481 · $100K Phase 1
          <ChevronDown size={12} color="#64748b" />
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button style={{
          position: 'relative', background: 'none', border: 'none',
          color: '#64748b', cursor: 'pointer', padding: 4,
        }}>
          <Bell size={17} />
          <div style={{
            position: 'absolute', top: 2, right: 2,
            width: 6, height: 6, borderRadius: '50%',
            background: '#6366f1',
          }} />
        </button>

        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: '#fff', cursor: 'pointer',
        }}>
          T
        </div>
      </div>
    </header>
  )
}
