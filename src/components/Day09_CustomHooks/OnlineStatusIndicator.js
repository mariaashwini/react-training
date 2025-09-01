import useOnlineStatus from "./useOnlineStatus";

export default function OnlineStatusIndicator(){
    const onlineStatus = useOnlineStatus();

     return (
    <div>
      <h2>Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}</h2>
    </div>
  );
}