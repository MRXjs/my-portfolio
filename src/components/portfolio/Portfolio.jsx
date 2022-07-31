import React from 'react';
import './portfolio.css';
import Productimg1 from '../../assets/portfolio/product/1.jpg';
import Productimg2 from '../../assets/portfolio/product/2.jpg';
import manipulationimg1 from '../../assets/portfolio/manipulation/1.jpg';
import manipulationimg2 from '../../assets/portfolio/manipulation/2.jpg';
import manipulationimg3 from '../../assets/portfolio/manipulation/3.jpg';
import manipulationimg4 from '../../assets/portfolio/manipulation/4.jpg';
import retouchingimg1 from '../../assets/portfolio/retouching/1.jpg';
import retouchingimg2 from '../../assets/portfolio/retouching/2.jpg';
import restorationimg1 from '../../assets/portfolio/restoration/1.jpg';
import restorationimg2 from '../../assets/portfolio/restoration/2.jpg';
import scriptingimg1 from '../../assets/portfolio/scripting/1.jpg';
import fullappcreationimg1 from '../../assets/portfolio/fullappcreation/1.jpg';
import browserextensionimg1 from '../../assets/portfolio/browserextension/1.jpg';
import browserextensionimg2 from '../../assets/portfolio/browserextension/2.jpg';
import swal from 'sweetalert';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const product = [
  {
    id: 1,
    Image: Productimg1,
    title: 'Bottle',
    github:
      'https://drive.google.com/file/d/1IwdicGZF8VLXDUy0c_S9UUWGivNHGhGq/view?usp=sharing',
    demo: 'https://youtu.be/vkAwHPaKrYY',
  },
  {
    id: 2,
    Image: Productimg2,
    title: 'Bag',
    github:
      'https://drive.google.com/file/d/1ZSGGvJVvu4M7b1hM7cjl35OEAg6HwOQn/view?usp=sharing',
    demo: '',
  },
];

const manipulation = [
  {
    id: 1,
    Image: manipulationimg1,
    title: 'Elephant',
    github:
      'https://drive.google.com/file/d/1Rcy67PJWDDm9HwRPQusQzdjpr-HC-_6u/view?usp=sharing',
    demo: '',
  },
  {
    id: 2,
    Image: manipulationimg2,
    title: 'Floating island',
    github:
      'https://drive.google.com/file/d/14lCPiCj_uxka1_p4N3G-diW-9bCKbdk_/view?usp=sharing',
    demo: '',
  },
  {
    id: 2,
    Image: manipulationimg3,
    title: 'Fishing in a dark night 🎣',
    github:
      'https://drive.google.com/file/d/1wN6pXawInbaxiUZOVbHJ60MhDthLZh5q/view?usp=sharing',
    demo: '',
  },
  {
    id: 2,
    Image: manipulationimg4,
    title: 'Micro world',
    github:
      'https://drive.google.com/file/d/1ikzIY4zXEIRFwCZ49wG0cYiezMD1Dad0/view?usp=sharing',
    demo: '',
  },
];

const retouching = [
  {
    id: 1,
    Image: retouchingimg1,
    title: 'Natural retouch',
    github:
      'https://drive.google.com/file/d/1D-HD-54FzQzpjOPMOqX4jtafHszsIICO/view?usp=sharing',
    demo: 'https://youtu.be/aT-TxJMpNDc',
  },
  {
    id: 2,
    Image: retouchingimg2,
    title: 'Natural retouch',
    github:
      'https://drive.google.com/file/d/1bmcwjb8bvb-nqKpWt8plS5TiIKXPz_b-/view?usp=sharing',
    demo: '',
  },
];

const restoration = [
  {
    id: 1,
    Image: restorationimg1,
    title: 'Black and white to color',
    github:
      'https://drive.google.com/file/d/1v3GkWYNcIIJKR8weQDnpWqYeDOn3t4Y_/view?usp=sharing',
    demo: 'https://youtu.be/yyaqfaEkpE0',
  },
  {
    id: 2,
    Image: restorationimg2,
    title: 'Old image restoration',
    github:
      'https://drive.google.com/file/d/1VVRzk_S5Fajw_JpmvnLu8FddeqOcH7YF/view?usp=sharing',
    demo: 'https://youtu.be/Vz1l2DyLYVo',
  },
];

const scripting = [
  {
    id: 1,
    Image: scriptingimg1,
    title: 'Auto add friends on facebook',
    github: '',
    demo: 'https://youtu.be/uA0WFdtFRpM',
  },
];

