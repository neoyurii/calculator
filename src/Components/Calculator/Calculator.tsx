import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ResultRequest } from "./Interfaces";
import { useCalculate } from "../../Context/CalculateContext";

export default function Calculator() {
    const { handleCalculate, loading } = useCalculate()
    const [formData, setFormData] = useState<ResultRequest>({
        initial: "",
        monthly: "",
        tax: "",
        time: ""
    })
    const regex = /^\d*([.,]?\d*)?$/

    const inputs = [
        { label: "Valor Inicial", id: "initial", value: formData.initial },
        { label: "Aportes Mensais", id: "monthly", value: formData.monthly },
        { label: "Juros(%)", id: "tax", value: formData.tax },
        { label: "Tempo", id: "time", value: formData.time },
    ]

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target

        if (regex.test(value)) {
            setFormData((prev) => ({
                ...prev, [name]: value,
            }))
        }
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        handleCalculate(formData);
    }

    function clearForm(e: FormEvent) {
        e.preventDefault()
        setFormData({
            initial: "",
            monthly: "",
            tax: "",
            time: ""
        })
    }

    return (
        <section className="mw-100 p-5 bg-info-subtle rounded" style={{ width: "min(80%, 425px)" }}>
            <form onSubmit={e => handleSubmit(e)} className="d-flex flex-column gap-4">
                {inputs.map((item) => {
                    return (
                        <div key={item.id} className="input-group bg-light rounded overflow-hidden">
                            <label htmlFor={item.id} className="w-100 p-1 bg-info text-white fs-5 fw-medium">{item.label}</label>
                            <input id={item.id}
                                name={item.id}
                                className="w-100 px-2 border-0 fs-5"
                                style={{ outline: "none" }}
                                type="text"
                                onChange={handleChange}
                                value={item.value}
                                disabled={loading}
                            />
                        </div>
                    )
                })}
                <div className="w-100 d-flex justify-content-around align-items-center">
                    <button type="reset" className="w-50 btn btn-light btn-lg text-dark" onClick={e => clearForm(e)} disabled={loading}>Limpar</button>
                    <button type="submit" className="w-50 btn btn-info btn-lg text-dark" disabled={loading}>Calcular</button>
                </div>
            </form>
        </section>
    )
}