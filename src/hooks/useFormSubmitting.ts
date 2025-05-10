"use client"
import { useContext } from "react";
import { DesignContext } from "@/context/UseDesingProvider";
import { useRouter } from "next/navigation";
import { useCreateData } from "./useCreateData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/utils/functions";
import { toast } from "sonner";
import { DesingContextType, useFormSubmittingProps, Values } from "@/interfaces";


export const useFormSubmitting = ({ editingCar }: useFormSubmittingProps) => {
  const { toogleModal } = useContext(DesignContext) as DesingContextType;
  const router = useRouter();
  const { mutate: handleCreate, isPending } = useCreateData();

  const form = useForm<Values>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: editingCar?.name || "",
      transmission: editingCar?.transmission || "",
      cv: editingCar?.cv || "",
      engine: editingCar?.engine || "",
      people: editingCar?.people || "",
      isPublished: false,
      photo: editingCar?.photo || "",
      priceDay: editingCar?.priceDay || "",
      type: editingCar?.type || "",
    },
    mode: "onChange"
  });


  const handleOnSubmit = form.handleSubmit(async (values) => {
    try {
      toogleModal();
      handleCreate(values, {
        onSuccess: () => {
          toast.success("Car created successfully", {
            description: "The car has been created successfully",
            duration: 5000,
            position: "bottom-right"
          });
          router.refresh();
        },
        onError: () => {
          toast.error("Error creating car", {
            description: "There was an error creating the car",
            duration: 5000,
            position: "bottom-right"
          });
        }
      });
    } catch (error) {
      console.log('[ERROR - CREATE CAR]', error);
      toast.error("Something went wrong", {
        description: "Please try again",
        duration: 5000,
        position: "bottom-right"
      })
    };

  })
  return {
    form,
    handleOnSubmit,
    isPending,
    toogleModal,
    isValid: form.formState.isValid,
    isSubmitSuccessful: form.formState.isSubmitSuccessful
  };
}