const errorMiddleware = (error, req, res, next) => {

    // console.error(error);
    switch (error.name) {
      case "1":
        res.status(401).json({ message: error.message });
      case "3":
        res.status(403).json({ message: error.message });
      case "4":
        res.status(404).json({ message: error.message });
      case "12":
        res.status(412).json({ message: error.message });
      default:
        res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = errorMiddleware;