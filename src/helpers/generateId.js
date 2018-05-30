const generateId = () => Math.round(new Date().getTime() * Math.random()) + 1;

export default generateId;