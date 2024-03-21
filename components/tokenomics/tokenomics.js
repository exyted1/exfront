import data from "./data"
import { Chart } from "react-google-charts";
export default function Statistics  () {
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
              <Chart
      chartType="PieChart"
      data={data2}
      options={options}
      width={"100%"}
      height={"400px"}
    />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
};
