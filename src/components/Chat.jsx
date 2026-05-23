// import { useEffect, useState } from "react";
// import { db } from "../firebase";
// import { ref, push, onValue } from "firebase/database";

// export default function Chat({ roomId }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // 🔥 Listen messages safely
//   useEffect(() => {
//     if (!roomId) return;

//     const messagesRef = ref(db, `rooms/${roomId}/messages`);

//     const unsubscribe = onValue(messagesRef, (snapshot) => {
//       const data = snapshot.val();

//       if (!data) {
//         setMessages([]);
//         return;
//       }

//       const messageList = Object.entries(data).map(([id, msg]) => ({
//         id,
//         ...msg,
//       }));

//       setMessages(messageList);
//     });

//     return () => unsubscribe();
//   }, [roomId]);

//   // 🔥 Send message safely
//   const sendMessage = (e) => {
//     e.preventDefault();

//     if (!input.trim()) return;
//     if (!roomId) return;

//     const messagesRef = ref(db, `rooms/${roomId}/messages`);

//     push(messagesRef, {
//       text: input,
//       timestamp: Date.now(),
//     });

//     setInput("");
//   };

//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: 10,
//         width: 300,
//         display: "flex",
//         flexDirection: "column",
//         height: 400,
//       }}
//     >
//       {/* Messages */}
//       <div style={{ flex: 1, overflowY: "auto", marginBottom: 10 }}>
//         {messages.length === 0 ? (
//           <div style={{ color: "#999" }}>No messages yet</div>
//         ) : (
//           messages.map((msg) => (
//             <div
//               key={msg.id}
//               style={{
//                 padding: 6,
//                 marginBottom: 5,
//                 background: "#f1f1f1",
//                 borderRadius: 5,
//               }}
//             >
//               {msg.text}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Input */}
//       <form onSubmit={sendMessage} style={{ display: "flex", gap: 5 }}>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type message..."
//           style={{ flex: 1, padding: 5 }}
//         />

//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, push, onValue } from "firebase/database";

// 🔥 generate stable unique name per browser
const getUserName = () => {
  let name = localStorage.getItem("vibe_username");

  if (!name) {
    name = "User-" + Math.random().toString(36).substring(2, 6);
    localStorage.setItem("vibe_username", name);
  }

  return name;
};

export default function Chat({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const userName = getUserName(); // 🔥 fixed per user

  useEffect(() => {
    if (!roomId) return;

    const msgRef = ref(db, `rooms/${roomId}/messages`);

    const unsub = onValue(msgRef, (snap) => {
      const data = snap.val();

      if (!data) {
        setMessages([]);
        return;
      }

      const list = Object.entries(data).map(([id, msg]) => ({
        id,
        ...msg,
      }));

      setMessages(list);
    });

    return () => unsub();
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    push(ref(db, `rooms/${roomId}/messages`), {
      text: input,
      user: userName,
      time: Date.now(),
    });

    setInput("");
  };

 return (
  <div className="chat-box">

    <div className="chat-header">
      LIVE CHAT
    </div>

    {/* messages */}
    <div className="chat-messages">

      {messages.map((m) => (
        <div key={m.id} className="chat-message">
          <b>{m.user}:</b> {m.text}
        </div>
      ))}

    </div>

    {/* input */}
    <form onSubmit={sendMessage}>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="message..."
      />

      <button type="submit">
        Send
      </button>

    </form>

  </div>
);
}