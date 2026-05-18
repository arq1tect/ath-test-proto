import { CheckCircle, ArrowRight, Trophy } from 'lucide-react'

export function PhasePassed({ phase }: { phase: 'phase_1' | 'phase_2' }) {
  const p1 = phase === 'phase_1'
  return (
    <div style={{ padding: 24, maxWidth: 600 }}>
      <div style={{
        background: '#052e16', border: '1px solid #064e3b', borderRadius: 10,
        padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <CheckCircle size={18} color="#22c55e" />
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#22c55e' }}>
            {p1 ? 'Phase 1 Passed!' : 'Phase 2 Passed — Funded Account Activated!'}
          </div>
          <div style={{ fontSize: 12, color: '#166534' }}>
            {p1
              ? 'All objectives met. Phase 2 will be activated within 24 hours.'
              : 'Congratulations — your funded account is now being set up. Check your email.'}
          </div>
        </div>
      </div>

      <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 12, padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, background: '#052e16',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Trophy size={22} color="#22c55e" />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>{p1 ? 'Phase 1' : 'Phase 2'} Complete</div>
            <div style={{ fontSize: 13, color: '#64748b' }}>Account ATH-29481 · ${p1 ? '100' : '100'}K</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
          {[
            { label: 'Final P&L',       value: p1 ? '+$10,240' : '+$5,080',      green: true },
            { label: 'Profit %',         value: p1 ? '+10.24%' : '+5.08%',        green: true },
            { label: 'Trading Days',    value: p1 ? '12 / 10' : '6 / 5',         green: false },
            { label: 'Max DD Used',     value: p1 ? '31% of limit' : '25% of limit', green: false },
          ].map(({ label, value, green }) => (
            <div key={label} style={{
              background: '#13131f', border: '1px solid #1e1e30', borderRadius: 8, padding: '14px 16px',
            }}>
              <div style={{ fontSize: 11, color: '#475569', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: green ? '#22c55e' : '#f1f5f9' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: p1 ? '#1a1a2e' : '#052e16',
          border: `1px solid ${p1 ? '#2a2a40' : '#064e3b'}`,
          borderRadius: 10, padding: '18px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 4 }}>
              {p1 ? 'Next: Phase 2 Evaluation' : 'Next: Funded Trading'}
            </div>
            <div style={{ fontSize: 12, color: '#64748b' }}>
              {p1
                ? '5% profit target · Min. 5 trading days · Same $100K account'
                : '$100K funded account · 80% profit split · Request payouts anytime'}
            </div>
          </div>
          <ArrowRight size={16} color={p1 ? '#6366f1' : '#22c55e'} />
        </div>
      </div>
    </div>
  )
}
