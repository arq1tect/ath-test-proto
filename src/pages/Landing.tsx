import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle } from 'lucide-react'
import { useAppStore } from '../store'

const FEATURES = [
  { icon: Zap,         title: '2-in-1 Platform',   desc: 'Trade directly inside the platform. No MetaTrader, no external apps.' },
  { icon: TrendingUp,  title: 'Block Pricing',      desc: 'Buy exactly the account size you need. 1 Block = $10K, up to 20 Blocks.' },
  { icon: Shield,      title: 'Payout Guarantee',   desc: 'Once you request a payout, it\'s guaranteed — even if you breach after.' },
]

const STATS = [
  { value: '$200K',  label: 'Max Account Size' },
  { value: '80%',    label: 'Profit Split' },
  { value: '5 Days', label: 'Min. Payout Cycle' },
  { value: '∞',      label: 'Active Accounts' },
]

export function Landing() {
  const setViewState = useAppStore(s => s.setViewState)

  return (
    <div style={{ minHeight: '100vh', background: '#08080f', color: '#f1f5f9' }}>
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 48px', borderBottom: '1px solid #1a1a28',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700, color: '#fff',
          }}>A</div>
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>ATH Test</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={() => setViewState('auth_no_accounts')}
            style={{
              padding: '8px 16px', borderRadius: 7, border: '1px solid #2a2a40',
              background: 'transparent', color: '#94a3b8', fontSize: 13, cursor: 'pointer',
            }}
          >
            Log In
          </button>
          <button
            onClick={() => setViewState('auth_no_accounts')}
            style={{
              padding: '8px 16px', borderRadius: 7, border: 'none',
              background: '#6366f1', color: '#fff', fontSize: 13, cursor: 'pointer', fontWeight: 500,
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      <section style={{ textAlign: 'center', padding: '100px 48px 80px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: '#1a1a2e', border: '1px solid #2a2a40',
          borderRadius: 20, padding: '4px 12px', marginBottom: 32,
          fontSize: 12, color: '#818cf8',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
          Now accepting new traders
        </div>

        <h1 style={{
          fontSize: 56, fontWeight: 800, margin: '0 0 20px',
          letterSpacing: '-0.03em', lineHeight: 1.1,
          background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          Trade. Prove. Get Funded.
        </h1>

        <p style={{ fontSize: 18, color: '#64748b', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.6 }}>
          The only prop trading platform with a built-in terminal. One app for your challenge and your trading.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button
            onClick={() => setViewState('auth_no_accounts')}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '12px 28px', borderRadius: 8, border: 'none',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: '#fff', fontSize: 15, cursor: 'pointer', fontWeight: 600,
            }}
          >
            Start Challenge <ArrowRight size={16} />
          </button>
          <button style={{
            padding: '12px 24px', borderRadius: 8,
            border: '1px solid #2a2a40',
            background: 'transparent', color: '#94a3b8', fontSize: 15, cursor: 'pointer',
          }}>
            How it works
          </button>
        </div>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', gap: 48, padding: '0 48px 80px' }}>
        {STATS.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em' }}>{s.value}</div>
            <div style={{ fontSize: 13, color: '#475569', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: '0 48px 100px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              background: '#0f0f1c', border: '1px solid #1a1a28',
              borderRadius: 12, padding: '28px 24px',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: '#1a1a2e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <Icon size={20} color="#818cf8" />
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#e2e8f0', marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        margin: '0 48px 80px', padding: '48px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1c 100%)',
        border: '1px solid #2a2a40', borderRadius: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.02em' }}>
            Ready to get funded?
          </h2>
          <p style={{ color: '#64748b', margin: 0, fontSize: 14 }}>
            Start with as little as $100. Scale to $200K.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
            {['No monthly fees', '80% profit split', 'Instant dashboard'].map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#94a3b8' }}>
                <CheckCircle size={13} color="#22c55e" /> {f}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setViewState('auth_no_accounts')}
          style={{
            padding: '12px 28px', borderRadius: 8, border: 'none',
            background: '#6366f1', color: '#fff',
            fontSize: 14, cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap',
          }}
        >
          Buy Challenge
        </button>
      </section>
    </div>
  )
}
