import clsx from 'clsx'
import Image from 'next/image'

export function AlignedImage({ 
  src, 
  alt, 
  align = 'center', 
  className, 
  ...props 
}) {
  const alignmentClasses = {
    left: 'flex justify-start',
    center: 'flex justify-center', 
    right: 'flex justify-end'
  }
  
  return (
    <div className={alignmentClasses[align]}>
      <Image src={src} alt={alt} className={className} {...props} />
    </div>
  )
}