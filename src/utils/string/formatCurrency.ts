export function formatCurrency(amount: number): string {
    return `${amount?.toLocaleString("ru-RU")} ₽`;
}
