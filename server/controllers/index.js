module.exports = {
    //===users
    auth: require('./users/auth'),
    signup: require('./users/signup'),
    signin: require('./users/signin'),
    signout: require('./users/signout'),
    //----matches
    new: require('./matches/new'),
    edit: {
        patch: require('./matches/editp'),
        get: require('./matches/editg')
    },
    delete: require('./matches/delete'),
    cancel: require('./matches/cancel'),
    list: require('./matches/list'),
    matchget: require('./matches/matchget'),
    matchpost: require('./matches/matchpost'),
    //===mypage
    matches: require('./mypage/matches'),
    orders: require('./mypage/orders'),
    myedit: require('./mypage/myedit'),
    out: require('./mypage/out'),
};