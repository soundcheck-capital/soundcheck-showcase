// "Common questions" grid on the partner pages. Each page passes its own copy and colors.
export default function PartnerFAQ({ items, question, answer, border, weight = 600 }) {
  return (
    <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '28px 40px' }}>
      {items.map(([q, a]) => (
        <div key={q} style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 20, borderTop: `1px solid ${border}` }}>
          <dt style={{ fontSize: 19, lineHeight: 1.3, fontWeight: weight, color: question }}>{q}</dt>
          <dd style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: answer }}>{a}</dd>
        </div>
      ))}
    </dl>
  )
}
