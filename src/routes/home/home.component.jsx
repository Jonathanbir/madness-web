import { useState } from "react";
import Video from "../../components/video/video.component";
import Banner from "../../components/banner/banner.component";
import Navigation from "../navigation/navigation.component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.styles.scss";

const Home = () => {
  const [hover, setHover] = useState(null);
  const [open, setOpen] = useState(false);
  const animateFrom = { x: -100 };
  const animateTo = { x: 0 };

  const background = {
    banner01:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_1_1.jpg",
    banner02:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_2_1.jpg",
    banner03:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_3_1.jpg",
    banner04:
      "https://www.mdnsonline.com/image/data/Banners/20220326/banner_4_1.jpg",
  };

  return (
    <>
      {open && (
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.5 }}
        >
          <Navigation setOpen={setOpen} />
        </motion.div>
      )}
      <div className="background">
        <Video />
        <div
          className="full-screen"
          style={{
            backgroundImage: `url(${hover})`,
          }}
        >
          <Link className="nav-link" to="/">
            <div className="logo" onClick={() => setOpen(!open)} />
          </Link>
          <div className="home-background">
            <Banner
              title="MADNESS"
              onMouseEnter={() => setHover(background.banner01)}
              onMouseLeave={() => setHover(null)}
            />
            <Banner
              title="JPAN COLLECTION"
              onMouseEnter={() => setHover(background.banner02)}
              onMouseLeave={() => setHover(null)}
            />
            <Banner
              title="MAD_SUPPLY"
              onMouseEnter={() => setHover(background.banner03)}
              onMouseLeave={() => setHover(null)}
            />
            <Banner
              title="COLLABORATIONS"
              onMouseEnter={() => setHover(background.banner04)}
              onMouseLeave={() => setHover(null)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
