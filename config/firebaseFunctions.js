import * as firebase from 'firebase';
import 'firebase/firestore';

export async function addDiary(content) {
  try {
    const db = firebase.firestore();
    await db
      .collection('diary')
      .doc(content.key + 'D')
      .set(content);
    return true;
  } catch (err) {
    console.log('글 작성에 문제가 있습니다! ', err.message);
    return false;
  }
}

export async function getData() {
  try {
    const db = firebase.firestore();
    const snapshot = await db.collection('diary').get();
    let data = [];
    snapshot.docs.map((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
}
