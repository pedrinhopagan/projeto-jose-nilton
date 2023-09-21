import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'input-shadow ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-md  bg-[#ddd] px-3 py-2 text-sm text-mainPalette-text file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none  focus-visible:ring-opacity-0 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
