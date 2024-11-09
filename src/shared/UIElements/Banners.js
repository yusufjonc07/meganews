import React, { useState } from "react";
import { Fade } from "react-reveal";

const Banners = () => {
  const [BANNERS, setBanner] = useState([
    {
      _id: "sowdnienf",
      title: "Spirituality",
      description: "Free template designed by FreeHTML5.co",
      imageUrl:
        "https://thumbs.dreamstime.com/b/chameleon-close-up-eye-portrait-reptile-animal-nature-photo-exotic-pet-macro-colorful-scales-madagascar-wildlife-zoo-photography-319830662.jpg",
    },
    {
      _id: "qwfiowehfiuw",
      title: "DECOR",
      description: "Sed ut perspiciatis unde omnis iste natus",
      imageUrl:
        "https://png.pngtree.com/thumb_back/fw800/background/20220515/pngtree-exotic-fruits-lie-on-a-wooden-background-kiwi-exotic-tropical-photo-image_17966810.jpg",
    },
    {
      _id: "wdfeoijhgufr",
      title: "Architecture",
      description: "Sed ut perspiciatis unde omnis iste natus",
      imageUrl: "https://media.bluentcad.com/images/style-architecture.webp",
    },
    {
      _id: "wdfeoijhgdwufr",
      title: "Interior",
      description: "Sed ut perspiciatis unde omnis iste natus",
      imageUrl:
        "https://www.floridaleathergallery.com/blog/wp-content/uploads/sites/116/2020/12/moderninteriordesign.jpg",
    },
    {
      _id: "dwqwfefwef",
      title: "Food",
      description: "Sed ut perspiciatis unde omnis iste natus",
      imageUrl:
        "https://img.freepik.com/premium-photo/juicy-american-burger-hamburger-cheeseburger-with-two-beef-patties-with-sauce-basked-black-space_124865-5964.jpg",
    },
    {
      _id: "wevrbere2cdrev",
      title: "Travel",
      description: "Sed ut perspiciatis unde omnis iste natus",
      imageUrl: "https://endota.com/nz/wp-content/uploads/2022/02/Plane.jpg",
    },
  ]);

  const chooseBanner = (i) => {
    let banners = [];

    for (let index = 0; index < BANNERS.length; index++) {
      const banner = BANNERS[index];
      if (index >= i) {
        banners.push(banner);
      }
    }
    for (let index = 0; index < BANNERS.length; index++) {
      const banner = BANNERS[index];
      if (index < i) {
        banners.push(banner);
      }
    }

    setBanner(banners);
  };

  return (
    <div className="row ml-0 mr-0">
      {BANNERS.map((banner, index) =>
        index <= 1 || window.innerWidth < 768 ? (
          <div className="col-md-6 pl-0 pr-0" key={banner._id}>
            <div className="card" style={{userSelect: "none"}}>
              <img className="card-img" src={banner.imageUrl} alt="" />
              <div className="card-img-overlay d-flex align-items-center justify-content-center flex-column">
                <p className="bg-dark p-2">{banner.title}</p>
                <hr />
                <Fade top duration={250}>
                  <h2>{banner.description}</h2>
               
                  <a href="article.html" className="btn">
                    READ MORE
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-3 mt-2 pr-0 pl-0" key={banner._id}>
            <div
              style={{
                cursor: "pointer",
                transform: "translateY(-10px)",
                transition: ".2s",
              }}
              className="card"
              onClick={() => chooseBanner(index)}
            >
              <img className="card-img" src={banner.imageUrl} alt="" />
              <div className="card-img-overlay">
                <h5>{banner.title}</h5>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Banners;
