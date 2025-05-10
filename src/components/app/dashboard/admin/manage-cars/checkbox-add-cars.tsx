import React from 'react'
import { Input } from '@/components/ui/input';
import { FieldProps } from '@/interfaces';

export const CheckboxAddCars = ({field}: FieldProps) => {
  const { value, ...rest } = field;
  return <Input type="checkbox" checked={value as boolean} {...rest} />
}
