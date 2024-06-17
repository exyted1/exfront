import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSection() {
	return (
		<div className="fugu--hero-section" style={{ backgroundImage: "url(/images/all-img/v3/hero-bg.png)" }}>
			<div id="fugu--counter"></div>
			<div className="container">
			<a href="https://www.pinksale.finance/solana/launchpad/9nAFikRNTRwqaFvt2V6N4FCQ5GS7thTPHLqbsfMPjKoM" target="_blank">
			<div className="row banner">
					<div className="col-xl-9 col-md-6">
						<div className="wow fadeInUpX" data-wow-delay="0.30s">
								<img src="/images/all-img/v3/banner.png" alt="" />
							</div>
						</div>
					</div>
					</a>
				<div className="fugu--hero-content">
					<h2 className="wow fadeInUpX banner2" data-wow-delay="0.10s">
						IT'S TIME FOR MEME COIN TO EVOLVE
					</h2>
					<center>
						<p className="wow fadeInUpX banner2" data-wow-delay="0.10s">
						Minkspace is a NFT staking platform with mink coin as utility token for create the new step in the evolution of meme coins that collaborates the concept of a meme coin with an NFT art to create an ecosystem where both reinforce each other and interact synergistically.
						</p>
					</center>
					<div className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX banner2" data-wow-delay="0.20s">
						<div className="fugu--btn-group">
							<Link href="https://staking.minkspace.com/" legacyBehavior>
								<a className="fugu--btn bg-gray active">Launch App</a>
							</Link>
							<Link href="https://paper.minkspace.com/" legacyBehavior>
								<a  className="fugu--btn bg-gray active">Fairlauch</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="fugu--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div>
				<div className="fugu--hero-shape2"></div>
			</div>
		</div>
	);
}
