import clsx from 'clsx'

// Component for grouping content with custom spacing
export function SpacedGroup({ 
  spacing = 'normal', 
  topSpacing, 
  bottomSpacing, 
  className, 
  children, 
  ...props 
}) {
  const spacingClasses = {
    none: '',
    tight: 'my-4',     // 1rem / 16px
    normal: 'my-8',    // 2rem / 32px  
    loose: 'my-12',    // 3rem / 48px
    xl: 'my-16',       // 4rem / 64px
  }
  
  const topSpacingClasses = {
    none: 'mt-0',
    tight: 'mt-4',
    normal: 'mt-8', 
    loose: 'mt-12',
    xl: 'mt-16',
  }
  
  const bottomSpacingClasses = {
    none: 'mb-0',
    tight: 'mb-4',
    normal: 'mb-8',
    loose: 'mb-12', 
    xl: 'mb-16',
  }
  
  let spacingClass = spacingClasses[spacing]
  
  // Override with specific top/bottom spacing if provided
  if (topSpacing || bottomSpacing) {
    spacingClass = clsx(
      topSpacing && topSpacingClasses[topSpacing],
      bottomSpacing && bottomSpacingClasses[bottomSpacing]
    )
  }
  
  return (
    <div className={clsx(spacingClass, className)} {...props}>
      {children}
    </div>
  )
}

// Component for tightly grouping related elements (reduces prose spacing)
export function TightGroup({ className, children, ...props }) {
  return (
    <div 
      className={clsx('[&>*]:!my-2 [&>p]:!my-2 [&>h2]:!mt-6 [&>h3]:!mt-4', className)} 
      {...props}
    >
      {children}
    </div>
  )
}

// Component to remove spacing from an element
export function NoSpacing({ className, children, ...props }) {
  return (
    <div className={clsx('!my-0', className)} {...props}>
      {children}  
    </div>
  )
}