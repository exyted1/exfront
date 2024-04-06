import Head from "next/head";

import CardSliderOne from "../components/common/sliders/card/card-slider-one";
import HeroSection from "../components/home-three/hero-section";
import Statistics from "../components/tokenomics/tokenomics";
import RoadMap from "../components/roadmap/roadmap";
import CardSliderTwo from "../components/common/sliders/card/card-slider-two";
import NftRoadMap from "../components/home-three/nft-roadmap";
import Micin from "../components/home-three/micin";


export default function Errorpage() {
	return (
		<>
			<Head>
				<title>Mink</title>
			</Head>
			<HeroSection />
			<Micin />
			<NftRoadMap />
			<CardSliderOne />
			<Statistics />
			<RoadMap />
			<CardSliderTwo />
		</>
	);
}
export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
