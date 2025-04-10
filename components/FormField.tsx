import React from 'react'

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface FormFieldProps<T extends FieldValues> {
  conrtol: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file'

}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => {
  return (
    <Controller name={name} control={control} render={({ field }) => (
      <FormItem>
        <FormLabel className='label'>{label}</FormLabel>
        <FormControl>
          <Input
            type={type}
            placeholder={placeholder}
            className='input'
            {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )} />
  )
}

export default FormField
