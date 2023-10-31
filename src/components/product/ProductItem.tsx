import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../productPage/types/Product";
//import cn from 'classnames'
import styles from "./ProductItem.module.css";

const ProductItem: FC = () => {
  const { id } = useParams();

  const initialValue: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };
  const [product, setProduct] = useState<Product>(initialValue);

  async function loadProduct(): Promise<void> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <span className={styles.container}>{product.description}</span>
      <img className={styles.img} src={product.image} alt="" />
      <h2>{id}</h2>
    </div>
  );
};

export default ProductItem;
