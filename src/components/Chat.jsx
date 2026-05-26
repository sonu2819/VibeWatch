// import { useEffect, useState } from "react";
// import { db } from "../firebase";

// import {
//   ref,
//   push,
//   onValue,
//   set,
//   onDisconnect
// } from "firebase/database";

// // 🔥 generate stable unique name per browser
// const getUserName = () => {
//   let name = localStorage.getItem("vibe_username");

//   if (!name) {
//     name =
//       "User-" +
//       Math.random()
//         .toString(36)
//         .substring(2, 6);

//     localStorage.setItem(
//       "vibe_username",
//       name
//     );
//   }

//   return name;
// };

// export default function Chat({ roomId }) {

//   const [messages, setMessages] =
//     useState([]);

//   const [users, setUsers] =
//     useState([]);

//   const [input, setInput] =
//     useState("");

//   const userName =
//     getUserName();

//   // =========================
//   // 🔥 MESSAGES
//   // =========================
//   useEffect(() => {

//     if (!roomId) return;

//     const msgRef =
//       ref(
//         db,
//         `rooms/${roomId}/messages`
//       );

//     const unsub =
//       onValue(msgRef, (snap) => {

//         const data = snap.val();

//         if (!data) {
//           setMessages([]);
//           return;
//         }

//         const list =
//           Object.entries(data).map(
//             ([id, msg]) => ({
//               id,
//               ...msg,
//             })
//           );

//         setMessages(list);
//       });

//     return () => unsub();

//   }, [roomId]);

//   // =========================
//   // 🔥 ONLINE / OFFLINE
//   // =========================
//   useEffect(() => {

//     if (!roomId) return;

//     const userRef =
//       ref(
//         db,
//         `rooms/${roomId}/users/${userName}`
//       );

//     // 🟢 online
//     set(userRef, {
//       name: userName,
//       online: true,
//     });

//     // 🔴 offline
//     onDisconnect(userRef).set({
//       name: userName,
//       online: false,
//     });

//     // listen users
//     const usersRef =
//       ref(
//         db,
//         `rooms/${roomId}/users`
//       );

//     return onValue(usersRef, (snap) => {

//       const data = snap.val();

//       if (!data) {
//         setUsers([]);
//         return;
//       }

//       setUsers(
//         Object.values(data)
//       );

//     });

//   }, [roomId]);

//   // =========================
//   // 🔥 SEND MESSAGE
//   // =========================
//   const sendMessage = (e) => {

//     e.preventDefault();

//     if (!input.trim()) return;

//     push(
//       ref(
//         db,
//         `rooms/${roomId}/messages`
//       ),
//       {
//         text: input,
//         user: userName,
//         time: Date.now(),
//       }
//     );

//     setInput("");
//   };

//   return (

//     <div className="chat-box">

//       {/* HEADER */}
//       <div className="chat-header">
//         LIVE CHAT
//       </div>

//       {/* USERS */}
//       <div className="chat-users">

//         {users.map((u, i) => (

//           <span key={i}>

//             {u.online
//               ? "🟢"
//               : "🔴"}{" "}

//             {u.name}

//           </span>

//         ))}

//       </div>

//       {/* MESSAGES */}
//       <div className="chat-messages">

//         {messages.map((m) => (

//           <div
//             key={m.id}
//             className="chat-message"
//           >

//             <b>{m.user}:</b>{" "}
//             {m.text}

//           </div>

//         ))}

//       </div>

//       {/* INPUT */}
//       <form onSubmit={sendMessage}>

//         <input
//           value={input}
//           onChange={(e) =>
//             setInput(e.target.value)
//           }
//           placeholder="message..."
//         />

//         <button type="submit">
//           Send
//         </button>

//       </form>

//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// import { db } from "../firebase";

// import {
//   ref,
//   push,
//   onValue,
//   set,
//   onDisconnect,
// } from "firebase/database";

// // =========================
// // 🔥 USER SYSTEM
// // =========================
// const getUserData = () => {

//   let userId =
//     localStorage.getItem(
//       "vibe_userId"
//     );

//   let userName =
//     localStorage.getItem(
//       "vibe_username"
//     );

//   // create permanent id
//   if (!userId) {

//     userId = crypto.randomUUID();

//     localStorage.setItem(
//       "vibe_userId",
//       userId
//     );
//   }

//   // create default username
//   if (!userName) {

//     userName =
//       "User-" +
//       Math.random()
//         .toString(36)
//         .substring(2, 6);

//     localStorage.setItem(
//       "vibe_username",
//       userName
//     );
//   }

//   return {
//     userId,
//     userName,
//   };
// };

// export default function Chat({
//   roomId,
// }) {

//   const [messages, setMessages] =
//     useState([]);

//   const [users, setUsers] =
//     useState([]);

//   const [input, setInput] =
//     useState("");

//   const userData =
//     getUserData();

//   const userId =
//     userData.userId;

//   const [userName, setUserName] =
//     useState(
//       userData.userName
//     );

//   // edit username
//   const [editingName, setEditingName] =
//     useState(false);

