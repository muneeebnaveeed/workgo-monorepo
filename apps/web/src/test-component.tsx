import { FC } from "react";
import { trpc } from "./lib/trpc";

export const TestComponent: FC = () => {
  const products = trpc.getProducts.useQuery();
  return <>My string is {products.data}</>;
};
