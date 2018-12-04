import React, { Component } from "react";
import AssetHeader from "./AssetHeader";
import Asset from "./Asset";
import SocialFooter from "./SocialFooter";

class AssetPage extends Component {
  state = {
    assetDetails: {},
    assetLink: ""
  };

  componentDidMount() {
    const { mediaType } = this.props.location.state;
    const { id } = this.props.match.params;
    this.fetchAssetData(id, mediaType);
  }

  render() {
    const { assetLink } = this.state;
    const { assetDetails } = this.props.location.state;

    return assetLink ? (
      <div>
        <div className="top-blue-line" />
        <hr />
        <div className="asset-page">
          <AssetHeader
            title={assetDetails.data[0].title}
            description={assetDetails.data[0].description}
            keywords={assetDetails.data[0].keywords}
            center={assetDetails.data[0].center}
            createdAt={assetDetails.data[0].date_created}
          />
          <Asset
            title={assetDetails.data[0].title}
            mediaType={assetDetails.data[0].media_type}
            assetLink={assetLink}
          />
        </div>
        <SocialFooter
          assetLink={assetLink}
          title={assetDetails ? assetDetails.data[0].title : null}
        />
      </div>
    ) : (
      <h4>Loading...</h4>
    );
  }

  fetchAssetData = (id, mediaType) => {
    const { assetDetails } = this.props.location.state;
    const assetUrl =
      mediaType === "video"
        ? `https://images-api.nasa.gov/asset/${id}`
        : assetDetails.href;

    fetch(assetUrl, { mode: "cors" })
      .then(response => response.json())
      .then(collectionData => {
        const assetLink =
          mediaType === "image"
            ? collectionData.filter(collectionDatum =>
                collectionDatum.includes("thumb")
              )[0]
            : mediaType === "video"
            ? collectionData.collection.items[0].href
            : collectionData[2];
        this.setState({ assetLink });
      })
      .catch(error => console.log(error));
  };
}

export default AssetPage;
