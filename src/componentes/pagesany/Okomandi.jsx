import rasimm1 from "../img/images.png"
import rasimm2 from "../img/brand_unit.png"
import rasimm3 from "../img/brand_unit (1).png"
import rasimm4 from "../img/brand_unit (2).png"
import rasimm5 from "../img/brand_unit (3).png"
import Ishlabchiqarish from "./Ishlabchiqarish"
import Ish from "./Ish"
import Bosibotganyillar from "./Bosibotganyillar"
import Tezhavola from "./Tezhavola"

function Okomandi() {
    return (
        <div className="Okomandicontainer">
            <div className="Okomandicontainer1">
                <div className="Okomandicontainer1_box1">
                    <h1><span>О компании</span></h1><br />
                    <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта.</p><br />
                    <p>В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта опыт мы упускаем, что ключевые особенности структуры проекта.</p><br />
                    <p>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для системы массового участия. Учитывая ключевые сценарии поведения, выбранный нами инновационный путь способствует повышению качества первоочередных требований. Имеется спорная точка зрения, гласящая примерно следующее.</p>
                </div>
                <div className="Okomandicontainer1_box2">
                    <img src={rasimm1} alt="rasimm1" />
                </div>
            </div>
            <div className="Okomandicontainer2">
                <img src={rasimm2} alt="rasimm2" />
                <img src={rasimm3} alt="rasimm2" />
                <img src={rasimm4} alt="rasimm2" />
                <img src={rasimm5} alt="rasimm2" />
            </div>
            <Ishlabchiqarish />
            <Ish />
            <Bosibotganyillar />
            <Tezhavola />
        </div>
    )
}

export default Okomandi