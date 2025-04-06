import { Input } from '@/components/ui/input';
import React from 'react'
import { ControllerRenderProps } from 'react-hook-form';
import { FormFieldName } from './form-add-cars';

export interface CarFormValues {
    name: string;
    cv: string;
    transmission: string;
    people: string;
    photo: string;
    engine: string;
    type: string;
    priceDay: string;
    isPublish: boolean;
}

export interface FieldProps {
  field: ControllerRenderProps<CarFormValues, FormFieldName>
}

export const CheckboxAddCars = ({field}: FieldProps) => {
  const { value, ...rest } = field;
  return <Input type="checkbox" checked={value as boolean} {...rest} />
}
