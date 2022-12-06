import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data?.isAdmin);
                    setIsAdminLoading(false);
                })
                console.log(isAdmin,"is it admin");
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;