const browserextension = [
  {
    id: 1,
    Image: browserextensionimg1,
    title: 'Friend Request Autobot',
    github:
      'https://chrome.google.com/webstore/detail/friend-request-autobot/omocdnkpplmgpkmjfneckoilmcohogpf',
    demo: 'https://youtu.be/FyJPVCOIJAw',
  },
  {
    id: 1,
    Image: browserextensionimg2,
    title: 'Sweeper Tools',
    github:
      'https://chrome.google.com/webstore/detail/sweeper-tools/pcibfaiopgmpkbkjbealpklofkadafdd',
    demo: '',
  },
];

const fullappcreation = [
  {
    id: 1,
    Image: fullappcreationimg1,
    title: 'AR-fashion',
    github: 'https://github.com/MRXjs/AR-fashion',
    demo: 'https://youtu.be/uDvpmIFFyIM',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <Tabs className="container tabs">
        <TabList>
          <Tab>Image Editing.</Tab>
          <Tab>Web Development</Tab>
          <Tab>Mobile Apps</Tab>
        </TabList>

        <TabPanel>
          <Tabs className="container tabs">
            <TabList>
              <Tab>Product Image.</Tab>
              <Tab>Photo Manipulation</Tab>
              <Tab>Image Retouching</Tab>
              <Tab>Image Restoration</Tab>
            </TabList>
            <TabPanel>
              <div className="portfolio__container">
                {product.map(({id, Image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={Image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={github}
                          className={github.length === 0 ? 'btnhidden' : 'btn'}
                          target="_blank">
                          Download
                        </a>
                        <a
                          href={demo}
                          className={
                            demo.length === 0 ? 'btnhidden' : 'btn btn-primary'
                          }
                          target="_blank">
                          Watch videos
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="portfolio__container">
                {manipulation.map(({id, Image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={Image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={github}
                          className={github.length === 0 ? 'btnhidden' : 'btn'}
                          target="_blank">
                          Download
                        </a>
                        <a
                          href={demo}
                          className={
                            demo.length === 0 ? 'btnhidden' : 'btn btn-primary'
                          }
                          target="_blank">
                          Watch videos
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="portfolio__container">
                {retouching.map(({id, Image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={Image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={github}
                          className={github.length === 0 ? 'btnhidden' : 'btn'}
                          target="_blank">
                          Download
                        </a>
                        <a
                          href={demo}
                          className={
                            demo.length === 0 ? 'btnhidden' : 'btn btn-primary'
                          }
                          target="_blank">
                          Watch videos
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="portfolio__container">
                {restoration.map(({id, Image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={Image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={github}
                          className={github.length === 0 ? 'btnhidden' : 'btn'}
                          target="_blank">
                          Download
                        </a>
                        <a
                          href={demo}
                          className={
                            demo.length === 0 ? 'btnhidden' : 'btn btn-primary'
                          }
                          target="_blank">
                          Watch videos
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs className="container tabs">
            <TabList>
              <Tab>scripting</Tab>
              <Tab>browser extension</Tab>
            </TabList>
            <TabPanel>
              <div className="portfolio__container">
                {scripting.map(({id, Image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={Image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={github}
                          className={github.length === 0 ? 'btnhidden' : 'btn'}
                          target="_blank">
                          Download
                        </a>
                        <a
                          href={demo}
                          className={
                            demo.length === 0 ? 'btnhidden' : 'btn btn-primary'
                          }
                          target="_blank">
                          Watch videos
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="portfolio__container">
                {browserextension.map(({id, Image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={Image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={github}
                          className={github.length === 0 ? 'btnhidden' : 'btn'}
                          target="_blank">
                          Download
                        </a>
                        <a
                          href={demo}
                          className={
                            demo.length === 0 ? 'btnhidden' : 'btn btn-primary'
                          }
                          target="_blank">
                          Watch videos
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs className="container tabs">
            <TabList>
              <Tab>full app creation</Tab>
            </TabList>
            <TabPanel>
              <div className="portfolio__container">
                {fullappcreation.map(({id, Image, title, github, demo}) => {
                  return (
                    <article key={id} className="portfolio__item">
                      <div className="portfolio__item-image">
                        <img src={Image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a
                          href={github}
                          className={github.length === 0 ? 'btnhidden' : 'btn'}
                          target="_blank">
                          Download
                        </a>
                        <a
                          href={demo}
                          className={
                            demo.length === 0 ? 'btnhidden' : 'btn btn-primary'
                          }
                          target="_blank">
                          Watch videos
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Portfolio;
