function formatProductItem(productCount: number, value: string): string {
    if (productCount == 1) {
        return value;
    } else if (productCount > 1 && productCount <= 4) {
        return value + "а";
    } else {
        return value + "ов";
    }
}
export default formatProductItem;
