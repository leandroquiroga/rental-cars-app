import React from 'react';
import { LoaderCircle } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from "@/components/ui/input"

import { UploadDropZone } from '@/components/app';
import { useFormSubmitting } from '@/hooks/useFormSubmitting';
import { PropsForm } from '@/interfaces';

   
export const CustomForm = ({ editingCar, effectiveTheme }: PropsForm) => {
  const { form, handleOnSubmit, isPending, isValid, toogleModal, isSubmitSuccessful } = useFormSubmitting({ editingCar });

  return (
    <Form {...form}>
      <form onSubmit={handleOnSubmit} onClick={toogleModal} className="p-2">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-2'> 
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cars</FormLabel>
                <FormControl>
                  <Input placeholder="Tesla Model 5 Plaid" {...field} />
                </FormControl>
                <FormMessage className='text-sm' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Power</FormLabel>
                <FormControl>
                  <Input placeholder="150 CV" type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="transmission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trassmission</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className='w-full'>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the transmission" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Manual">Manual</SelectItem>
                  <SelectItem value="Automatico">Automatico</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
          />
          <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
              <FormItem>
                <FormLabel>People</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className='w-full'>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the quantity" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="engine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Engine</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className='w-full'>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the engine" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gasoil">Gasoil</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="electic">Electic</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className='w-full'>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="coupe">Coupe</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="luxe">De Luxe</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="$20000" type='number' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {
          !editingCar && (
            <div className='w-full my-2'>
              <FormField
                control={form.control}
                name="photo"
                render={() => (
                  <FormItem>
                    <FormLabel>Car Image</FormLabel>
                    <FormControl>
                      <UploadDropZone
                        effectiveTheme={effectiveTheme}
                        endpoint={"photo"}
                        onUploadComplete={(url: string) =>
                        {
                          form.setValue("photo", url);
                          form.trigger("photo")
                        }}
                        onUploadError={(error: Error) => { console.log(`ERROR! ${error.message}`) }}
                        buttonText="Upload image"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )
        }
        {
          isPending ? <LoaderCircle className='w-6 h-6 animate-spin' /> :
            <Button
              className='w-full mt-2 cursor-pointer'
              type="submit"
              disabled={!isValid && !isSubmitSuccessful}
            >
              {
                isPending
                  ? <LoaderCircle className='w-6 h-6 animate-spin' />
                  : <span>{editingCar ? 'Edit Car': 'Save Car'}</span>
              }
            
            </Button>
        }
      </form>
    </Form>
  )
}
