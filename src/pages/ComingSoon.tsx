import { Construction } from 'lucide-react'
import type { ViewState } from '../types'
import { VIEW_STATE_LIST } from '../types'

export function ComingSoon({ state }: { state: ViewState }) {
  const label = VIEW_STATE_LIST.find(s => s.id === state)?.label ?? state
  return (
    <div style={{
      height: '100%', minHeight: 'calc(100vh - 56px)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 16, color: '#475569',
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 12,
        background: '#13132a', border: '1px solid #1e1e30',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Construction size={22} color="#6366f1" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#94a3b8', marginBottom: 6 }}>
          {label}
        </div>
        <div style={{ fontSize: 13, color: '#334155' }}>
          This state will be implemented in a future iteration.
        </div>
      </div>
    </div>
  )
}
