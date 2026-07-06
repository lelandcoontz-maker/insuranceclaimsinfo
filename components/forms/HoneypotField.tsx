'use client'

interface Props {
  /** Unique id per form so multiple instances on a page don't collide. */
  id?: string
}

/**
 * Anti-spam honeypot. Visually hidden from humans (moved off-screen rather
 * than display:none, which some bots skip). Form-filler bots populate the
 * "website" input; /api/leads silently accepts-and-drops any submission
 * where the field is non-empty. The input is intentionally uncontrolled —
 * read it at submit time via the form element.
 */
export function HoneypotField({ id = 'hp-website' }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      <label htmlFor={id}>Leave this field empty</label>
      <input id={id} type="text" name="website" tabIndex={-1} autoComplete="off" />
    </div>
  )
}
