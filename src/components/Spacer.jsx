import clsx from 'clsx'

// Simple spacer component for adding custom vertical spacing
export function Spacer({ size = 'md', className, ...props }) {
  const sizeClasses = {
    xs: 'h-2',  // 0.5rem / 8px
    sm: 'h-4',  // 1rem / 16px
    md: 'h-6',  // 1.5rem / 24px
    lg: 'h-8',  // 2rem / 32px
    xl: 'h-12', // 3rem / 48px
    none: 'h-0'
  }
  
  return (
    <div className={clsx(sizeClasses[size], className)} {...props} />
  )
}