// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Home() {
//   const navigate = useNavigate();
//   const [roomId, setRoomId] = useState("");
// const createRoom = () => {
//   const id = crypto.randomUUID().slice(0, 6);
//   navigate(`/room/${id}`);
// };

//   const joinRoom = () => {
//     if (roomId.trim()) {
//       navigate(`/room/${roomId.trim()}`);
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>VibeWatch</h1>

//       <button onClick={createRoom}>Create Room</button>

//       <div style={{ marginTop: 20 }}>
//         <input
//           value={roomId}
//           onChange={(e) => setRoomId(e.target.value)}
//           placeholder="Enter room code"
//         />

//         <button onClick={joinRoom} disabled={!roomId.trim()}>
//           Join Room
//         </button>
//       </div>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {

  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");

  const createRoom = () => {
    const id = Math.random().toString(36).substring(2, 8);
    navigate(`/room/${id}`);
  };

  const joinRoom = () => {
    if (!roomId.trim()) return;
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="home-page">

      {/* background glow */}
      <div className="hero-glow"></div>

      <div className="home-card">

        <h1 className="logo">
          VibeWatch
        </h1>

        <p className="subtitle">
          Watch YouTube videos together in real-time.
        </p>

        {/* create */}
        <button
          className="main-btn"
          onClick={createRoom}
        >
          Create Room
        </button>

        {/* divider */}
        <div className="divider">
          OR
        </div>

        {/* join */}
        <div className="join-box">

          <input
            type="text"
            placeholder="Enter room code"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />

          <button onClick={joinRoom}>
            Join Room
          </button>

        </div>

      </div>

    </div>
  );
}