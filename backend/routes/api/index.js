// backend/routes/api/index.js
const router = require('express').Router();


const { restoreUser } = require('../../utils/auth.js');

//this is global. check if a user is existed
router.use(restoreUser);

//all code below is for testing whether middlewares in auth.js is working properly.
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// const { requireAuth } = require('../../utils/auth.js');

// //POST /api/test
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

// //GET /api/set-token-cookie to username: 'Demo-Lition'.

// router.get('/set-token-cookie', async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     }
//   });
//   //create a token and assigned to user Demo, and store the token in cookie as well.
//   setTokenCookie(res, user);
//   return res.json({ user: user });
// });

// //GET /api/restore-user to find current userIfo. return a json file if current user existed
// router.get('/restore-user', (req, res) => {
//     return res.json(req.user);
//   }
// );

// //GET /api/required-auth to check if required auth
// router.get('/require-auth', requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
