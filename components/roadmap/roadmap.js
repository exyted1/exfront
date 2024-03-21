import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "../components/button";
import roadmapData from "./data";
import RoadMapItem from "./RoadMapItem/RoadMapItem";
import RoadMapStyleWrapper from "./RoadMap.style";

export default function RoadMap () {
  const { data } = roadmapData;

  return (
    <div className="fugu--slider-section">
      <div className="container">
        <center><h2>Roadmap</h2></center>

        <div className="roadmap_content">
          <Tabs>
            <TabList>
              {data?.map((item, i) => (
                <Tab key={i}>{item.title}</Tab>
              ))}
            </TabList>

            {data?.map((roadMaps, i) => (
              <TabPanel key={i} className="row tabs-row">
                {roadMaps.items?.map((roadMap, j) => (
                  <div key={j} className="col-md-x">
                    <RoadMapItem key={j} {...roadMap} />
                  </div>
                ))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};
