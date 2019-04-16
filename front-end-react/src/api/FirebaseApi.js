import firebase from '../api/FirebaseConfig' //this is mandatory, must come from the setup

class FirebaseApi {

    static getValues(path) {
        return firebase
            .database()
            .ref(path)
            .once('value')

    }
    /**
     * This method is for using the firestore with collections
     * @param {null} no input 
     */
    static getDocuments(path) {
        return firebase
            .firestore()
            .collection(path)
            .get();
    }
    /**
     * This method is for using the firestore with collections
     * @param {path} string This is the path of the collection
     * @param {nameDoc} string This is the name of the document
     */
    static getDocument(path, nameDoc) {
        return firebase
            .firestore()
            .collection(path)
            .doc(nameDoc)
            .get();
    }

    static getValueByKey(path, key) {
        return firebase
            .database()
            .ref(path)
            .orderByKey()
            .equalTo(key)
            .once('child_added');
    }

    static getDocumentsOrderedBy(path, property) {
        console.log('is getting here');

        return firebase
            .firestore()
            .collection(path)
            .orderBy(property,'desc')
            .get();
    }

    static setValue(path, value) {
        return firebase
            .database()
            .ref(path)
            .set(value);
    }

    static saveFile(path, name, file) {
        // let file =new File('/home/nemesis1346/Documents/UniversityProjects/takijunchik/react-front-end/data/audioFiles/audio.mp3');
        var blob = new Blob(['/home/nemesis1346/Documents/UniversityProjects/takijunchik/react-front-end/data/audioFiles/audio.mp3'], { type: 'audio/mp3' });

        let nameFile = name;//?
        let metadata = {
            contentType: 'audio/mp3'
        }
        return firebase
            .storage()
            .ref(path + '/' + name)
            .put(blob, metadata)
    }
    static getImage(path) {
        return firebase
            .storage()
            .ref()
            .child(path)
            .getDownloadURL();
    }
}
export default FirebaseApi;