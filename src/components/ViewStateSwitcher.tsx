import { useState } from 'react'
import { SlidersHorizontal, X, Check } from 'lucide-react'
import { useAppStore } from '../store'
import { VIEW_STATE_LIST } from '../types'
import type { ViewState } from '../types'

const GROUPS = ['Public', 'Onboarding', 'Phase 1', 'Phase 2', 'Funded', 'Special']

export function ViewStateSwitcher() {
  const [open, setOpen] = useState(false)
  const { viewState, setViewState } = useAppStore()

  const currentLabel = VIEW_STATE_LIST.find(s => s.id === viewState)?.label ?? viewState

  function select(id: ViewState) {
    setViewState(id)
    setOpen(false)
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 9999 }}>
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 52,
            left: 0,
            width: 280,
            background: '#11111c',
            border: '1px solid #1e1e30',
            borderRadius: 12,
            padding: '8px 0',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        >
          <div style={{ padding: '8px 16px 6px', fontSize: 11, color: '#475569', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            View State
          </div>
          {GROUPS.map(group => {
            const items = VIEW_STATE_LIST.filter(s => s.group === group)
            return (
              <div key={group}>
                <div style={{ padding: '6px 16px 4px', fontSize: 10, color: '#334155', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {group}
                </div>
                {items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => select(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '7px 16px',
                      background: viewState === item.id ? '#1a1a2e' : 'transparent',
                      border: 'none',
                      color: viewState === item.id ? '#818cf8' : '#cbd5e1',
                      fontSize: 13,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => {
                      if (viewState !== item.id) (e.currentTarget as HTMLButtonElement).style.background = '#161624'
                    }}
                    onMouseLeave={e => {
                      if (viewState !== item.id) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                    }}
                  >
                    {item.label}
                    {viewState === item.id && <Check size={12} color="#818cf8" />}
                  </button>
                ))}
              </div>
            )
          })}
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: '#11111c',
          border: '1px solid #2a2a40',
          borderRadius: 8,
          padding: '8px 12px',
          color: '#94a3b8',
          fontSize: 12,
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        {open ? <X size={14} /> : <SlidersHorizontal size={14} />}
        <span style={{ maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {currentLabel}
        </span>
      </button>
    </div>
  )
}
