import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import getUID from "uid-generator-package";

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const [loading, setLoading] = useState(true);

    // Dasturdagi foydalanuvchilar ro'yxati
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || []);

    console.log(user);

    // Ro'yxatdan o'tgan foydalanuvchi ma'lumoti
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || {});

    // Yangi foydalanuvchi
    const [newUser, setNewUser] = useState({
        id: "",
        username: "",
        password: "",
        telefon: "",
    });

    // Dasturdagi foydalanuvchilar ro'yxatini qayta olish funksiyasi
    function getUser() {
        setUser(JSON.parse(localStorage.getItem("user")) || []);
    };

    // Ro'yxatdan o'tgan foydalanuvchi ma'lumotini qayta olish funksiyasi
    function getCurrentUser() {
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")) || {});
    };

    // login oynasini boshqaruchi state
    const [loginModal, setLoginModal] = useState(false);

    // login oynasini ochuvchi/yopuvchi funksiya
    function handleLoginModal() {
        setLoginModal(!loginModal);
    };

    // Barcha mahsulotlar ro'yxati
    const [data, setdata] = useState([]);

    // Hozirgi page raqami
    const [currentPage, setCurrentPage] = useState(1);

    // Har bir page-da nechtadan mahsulot bo'lishi
    const [perPage, setPerPage] = useState(8);

    // Hozirgi mahsulotlarni ko'rsatish
    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    const pageProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

    // Korzinkadagi barcha mahsulotlar ro'yxati
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);

    // Korzinkadagi barcha mahsulotlarni qayta olish funksiyasi
    function getBasketProducts() {
        setBasket(JSON.parse(localStorage.getItem("basket")) || []);
    };

    // Like-dagi barcha mahsulotlar
    const [like, setLike] = useState(JSON.parse(localStorage.getItem("likes")) || []);

    // Like-dagi barcha mahsulotlarni qayta olish funksiyasi
    function getLikeProducts() {
        setLike(JSON.parse(localStorage.getItem("likes")) || [])
    };

    // Search state
    const [search, setSearch] = useState("");

    // Custom filter state
    const [customFilter, setCustomFilter] = useState("");

    // Slider state
    const [value, setValue] = useState([0, 200]);


    // Input-lardan olingan barcha ma'lumotlar
    const [newProduct, setNewProduct] = useState({
        id: "",
        name: "",
        img: "",
        description: "",
        price: "",
        discount: "",
        shutik:"",
        status: true,
        count: 1,
        category: "",
        createdAt: "",
    });

    // Navigation hook
    const navigate = useNavigate();

    function handleClear() {
        setNewProduct({
            id: "",
            name: "",
            img: "",
            description: "",
            price: "",
            diskaunt: "",
            shutik:"",
            status: true,
            count: 1,
            category: "",
            createdAt: "",
        });
    };

    // API-dan ma'lumot olish funksiyasi
    function getData() {
        axios.get("http://localhost:8000/users")
            .then(res => {
                setdata(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err.response.data))
    }

    console.log(loading);

    useEffect(() => {
        getData();
    }, []);



    // Korzinkaga mahsulot qo'shish
    function addToCart(mahsulot) {
        if (mahsulot.status) {
            if (basket.filter(element => element.id === mahsulot.id).length === 0) {
                if (localStorage.getItem("basket")) {
                    // Agar localstorage-da mahsulot bo'lsa...
                    localStorage.setItem("basket", JSON.stringify([...basket, mahsulot]));
                }

                else {
                    // Agar localstorage-da mahsulot bo'lmasa...
                    localStorage.setItem("basket", JSON.stringify([mahsulot]));
                }
                getBasketProducts();
                Toast.fire({
                    icon: "success",
                    title: "Successfully added to the cart"
                });
            }
            else {
                Swal.fire({
                    title: "Ogohlantirish!",
                    text: "Ushbu mahsulot allaqchon mavjud!",
                    icon: "warning"
                });
            }
        }
        else {
            Swal.fire({
                title: "Ogohlantirish!",
                text: "Afsuski ushbu mahsulot omborda mavjud emas!",
                icon: "warning"
            });
        }
    };

    // Korzinkadan mahsulot o'chirish
    function deleteProductFromCart(id) {
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
                localStorage.setItem("basket", JSON.stringify(basket.filter(item => item.id !== id)));
                getBasketProducts();
                Toast.fire({
                    icon: "success",
                    title: "Successfully deleted from cart"
                });
            }
        });
    };

    function increment(mahsulot) {
        setBasket(basket.map(item => item.id === mahsulot.id ? { ...item, count: item.count + 1 } : item));
    };

    function decrement(mahsulot) {
        if (mahsulot.count !== 1) {
            setBasket(basket.map(item => item.id === mahsulot.id ? { ...item, count: item.count - 1 } : item));
        }
        else {
            deleteProductFromCart(mahsulot.id);
        }
    };

    // Like-ga mahsulot qo'shish
    function handleLike(item) {
        if (like.filter(element => element.id === item.id).length === 0) {
            if (localStorage.getItem("likes")) {
                // Agar mahsulot bo'lsa...
                localStorage.setItem("likes", JSON.stringify([...like, item]));
            } else {
                // Agar mahsulot bo'lmasa...
                localStorage.setItem("likes", JSON.stringify([item]));
            }
            Toast.fire({
                icon: "success",
                title: "Added successfully"
            });
        }
        else {
            localStorage.setItem("likes", JSON.stringify(like.filter(i => i.id !== item.id)));
            Toast.fire({
                icon: "success",
                title: "Deleted successfully"
            });
        };
        getLikeProducts();
    };

    // Input-lardan ma'lumot olish
    function getInputValue(e) {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    // Mahsulot qo'shish va tahrirlash funksiyasi
    function addFunction(e) {
        e.preventDefault();
        if (newProduct.id === "") {
            axios.post("http://localhost:8000/users", { ...newProduct, id: getUID(), author: currentUser, createdAt: new Date() })
                .then(() => {
                    getData();
                })
                .catch(error => console.log(error))
        }
        else {
            // Mahsulotni tahrirlash
            axios.put(`http://localhost:8000/users/${newProduct.id}`, { ...newProduct, updatedAt: new Date() })
                .then(() => {
                    getData();
                })
                .catch(error => console.log(error))
        }
        handleClear();
        navigate("katalog");
    };

    // Tahrirlash funksiyasi
    function handleEdit(product) {
        setNewProduct(product);
        navigate("profile/add");
    };

    // Mahsulotni o'chirish funksiyasi
    function handleDelete(id) {
        axios.delete(`http://localhost:8000/users/${id}`)
            .then(() => {
                getData();
                navigate("product");
            })
    };

    // Validate funksiyasi
    function validate(element) {
        let error = {};
        if (!element.username) {
            error = { ...error, username: "Username is required!" };
        }
        else if (element.username.length < 3) {
            error = { ...error, username: "Username must not be less then 3 characters!" };
        }

        if (!element.password) {
            error = { ...error, password: "Password is required!" };
        }
        else if (element.password.length < 8) {
            error = { ...error, password: "Password must not be less then 8 characters!" };
        }

        if (!element.telefon) {
            error = { ...error, telefon: "Телефон не найден" };
        }
        else if (element.telefon.length < 9) {
            error = { ...error, telefon: "Число не должно быть меньше 9." };
        }
        return error
    };


    // Xatoliklarni ko'rsatuvchi state
    const [errorState, setErrorState] = useState({});

    // Input-dan olingan foydalanuvchi ma'lumotlari
    function getUserValue(e) {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };


    // Clear funksiyasi
    function clear() {
        setNewUser({
            id: "",
            username: "",
            password: ""
        });
        // Xatoliklarni ko'rsatuvchi state-ni tozalash kerakmi?
        setErrorState({});
    };

    // Login funksiyasi
    function handleLogin() {
        const errorMessage = validate(newUser);
        setErrorState(errorMessage);
        if (Object.keys(errorMessage).length === 0) {
            const foundUser = user.find(element => element.username === newUser.username && element.password === newUser.password);
            if (foundUser) {
                localStorage.setItem("currentUser", JSON.stringify(foundUser));
                getCurrentUser();
                handleLoginModal();
                Toast.fire({
                    icon: "success",
                    title: "Logged in successfully"
                });
                navigate("/");
            } else {
                Toast.fire({
                    icon: "warning",
                    title: "Username or Password incorrect"
                });
            }
        }
    };

    // Register funksiyasi
    function handleRegister() {
        const errorMessage = validate(newUser);
        setErrorState(errorMessage);
        if (Object.keys(errorMessage).length === 0) {
            const foundUser = user.find(element => element.username === newUser.username);
            if (!foundUser) {
                const generalUser = { ...newUser, id: getUID() };
                localStorage.setItem("currentUser", JSON.stringify(generalUser));
                localStorage.setItem("user", JSON.stringify([...user, generalUser]));
                getCurrentUser();
                getUser();
                clear();
                handleLoginModal();
                Toast.fire({
                    icon: "success",
                    title: "Регистрация прошла успешно"
                });
                navigate("/");
            } else {
                Toast.fire({
                    icon: "warning",
                    title: "Пользователь уже зарегистрирован"
                });
            }
        };
    };
    // Har bir mahsulot uchun countni saqlash uchun state
    const [countPerProduct, setCountPerProduct] = useState({});

    function increment(productId) {
        setCountPerProduct(prevCounts => ({
            ...prevCounts,
            [productId]: (prevCounts[productId] || 0) + 1,
        }));
    };

    function decrement(productId) {
        if (countPerProduct[productId] > 1) {
            setCountPerProduct(prevCounts => ({
                ...prevCounts,
                [productId]: prevCounts[productId] - 1,
            }));
        }
    };

    let totalPrice = 0;
    basket.forEach(item => {
        const itemTotalPrice = item.price * (countPerProduct[item.id] || 1);
        totalPrice += itemTotalPrice;
    });

    return (
        <ContextData.Provider value={{
            data,
            addToCart,
            basket,
            deleteProductFromCart,
            increment,
            decrement,
            like,
            handleLike,
            search,
            setSearch,
            newProduct,
            getInputValue,
            addFunction,
            handleEdit,
            handleDelete,
            customFilter,
            setCustomFilter,
            value,
            setValue,
            currentPage,
            setCurrentPage,
            perPage,
            setPerPage,
            pageProducts,
            user,
            loginModal,
            handleLoginModal,
            getUser,
            navigate,
            errorState,
            getUserValue,
            handleLogin,
            handleRegister,
            currentUser,
            getCurrentUser,
            Toast,
            setdata,
            loading,
            increment,
            decrement,
            countPerProduct,
            totalPrice
        }}>
            {children}
        </ContextData.Provider>
    )
};
export default ContextFunction 