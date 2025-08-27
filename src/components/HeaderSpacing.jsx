import clsx from 'clsx'

// Component to control spacing above H1 headers (content headers, not page titles)
export function Header1({ spacing = 'normal', className, children, ...props }) {
  const spacingClasses = {
    tight: '!mt-8',      // 2rem - same as Header2 tight
    normal: '!mt-10',    // 2.5rem - slightly more than Header2
    loose: '!mt-12',     // 3rem - same as Header2 normal
    minimal: '!mt-6',    // 1.5rem - slightly more than Header2 minimal
    none: '!mt-0'        // No top margin
  }
  
  return (
    <h1 className={clsx('text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100', spacingClasses[spacing], className)} {...props}>
      {children}
    </h1>
  )
}

// Component to control spacing above H2 headers
export function Header2({ spacing = 'normal', className, children, ...props }) {
  const spacingClasses = {
    tight: '!mt-8',      // 2rem instead of default 5rem
    normal: '!mt-12',    // 3rem instead of default 5rem  
    loose: '!mt-16',     // 4rem instead of default 5rem
    minimal: '!mt-4',    // 1rem - very tight
    none: '!mt-0'        // No top margin
  }
  
  return (
    <h2 className={clsx('text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-200', spacingClasses[spacing], className)} {...props}>
      {children}
    </h2>
  )
}

export function Header3({ spacing = 'normal', className, children, ...props }) {
  const spacingClasses = {
    tight: '!mt-6',      // 1.5rem instead of default 4rem
    normal: '!mt-8',     // 2rem instead of default 4rem
    loose: '!mt-12',     // 3rem instead of default 4rem
    minimal: '!mt-3',    // 0.75rem - very tight
    none: '!mt-0'        // No top margin
  }
  
  return (
    <h3 className={clsx('text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-200', spacingClasses[spacing], className)} {...props}>
      {children}
    </h3>
  )
}