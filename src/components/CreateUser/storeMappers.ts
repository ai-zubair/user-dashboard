import { Dispatch } from 'redux';
import { AppState } from '../../data-store/rootReducer';
import { addFirstName, addLastName, addUserEmail, addUserPassword, postNewUserData, toggleUserModififed, updateUserData } from './actionCreators';
import { NewUser } from './types';

const mapStateToProps = ({createNewUserData, dashboardData}: AppState) => ({
  firstName: createNewUserData.userData.firstName,
  lastName: createNewUserData.userData.lastName,
  email: createNewUserData.userData.email,
  password: createNewUserData.userData.password,
  signUpError: createNewUserData.userData.signUpError,
  isUserModified: createNewUserData.userModified,
  isSignUpLoaderVisible: createNewUserData.isSignUpLoaderVisible,
  existingUsers: dashboardData.userData 
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addFirstName(firstName: string){
    dispatch(addFirstName(firstName));
  },
  addLastName(lastName: string){
    dispatch(addLastName(lastName));
  },
  addPassword(password: string){
    dispatch(addUserPassword(password));
  },
  addEmail(email: string){
    dispatch(addUserEmail(email));
  },
  toggleUserModified(modificationState: boolean){
    dispatch(toggleUserModififed(modificationState))
  },
  postNewUserData(userData: NewUser){
    // @ts-ignore
    dispatch(postNewUserData(userData));
  },
  updateUserData(userData: NewUser, id: string){
    // @ts-ignore
    dispatch(updateUserData(userData, id))
  }
})

export { mapStateToProps, mapDispatchToProps };