// import { useParams } from "react-router-dom";
// import VideoPlayer from "../components/VideoPlayer";
// import Chat from "../components/Chat";

// export default function Room() {
//   const { id } = useParams();

//   // 🔥 HARD SAFE GUARD
//   if (!id || id === "undefined") {
//     return (
//       <div style={{ padding: 20 }}>
//         <h2>Invalid Room</h2>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: 10 }}>
//       <h2>Room: {id}</h2>

//       <div style={{ display: "flex", gap: 10 }}>
//         <VideoPlayer roomId={id} />
//         <Chat roomId={id} />
//       </div>
//     </div>
//   );
// }


// import { useParams } from "react-router-dom";
// import VideoPlayer from "../components/VideoPlayer";
// import Chat from "../components/Chat";

// export default function Room() {
//   const { id } = useParams();

//   if (!id) return <div>Invalid Room</div>;

//   // 🔥 share link
//   const shareLink = `${window.location.origin}/room/${id}`;

//   const copyLink = async () => {
//     try {
//       await navigator.clipboard.writeText(shareLink);
//       alert("Room link copied!");
//     } catch (err) {
//       alert("Failed to copy link");
//     }
//   };

//   return (
//     <div style={{ padding: 10 }}>
      
//       <h2>Room: {id}</h2>

//       {/* 🔥 SHARE BUTTON */}
//       <div style={{ marginBottom: 10 }}>
//         <input
//           value={shareLink}
//           readOnly
//           style={{ width: "70%", padding: 5 }}
//         />

//         <button
//           onClick={copyLink}
//           style={{ marginLeft: 10, padding: 5 }}
//         >
//           Share
//         </button>
//       </div>

//       {/* VIDEO (UNCHANGED) */}
//       <VideoPlayer roomId={id} />

//       {/* CHAT (UNCHANGED) */}
//       <Chat roomId={id} />
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import Chat from "../components/Chat";

export default function Room() {

  const { id } = useParams();

  if (!id) {
    return <div>Invalid Room</div>;
  }

  const shareLink = `${window.location.origin}/room/${id}`;

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Room link copied!");
  };

  return (
    <div className="room-page">

      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}

      <div className="top-bar">

        <input
          value={shareLink}
          readOnly
        />

        <button onClick={copyLink}>
          Share
        </button>

      </div>

      {/* ========================= */}
      {/* VIDEO SECTION */}
      {/* ========================= */}

      <div className="video-section">

        <div className="video-box">

          <VideoPlayer roomId={id} />

        </div>

      </div>

      {/* ========================= */}
      {/* CHAT SECTION */}
      {/* ========================= */}

      <div className="chat-wrapper">

        <Chat roomId={id} />

      </div>

    </div>
  );
}