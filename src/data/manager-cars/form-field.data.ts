export interface FormFieldData {
  name?: string;
  label?: string;
  placeholder?: string;
  description?: string;
}


export const formFieldData: FormFieldData[] = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'BWM',
    description: 'example',
  },
  {
    name: 'cv',
    label: 'Horsepower',
    placeholder: '750',
    description: 'example',
  },
  {
    name: 'transmission',
    label: 'Transmission',
    placeholder: 'automatic',
    description: 'example',
  },
  {
    name: 'people',
    label: 'People',
    placeholder: '5',
    description: 'example',
  },
  {
    name: 'photo',
    label: 'Photo',
    placeholder: 'example cars',
    description: 'example',
  },
  {
    name: 'engine',
    label: 'Engine',
    placeholder: 'example cars',
    description: 'example',
  },
  {
    name: 'type',
    label: 'Type',
    placeholder: 'example cars',
    description: 'example',
  },
  {
    name: 'price',
    label: 'Price x Day',
    placeholder: '$50',
    description: 'example',
  },
  {
    name: 'isPublish',
    label: 'Is Publish',
    placeholder: 'false',
    description: '',
  },

]