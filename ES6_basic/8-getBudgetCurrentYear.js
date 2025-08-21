function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

const y = getCurrentYear();

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
  [`income-${y}`]:income,
  [`gdp-${y}`]: gdp,
  [`capita-${y}`]:capita
  };

  return budget;
}
