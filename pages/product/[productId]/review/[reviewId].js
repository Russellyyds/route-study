import {useRouter} from 'next/router';
export default function reviewDetials(){
    const router=useRouter();
    const {reviewId,productId}=router.query
    return <>
        <h2>productId:{productId}</h2>
        <h2>reviewId:{reviewId}</h2>

    </>
}