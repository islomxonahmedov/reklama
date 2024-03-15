import { useContext } from "react"
import { ContextData } from "./context/Context"
import logo from "./img/logotype.png"

function Add() {
    const {
        newProduct,
        getInputValue,
        addFunction,
    } = useContext(ContextData);

    return (
        <main className="mqcontainer">
            <h1><span>Добавить новый продукт</span></h1>
            <form onSubmit={(e) => addFunction(e)} className="mqcenter">
                <img style={{ width: "150px", margin: "0 0 30px 100px" }} src={logo} alt="logo" />
                <div className="form-floating">
                    <input value={newProduct.name} onChange={(e) => getInputValue(e)} type="text" name="name" className="form-control" id="floatingInput" required />
                    <label htmlFor="floatingInput">Наименование товара</label>
                </div>
                <div className="form-floating">
                    <input value={newProduct.description} onChange={(e) => getInputValue(e)} type="text" name="description" className="form-control" id="floatingInput" required />
                    <label htmlFor="floatingInput">О продукте</label>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="form-floating">
                        <input style={{ width: "120px" }} value={newProduct.price} onChange={(e) => getInputValue(e)} type="number" name="price" className="form-control" id="floatingPassword" required />
                        <label htmlFor="floatingPassword">Цена</label>
                    </div>
                    <div className="form-floating">
                        <input style={{ width: "120px" }} value={newProduct.diskaunt} onChange={(e) => getInputValue(e)} type="number" name="discount" className="form-control" id="floatingPassword" required />
                        <label htmlFor="floatingPassword">Скидка</label>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="form-floating">
                        <select className="form-select" onChange={(e) => getInputValue(e)} name="category" required>
                            <option value="">Категория</option>
                            <option value="iphone">Курушка</option>
                        </select>
                        <label htmlFor="floatingPassword">Выберите категорию</label>
                    </div>
                    <div className="form-floating">
                        <input style={{ width: "120px" }} value={newProduct.shutik} onChange={(e) => getInputValue(e)} type="text" name="discount" className="form-control" id="floatingPassword" />
                        <label htmlFor="floatingPassword">Количество</label>
                    </div>
                </div>
                <div className="form-floating">
                    <input value={newProduct.img} onChange={(e) => getInputValue(e)} type="text" name="img" className="form-control" id="floatingPassword" required />
                    <label htmlFor="floatingPassword">Изображение продукта</label>
                </div>
                <button style={{background:"#D87B00",border:"none",color:"white",padding:"10px",borderRadius:"10px",marginTop:"50px"}} type="submit">Добавлять</button>
            </form>
        </main>
    )
}

export default Add