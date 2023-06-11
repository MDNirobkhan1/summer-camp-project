import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useClass = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
        // queryFn: async () => {
        //     const res = await fetch(`https://summer-camp-server-tawny.vercel.app/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },
    })
    return [cart, refetch]

}
export default useClass;