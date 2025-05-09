const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().toISOString();
  const body = Object.keys(req.body).length ? JSON.stringify(req.body) : "N/A";
  console.log(`[${time}] ${method} ${url} | Body: ${body}`);
  next();
};

module.exports = logger;
