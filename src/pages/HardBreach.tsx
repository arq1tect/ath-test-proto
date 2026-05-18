import { Ban, Mail, ShieldOff, AlertOctagon } from 'lucide-react'

const BREACH_RULES: Record<string, string> = {
  phase_1: 'Multi-account abuse (Terms §4.2)',
  phase_2: 'Copy trading from external accounts (Terms §4.4)',
  funded:  'HFT / Latency arbitrage detected (Terms §4.5)',
}

export function HardBreach({ phase }: { phase: 'phase_1' | 'phase_2' | 'funded' }) {
  const rule = BREACH_RULES[phase]
  const label = phase === 'phase_1' ? 'Phase 1' : phase === 'phase_2' ? 'Phase 2' : 'Funded'

  return (
    <div style={{ padding: 24, maxWidth: 600 }}>
      <div style={{
        background: '#2d0a0a', border: '1px solid #7f1d1d', borderRadius: 10,
        padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <ShieldOff size={18} color="#f43f5e" />
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#f43f5e' }}>Account Terminated</div>
          <div style={{ fontSize: 12, color: '#991b1b' }}>Hard breach — permanent closure, no appeal</div>
        </div>
      </div>

      <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 12, padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12,
            background: '#2d0a0a', border: '1px solid #7f1d1d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Ban size={26} color="#f43f5e" />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>ATH-29481 — {label}</div>
            <div style={{ fontSize: 13, color: '#64748b' }}>Permanently closed · Cannot be reopened</div>
          </div>
        </div>

        <div style={{
          background: '#1c1010', border: '1px solid #3b1212', borderRadius: 8,
          padding: '14px 16px', marginBottom: 20,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <AlertOctagon size={15} color="#f43f5e" style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 13, color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
              Our risk system detected activity prohibited under ATH Test trading rules.
              This account has been closed with immediate effect. All open positions were closed at market price.
              {phase === 'funded' ? ' Any pending payouts that were requested before this breach are unaffected.' : ''}
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
          {[
            { label: 'Account',       value: 'ATH-29481' },
            { label: 'Breach Type',   value: rule },
            { label: 'Closed At',     value: 'Jan 18 · 14:23 UTC' },
            { label: 'Final Balance', value: phase === 'funded' ? '$103,200' : '$97,400' },
          ].map(({ label: l, value }) => (
            <div key={l} style={{
              background: '#13131f', border: '1px solid #1e1e30', borderRadius: 8, padding: '12px 16px',
            }}>
              <div style={{ fontSize: 11, color: '#475569', marginBottom: 4 }}>{l}</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#94a3b8' }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: '#13131f', border: '1px solid #1e1e30', borderRadius: 8,
          padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <Mail size={14} color="#475569" />
          <span style={{ fontSize: 12, color: '#64748b' }}>
            Questions? Contact <span style={{ color: '#818cf8' }}>support@ath-test.com</span> — include your account ID.
          </span>
        </div>
      </div>
    </div>
  )
}
