 "use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { formSchema, resolveTheme } from '@/utils/functions'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { UploadDropzone } from '@/utils/uploadthing'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'


export type FormFieldName =  "name" | "cv" | "transmission" | "people" | "photo" | "engine" | "type" | "priceDay" | "isPublish"


export const FormAddCard = () => {
  const [photoUpload, setPhotoUpload] = useState<boolean>(false);
  const { theme, systemTheme } = useTheme();
  const effectiveTheme = resolveTheme(theme!, systemTheme!);
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

  const uploadConfig = {
    endpoint: "photo" as const,
     
    onClientUploadComplete: (res: any) => {
      form.setValue("photo", res[0].url); 
      setPhotoUpload(true);
    },
    onUploadError: (error: Error) => {
      console.log(`ERROR! ${error.message}`);
      setPhotoUpload(false);
    },
  };
  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="p-2">
        <div className='grid grid-cols-2 gap-4 my-2'> 
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
        <div className='w-full my-2'>
          <FormField
            control={form.control}
            name="photo"
            render={() => (
              <FormItem>
                <FormLabel>Car Image</FormLabel>
                <FormControl>
                  {photoUpload
                    ? (<p className='text-0'>Image Uploaded!</p>)
                    : (
                    <UploadDropzone
                      className="w-full border-3 border-dotted rounded-lg p-2 transition-colors"
                      appearance={{
                        button({ ready, isUploading }) {
                          return {
                            backgroundColor: cn(effectiveTheme === "dark" ? "#efefef":"#202020"),
                            fontSize: "1rem",
                            ...(ready && { color: cn(effectiveTheme === "dark" ? "#202020":"#efefef") }),
                            ...(isUploading && { color: cn(effectiveTheme === "dark" ? "#efefef":"#202020") }),
                          };
                        },
                        container: {
                          marginTop: "1rem",
                        },
                        allowedContent: {
                          color: "#a1a1aa",
                        },
                      }}
                        {...uploadConfig}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className='w-full mt2' type="submit">Create Car</Button>
      </form>
    </Form>
  )
}