//   const [newName, setNewName] =
//     useState(userData.userName);

//   // =========================
//   // 🔥 MESSAGES
//   // =========================
//   useEffect(() => {

//     if (!roomId) return;

//     const msgRef =
//       ref(
//         db,
//         `rooms/${roomId}/messages`
//       );

//     const unsub =
//       onValue(msgRef, (snap) => {

//         const data =
//           snap.val();

//         if (!data) {
//           setMessages([]);
//           return;
//         }

//         const list =
//           Object.entries(data).map(
//             ([id, msg]) => ({
//               id,
//               ...msg,
//             })
//           );

//         list.sort(
//           (a, b) =>
//             a.time - b.time
//         );

//         setMessages(list);
//       });

//     return () => unsub();

//   }, [roomId]);

//   // =========================
//   // 🔥 USERS / PRESENCE
//   // =========================
//   useEffect(() => {

//     if (!roomId) return;

//     const userRef =
//       ref(
//         db,
//         `rooms/${roomId}/users/${userId}`
//       );

//     // 🟢 online
//     set(userRef, {
//       id: userId,
//       name: userName,
//       online: true,
//     });

//     // 🔴 offline
//     onDisconnect(userRef).set({
//       id: userId,
//       name: userName,
//       online: false,
//     });

//     // listen users
//     const usersRef =
//       ref(
//         db,
//         `rooms/${roomId}/users`
//       );

//     const unsub =
//       onValue(usersRef, (snap) => {

//         const data =
//           snap.val();

//         if (!data) {
//           setUsers([]);
//           return;
//         }

//         setUsers(
//           Object.values(data)
//         );
//       });

//     return () => unsub();

//   }, [
//     roomId,
//     userId,
//     userName,
//   ]);

//   // =========================
//   // 🔥 SEND MESSAGE
//   // =========================
//   const sendMessage = (e) => {

//     e.preventDefault();

//     if (!input.trim()) return;

//     push(
//       ref(
//         db,
//         `rooms/${roomId}/messages`
//       ),
//       {
//         text: input,
//         user: userName,
//         userId,
//         time: Date.now(),
//       }
//     );

//     setInput("");
//   };

//   // =========================
//   // 🔥 SAVE USERNAME
//   // =========================
//   const saveName = () => {

//     const cleanName =
//       newName.trim();

//     if (!cleanName) {
//       setEditingName(false);
//       return;
//     }

//     // save locally
//     localStorage.setItem(
//       "vibe_username",
//       cleanName
//     );

//     // update state
//     setUserName(cleanName);

//     // update firebase
//     const userRef =
//       ref(
//         db,
//         `rooms/${roomId}/users/${userId}`
//       );

//     set(userRef, {
//       id: userId,
//       name: cleanName,
//       online: true,
//     });

//     setEditingName(false);
//   };

//   return (

//     <div className="chat-box">

//       {/* HEADER */}
//       <div className="chat-header">
//         LIVE CHAT
//       </div>

//       {/* USERS */}
//       <div className="chat-users">

//         {users.map((u) => (

//           <div
//             key={u.id}
//             className="user-pill"
//           >

//             <span>
//               {u.online
//                 ? "🟢"
//                 : "🔴"}
//             </span>

//             {u.id === userId ? (

//               editingName ? (

//                 <input
//                   className="edit-name-input"

//                   value={newName}

//                   autoFocus

//                   onChange={(e) =>
//                     setNewName(
//                       e.target.value
//                     )
//                   }

//                   onBlur={saveName}

//                   onKeyDown={(e) => {

//                     if (
//                       e.key === "Enter"
//                     ) {
//                       saveName();
//                     }

//                   }}
//                 />

//               ) : (

//                 <span
//                   className="editable-name"

//                   onClick={() =>
//                     setEditingName(true)
//                   }
//                 >
//                   {u.name}
//                 </span>

//               )

//             ) : (

//               <span>
//                 {u.name}
//               </span>

//             )}

//           </div>

//         ))}

//       </div>

//       {/* MESSAGES */}
//       <div className="chat-messages">

//         {messages.map((m) => (

//           <div
//             key={m.id}
//             className={`chat-message ${
//               m.userId === userId
//                 ? "my-message"
//                 : "other-message"
//             }`}
//           >
//             {m.text}
//           </div>

//         ))}

//       </div>

//       {/* INPUT */}
//       <form onSubmit={sendMessage}>

//         <input
//           value={input}

//           onChange={(e) =>
//             setInput(
//               e.target.value
//             )
//           }

//           placeholder="message..."
//         />

//         <button type="submit">
//           Send
//         </button>

//       </form>

//     </div>
//   );
// }

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { db } from "../firebase";

import {
  ref,
  push,
  onValue,
  set,
  onDisconnect,
} from "firebase/database";

