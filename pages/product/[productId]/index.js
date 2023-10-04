import {useRouter} from 'next/router';
export default function ProductDetials(){
    const router=useRouter();
    const productId=router.query.productId
    return <>
        <h2>Detial for product {productId}</h2>

    </>
}