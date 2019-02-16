const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // 권한 제어를 시도하는 유저가 Admin인지 확인
  if (context.auth.token.admin !== true) {
    return { error: 'only admins can add other admin!' }
  }

  // 유저 정보를 얻고 해당 유저에게 권한(claim)을 부여함
  return admin.auth().getUserByEmail(data.email).then(user => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true
    });
  }).then(() => {
    return {
      message: `Success ${data.email} has been made an admin`
    }
  }).catch(err => {
    return err;
  })
})

