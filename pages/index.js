import Head from "next/head";

import CardSliderOne from "../components/common/sliders/card/card-slider-one";
import HeroSection from "../components/home/hero-section";
import Statistics from "../components/tokenomics/tokenomics";
import RoadMap from "../components/roadmap/roadmap";
import CardSliderTwo from "../components/common/sliders/card/card-slider-two";
import NftRoadMap from "../components/home/nft-roadmap";
import Micin from "../components/home/micin";
import Audit from "../components/home/audit";


export default function Home() {
	return (
		<>
			<Head>
				<title>Mink</title>
			</Head>
			<HeroSection />
			<Micin />
			<NftRoadMap />
			<CardSliderOne />
			<Audit />
			<Statistics />
			<RoadMap />
			<CardSliderTwo />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
