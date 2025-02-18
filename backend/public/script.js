const socket = io("/");
const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
myVideo.muted = true;
let myVideoStream;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: false,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  });
socket.emit("join-room", ROOM_ID);
socket.on("user-connected", () => {
  connectToNewUser();
});
function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("Loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}
function connectToNewUser() {
  console.log("join front");
}
