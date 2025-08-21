function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

const y = getCurrentYear();

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${y}`] = income;
  budget[`gdp-${y}`] = gdp;
  budget[`capita-${y}`] = capita;

  return budget;
}
