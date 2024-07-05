import auth from "@react-native-firebase/auth";
import { updateToken } from "../redux/reducers/User.ts";
import store from "../redux/Store.ts";

export const createUser = async (fullName, email, password) => {
  try {
    const {user} = await auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({displayName: fullName});
    return user;
  } catch (e) {
    switch (e.code) {
      case 'auth/email-already-in-use':
        return {error: 'That email address is already in use'};
      case 'auth/invalid-email':
        return {error: 'That email address is invalid'};
      default:
        return {error: 'Something went wrong'};
    }
  }
};

export const loginUser = async (email: string, password: string) => {
  try{
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  }catch (e){
    return {success: false, error: e.message};
  }
}

export const logout = async () =>{
  await auth().signOut();
}

export const checkToken = async () => {
  try{
    let response = await auth().currentUser?.getIdToken(true)
    store.dispatch(updateToken(response));
    return response;
  }catch (e){
    return e
  }
}
