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
      <label htmlFor={inputId} className="block text-sm font-medium mb-2 text-gray-300">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition ${
          error ? 'border-red-500' : ''
        } ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        {...props}
      />
      {hint && (
        <p id={`${inputId}-hint`} className="mt-1 text-xs text-gray-400">
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
