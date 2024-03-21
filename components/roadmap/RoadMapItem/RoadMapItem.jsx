import RoadMapItemStyleWrapper from "./RoadMapItem.style"
import checkIcon from "../../../public/images/icons/roadmapChackicon.svg"

export default function RoadMapItem  ({ title, isLunched, checkList })  {
    return (
        <RoadMapItemStyleWrapper>
            <h4 className="roadmap_title">{title}</h4>
            <div className="roadmap_content">
                <ul className="roadmap_list">
                    {checkList?.map((item, i) => (

                        <li key={i}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </RoadMapItemStyleWrapper>
    )
}