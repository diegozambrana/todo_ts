import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom"
import { setActiveUser } from "../../redux/auth";

import { RootState } from "../../redux/configureStore";
import { getToken } from "../../utils/auth";

export const RedirectRoute = ({children ,privatePath}: {children: any, privatePath?: boolean}) => {
    const [loading, setLoading] = useState(true);
    console.log(`----Redirect`)

    const dispatch = useDispatch();
    const {activeUser} = useSelector((s: RootState) => s.auth)
    const shouldShow = useMemo(() => {
        if(privatePath) return activeUser;
        return !activeUser
    }, [activeUser, privatePath]);
    const redirectPath = privatePath ? '/login' : '/todo'
    
    useEffect(() => {
        const token = getToken();
        dispatch(setActiveUser(!!token))
        if(token){
            setActiveUser(true)
        }
        setLoading(false);
    }, [])

    if(loading) return <div>loading...</div>
    console.log(`--- here`)

    if(shouldShow) return children;
    console.log(`--- here2`)

    return (
        <Navigate to={redirectPath} />
    )
}