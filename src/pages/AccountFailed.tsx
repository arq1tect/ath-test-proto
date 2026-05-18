import { XCircle, RefreshCw, AlertTriangle } from 'lucide-react'

export function AccountFailed({ phase }: { phase: 'phase_1' | 'phase_2' }) {
  const label = phase === 'phase_1' ? 'Phase 1' : 'Phase 2'
  return (
    <div style={{ padding: 24, maxWidth: 600 }}>
      <div style={{
        background: '#2d0a0a', border: '1px solid #7f1d1d', borderRadius: 10,
        padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <XCircle size={18} color="#f43f5e" />
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#f43f5e' }}>Account Failed</div>
          <div style={{ fontSize: 12, color: '#991b1b' }}>Daily drawdown limit breached on Jan 18, 2025 at 14:23 UTC</div>
        </div>
      </div>

      <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 12, padding: 28 }}>
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: '#475569', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 12 }}>
            What happened
          </div>
          <div style={{
            background: '#1c1010', border: '1px solid #3b1212', borderRadius: 8,
            padding: '14px 16px', display: 'flex', gap: 12,
          }}>
            <AlertTriangle size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 13, color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
              Account balance fell below the daily drawdown floor of <strong style={{ color: '#f1f5f9' }}>$95,000</strong> (5% below today's
              opening balance of $100,000). {label} account <strong style={{ color: '#f1f5f9' }}>ATH-29481</strong> has been
              permanently closed. This is a hard breach — no appeals.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
          {[
            { label: 'Account',        value: 'ATH-29481' },
            { label: 'Phase',          value: label },
            { label: 'Final Balance',  value: '$94,850' },
            { label: 'Total Loss',     value: '-$5,150', red: true },
          ].map(({ label: l, value, red }) => (
            <div key={l} style={{
              background: '#13131f', border: '1px solid #1e1e30', borderRadius: 8, padding: '12px 16px',
            }}>
              <div style={{ fontSize: 11, color: '#475569', marginBottom: 4 }}>{l}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: red ? '#f43f5e' : '#e2e8f0' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: '#13131f', border: '1px solid #1e1e30', borderRadius: 8,
          padding: '14px 16px', marginBottom: 20, fontSize: 13, color: '#64748b', lineHeight: 1.6,
        }}>
          Your next challenge starts fresh. Previous trading history does not affect new accounts.
        </div>

        <button style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: '#6366f1', border: 'none', borderRadius: 8, padding: '11px 22px',
          color: '#fff', fontSize: 13, cursor: 'pointer', fontWeight: 600,
        }}>
          <RefreshCw size={14} /> Buy New Challenge
        </button>
      </div>
    </div>
  )
}
