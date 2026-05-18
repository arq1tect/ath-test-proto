import { Plus, TrendingUp, Shield, Zap } from 'lucide-react'

function blockPrice(n: number) {
  let total = 0
  for (let i = 1; i <= n; i++) total += Math.max(100 - (i - 1) * 5, 55)
  return total
}

const PLANS = [
  { blocks: 1,  size: '$10K' },
  { blocks: 5,  size: '$50K', popular: false },
  { blocks: 10, size: '$100K', popular: true },
  { blocks: 20, size: '$200K' },
]

export function AuthNoAccounts() {
  return (
    <div style={{ padding: 24, maxWidth: 860 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 6px', letterSpacing: '-0.02em' }}>
          Buy your first challenge
        </h1>
        <p style={{ fontSize: 13, color: '#64748b', margin: 0 }}>
          Choose an account size. 1 Block = $10K. Pay only for what you need.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
        {PLANS.map(({ blocks, size, popular }) => (
          <div key={blocks} style={{
            background: popular ? 'linear-gradient(135deg, #1a1a2e 0%, #13132a 100%)' : '#0f0f1c',
            border: popular ? '1px solid #3730a3' : '1px solid #1a1a28',
            borderRadius: 12, padding: '22px 18px',
            position: 'relative',
          }}>
            {popular && (
              <div style={{
                position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                background: '#6366f1', color: '#fff',
                fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
                padding: '3px 10px', borderRadius: 10, whiteSpace: 'nowrap',
              }}>
                POPULAR
              </div>
            )}
            <div style={{ fontSize: 11, color: '#475569', marginBottom: 6 }}>
              {blocks} Block{blocks > 1 ? 's' : ''}
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: '#f1f5f9', letterSpacing: '-0.02em', marginBottom: 12 }}>
              {size}
            </div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 4 }}>
              ${blockPrice(blocks)}
            </div>
            <div style={{ fontSize: 11, color: '#475569', marginBottom: 18 }}>one-time fee</div>
            <button style={{
              width: '100%', padding: '9px', borderRadius: 7, border: 'none',
              background: popular ? '#6366f1' : '#1a1a28',
              color: '#fff', fontSize: 12, cursor: 'pointer', fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            }}>
              <Plus size={12} /> Buy Challenge
            </button>
          </div>
        ))}
      </div>

      <div style={{
        background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 12,
        padding: '22px 28px', display: 'flex', gap: 40,
      }}>
        {[
          { icon: TrendingUp, label: 'Phase 1 Target', value: '+10%' },
          { icon: TrendingUp, label: 'Phase 2 Target', value: '+5%' },
          { icon: Zap,        label: 'Profit Split',   value: '80%' },
          { icon: Shield,     label: 'Payout',         value: 'Guaranteed' },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Icon size={13} color="#6366f1" />
              <span style={{ fontSize: 11, color: '#475569' }}>{label}</span>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
