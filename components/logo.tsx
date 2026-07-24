import { Crown } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex flex-col items-center">
        <Crown className="h-4 w-4 text-accent" fill="currentColor" />
        <span className="font-serif text-3xl font-bold leading-none text-accent">K</span>
      </div>
      <div className="font-serif leading-none">
        <span className="block text-lg font-semibold tracking-wide text-primary-foreground">
          KINGDOM OF
        </span>
        <span className="block text-lg font-semibold tracking-[0.2em] text-primary-foreground">
          CURTAINS
        </span>
      </div>
    </div>
  )
}
