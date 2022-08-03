module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a3c5286d736715eb9b336d0cc83f1b50'),
  },
});
