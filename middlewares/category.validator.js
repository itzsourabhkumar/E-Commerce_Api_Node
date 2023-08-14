const validateCreate = async (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      message:
        "Category name is missing, please try again by adding a category name",
      success: false,
      err: "Parameter missing from the request body",
      data: {},
    });
  }
  next();
};

const validateGetById = (req, res, next) => {
  if (Number.isNaN(parseInt(req.params.id))) {
    return res.status(400).json({
      message: "Invalid request params",
      success: false,
      err: "Expecting a valid integer id for category",
      data: {},
    });
  }
  next();
};

const validateUpdate = (req, res, next) => {
  if (!req.body.name || !req.body.description) {
    return res.status(400).json({
      message: "Invalid request params",
      success: false,
      err: "Missing name of description",
      data: {},
    });
  }
  next();
};

const validatePartialUpdate = (req, res, next) => {
  if (!(req.body.name || req.body.description)) {
    return res.status(400).json({
      message: "Invalid request params",
      success: false,
      err: "Missing name of description",
      data: {},
    });
  }
  next();
};

const validatorPaginator = (req, res, next) => {
  if (!(req.query.limit || req.query.offset)) {
    next();
  }
  const invalidQueryObject = {
    message: "Invalid query arguments",
    success: false,
    data: {},
    err: "limit or offset should be valid numbers",
  };
  if (req.query.limit && Number.isNaN(parseInt(req.query.limit)))
  {
    return res.status(400).json(invalidQueryObject);
  }

  if (req.query.offset && Number.isNaN(parseInt(req.query.offset)))
  {
    return res.status(400).json(invalidQueryObject);
  }
  next();
};

module.exports = {
  validateCreate,
  validateGetById,
  validateUpdate,
  validatePartialUpdate,
  validatorPaginator
};
