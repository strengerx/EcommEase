export default function sortProducts(data, sortType) {
    if (!data) return [];
    const sorted = [...data];
    if (sortType === "toHigh") return sorted.sort((a, b) => a.price - b.price);
    if (sortType === "toLow") return sorted.sort((a, b) => b.price - a.price);
    return sorted;
}
