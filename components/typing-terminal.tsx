"use client"

import { useEffect, useState } from "react"

export interface TermLine {
  c: string
  t: string
  pause?: number
}

interface Props {
  title?: string
  lines: TermLine[]
  loop?: boolean
  restartDelay?: number
  speed?: number
  className?: string
  shadow?: boolean
}

interface State {
  rendered: { c: string; t: string; done: boolean }[]
  lineIdx: number
  charIdx: number
  cycle: number
}

export function TypingTerminal({
  title = "~/projects/my-app — vibeaudit",
  lines,
  loop = true,
  restartDelay = 2400,
  speed = 14,
  className = "",
  shadow = true,
}: Props) {
  const [state, setState] = useState<State>({
    rendered: [],
    lineIdx: 0,
    charIdx: 0,
    cycle: 0,
  })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function step(s: State): State {
      if (s.lineIdx >= lines.length) return s
      const line = lines[s.lineIdx]
      const nextChar = s.charIdx + 1

      if (nextChar > line.t.length) {
        const rest: State = {
          ...s,
          lineIdx: s.lineIdx + 1,
          charIdx: 0,
          rendered: s.rendered.map((r, i) =>
            i === s.lineIdx ? { ...r, done: true } : r
          ),
        }
        return rest
      }

      const partial = line.t.slice(0, nextChar)
      const rendered = [...s.rendered]
      if (rendered.length <= s.lineIdx) {
        rendered.push({ c: line.c, t: partial, done: false })
      } else {
        rendered[s.lineIdx] = { c: line.c, t: partial, done: false }
      }
      return { ...s, rendered, charIdx: nextChar }
    }

    function tick() {
      setState((s) => {
        if (s.lineIdx >= lines.length) {
          if (!loop) return s
          timer = setTimeout(() => {
            setState({ rendered: [], lineIdx: 0, charIdx: 0, cycle: s.cycle + 1 })
          }, restartDelay)
          return s
        }
        const line = lines[s.lineIdx]
        const isLineDone = s.charIdx >= line.t.length
        const delay = isLineDone ? line.pause ?? 220 : speed + Math.random() * speed
        timer = setTimeout(tick, delay)
        return step(s)
      })
    }

    timer = setTimeout(tick, 320)
    return () => clearTimeout(timer)
  }, [lines, loop, restartDelay, speed, state.cycle])

  const currentDone = state.lineIdx >= lines.length

  return (
    <div
      className={`overflow-hidden rounded-[12px] border border-line bg-surface ${
        shadow ? "shadow-[0_40px_120px_-30px_rgba(94,106,210,0.35)]" : ""
      } ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#EB5757]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2B341]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4CB782]" />
        <span className="ml-2 font-mono text-[11px] text-ink-tertiary">{title}</span>
      </div>
      <pre className="m-0 min-h-[260px] p-5 font-mono text-[12.5px] leading-[1.8]">
        {state.rendered.map((l, i) => {
          const isCursor = !currentDone && i === state.rendered.length - 1 && !l.done
          return (
            <div key={`${state.cycle}-${i}`} className={l.c}>
              {l.t}
              {isCursor && <span className="animate-blink text-ink-primary">▍</span>}
            </div>
          )
        })}
        {currentDone && (
          <div className="text-ink-primary">
            $ <span className="animate-blink">▍</span>
          </div>
        )}
      </pre>
    </div>
  )
}
