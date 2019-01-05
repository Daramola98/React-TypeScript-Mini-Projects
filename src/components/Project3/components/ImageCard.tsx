import React, { Component } from "react";
import { IImagesProp } from "./ImageList";

interface IImageCardProps {
  image: IImagesProp;
}

interface IImageCardState {
  span: number;
}

export default class ImageCard extends Component<
  IImageCardProps,
  IImageCardState
> {
  public state = {
    span: 0
  };

  private imageRef = React.createRef<HTMLImageElement>();

  public componentDidMount() {
    this.imageRef.current!.addEventListener("load", this.setSpan);
  }

  public render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }

  private setSpan = (): void => {
    if (this.imageRef.current) {
      const span = Math.ceil(this.imageRef.current.clientHeight / 10);
      this.setState({ span });
    }
  };
}
