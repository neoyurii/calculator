export interface ResultRequest {
    initial: string,
    monthly: string,
    tax: string,
    time: string
    type: "year" | "month"
}

export interface ResultResponse {
    month: number
    balance: number
    monthly: number
    gains: number
    total: number
}

export interface ResultSummary {
  totalInvested: number;
  totalGains: number;
  totalDeposits: number;
  finalBalance: number;
}

export interface ResultData {
  report: ResultResponse[];
  summary: ResultSummary;
}