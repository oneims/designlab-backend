module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d8ba08963f77ac16084900d4bde9598'),
  },
});
