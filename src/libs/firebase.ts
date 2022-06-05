import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { config } from '@/libs/config';

const firebaseConfig = {
  apiKey: `AIzaSyBynE89w2fZo9zat2EF-erHzJCBviz0YeQ`,
  authDomain: `firts-project-119b8.firebaseapp.com`,
  projectId: `firts-project-119b8`,
  appId: `1:109104554165:web:b4e75996dc9f0957809efc`,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;
