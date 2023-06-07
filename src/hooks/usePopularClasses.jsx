import { useEffect, useState } from "react";


const usePopularClasses = () => {
    const [classItem, setClassItem] = useState([]);
    const [loading, setLoading] =useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/clesses')
            .then(res => res.json())
            .then(data => { 
                setClassItem(data);
                setLoading(false )
            })
    }, [])
    return [classItem, loading]
};

export default usePopularClasses;