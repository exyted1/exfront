import checkIcon from "../../public/images/kycimg/RMcheckicon.svg";
import minusIcon from "../../public/images/kycimg/munies.svg";

export default {
  data: [
    {
      year: "2024",
      items: [
        {
          title: "Phase 1",
          isLunched: true,
          checkList: [
            {
              icon: checkIcon,
              text: "Concept and whitepaper created",
            },
            {
              icon: checkIcon,
              text: "Official website launch",
            },
            {
              icon: checkIcon,
              text: "Official telegram channel created",
            },
            {
              icon: checkIcon,
              text: " Nft launchpad started",
            },
            {
              icon: checkIcon,
              text: " Staking feature opened",
            },
          ],
        },
        {
          title: "Phase 2",
          isLunched: true,
          checkList: [
            {
              icon: checkIcon,
              text: " Mink coin launchpad on one of the global exchanges",
            },
            {
              icon: checkIcon,
              text: "Mink coin liquidity pool added (dex)",
            },
            {
              icon: checkIcon,
              text: "Global exchange listing (cex)",
            },
            {
              icon: minusIcon,
              text: " Mink coin airdrop",
            },
            {
              icon: minusIcon,
              text: "Simultaneous trading opened",
            },
          ],
        },
        {
          title: "Phase 3",
          isLunched: true,
          checkList: [
            {
              icon: checkIcon,
              text: "Mink coin listing on cmc & cgc",
            },
            {
              icon: checkIcon,
              text: "50k Mink coin holder reached",
            },
            {
              icon: checkIcon,
              text: "Mink coin Trending in various media",
            },
            {
              icon: minusIcon,
              text: "Minkcoin breaks $100M marketcap",
            },
          ],
        },
        {
          title: "Phase 4",
          isLunched: true,
          checkList: [
            {
              icon: checkIcon,
              text: "Mink coin is listed on more than 5 global exchanges",
            },
            {
              icon: checkIcon,
              text: " 100k Mink coin holder reached",
            },
            {
              icon: checkIcon,
              text: "100k followers on x",
            },
            {
              icon: minusIcon,
              text: "100k users on telegram",
            },
            {
              icon: minusIcon,
              text: "Minkcoin breaks $1B marketcap",
            },
            {
              icon: minusIcon,
              text: " To the moon 🚀🚀🚀",
            },
          ],
        },
      ],
    },
  ],
};
