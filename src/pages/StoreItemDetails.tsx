import { useParams } from "react-router-dom";

export default function StoreItemDetails() {
  const { productId } = useParams();
  return <h1>{productId}</h1>;
}
