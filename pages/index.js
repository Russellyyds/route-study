import Link from 'next/link'
import { useRouter } from 'next/router';
function Home(){
  const router=useRouter()
  const handleClick=()=>{
    console.log('placing your order');
    router.replace("/product")
    // router.push("/product")

  }
  return <div>
    <h1>Home</h1>
    <Link href="/blog">Blog</Link>
    <br></br>
    <Link href={"/product"}>Product</Link>
    <br></br>

    <button onClick={handleClick}>
      Place Order
    </button>
  </div> 
}

export default Home;