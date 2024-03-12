import { useDispatch, useSelector } from "react-redux";
import { ProductCard, ProductCard2 } from "../../router";
import { useEffect } from "react";
import productSlice, { fetchProducts } from "../../redux/slice/productSlice";
import { Title } from "../../components/common/CustomComponents";

export const Shop = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(
      "state - ",
      state.products.data.map((product) => product.title)
    );
    if (state.isLoading) {
      return <h1>Loading...</h1>;
    }
  }, []);

  const mensSection = state.products.data.filter(
    (product) => product.category == "men's clothing"
  );
  const womensSection = state.products.data.filter(
    (product) => product.category == "women's clothing"
  );
  const Electronics = state.products.data.filter(
    (product) => product.category == "electronics"
  );
  const Jewelery = state.products.data.filter(
    (product) => product.category == "jewelery"
  );

  return (
    <>
      <div className="mt-36">
        <div className="w-full flex justify-start mb-20 px-36">
          <Title level={4}>Men's Clothing</Title>
        </div>

        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {mensSection.map((productx) => (
            <ProductCard2
              id={productx.id}
              key={productx.id}
              title={productx.title}
              description={productx.description}
              images={productx.image}
              price={productx.price}
            />
          ))}
        </section>
      </div>
      <div className="mt-10">
        <div className="w-full flex justify-start mb-20 px-36">
          <Title level={4}>Women's Clothing</Title>
        </div>

        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {womensSection.map((productx) => (
            <ProductCard2
              id={productx.id}
              key={productx.id}
              title={productx.title}
              description={productx.description}
              images={productx.image}
              price={productx.price}
            />
          ))}
        </section>
      </div>
      <div className="mt-10">
        <div className="w-full flex justify-start mb-20 px-36">
          <Title level={4}>Electronics</Title>
        </div>

        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {Electronics.map((productx) => (
            <ProductCard2
              id={productx.id}
              key={productx.id}
              title={productx.title}
              description={productx.description}
              images={productx.image}
              price={productx.price}
            />
          ))}
        </section>
      </div>
      <div className="mt-10">
        <div className="w-full flex justify-start mb-20 px-36">
          <Title level={4}>Jewelery</Title>
        </div>

        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {Jewelery.map((productx) => (
            <ProductCard2
              id={productx.id}
              key={productx.id}
              title={productx.title}
              description={productx.description}
              images={productx.image}
              price={productx.price}
            />
          ))}
        </section>
      </div>
    </>
  );
};
