export const isEmpty = (value) => {
  // SI VALUE est vide return true
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};


export const rateAverage = (comments) => {
  let sum = 0;
  
  comments.forEach((comment) => {
    sum += comment.rate;
  })
  return (sum / comments.length );
};

export const cartTotal = (items) => {
  let total = 0;
  if(isEmpty(items)) return total;
  else {
    items.forEach((item) => {
      total += item.price;
    });
    return total;
  }
}