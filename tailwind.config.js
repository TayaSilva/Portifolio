export default {
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        script: 'var(--script)',
        cream: '#F8F1EC',
        night: '#12090B',
        'night-deep': '#2A0F15',
        wine: '#591B2B',
        burgundy: '#7A263A',
        rose: '#E4A6AF',
        'rose-bright': '#F2C4CB',
        'rose-script': '#C76B7C',
        'muted-rose': '#CDB3B3',
        'muted-brown': '#5E4348',
        'ink-dark': '#241316',
        'page-light': '#FCF7F4',
        letter: '#2F171E',
        'letter-surface': '#3A2028',
        'surface-light': '#F1E1DC',
        'resume-light': '#E9CFC9'
      },
      backgroundImage: {
        hatch: 'repeating-linear-gradient(135deg, var(--script) 0 3px, transparent 3px 9px)',
        arch: 'linear-gradient(165deg, #4a1623 0%, #2a0f15 55%, #1a0b0e 100%)',
        'arch-glow': 'radial-gradient(circle at 30% 18%, rgba(228,166,175,.22), rgba(228,166,175,0) 55%)',
        'orbit-glow': 'radial-gradient(closest-side, rgba(122,38,58,.85), rgba(89,27,43,.3) 60%, transparent)',
        spoke: 'linear-gradient(90deg, transparent, var(--accent))',
        'letter-frame': 'radial-gradient(circle, rgba(36,19,22,.55) 1.4px, transparent 1.9px)'
      }
    }
  }
}
