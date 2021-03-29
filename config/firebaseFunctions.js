import * as firebase from 'firebase';
import 'firebase/firestore';

export async function addDiary(content) {
  try {
    const db = firebase.firestore();
    await db
      .collection('diary')
      .doc(content.date + 'D')
      .set(content);
    return true;
  } catch (err) {
    console.log('글 작성에 문제가 있습니다! ', err.message);
    return false;
  }
}
