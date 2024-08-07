/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FooterHomeThree() {
	return (
		<footer className="fugu--footer-section">
			<div className="container">
				<div className="fugu--footer-top">
							<div className="fugu--textarea">
								<div className="fugu--footer-logo">
									<img src="/images/logo/mink.png" alt="" className="light-version-logo" />
								</div>
								<div className="fugu--social-icon">
									<ul>
										<li>
											<Link href="https://twitter.com/minkspace_com">
												<img src="/images/social2/x.jpg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="https://t.me/minkspace_com">
												<img src="/images/social2/telegram.svg" alt="" />
											</Link>
										</li>
										<li>
											<Link href="https://paper.minkspace.com/">
												<img src="/images/social2/gitbook.jpg" alt="" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
				</div>
				<div className="fugu--footer-bottom">
					assets <p>&copy; Copyright 2024, All Rights Reserved by Mink</p>
					<div className="fugu--footer-menu">
					</div>
				</div>
			</div>
		</footer>
	);
}
