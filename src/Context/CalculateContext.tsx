import { createContext, useContext, useState, ReactNode } from "react";
import { ResultRequest, ResultResponse, ResultData } from "../Components/Calculator/Interfaces";

interface CalculateContextType {
    response: ResultData | null;
    handleCalculate: (req: ResultRequest) => void;
    loading: boolean
}

const CalculateContext = createContext<CalculateContextType | undefined>(undefined);

export function CalculateProvider({ children }: { children: ReactNode }) {
    const [response, setResponse] = useState<ResultData | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    function round(value: number, decimals: number = 2): number {
        const factor = Math.pow(10, decimals)
        return Math.round(value * factor) / factor
    }

    function parseNumber(value:string):number{
       return parseFloat(value.replace(",", "."))
    }

    function handleCalculate(req: ResultRequest) {
        setLoading(true)
        const report: ResultResponse[] = [];
        const initialValue = parseNumber(req.initial)
        const monthlyValue = parseNumber(req.monthly)
        const taxRate = parseNumber(req.tax) / 100
        const timeValue = parseInt(req.time)

        let balance = initialValue;
        let totalGains = 0
        let totalDeposits = 0

        for (let month = 1; month <= timeValue; month++) {
            const gains = round(balance * taxRate);
            const total = round(balance + gains);
            const actualMonthly = month === 1 ? 0 : monthlyValue;
            const finalBalance = round(total + monthlyValue);

            report.push({
                month,
                balance,
                monthly: actualMonthly,
                gains,
                total,
            });

            
            totalGains += gains;
            totalDeposits += actualMonthly
            balance = finalBalance;
        }

        const finalBalance = balance - monthlyValue
        const totalInvested = initialValue + totalDeposits;
        const summary = {
            totalInvested,
            totalGains,
            totalDeposits,
            finalBalance
        }


        setResponse({ report, summary });
        setLoading(false)
    }

    return (
        <CalculateContext.Provider value={{ response, handleCalculate, loading }}>
            {children}
        </CalculateContext.Provider>
    );
}

export function useCalculate() {
    const context = useContext(CalculateContext);
    if (!context) {
        throw new Error("useCalculate deve ser usado dentro de CalculateProvider");
    }
    return context;
}
