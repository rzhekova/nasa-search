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
    const { id } = this.props.match.params;
    this.fetchAssetData(id);
  }

  render() {
    const { assetDetails, assetLink } = this.state;

    return assetLink ? (
      <div>
        <hr />
        <div className="top-blue-line" />
        <div className="asset-page">
          <AssetHeader
            title={assetDetails.data[0].title}
            description={assetDetails.data[0].description}
          />
          <Asset
            title={assetDetails.data[0].title}
            mediaType={assetDetails.data[0].media_type}
            assetLink={assetLink}
          />
        </div>
        <SocialFooter
          assetLink={assetLink}
          title={assetDetails.data[0] ? assetDetails.data[0].title : null}
        />
      </div>
    ) : (
      "Loading..."
    );
  }

  fetchAssetData = id => {
    const URL = `https://images-api.nasa.gov/search?q=${id}`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const assetDetails = data.collection.items[0];
        const mediaType = assetDetails.data[0].media_type;

        fetch(assetDetails.href, { mode: "cors" })
          .then(response => response.json())
          .then(collectionData => {
            const assetLink =
              mediaType === "image"
                ? collectionData.filter(collectionDatum =>
                    collectionDatum.includes("thumb")
                  )[0]
                : collectionData[2];
            this.setState({ assetDetails, assetLink });
          });
      })
      .catch(error => console.log(error));
  };
}

export default AssetPage;
