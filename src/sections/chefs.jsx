import SwipperSlider from "../components/swipper";

import chef_1 from "../images/our-chef/chef-1.WebP";
import chef_2 from "../images/our-chef/chef-2.WebP";
import chef_3 from "../images/our-chef/chef-3.WebP";
import chef_4 from "../images/our-chef/chef-4.WebP";
import chef_5 from "../images/our-chef/chef_5.WebP";
import chef_6 from "../images/our-chef/chef_6.WebP";
import chef_7 from "../images/our-chef/chef_7.WebP";
import chef_8 from "../images/our-chef/chef_8.WebP";

function Chefs() {
  const arrayImages = [
    chef_1,
    chef_2,
    chef_3,
    chef_4,
    chef_5,
    chef_6,
    chef_7,
    chef_8,
  ];
  return (
    <>
      <h2 className="section-name">
        Our <strong>Chefs</strong>
      </h2>
      <section className="chefs-wrapper">
        <SwipperSlider arrayImages={arrayImages} />
      </section>
    </>
  );
}

export default Chefs;
