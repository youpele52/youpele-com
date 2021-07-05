const poemInHTML = `
<div class="story-editor medium-editor-element" role="textbox" aria-label="Write your story" aria-multiline="true" contenteditable="true" spellcheck="true" data-medium-editor-element="true" data-medium-editor-editor-index="1" medium-editor-index="e3463520-b98f-0bf0-7f78-b28dc18398e7" data-placeholder="Type your text"><p data-p-id="d41d8cd98f00b204e9800998ecf8427e"><br></p>
<p data-p-id="cd9a928fb12f36762e4246aa3bdc6fbc">It skipped a beat, and another and another</p>
<p data-p-id="eb2599fc588565331f179d11ec2fa544">Then her heart started palpitating.</p>
<p data-p-id="6153fcd2a349535678c52b5848e562cc">There was an amble, a pace, a spurt, a trot, a whisk, </p>
<p data-p-id="a04a1c87674d1f467414791ba8bc7e1c">Followed by a full-blown sprint then a flight</p>
<p data-p-id="37b733b14073cdaa7ed3987c444bbce7">She meandered through this dark bloodcurdling, eerie alley.</p>
<p data-p-id="1f1dbb5325f94bedb9ab7a5c8b816f45">"Did I hear something?</p>
<p data-p-id="8b972e798f5ae33bced6372dbd5a64b9">Did I feel something, or did I see it?</p>
<p data-p-id="bb55b89b8f56c2392ec389f24ece417a">Was it ghost, or zombie or man or fear?"</p>
<p data-p-id="da574e72320ee5b02bcc0db5899353ae">Regardless, her emotions took the white house </p>
<p data-p-id="b210d1a0ea01e2acc09939ca20c900ec">Forcing 99% of rational mind to early grave. </p>
<p data-p-id="b86a153bea30195a850f78c913f6c11c">Two minutes collapsed into two seconds, there was galloping.</p>
<p data-p-id="2284739bb4dcaaac9b0297402f0a134b">It was quadruped, of which two was slower, persistent, consistent, </p>
<p data-p-id="77e4725fa0fd31a04c7d34bbb6d1d20c">and uniformly paced, obviously doesn't belong to her. </p>
<p data-p-id="733448dc39acbd883aa51f3849673fc4">It once sounded like an echo before it broke into her sphere</p>
<p data-p-id="51dc19e4ba2c1ab94adbdab96973221e">Like a space shuttle breaking into the Earth's atmosphere.</p>
<p data-p-id="bafccbe6955dc5cef379111b66a0c940">'Hi' he said, grappling her upper hand</p>
<p data-p-id="ffa398ec0510d3b43d03849a970d6f02">'Why were you running?' with a rather grimly face.</p>
<p data-p-id="7a80bd6681611b618e0a4fffb3275c3e">She tried to escape the high wall he'd built around her </p>
<p data-p-id="53cd0ab5fdfaadd5bed312c26643f7b4">She yelped, screeched but the clubby music from the blasting speakers  </p>
<p data-p-id="5ee33e0c7170a468f472c8cc1a54dc0c">Swallowed her whole</p>
<p data-p-id="85918971e11a1c77322b1ecbd1c00060">Push the envelope or succumb to the inevitable </p>
<p data-p-id="56d786af21360e4dcd0f4b87f46403be">Every fight she put led to a torn skin on one part of her body, </p>
<p data-p-id="02899e07f230e0495d84c540febe1d12">Chiefly succeeded by a greater strain,</p>
<p data-p-id="37fe9055284303289463fefc8451e453">Preceded by punch, slap, bop, kick, plunk or a mixture of the flavors, </p>
<p data-p-id="62c87887f971b37ca856bb4a57cca1de">On any part of her body he deemed most fitting.</p>
<p data-p-id="aff0d9d65617922c865df319949f0e3d">His pant, shirt and shoes as well as his penis were stained by her blood,</p>
<p data-p-id="52ace09b7275ab6ddda66d05f48a163b">After he climaxed, it flooded blood and sperm from her vagina.</p>
<p data-p-id="c9df278d48ea9602b8e44d5ea7375c95">Her once racing heart walked rather slow</p>
<p data-p-id="9f7855ac74ec5005fc8bc59ad46e2519">As her breath became shortened, and chest became tightened </p>
<p data-p-id="d697ab593f8afc96af64a4960db97d9f">Until she became breathless, cold and her heart stopped beating.&nbsp;</p><p><br></p></div>

`

const poemBody = poemInHTML
  .replace(/<[^>]*>?/gm, '')
  .replace(/[#+]/g, '')
  .replace(/\s\s+/g, '::')
  .split('::')

// const mew = poemBody.map((poem) => console.log(poem))

export default {
  id: 3,
  title: 'Chapter 3',
  dateWritten: '2019',
  body: poemBody,
  img: 'https://img.wattpad.com/cover/205049613-512-k769904.jpg',
}
