import { getDatabase, ref, set, child, get } from "firebase/database";

// Sample functions for inputting more data into firebase/database. In this case it only includes 4 variables but based off the documentation, more data can be added.

// Set User Data
export const writeUserData = (userId, name, email, imageUrl) => {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  })
    .then(() => {
      alert("Succesfully added info!");
    })
    .catch((err) => {
      alert(err);
    });
};

// Get User Data
export const getUserDataFromDB = (userId, setHook) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setHook(snapshot.val());
      } else {
        console.log("No data available for user");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
