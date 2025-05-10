import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";
import { z } from "zod";
import { formSchema } from "@/utils/functions";
import { ControllerRenderProps } from "react-hook-form";
import { ClientUploadedFileData, EndpointArg, FileRoute } from "uploadthing/types";

export type OrderBy = 'asc' | 'desc';
export type MethodType = 'findMany' | 'findUnique';
export type Values = z.infer<typeof formSchema>
export type TData = Cars[];
export type TError = Error;
export type Icon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
export type FormFieldName = "name" | "cv" | "transmission" | "people" | "photo" | "engine" | "type" | "priceDay" | "isPublish"
export type Endpoint = EndpointArg<{ photo: FileRoute<{ input: undefined; output: { uploadBy: string | null; }; errorShape: JSON; }>; }, "photo">;
export type ResponseUpdropZone = ClientUploadedFileData<{ uploadBy: string | null; }>[] | undefined

export type DesingContextType = {
  toogleModal: () => void;
  isOpenModal?: boolean
  clearEditingCar: () => void;
  editingCar: Cars | null;
  setEditingCar: (car: Cars) => void;
}

export interface PropsListCars {
  userId: string;
}
export type useFormSubmittingProps = {
  editingCar: Cars | null;
};

export interface Cars {
  id: string;
  userid: string;
  name: string;
  cv: string;
  transmission: string;
  people: string;
  photo: string;
  priceDay: string;
  engine: string;
  type: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ResponseUseDataBase {
  response?: Cars[];
  loading: boolean;
  error: Error | null;
}

export interface PropsForm {
  editingCar: Cars | null;
  effectiveTheme: 'dark' | 'light';
}

export interface ListItemProps {
  icon: Icon,
  label: string,
  href: string,
}

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

export interface UploadDropZoneProps {
  endpoint: Endpoint;
  buttonText?: string;
  onUploadComplete: (url: string) => void;
  onUploadError: (error: Error) => void;
  effectiveTheme: "dark" | "light";
}