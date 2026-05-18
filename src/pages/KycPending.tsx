import { CheckCircle, Clock, Circle, FileText, Mail, Shield } from 'lucide-react'

const STEPS = [
  { label: 'Registration complete',  status: 'done' },
  { label: 'Documents submitted',    status: 'done' },
  { label: 'Under review',           status: 'active', detail: 'Estimated 1–2 business days remaining' },
  { label: 'Identity verified',      status: 'pending' },
  { label: 'Trading access granted', status: 'pending' },
]

export function KycPending() {
  return (
    <div style={{ padding: 24, maxWidth: 560 }}>
      <div style={{
        background: '#162032', border: '1px solid #1e3a5f', borderRadius: 10,
        padding: '14px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <Clock size={16} color="#38bdf8" />
        <span style={{ fontSize: 13, color: '#7dd3fc' }}>
          Your identity is being verified — this usually takes 1–3 business days.
        </span>
      </div>

      <div style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 12, padding: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: '#1a1a2e', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FileText size={20} color="#818cf8" />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Identity Verification</div>
            <div style={{ fontSize: 12, color: '#64748b' }}>KYC via SumSub · ATH-KYC-29481</div>
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          {STEPS.map(({ label, status, detail }, i) => (
            <div key={label} style={{ display: 'flex', gap: 16, paddingBottom: i < STEPS.length - 1 ? 20 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 28 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: status === 'done' ? '#6366f1' : status === 'active' ? '#1a1a2e' : 'transparent',
                  border: status === 'done' ? 'none' : status === 'active' ? '2px solid #6366f1' : '2px solid #1e1e30',
                }}>
                  {status === 'done'   && <CheckCircle size={14} color="#fff" fill="#6366f1" stroke="none" />}
                  {status === 'active' && <Clock size={14} color="#818cf8" />}
                  {status === 'pending'&& <Circle size={8} color="#334155" />}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: 2, flex: 1, background: status === 'done' ? '#6366f1' : '#1e1e30', marginTop: 4, marginBottom: 0 }} />
                )}
              </div>
              <div style={{ paddingTop: 4, paddingBottom: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: status === 'done' ? '#94a3b8' : status === 'active' ? '#f1f5f9' : '#334155' }}>
                  {label}
                </div>
                {detail && <div style={{ fontSize: 11, color: '#475569', marginTop: 3 }}>{detail}</div>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{
            flex: 1, background: '#13131f', border: '1px solid #1e1e30', borderRadius: 8,
            padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <Mail size={14} color="#475569" />
            <div style={{ fontSize: 12, color: '#64748b' }}>
              Notification sent to <span style={{ color: '#94a3b8' }}>t.mutallimov@protonmail.ch</span>
            </div>
          </div>
          <div style={{
            background: '#13131f', border: '1px solid #1e1e30', borderRadius: 8,
            padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Shield size={14} color="#475569" />
            <span style={{ fontSize: 12, color: '#64748b' }}>Powered by SumSub</span>
          </div>
        </div>
      </div>
    </div>
  )
}
