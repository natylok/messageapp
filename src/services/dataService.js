import {jsonData} from '../data/dataStateJson';
export default class DataService{
    static setData(){
        this.data = jsonData;
    }
    static getUserData(){
        return this.data ? this.data.user : {};
    }
    static getMessagesData(){
        return this.data ? this.data.messages : [];
    }
}