// =========================
// 🔥 USER SYSTEM
// =========================
const getUserData = () => {

  let userId =
    localStorage.getItem(
      "vibe_userId"
    );

  let userName =
    localStorage.getItem(
      "vibe_username"
    );

  // create permanent id
  if (!userId) {

    userId = crypto.randomUUID();

    localStorage.setItem(
      "vibe_userId",
      userId
    );
  }

  // create default username
  if (!userName) {

    userName =
      "User-" +
      Math.random()
        .toString(36)
        .substring(2, 6);

    localStorage.setItem(
      "vibe_username",
      userName
    );
  }

  return {
    userId,
    userName,
  };
};

export default function Chat({
  roomId,
}) {

  const [messages, setMessages] =
    useState([]);

  const [users, setUsers] =
    useState([]);

  const [input, setInput] =
    useState("");

  // ✅ auto scroll ref
  const messagesEndRef =
    useRef(null);

  const userData =
    getUserData();

  const userId =
    userData.userId;

  const [userName, setUserName] =
    useState(
      userData.userName
    );

  // edit username
  const [editingName, setEditingName] =
    useState(false);

  const [newName, setNewName] =
    useState(userData.userName);

  // =========================
  // 🔥 MESSAGES
  // =========================
  useEffect(() => {

    if (!roomId) return;

    const msgRef =
      ref(
        db,
        `rooms/${roomId}/messages`
      );

    const unsub =
      onValue(msgRef, (snap) => {

        const data =
          snap.val();

        if (!data) {
          setMessages([]);
          return;
        }

        const list =
          Object.entries(data).map(
            ([id, msg]) => ({
              id,
              ...msg,
            })
          );

        list.sort(
          (a, b) =>
            a.time - b.time
        );

        setMessages(list);
      });

    return () => unsub();

  }, [roomId]);

  // =========================
  // ✅ AUTO SCROLL
  // =========================
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  // =========================
  // 🔥 USERS / PRESENCE
  // =========================
  useEffect(() => {

    if (!roomId) return;

    const userRef =
      ref(
        db,
        `rooms/${roomId}/users/${userId}`
      );

    // 🟢 online
    set(userRef, {
      id: userId,
      name: userName,
      online: true,
    });

    // 🔴 offline
    onDisconnect(userRef).set({
      id: userId,
      name: userName,
      online: false,
    });

    // listen users
    const usersRef =
      ref(
        db,
        `rooms/${roomId}/users`
      );

    const unsub =
      onValue(usersRef, (snap) => {

        const data =
          snap.val();

        if (!data) {
          setUsers([]);
          return;
        }

        setUsers(
          Object.values(data)
        );
      });

    return () => unsub();

  }, [
    roomId,
    userId,
    userName,
  ]);

  // =========================
  // 🔥 SEND MESSAGE
  // =========================
  const sendMessage = (e) => {

    e.preventDefault();

    if (!input.trim()) return;

    push(
      ref(
        db,
        `rooms/${roomId}/messages`
      ),
      {
        text: input,
        user: userName,
        userId,
        time: Date.now(),
      }
    );

    setInput("");
  };

  // =========================
  // 🔥 SAVE USERNAME
  // =========================
  const saveName = () => {

    const cleanName =
      newName.trim();

    if (!cleanName) {
      setEditingName(false);
      return;
    }

    // save locally
    localStorage.setItem(
      "vibe_username",
      cleanName
    );

    // update state
    setUserName(cleanName);

    // update firebase
    const userRef =
      ref(
        db,
        `rooms/${roomId}/users/${userId}`
      );

    set(userRef, {
      id: userId,
      name: cleanName,
      online: true,
    });

    setEditingName(false);
  };

  return (

    <div className="chat-box">

      {/* HEADER */}
      <div className="chat-header">
        LIVE CHAT
      </div>

      {/* USERS */}
      <div className="chat-users">

        {users.map((u) => (

          <div
            key={u.id}
            className="user-pill"
          >

            <span>
              {u.online
                ? "🟢"
                : "🔴"}
            </span>

            {u.id === userId ? (

              editingName ? (

                <input
                  className="edit-name-input"

                  value={newName}

                  autoFocus

                  onChange={(e) =>
                    setNewName(
                      e.target.value
                    )
                  }

                  onBlur={saveName}

                  onKeyDown={(e) => {

                    if (
                      e.key === "Enter"
                    ) {
                      saveName();
                    }

                  }}
                />

              ) : (

                <span
                  className="editable-name"

                  onClick={() =>
                    setEditingName(true)
                  }
                >
                  {u.name}
                </span>

              )

            ) : (

              <span>
                {u.name}
              </span>

            )}

          </div>

        ))}

      </div>

      {/* MESSAGES */}
      <div className="chat-messages">

        {messages.map((m) => (

          <div
            key={m.id}
            className={`chat-message ${
              m.userId === userId
                ? "my-message"
                : "other-message"
            }`}
          >
            {m.text}
          </div>

        ))}

        {/* ✅ auto scroll target */}
        <div ref={messagesEndRef} />

      </div>

      {/* INPUT */}
      <form onSubmit={sendMessage}>

        <input
          value={input}

          onChange={(e) =>
            setInput(
              e.target.value
            )
          }

          placeholder="message..."
        />

        <button type="submit">
          Send
        </button>

      </form>

    </div>
  );
}