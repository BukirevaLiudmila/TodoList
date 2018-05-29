const generateId = () => new Date().getTime() * Math.round(Math.random() * 40) + 1;

export default generateId;