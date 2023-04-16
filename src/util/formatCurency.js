export const formatCurrency = (num) => {
  return num
    .toLocaleString("it-IT", {style: "currency", currency: "VND"})
    .replace("VND", "₫");
};
