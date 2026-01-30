import React, { useState, forwardRef, useId } from 'react';
import { Eye, EyeOff, X, Loader2, AlertCircle } from 'lucide-react';

// Types
export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';
  showClearButton?: boolean;
  showPasswordToggle?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
  pattern?: string;
  id?: string;
  name?: string;
  'data-testid'?: string;
}

// Theme configuration
const themeConfig = {
  light: {
    container: 'text-gray-900',
    label: 'text-gray-700',
    required: 'text-red-500',
    input: 'text-gray-900 placeholder-gray-500',
    helper: 'text-gray-600',
    error: 'text-red-600',
    icon: 'text-gray-400 hover:text-gray-600',
    loading: 'text-blue-500',
  },
  dark: {
    container: 'text-white',
    label: 'text-gray-200',
    required: 'text-red-400',
    input: 'text-white placeholder-gray-400',
    helper: 'text-gray-300',
    error: 'text-red-400',
    icon: 'text-gray-400 hover:text-gray-200',
    loading: 'text-blue-400',
  }
} as const;

// Size configuration
const sizeConfig = {
  sm: {
    input: 'h-8 px-3 text-sm',
    label: 'text-xs font-medium',
    helper: 'text-xs',
    icon: 'w-4 h-4'
  },
  md: {
    input: 'h-10 px-3 text-sm',
    label: 'text-sm font-medium',
    helper: 'text-xs',
    icon: 'w-4 h-4'
  },
  lg: {
    input: 'h-12 px-4 text-base',
    label: 'text-sm font-medium',
    helper: 'text-sm',
    icon: 'w-5 h-5'
  }
} as const;

// Variant styles function
const getVariantStyles = (
  variant: InputFieldProps['variant'] = 'outlined',
  theme: InputFieldProps['theme'] = 'light',
  disabled: boolean = false,
  invalid: boolean = false
): string => {
  const baseStyles = 'w-full rounded-md border transition-all duration-200 focus:outline-none focus:ring-2';
  
  if (disabled) {
    return theme === 'dark' 
      ? `${baseStyles} bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed`
      : `${baseStyles} bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed`;
  }

  const focusRing = invalid 
    ? (theme === 'dark' ? 'focus:ring-red-500/20 focus:border-red-500' : 'focus:ring-red-500/20 focus:border-red-500')
    : (theme === 'dark' ? 'focus:ring-blue-500/20 focus:border-blue-500' : 'focus:ring-blue-500/20 focus:border-blue-500');

  const borderColor = invalid
    ? (theme === 'dark' ? 'border-red-500' : 'border-red-500')
    : (theme === 'dark' ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400');

  switch (variant) {
    case 'filled':
      return `${baseStyles} ${focusRing} ${borderColor} ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`;
    
    case 'ghost':
      return `${baseStyles} ${focusRing} border-transparent ${
        invalid ? borderColor : 'hover:border-gray-300'
      } ${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-transparent hover:bg-gray-50'}`;
    
    default: // outlined
      return `${baseStyles} ${focusRing} ${borderColor} ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`;
  }
};

// Main InputField Component
export const Input = forwardRef<HTMLInputElement, InputFieldProps>(({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  showClearButton = false,
  showPasswordToggle = false,
  theme = 'light',
  className = '',
  required = false,
  autoComplete,
  maxLength,
  pattern,
  id: providedId,
  name,
  'data-testid': testId,
  ...props
}, ref) => {
  // Internal state
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');
  
  // Generate unique ID for accessibility
  const generatedId = useId();
  const inputId = providedId || generatedId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;
  
  // Determine current value and input type
  const currentValue = value !== undefined ? value : internalValue;
  const inputType = showPasswordToggle && type === 'password' 
    ? (isPasswordVisible ? 'text' : 'password') 
    : type;

  // Event handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  const handleClear = () => {
    const event = {
      target: { value: '' },
      currentTarget: { value: '' }
    } as React.ChangeEvent<HTMLInputElement>;
    
    if (onChange) {
      onChange(event);
    } else {
      setInternalValue('');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Style calculations
  const themeClasses = themeConfig[theme];
  const sizeClasses = sizeConfig[size];
  const hasRightContent = showClearButton || showPasswordToggle || loading;
  const showError = invalid && errorMessage;
  const showHelper = !showError && helperText;

  return (
    <div className={`${themeClasses.container} ${className}`}>
      {/* Label */}
      {label && (
        <label 
          htmlFor={inputId}
          className={`block ${sizeClasses.label} ${themeClasses.label} mb-1`}
        >
          {label}
          {required && (
            <span className={`ml-1 ${themeClasses.required}`} aria-label="required">
              *
            </span>
          )}
        </label>
      )}
      
      {/* Input Container */}
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          name={name}
          type={inputType}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          maxLength={maxLength}
          pattern={pattern}
          data-testid={testId}
          className={`
            ${getVariantStyles(variant, theme, disabled, invalid)} 
            ${sizeClasses.input} 
            ${themeClasses.input}
            ${hasRightContent ? 'pr-12' : ''}
          `}
          aria-invalid={invalid}
          aria-describedby={showError ? errorId : showHelper ? helperId : undefined}
          {...props}
        />
        
        {/* Right Side Icons */}
        {hasRightContent && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
            {/* Loading Spinner */}
            {loading && (
              <Loader2 
                className={`${sizeClasses.icon} ${themeClasses.loading} animate-spin`}
                aria-label="Loading"
              />
            )}
            
            {/* Clear Button */}
            {showClearButton && currentValue && !loading && (
              <button
                type="button"
                onClick={handleClear}
                disabled={disabled}
                className={`
                  ${themeClasses.icon} 
                  hover:scale-110 
                  transition-transform 
                  ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                `}
                aria-label="Clear input"
                tabIndex={-1}
              >
                <X className={sizeClasses.icon} />
              </button>
            )}
            
            {/* Password Toggle */}
            {showPasswordToggle && type === 'password' && !loading && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                disabled={disabled}
                className={`
                  ${themeClasses.icon} 
                  hover:scale-110 
                  transition-transform 
                  ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                `}
                aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {isPasswordVisible ? (
                  <EyeOff className={sizeClasses.icon} />
                ) : (
                  <Eye className={sizeClasses.icon} />
                )}
              </button>
            )}
          </div>
        )}
      </div>
      
      {/* Helper Text / Error Message */}
      {(showError || showHelper) && (
        <div className={`mt-1 flex items-start space-x-1 ${sizeClasses.helper}`}>
          {showError && (
            <>
              <AlertCircle className={`${sizeClasses.icon} ${themeClasses.error} mt-0.5 flex-shrink-0`} />
              <p id={errorId} className={themeClasses.error} role="alert">
                {errorMessage}
              </p>
            </>
          )}
          
          {showHelper && (
            <p id={helperId} className={themeClasses.helper}>
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
});



export default Input;