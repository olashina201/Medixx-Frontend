import React, { useEffect } from "react";
import "./video.css";
import Peer from "simple-peer";
import io from "socket.io-client";

function VideoChat() {
  const socket = io("/");
  const videoGrid = document.getElementById("video-grid");
  const myVideo = document.createElement("video");
  const showChat = document.querySelector("#showChat");
  myVideo.muted = true;
  let html;
  const ROOM_ID = "<%= roomId %>";

  const user = prompt("Enter your name");

  const peer = new Peer(undefined, {
    path: "/peerjs",
    host: "/",
    port: "443"
  });
  useEffect(() => {
    const backBtn = document.querySelector(".header__back");
    backBtn.addEventListener("click", () => {
      document.querySelector(".main__left").style.display = "flex";
      document.querySelector(".main__left").style.flex = "1";
      document.querySelector(".main__right").style.display = "none";
      document.querySelector(".header__back").style.display = "none";
    });

    showChat.addEventListener("click", () => {
      document.querySelector(".main__right").style.display = "flex";
      document.querySelector(".main__right").style.flex = "1";
      document.querySelector(".main__left").style.display = "none";
      document.querySelector(".header__back").style.display = "block";
    });

    const addVideoStream = (video, stream) => {
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
        videoGrid.append(video);
      });
    };

    const connectToNewUser = (userId, stream) => {
      const call = peer.call(userId, stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    };

    let myVideoStream;
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true
      })
      .then((stream) => {
        myVideoStream = stream;
        addVideoStream(myVideo, stream);

        peer.on("call", (call) => {
          call.answer(stream);
          const video = document.createElement("video");
          call.on("stream", (userVideoStream) => {
            addVideoStream(video, userVideoStream);
          });
        });

        socket.on("user-connected", (userId) => {
          connectToNewUser(userId, stream);
        });
      });
    peer.on("open", (id) => {
      socket.emit("join-room", ROOM_ID, id, user);
    });

    const text = document.querySelector("#chat_message");
    const send = document.getElementById("send");
    const messages = document.querySelector(".messages");

    send.addEventListener("click", () => {
      if (text.value.length !== 0) {
        socket.emit("message", text.value);
        text.value = "";
      }
    });

    text.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && text.value.length !== 0) {
        socket.emit("message", text.value);
        text.value = "";
      }
    });

    const inviteButton = document.querySelector("#inviteButton");
    const muteButton = document.querySelector("#muteButton");
    const stopVideo = document.querySelector("#stopVideo");
    muteButton.addEventListener("click", () => {
      const enabled = myVideoStream.getAudioTracks()[0];
      if (enabled) {
        myVideoStream.getAudioTracks()[0].enabled = false;
        html = <i class="fas fa-microphone-slash"></i>;
        muteButton.classList.toggle("background__red");
        muteButton.innerHTML = html;
      } else {
        myVideoStream.getAudioTracks()[0].enabled = true;
        html = <i class="fas fa-microphone"></i>;
        muteButton.classList.toggle("background__red");
        muteButton.innerHTML = html;
      }
    });

    stopVideo.addEventListener("click", () => {
      const enabled = myVideoStream.getVideoTracks()[0];
      if (enabled) {
        myVideoStream.getVideoTracks()[0].enabled = false;
        html = <i class="fas fa-video-slash"></i>;
        stopVideo.classList.toggle("background__red");
        stopVideo.innerHTML = html;
      } else {
        myVideoStream.getVideoTracks()[0].enabled = true;
        html = <i class="fas fa-video"></i>;
        stopVideo.classList.toggle("background__red");
        stopVideo.innerHTML = html;
      }
    });

    inviteButton.addEventListener("click", () => {
      prompt(
        "Copy this link and send it to people you want to meet with",
        window.location.href
      );
    });

    socket.on("createMessage", (message, userName) => {
      messages.innerHTML += `<div class="message">
        <b><i class="far fa-user-circle"></i> <span> ${userName === user ? "me" : userName}</span> </b>
        <span>${message}</span>
      </div>`;
    });
  }, []);
  return (
    <div>
      <div className="header">
        <div className="logo">
          <div className="header__back">
            <i className="fas fa-angle-left"></i>
          </div>
          <h3>Video Chat</h3>
        </div>
      </div>
      <div className="main">
        <div className="main__left">
          <div className="videos__group">
            <div id="video-grid"></div>
          </div>
          <div className="options">
            <div className="options__left">
              <div id="stopVideo" className="options__button">
                <i className="fa fa-video-camera"></i>
              </div>
              <div id="muteButton" className="options__button">
                <i className="fa fa-microphone"></i>
              </div>
              <div id="showChat" className="options__button">
                <i className="fa fa-comment"></i>
              </div>
            </div>
            <div className="options__right">
              <div id="inviteButton" className="options__button">
                <i className="fas fa-user-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="main__right">
          <div className="main__chat_window">
            <div className="messages"></div>
          </div>
          <div className="main__message_container">
            <input
              id="chat_message"
              type="text"
              autocomplete="off"
              placeholder="Type message here..."
            />
            <div id="send" className="options__button">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoChat;
