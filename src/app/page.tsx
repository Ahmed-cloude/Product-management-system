import Form from './form/page'
import ProductList from './productList/page';
import SideBar from '../app/sideBar/page'


export default function Home() {
  return (
    
      <div className='flex min-h-screen bg-slate-800 text-white font-mono '>
        <SideBar />
       
        <div className=' w-[100%]'>
          <h1 className='w-fit m-auto py-4'>PRODUCT MANAGEMENT STSTEM</h1>
          <Form />
          <ProductList />
        </div>
      </div>

  );
}
