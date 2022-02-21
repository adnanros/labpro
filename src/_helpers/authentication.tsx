import {Auth } from 'aws-amplify';
type BoolCallback = (n: Boolean) => any;
const isPackageAdmin = (myCompletionHandler: BoolCallback) => {// user is signed in now and we want to check wheather user belongs to admin group
    try{
      Auth.currentSession().then(session=> {
        let idToken = session.getIdToken();
        let groups = idToken.payload['cognito:groups'];
        console.log(groups);
        if(groups!= null && Array.isArray(groups)){
          // let cg = idToken.payload['cognito:groups'] as string[];
          if(groups.includes('PackagesAdmin')){
            myCompletionHandler(true);
          }else {
            myCompletionHandler(false);
          }
        }
      })
    }
    catch(ex){
    }
}

export default isPackageAdmin