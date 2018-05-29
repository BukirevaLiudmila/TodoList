const generateId = () => new Date().getTime() * Math.round(Math.random() * 9) + 1;

export default generateId;