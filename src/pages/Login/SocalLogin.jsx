import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocalLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from,{replace: true});
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-outline bg-cyan-700">Google</button>
        </div>
    );
};

export default SocalLogin;