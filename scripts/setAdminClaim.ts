import admin from '../lib/config/firebaseAdmin';

async function setAdminClaim() {
  const email = 'chip@constructivai.com';
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    console.log(`Successfully set admin claim for user: ${email}`);
  } catch (error) {
    console.error('Error setting admin claim:', error);
  }
}

setAdminClaim();
