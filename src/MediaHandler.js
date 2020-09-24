export default class MediaHandler {
  getPermissions() {
    return new Promise((res) => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          res(stream);
        })
        .catch((err) => {
          throw new Error("Unable fetch stream" + err);
        });
    });
  }
}
