import React, { Component } from "react";
import { storage } from "../firebase";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({
        image
      }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTas = storage.ref(`images/${image.name}`).put(image);
    uploadTas.on(
      "state_change",
      (snapshot) => {
        // progress function ....
      },
      (error) => {
        console.log(error);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default ImageUpload;
