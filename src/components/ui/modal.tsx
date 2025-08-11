import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  closeOnBackdropClick?: boolean
  showCloseButton?: boolean
  className?: string
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({
    isOpen,
    onClose,
    title,
    description,
    children,
    size = "md",
    closeOnBackdropClick = true,
    showCloseButton = true,
    className,
    ...props
  }, ref) => {
    const modalRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle(ref, () => modalRef.current!)

    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "unset"
      }

      return () => {
        document.body.style.overflow = "unset"
      }
    }, [isOpen])

    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
      }
    }, [isOpen, onClose])

    if (!isOpen) return null

    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
      full: "max-w-full mx-4"
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={closeOnBackdropClick ? onClose : undefined}
          aria-hidden="true"
        />
        <div
          ref={modalRef}
          className={cn(
            "relative z-10 w-full transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8",
            sizeClasses[size],
            className
          )}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                {title && (
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="mt-1 text-sm text-gray-500">
                    {description}
                  </p>
                )}
              </div>
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Fechar</span>
                  <X className="h-6 w-6" />
                </button>
              )}
            </div>
          )}
          <div className="px-6 py-4">
            {children}
          </div>
        </div>
      </div>
    )
  }
)

Modal.displayName = "Modal"

interface ModalHeaderProps {
  children: React.ReactNode
  className?: string
}

const ModalHeader = ({ children, className }: ModalHeaderProps) => {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  )
}

ModalHeader.displayName = "ModalHeader"

interface ModalBodyProps {
  children: React.ReactNode
  className?: string
}

const ModalBody = ({ children, className }: ModalBodyProps) => {
  return (
    <div className={cn("mb-6", className)}>
      {children}
    </div>
  )
}

ModalBody.displayName = "ModalBody"

interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}

const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return (
    <div className={cn("flex items-center justify-end space-x-3 border-t border-gray-200 px-6 py-4 bg-gray-50", className)}>
      {children}
    </div>
  )
}

ModalFooter.displayName = "ModalFooter"

export { Modal, ModalHeader, ModalBody, ModalFooter, type ModalProps }