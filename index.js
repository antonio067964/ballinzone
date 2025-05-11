import Head from 'next/head';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 1,
    title: "Kobbe 6",
    size: "41.5",
    condition: "Bon état",
    price: "275€ (négociable)",
    image: "/kobbe6.jpg"
  },
  {
    id: 2,
    title: "Jordan Tatum",
    size: "41",
    condition: "Neuve jamais utilisée",
    price: "80€",
    image: "/tatum.jpg"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>DunkShop</title>
      </Head>
      <Header />
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </main>
    </>
  );
}
