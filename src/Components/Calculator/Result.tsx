import { useCalculate } from "../../Context/CalculateContext"
import Spinner from "../Loading/Spinner"

export default function Result() {
    const { response, loading } = useCalculate()

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            {!response ? <></> :
                <div className="w-100 h-auto bg-info rounded-3 overflow-auto" style={{ height: "40rem", padding: "1.5rem" }}>
                    {response?.summary && <div className="w-100 d-flex flex-wrap justify-content-around align-items-center" style={{height: "16rem"}}>

                        <div className="d-flex flex-column align-items-center bg-info-subtle rounded-3" style={{ width: "20rem", height: "5rem" }}>
                            <span className="fs-5 fw-semibold ">Ganho Total</span>
                            <span className="fs-4 fw-semibold ">R$: {response.summary.finalBalance.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</span>
                        </div>
                        <div className="d-flex flex-column align-items-center bg-info-subtle rounded-3" style={{ width: "20rem", height: "5rem" }}>
                            <span className="fs-5 fw-semibold ">Juros</span>
                            <span className="fs-4 fw-semibold ">R$: {response.summary.totalGains.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</span>
                        </div>
                        <div className="d-flex flex-column align-items-center bg-info-subtle rounded-3" style={{ width: "20rem", height: "5rem" }}>
                            <span className="fs-5 fw-semibold ">Aportes</span>
                            <span className="fs-4 fw-semibold ">R$: {response.summary.totalInvested.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</span>
                        </div>
                    </div>
                    }


                    <table className="table w-100 my-4 bg-info-subtle" style={{ fontSize: "0.8rem" }}>
                        <thead>
                            <tr>
                                <th scope="col">Mês</th>
                                <th scope="col">Aportes Mensais</th>
                                <th scope="col">Saldo Inicial</th>
                                <th scope="col">Rendimento</th>
                                <th scope="col">Saldo Final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {response && response.report.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{item.month}</th>
                                        <td>R$: {item.monthly.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</td>
                                        <td>R$: {item.balance.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</td>
                                        <td>R$: {item.gains.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</td>
                                        <td>R$: {item.total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </>

    )
}