import { DetailedHTMLProps, InputHTMLAttributes, memo, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

export type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string
}

export const Input = memo(({ name, ...props }: Props) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const errorMessage = useMemo(
    () => (errors[name]?.message as string) ?? 'Erro',
    [errors[name]]
  )

  return (
    <div className={`relative ${errors[name] ? 'pb-10' : ''}`}>
      <label htmlFor={name} className='sr-only'>
        {name}
      </label>
      <input id={name} {...props} {...register(name)} />
      {errors[name] && (
        <span className='text-black italic absolute bottom-1'>
          {errorMessage}
        </span>
      )}
    </div>
  )
})

Input.displayName = 'Input'
