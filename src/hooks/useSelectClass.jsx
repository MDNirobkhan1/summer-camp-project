import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useClass = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token')
    const [axiosSecure]=useAxiosSecure()

    const { refetch, data: cart= [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },
    })
    return [cart,refetch]
    
}
export default useClass;