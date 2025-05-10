import axios from "axios";
import { MethodType, OrderBy, Values } from "@/interfaces";

export const findOneDatabase = async (method: MethodType, id: string) => {
  try {
    const url = `/api/cars?method=${method}&id=${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error fetching cars');
  };
};

export const findManyDatabase = async (method: MethodType, orderBy: OrderBy) => {
  try {
    const url = `/api/cars?method=${method}&orderBy=${orderBy}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error fetching cars');
  };
}


export const createDataBaseServices = async (values: Values) => {
  try {
    const url = `/api/cars`;
    await axios.post(url, values);
  } catch (error) {
    console.error("[CARS]", error);
    throw new Error('Error creating car');
  };
}
