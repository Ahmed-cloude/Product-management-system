import Form from './form/page'
import ProductList from './productList/page';



export default function Home() {
  return (
    
      <div className='min-h-screen bg-slate-800 text-white font-mono '>
        <h1 className='w-fit m-auto py-4'>PRODUCT MANAGEMENT STSTEM</h1>
        <Form />
        <ProductList />
      </div>

  );
}
