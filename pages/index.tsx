import type { InferGetStaticPropsType } from "next"
import getAllProduct from "@framework/product/get-all-product"
import { getConfig } from "@framework/api/config"

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProduct(config)
  
  return { 
    props: {
      products
    },
    revalidate: 4 * 60 *60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <div>
      {JSON.stringify(products)}
    </div>
  )
}
