"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { formSchema } from '@/utils/functions'
import { FormFieldData, formFieldData } from '@/data/manager-cars/form-field.data'
import { CheckboxAddCars } from './checkbox-add-cars'


export type FormFieldName =  "name" | "cv" | "transmission" | "people" | "photo" | "engine" | "type" | "priceDay" | "isPublish"


export const FormAddCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
    defaultValues: {
      name: "",
      transmission: "",
      cv: "",
      engine: "",
      people: "",
      isPublish: false,
      photo: "",
      priceDay: "",
      type: "",
    },
  })
  
  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  };

  const renderFieldControl = (fieldData: FormFieldData, field: any) => {
    if (fieldData.name === "isPublish") {
      return <CheckboxAddCars field={field} />;
    }
    if (fieldData.name === "photo") {
      return <Input id="picture" type="file" />
    }
    return (
      <Input
        placeholder={fieldData.placeholder}
      />
    );
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="p-2 ">
        {
          formFieldData.map((fieldData) => (
            <FormField
              key={fieldData.name}
              control={form.control}
              name={fieldData.name as FormFieldName}
              render={({ field }) =>  (
                <FormItem className='my-3'>
                  <FormLabel>{fieldData.label}</FormLabel>
                  <FormControl>{renderFieldControl(fieldData, field)}</FormControl>
                </FormItem>
              )}
            />
          ))  
        }
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
