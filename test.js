const ternary = "kondisi" ? true : false;

const dbUrl =
  process.env.NODE_ENV === "development"
    ? process.env.MONGODB_URI_DEV
    : process.env.MONGODB_URI_PROD;
