interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function FormInput({
  label,
  error,
  hint,
  id,
  className = '',
  ...props
}: FormInputProps) {
  const inputId = id || `input-${Math.random()}`

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="block text-sm font-medium mb-2 text-text-secondary">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full px-4 py-3 bg-primary border border-dark-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition ${
          error ? 'border-red-500' : ''
        } ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...props}
      />
      {hint && (
        <p id={`${inputId}-hint`} className="mt-1 text-xs text-text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
