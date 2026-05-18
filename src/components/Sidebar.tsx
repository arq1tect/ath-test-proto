import { LayoutDashboard, LineChart, Wallet, CreditCard, Users, Settings, ChevronRight } from 'lucide-react'

const NAV = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: LineChart,       label: 'Terminal',  active: false },
  { icon: CreditCard,      label: 'Accounts',  active: false },
  { icon: Wallet,          label: 'Payouts',   active: false },
  { icon: Wallet,          label: 'Wallet',    active: false },
  { icon: Users,           label: 'Referral',  active: false },
  { icon: Settings,        label: 'Settings',  active: false },
]

export function Sidebar() {
  return (
    <aside style={{
      width: 220,
      minHeight: '100vh',
      background: '#0c0c17',
      borderRight: '1px solid #1a1a28',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    }}>
      <div style={{ padding: '22px 20px 18px', borderBottom: '1px solid #1a1a28' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: '#fff',
          }}>
            A
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.01em' }}>ATH Test</div>
            <div style={{ fontSize: 10, color: '#475569', marginTop: 1 }}>Prop Trading</div>
          </div>
        </div>
      </div>

      <nav style={{ padding: '12px 10px', flex: 1 }}>
        {NAV.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 10px',
              borderRadius: 7,
              border: 'none',
              background: active ? '#1a1a2e' : 'transparent',
              color: active ? '#818cf8' : '#64748b',
              fontSize: 13,
              cursor: 'pointer',
              marginBottom: 2,
              textAlign: 'left',
            }}
          >
            <Icon size={15} />
            <span style={{ flex: 1 }}>{label}</span>
            {active && <ChevronRight size={12} />}
          </button>
        ))}
      </nav>

      <div style={{ padding: '14px 10px', borderTop: '1px solid #1a1a28' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 10px', borderRadius: 7,
          background: '#0f0f1c',
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 700, color: '#fff',
          }}>
            T
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#e2e8f0', fontWeight: 500 }}>Tymur M.</div>
            <div style={{ fontSize: 10, color: '#475569' }}>Phase 1</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
