import firebase from './firebase';

export default class FirebaseService {
    constructor() {
        this.db = firebase.firestore().collection("reports");
    }

    get(name) {
        let data = []
        return this.db.where("name", "==", name).get().then(
            snapshot => {
                snapshot.forEach(snap => data.push({[snap.id]: snap.data()}));
                return data;
            }
        );
    }

    getAll() {
        let data2 = [];
        this.db.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                data2.push(doc.data())
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
            });
        });
        return data2;

    }

    getByStatus(status) {
        let validInvalid = [];
        this.db.where("status", "==", status).get().then(
            snapshot => {
                // let tasksObject = data.val(); //convert snapshot to value
                // let taskKeys = Object.keys(tasksObject);
                // let taskArray = taskKeys.map((key) => { //map array of keys into array of tasks
                //     let task = tasksObject[key]; //access element at that key
                //     task.key = key; //save the key for later referencing!
                //     return task; //the transformed object to store in the array
                // });
            snapshot.forEach(
        
                doc => {
                validInvalid.push(doc.data());
            });
        });
        return validInvalid;
        // return this.db.where("status", "==", status).get().then(
        //     snapshot => {
        //         snapshot.forEach(snap => validInvalid.push({[snap.id]: snap.data()}));
        //         return validInvalid;
        //     }
        // );
    }
}