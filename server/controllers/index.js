const Controller = require('../controllers/index')

module.exports = {
    //===users
    auth: require('./users/auth.js'),
    signup: require('./users/signup'),
    signin: require('./users/signin'),
    signout: require('./users/signout'),
    //----matches
    new: require('./matches/new'),
    edit: {
        patch: require('./matches/editp'),
        get: require('./matches/editg'),
    },
    get: require(Controller.get),
    post: require(Controller.post),
    delete: require('./matches/delete'),
    cancel: require('./matches/cancel'),
    main: require('./matches/main'),
    //===mypage
    matches: require('./mypage/matches'),
    orders: require('./mypage/orders'),
    myedit: require('./mypage/myedit'),
    out: require('./mypage/out'),
};