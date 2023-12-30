export const ContainClassName = (className: string[]) => {
  return className.join(' ');
};

export const MoneyComma = (data: number) => {
  let x = String(data);
  x = x.replace(/[^0-9]/g, '');
  x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return x;
};
