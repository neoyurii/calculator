export interface ResultRequest {
    initial: string,
    monthly: string,
    tax: string,
    time: string
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