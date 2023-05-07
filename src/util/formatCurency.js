export const formatCurrency = (num) => {
  if (!num) return 0;
  return num
    .toLocaleString("it-IT", {style: "currency", currency: "VND"})
    .replace("VND", "₫");
};
