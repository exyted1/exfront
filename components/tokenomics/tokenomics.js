import data from "./data"
import { useState } from "react";
import { Chart } from "react-google-charts";
export default function Statistics  () {
  const [hovered, setHovered] = useState(false);

  const copyToClipboard = () => {
    const textToCopy = "A1Rd2rGscGqUzUTaqcK1yC7M2r9jCmVKxeHFmXVnPvL9";
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("Copied!");
      },
      () => {
        alert("Failed to copy");
      }
    );
  };

   const data2 = [
    ["Task", "Hours per Day"],
    ["Cex Listing", 5],
    ["Marketing & Partners", 10],
    ["Airdrop", 10],
    ["Liquidity", 10],
    ["Launchpad", 25],
    ["NFT Staking", 40],
  ];
  
   const options = {
    legend: "none",
    pieSliceText: "label",
    pieStartAngle: 100,
    backgroundColor: {
      fill: "transparent"      // Warna background transparan
    }
  };
  return (
    <div className="fugu--slider-section">
      <div className="container">
      <h2 className="center">Tokenomics</h2>
      <center><h4>Total supply : 10.000.000.000.000
							</h4></center>
              <center>
          <div
            className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX banner2"
            data-wow-delay="0.20s"
            style={{ marginTop: "20px" }}
          >
            <button
              className="fugu--btn bg-gray active"
              onClick={copyToClipboard}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered ? "Copy to Clipboard" : "A1Rd2rGscGqUzUTaqcK1yC7M2r9jCmVKxeHFmXVnPvL9"}
            </button>
          </div>
        </center>
        <div className="tokenomics_content">
          <div className="row">
            <div className="col-md-6">
              <div className="tokenomics_content_left">
                <div className="tokenomics_counter">

                </div>
                <div className="tokenomics_list">
                  {data?.map((item, i) => (

                    <div key={i} className="tokenomics_item">
                      <h5 className="tokenomics_item_title">
                        {item.title}
                        <span>{item.value}</span>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tokenomics_content_right" >
              <img src="/images/all-img/v3/tokenomics.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};
