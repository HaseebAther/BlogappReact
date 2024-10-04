import { conf } from "../conf/conf.js";
import { Client, Databases, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwrite_Url)
      .setProject(conf.appwriteproject_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwrite_DB_ID,
        conf.appwrite_COL_ID,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service ::  getPost() :: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwrite_DB_ID,
        conf.appwrite_COL_ID,
        queries
      );
    } catch (error) {
      console.log("Appwrite Service ::  getPosts() :: ", error);
      return false;
    }
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        conf.appwrite_DB_ID,
        conf.appwrite_COL_ID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Appwrite Service ::  createPosts() :: ", error);
      return false;
    }
  }

  async updatePost({ slug, title, content, featuredImage, status, userID }) {
    try {
      return await this.databases.updateDocument(
        conf.appwrite_DB_ID,
        conf.appwrite_COL_ID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userID,
        }
      );
    } catch (error) {
      console.log("Appwrite Service ::  updatePosts() :: ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwrite_DB_ID,
        conf.appwrite_COL_ID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service ::  deletePost() :: ", error);
      return false;
    }
  }

  //Storage Services

  async uploadFile(File){
    try {
        return await this.bucket.createFile(
            conf.appwrite_BUCK_ID, 
            ID.unique(),
            File
        )
    } catch (error) {
        console.log("Appwrite Service :: Storage  :: createFile() :: ", error);
        return false;
    }
  }

  async deleteFile(fileID){
    try {
        return await this.bucket.deleteFile(
            conf.appwrite_BUCK_ID, 
            fileID
        )
    } catch (error) {
        console.log("Appwrite Service :: Storage :: deleteFile() :: ", error);
        return false;
    }
  }

  setPreview(fileID){
            return this.bucket.getFilePreview(
            conf.appwrite_BUCK_ID, 
            fileID
        ).href 
    
  }
    

}
const service = new Service();
export default service;
