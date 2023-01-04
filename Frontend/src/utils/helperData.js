export const date = (date) => {
    const year = date.substring(0, 4); 
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const formatted = `${day}/${month}/${year}`
  
    return formatted;
  }
  
  export const money = (money, currency) => {
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency,
    })
  
    return formatted.format(money);
  }