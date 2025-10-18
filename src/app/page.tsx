import Form from './form/page'
import ProductList from './productList/page';
import SideBar from '../app/sideBar/page'


export default function Home() {
  return (
    
      <div className='flex min-h-screen bg-slate-800 text-white font-mono '>
        <SideBar />
        <div className=' w-[100%]'>
          <div className='w-fit m-auto py-5 text-4xl '>PRODUCT MANAGEMENT STSTEM</div>
          <Form />
          <ProductList />
        </div>
      </div>

  );
}
