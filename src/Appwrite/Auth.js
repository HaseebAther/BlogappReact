import {conf} from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client  
        .setEndpoint(conf.appwrite_Url)
        .setProject(conf.appwriteproject_ID);
        
        this.account=new Account(this.client);
    }

    async createAccount({email,name,password}){
            try {
               const userAccount = await this.account.create
                 (ID.unique(), email, password,name  )
                if(userAccount){
                    return this.Login({email, login})
                }
                else{
                    return userAccount
                }

            } catch (error) {
                throw error;
                                
            }
      
    }
    async Login({email, password}){
        try {
           return  await this.account.createEmailPasswordSession(email, password) 
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
           console.log("AppService() :: getCurrentUser() :: ", error )
        }
        return null
    }
    async Logout(){
        try {
          return await this.account.deleteSessions()
        } catch (error) {
            console.log("AppService() :: logout() :: ", error )
        }
    }

}

const authservice = new AuthService()

export default authservice