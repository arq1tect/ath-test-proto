import { ChevronRight } from "lucide-react"
import { useAppStore } from '../store'
import type { ViewState } from '../types'

function fmt(n: number, d = 0) {
  return n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })
}

function ProgressBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ height: 4, background: '#1a1a28', borderRadius: 2, overflow: 'hidden' }}>
      <div style={{ width: `${Math.min(value, 100)}%`, height: '100%', background: color }} />
    </div>
  )
}

const ACCOUNTS = [
  {
    id: 'ATH-29481',
    phase: 'Phase 1',
    phaseColor: '#818cf8',
    size: 100000,
    blocks: 10,
    balance: 102450,
    equity: 102215,
    totalPnl: 2450,
    dailyPnl: 1200,
    tradingDays: 3,
    requiredDays: 10,
    profitTarget: 10,
    profitProgress: 24.5,
    dailyDDUsed: 17,
    maxDDUsed: 23,
    gotoState: 'phase_1_active' as ViewState,
  },
  {
    id: 'ATH-29482',
    phase: 'Phase 2',
    phaseColor: '#38bdf8',
    size: 50000,
    blocks: 5,
    balance: 51240,
    equity: 51180,
    totalPnl: 1240,
    dailyPnl: 480,
    tradingDays: 2,
    requiredDays: 5,
    profitTarget: 5,
    profitProgress: 49.6,
    dailyDDUsed: 11,
    maxDDUsed: 8,
    gotoState: 'phase_2_active' as ViewState,
  },
  {
    id: 'ATH-29483',
    phase: 'Funded',
    phaseColor: '#22c55e',
    size: 30000,
    blocks: 3,
    balance: 31860,
    equity: 31860,
    totalPnl: 1860,
    dailyPnl: 640,
    tradingDays: 4,
    requiredDays: 5,
    profitTarget: 5,
    profitProgress: 100,
    dailyDDUsed: 7,
    maxDDUsed: 11,
    gotoState: 'funded_eligible_payout' as ViewState,
  },
]

const totalEquity = ACCOUNTS.reduce((s, a) => s + a.equity, 0)
const totalPnl = ACCOUNTS.reduce((s, a) => s + a.totalPnl, 0)
const totalDailyPnl = ACCOUNTS.reduce((s, a) => s + a.dailyPnl, 0)

export function MultipleActive() {
  const setViewState = useAppStore(s => s.setViewState)

  return (
    <div style={{ padding: 24, maxWidth: 860 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Total Equity',     value: `$${fmt(totalEquity)}` },
          { label: 'Total P&L',        value: `+$${fmt(totalPnl)}`,     green: true },
          { label: 'Daily P&L',        value: `+$${fmt(totalDailyPnl)}`, green: true },
        ].map(({ label, value, green }) => (
          <div key={label} style={{ background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 10, padding: '16px 20px' }}>
            <div style={{ fontSize: 11, color: '#475569', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: green ? '#22c55e' : '#f1f5f9', letterSpacing: '-0.02em' }}>{value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {ACCOUNTS.map(a => (
          <div
            key={a.id}
            style={{
              background: '#0f0f1c', border: '1px solid #1a1a28', borderRadius: 12,
              padding: '20px 24px', cursor: 'pointer', transition: 'border-color 0.15s',
            }}
            onClick={() => setViewState(a.gotoState)}
            onMouseEnter={e => (e.currentTarget.style.borderColor = '#2a2a40')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a1a28')}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', color: a.phaseColor }}>{a.phase.toUpperCase()}</div>
                <div style={{ width: 1, height: 12, background: '#1e1e30' }} />
                <div style={{ fontSize: 12, color: '#64748b' }}>{a.id} · {a.blocks} Blocks · ${(a.size / 1000).toFixed(0)}K</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#022c22', border: '1px solid #064e3b', borderRadius: 5, padding: '2px 8px', fontSize: 10, color: '#22c55e', fontWeight: 600 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e' }} /> Active
                </div>
              </div>
              <ChevronRight size={16} color="#334155" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 16 }}>
              {[
                { label: 'Balance',   value: `$${fmt(a.balance)}` },
                { label: 'Equity',    value: `$${fmt(a.equity)}` },
                { label: 'Total P&L', value: `+$${fmt(a.totalPnl)}`, color: '#22c55e' },
                { label: 'Daily P&L', value: `+$${fmt(a.dailyPnl)}`, color: '#22c55e' },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <div style={{ fontSize: 10, color: '#475569', marginBottom: 3 }}>{label}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: color ?? '#f1f5f9' }}>{value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#475569', marginBottom: 4 }}>
                  <span>Profit Target</span>
                  <span>{a.profitProgress.toFixed(0)}%</span>
                </div>
                <ProgressBar value={a.profitProgress} color={a.phaseColor} />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#475569', marginBottom: 4 }}>
                  <span>Trading Days</span>
                  <span>{a.tradingDays}/{a.requiredDays}</span>
                </div>
                <ProgressBar value={(a.tradingDays / a.requiredDays) * 100} color={a.phaseColor} />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#475569', marginBottom: 4 }}>
                  <span>Daily DD Used</span>
                  <span style={{ color: a.dailyDDUsed > 70 ? '#f43f5e' : '#475569' }}>{a.dailyDDUsed}%</span>
                </div>
                <ProgressBar value={a.dailyDDUsed} color={a.dailyDDUsed > 70 ? '#f43f5e' : a.dailyDDUsed > 40 ? '#fbbf24' : '#22c55e'} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, fontSize: 12, color: '#334155', textAlign: 'center' }}>
        Combined funded limit: ${fmt(totalEquity)} / $400K (40 Blocks max)
        <span style={{ marginLeft: 8, fontSize: 11, color: '#22c55e' }}>
          {(totalEquity / 400000 * 100).toFixed(0)}% used
        </span>
      </div>
    </div>
  )
}
