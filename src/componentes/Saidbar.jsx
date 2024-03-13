import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { ContextData } from '../componentes/context/Context';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

function AllCollapseExample() {
    const {
        setCustomFilter,
        value,
        setValue
    } = useContext(ContextData);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Form>
            <h1>Фильтр</h1>
            <div style={{ border: "1px solid #F2F2F2", background: "#FAFAFA", display: "flex", flexDirection: "column", gap: "10px", width: "250px", margin: "0 auto", padding: "20px 0 20px 40px", borderRadius: "10px" }}>
                <h5 style={{ color: "#D9D9D9" }}>Цена</h5>
                <div style={{ width: "200px" }}>
                    <div style={{ width: "200px" }}>
                        <Slider
                            style={{ color: "#487B6C" }}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            max={200}
                            min={0}
                        />
                    </div>
                </div>
                <div style={{ width: "200px", display: "flex", justifyContent: "space-between" }}>
                    <h5>От</h5>
                    <h5>До</h5>
                </div>
                <div style={{ width: "200px", display: "flex", justifyContent: "space-between" }}>
                    <h3 style={{ color: "#D9D9D9", fontSize: "15px", border: "1px solid #F2F2F2", width: "85px", padding: "5px 3px", background: "white", boxShadow: "0px 4px 7px 0px #00000026", borderRadius: "10px" }}>{value[0] + "₽"}</h3>
                    <h3 style={{ color: "#D9D9D9", fontSize: "15px", border: "1px solid #F2F2F2", width: "85px", padding: "5px 3px", background: "white", boxShadow: "0px 4px 7px 0px #00000026", borderRadius: "10px" }}>{value[1] + "₽"}</h3>
                </div>
            </div>

            <Accordion className='pt-3' style={{ width: "350px" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Body>
                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input defaultChecked value={""} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="all" />
                            <label htmlFor="all">Все</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Body>
                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"kurushka"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="kurushka" />
                            <label htmlFor="kurushka">Курушка</label> <br />
                        </div>

                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"maket"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="maket" />
                            <label htmlFor="maket">Сумка</label>
                        </div>

                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"andarazvi"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="andarazvi" />
                            <label htmlFor="andarazvi">Андаразви Курушка</label>
                        </div>
                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"atirbutulka"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="atirbutulka" />
                            <label htmlFor="atirbutulka">Флакон духов</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Form >
    );
}

export default AllCollapseExample;