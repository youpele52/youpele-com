const poemInHTML = `
<div class="story-editor medium-editor-element" role="textbox" aria-label="Write your story" aria-multiline="true" contenteditable="true" spellcheck="true" data-medium-editor-element="true" data-medium-editor-editor-index="1" medium-editor-index="19bceb54-0799-92bb-e0c4-2305067f1476" data-placeholder="Type your text"><p data-p-id="07235250c24ea17db68293375bd61783">Her mascara enhanced eyelashes dispensed streams of tears, </p>
<p data-p-id="5c08e6b2602f52359aef6eeed910af5b">Which made tributaries which in turn formed delta</p>
<p data-p-id="3d4987ca269d5e5e2c6cde179c2dd9db">as the salty water meandered southwards. </p>
<p data-p-id="53bb574deb44957cab27721a3b6d0e4b">The light showers from her eyes continued </p>
<p data-p-id="df0e1306bf268173f30907dab0277353">as she rocked ununiformly back and forth</p>
<p data-p-id="98f503ac56fd7160637c1fba56f23392">like the Kennedy Rocker rocking chair.</p>
<p data-p-id="5a7a6837c1b66138ae385c360eafffc7">She continued whimpering noiselessly, </p>
<p data-p-id="cfc37782726e30ac9bad8bc2af5e41bd">trying hard to keep her head up which has become like living in Jupiter.</p>
<p data-p-id="d6c97194d81f56dd2bc5f87b9eb31f9f">Which in itself was 5 billion lightyears far from possible as</p>
<p data-p-id="189295b75c910b2e8a28ae86be11d67e">Stopping herself from thinking about what had happened.</p>
<p data-p-id="931749f18b87ee1b7f1f158194fd0a4b">As she unknowingly relaxed her wrist which has been a good wedge,</p>
<p data-p-id="06ad211063da57ed5e4fb15fcddde032">Her son's head changed direction perpendicular to the former – facing her.</p>
<p data-p-id="5ef0ecc1478f3966f9ded9ea395f611a">His mouth agape rather uncontrollably like a valve,</p>
<p data-p-id="1fc20b021c0bfe76ab8d194ebfd7d614">Letting out semi-solid mixture of blood and saliva </p>
<p data-p-id="cc6790733e7dc3abbd93bd0afc3f8067">That made its way to his mom's blood-soaked trouser.</p>
<p data-p-id="37685383659af46ac1a4f2cfbc0d44a6">In a New York minute, she looked at what she has been trying to look away from.</p>
<p data-p-id="d31e0b273579109a9c4c76072dcac967">The salty water rained heavily as she blubbered as loud as she possibly can.   </p>
<p data-p-id="20bb52884d91cde636ec101abf15765f">Gun bullets flew in random interval, towards random direction.</p>
<p data-p-id="8b7b7d2f18d890a1e113a8f58d7b4f02">Bringing down whosoever it came in contact with.</p>
<p data-p-id="10ee29f2d4de884b4e5ab9c5fb0cc347">Leaving splashes of blood on the nearest person, </p>
<p data-p-id="15a25b15684a9291baf11d6e1b080e59">Or on a nearby wall or on the vibrating ground.</p>
<p data-p-id="a6e48915d859590d39ec330d79a4fca2">People screamed, scrammed, ran hither and thither.</p>
<p data-p-id="071bbe5c7a571c2266c958c19e64ee2b">Some of them knocked down or hit by fleeing cars and trucks;</p>
<p data-p-id="c1e8b2686ee6e16c5a02e46c09fa5fea">Making way for the perpetrator and his minions – bullets. </p>
<p data-p-id="0a2758a30c777d0b17efa55dda39bbe6">Who earlier had stockpiled an arsenal of weapons, </p>
<p data-p-id="f4565830e6dea2a7d4d12ed42d657c9f">associated equipment and ammunition that included </p>
<p data-p-id="c1d37742d2ddadaa0e71f5cf5792b878">fourteen AR-15 rifles; all of which were equipped with bump stocks</p>
<p data-p-id="8f792ae27ce829e4a90d6f8a04d9fb3c">and twelve of which had 100-round magazines, </p>
<p data-p-id="fba3aa51301579b256ce289958f2bf95">eight A-10 rifles, a bolt action rifle, and a revolver. </p>
<p data-p-id="774fb672c4c7b4757762bb0c8a999816">Lock and load, he shot in rapid succession, </p>
<p data-p-id="69eb9621a4c0abe5d6acd87ca0c2142a">Reload, one gun a time.</p>
<p data-p-id="cbeeeeb8d8b4a7d2c50fa7c5617ab75e">He ran out of bullet at the 23rd minute after the start of his operation.</p>
<p data-p-id="ce9ece68a11d5ee07c9e5951fa3cec00">Then hopped on a roofless car, drove aimlessly carelessly, </p>
<p data-p-id="a146c075b5e5c0bdbae40f184767b77a">smashing every survival on his path. </p>
<p data-p-id="9d8db4f65adb696d9a11253f65dd2593">He rode into the young lady who was rocking her bloodied lifeless son,</p>
<p data-p-id="52c2d4b1d6fda52d5ccfb49905596339">His lowrider's bumper chopped her head off</p>
<p data-p-id="403b9700ef754da6c268dcd7a155a8cc">And the rest of its bodyweight crunched her and her son to the ground.</p><p><br></p></div>
`

const poemBody = poemInHTML
  .replace(/<[^>]*>?/gm, '')
  .replace(/[#+]/g, '')
  .replace(/\s\s+/g, '::')
  .split('::')

// const mew = poemBody.map((poem) => console.log(poem))
// console.log(poemBody)

export default {
  id: 1,
  title: 'Chapter 1',
  dateWritten: '2019',
  body: poemBody,
  img: 'https://img.wattpad.com/cover/205049613-512-k769904.jpg',
}
