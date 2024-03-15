import { useContext } from "react";
import { ContextData } from "../componentes/context/Context";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function ProfileSidebar() {
    const {
        navigate,
        getCurrentUser,
        Toast,
    } = useContext(ContextData);

    // logout funksiyasi
    function logout() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("currentUser");
                getCurrentUser();
                navigate("/");
                Toast.fire({
                    icon: "success",
                    title: "Loged out successfully"
                });
            }
        });
    };


    const styles = {
        listStyle: "none",
        padding: 0,
    };

    return (
        <ul className="profilsaidbar" style={styles}>
            <div className="profilsaidbarflex">
                <li>
                    <Link to={"profilall"}>Профиль</Link>
                </li>
                <li>
                    <Link to={"ish"}>Вакансии</Link>
                </li>
                <li>
                    <Link to={"addpruduct"}>Добавить продукт</Link>
                </li>
                <li>
                    <Link to={"log"}>Выгрузка</Link>
                </li>
                <li>
                    <div style={{ color: "red" }} onClick={logout} className="">Выход</div>
                </li>
            </div>
        </ul>
    )
}

export default ProfileSidebar