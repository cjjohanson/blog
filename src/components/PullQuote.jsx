import clsx from 'clsx'

export default function PullQuote({ 
  children, 
  spacing = 'normal', 
  topSpacing, 
  bottomSpacing, 
  className, 
  ...props 
}) {
  const spacingClasses = {
    tight: 'my-6',     // 1.5rem top/bottom
    normal: 'my-8',    // 2rem top/bottom (default)
    loose: 'my-12',    // 3rem top/bottom
    xl: 'my-16',       // 4rem top/bottom
    minimal: 'my-4',   // 1rem top/bottom
  }
  
  const topSpacingClasses = {
    tight: 'mt-6',
    normal: 'mt-8',
    loose: 'mt-12',
    xl: 'mt-16',
    minimal: 'mt-4',
    none: 'mt-0',
  }
  
  const bottomSpacingClasses = {
    tight: 'mb-6',
    normal: 'mb-8',
    loose: 'mb-12',
    xl: 'mb-16',
    minimal: 'mb-4',
    none: 'mb-0',
  }
  
  // Use specific top/bottom spacing if provided, otherwise use general spacing
  let spacingClass = spacingClasses[spacing]
  if (topSpacing || bottomSpacing) {
    spacingClass = clsx(
      topSpacing && topSpacingClasses[topSpacing],
      bottomSpacing && bottomSpacingClasses[bottomSpacing]
    )
  }
  
  return (
    <blockquote 
      className={clsx(
        'text-2xl border-l-4 border-teal-400 pl-4 italic text-zinc-700 dark:text-zinc-300',
        spacingClass,
        className
      )}
      {...props}
    >
      "{children}"
    </blockquote>
  )
}