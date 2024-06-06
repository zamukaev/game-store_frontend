export function pluralize(
    count: number,
    singularForm: string,
    pluralForm: string,
    secondPluralForm: string
): string {
    if (count % 10 === 1 && count % 100 !== 11) {
        return `${count} ${singularForm}`;
    } else if (
        count % 10 >= 2 &&
        count % 10 <= 4 &&
        (count % 100 < 10 || count % 100 >= 20)
    ) {
        return `${count} ${pluralForm}`;
    } else {
        return `${count} ${secondPluralForm}`;
    }
}
