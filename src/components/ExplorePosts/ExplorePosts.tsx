'use client';
import { useEffect, useState } from 'react';

export default function ExplorePosts() {
  const [currentPostIdx, setCurrentPostIdx] = useState<number>(0);
  const posts = [
    { content: 'Palo santo fit dolore activated charcoal yes plz' },
    { content: 'Lomo qui pickled XOXO, nisi marxism raclette. Sed hella blog aute single-origin coffee. Cornhole narwhal 90\'s mustache messenger bag. Retro meggings pug cronut chia. Tbh yes plz ut pariatur quinoa succulents consectetur scenester bruh marfa anim readymade umami.' },
    { content: 'Yes plz flexitarian freegan, viral small batch ipsum +1.' },
    { content: 'Commodo man braid ut butcher fanny pack. Chartreuse live-edge pariatur gorpcore williamsburg artisan celiac green juice small batch palo santo twee dolore. Yuccie 3 wolf moon direct trade, tattooed authentic solarpunk franzen prism synth polaroid typewriter meditation taxidermy vaporware. Yes plz normcore anim organic godard jianbing roof party in eu. Portland duis YOLO small batch af, food truck mixtape vexillologist DSA heirloom try-hard. Sartorial exercitation irony, chartreuse ut ugh gorpcore blackbird spyplane single-origin coffee neutral milk hotel retro.' },
    { content: 'Tempor dolor gentrify proident williamsburg, stumptown dolore solarpunk blog polaroid cold-pressed beard wayfarers humblebrag ea.' },
    { content: 'Elit ullamco blue bottle raw denim chambray enamel pin proident eiusmod ut 3 wolf moon heirloom fit pok pok.' },
    { content: 'Dummy text? More like dummy thicc text, amirite?' },
    { content: 'I\'m baby next level deserunt skateboard put a bird on it food truck lomo selfies laborum mumblecore copper mug pickled. Keffiyeh solarpunk celiac raclette plaid esse craft beer la croix bicycle rights coloring book deserunt tacos. Next level poutine actually offal intelligentsia. Air plant eu chia cred whatever.' },
    { content: 'Tumeric 90\'s bespoke yes plz knausgaard, glossier fugiat single-origin coffee tonx mustache blog in actually pop-up. VHS Brooklyn cronut praxis la croix ennui 90\'s synth air plant eu crucifix bodega boys velit. Raw denim bespoke unicorn church-key, narwhal la croix subway tile. Messenger bag fixie jianbing, minim authentic palo santo tacos. Meh ea reprehenderit aliquip man braid, taxidermy laboris asymmetrical tote bag snackwave irony vaporware.' },
    { content: 'Unicorn post-ironic PBR&B subway tile narwhal snackwave sed gatekeep synth duis offal quis.' },
    { content: 'Fingerstache meh ut, raw denim synth mlkshk heirloom ex mumblecore DSA live-edge keytar pug fixie non.' },
    { content: 'Green juice big mood paleo' },
    { content: 'Kombucha glossier et palo santo solarpunk ex. Crucifix art party duis hot chicken actually palo santo magna post-ironic. Single-origin coffee etsy humblebrag organic, four loko same cupping normcore blog vegan squid aute franzen.' },
    { content: 'Try-hard adaptogen jean shorts williamsburg lomo' },
]

  const handleNext = () => {
    setCurrentPostIdx((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentPostIdx(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
    );
  };

  return (
    <main>
        <div>
          <h1>All Posts</h1>
          <p>{posts[currentPostIdx].content}</p>
          <div>
            <button onClick={handlePrev} disabled={currentPostIdx === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentPostIdx === posts.length - 1}
            >
              Next
            </button>
          </div>
        </div>
    </main>
  );
}
