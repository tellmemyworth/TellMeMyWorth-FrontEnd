import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import AssetsTable from "./assetsTable";
import AdsTop from "./adsTop";
import AddrSearch from "./addrSearch";
import AddrUpdate from "./addrUpdate";
import { paginate } from "../utils/paginate";
import { getAssets, getTotalValue } from "../services/walletService";
import { getProjects } from "../services/projectService";
import _ from "lodash";

class Home extends Component {
  render() {
    return (
      <div className="row">
        {/* <AdsTop /> */}
        <div className="px-4 py-1 my-3 text-center">
          <h1>Welcome to TellMeMyWorth!</h1>
          <h6>
            Please consider donating to $tellmemyworth to help keep us alive.
          </h6>
        </div>

        <div className="col">
          <AddrSearch history={this.props.history} />
          {/* <AddrUpdate /> */}
        </div>
        <div>
          <h2 className="px-4 py-1 my-3 text-center">How to Use</h2>
          <p>
            Paste your staking (stake) or recieving (addr1) address into the
            Search bar and click "Search".
          </p>
          <p>
            If this is your first time using us or your wallet's assets have
            changed since your last visit, you will have to update your assets
            on the next page, just click "Update".
          </p>
          <p>
            It's that simple! You'll be able to determine how much your hard
            earned assets are worth!
          </p>

          <h2 className="px-4 py-1 my-3 text-center">How it Works</h2>

          <p>
            Our technology determines your assets' values based on their best
            trait found by determining the floor price of each trait on the most
            used CNFT marketplace,{" "}
            <a href="https://www.jpg.store/" target="_blank" className="link">
              jpg.store
            </a>
            .
          </p>
          <p>
            Want to double check our price determination? Head over to{" "}
            <a href="https://cnft.tools/" target="_blank" className="link">
              cnft.tools
            </a>{" "}
            and search for the project. Once there either filter Listings to JPG
            Store and the trait we determined is its best, or from its project
            page on CNFT.tools you can search its asset number and view its
            Trait Floors.
          </p>

          <h2 className="px-4 py-1 my-3 text-center">
            We're Still Developing!
          </h2>

          <p>
            Our vision is to allow all NFT holders the ability to quickly check
            their collection's value with a simple click. However; this will
            take time to come to fruition.
          </p>
          <p>
            We decided to release the calculator in phases starting with the top
            50 unique 1 of 1 collections based on{" "}
            <a href="https://opencnft.io/" target="_blank" className="link">
              opencnft.io
            </a>
            's All Time sales and 10 hand-selected tokens from{" "}
            <a href="https://muesliswap.com/" target="_blank" className="link">
              muesliswap.com
            </a>
            . For the first month of release, we will be running a{" "}
            <a
              href="https://twitter.com/TellMeMyWorth"
              target="_blank"
              className="link"
            >
              Twitter
            </a>{" "}
            poll to add the most wanted collections to the calculator, so we can
            get the most enthusiastic communities added ASAP! If you would like
            to get your project added sooner or after the poll, please message
            us in our official{" "}
            <a
              href="https://discord.gg/e2Yh7jux"
              target="_blank"
              className="link"
            >
              Discord
            </a>
            .
          </p>
          <p>
            {" "}
            The next phases involve adding in metaverse properties and art
            pieces, so we can fully Tell You Your Worth!
          </p>

          <h2 className="px-4 py-1 my-3 text-center">Want to Advertise?</h2>
          <p>
            {" "}
            Message us on Discord or email us at TellMeMyWorth@gmail.com to find
            out how!
          </p>
          <p style={{ fontSize: 14 }}>
            {" "}
            *Disclaimer: Values presented are not meant to be a definitive
            price. We cannot guarantee the prices displayed are the prices you
            would recieve for a sale. This tool to use to determine an estimated
            value of your wallet. We are still developing the site! We are
            working first to allow you to view all your unique 1 of 1
            collections and tokens. We plan to eventually display all possible
            assets in your wallet, but this will take some time.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
