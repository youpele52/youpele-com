const poemInHTML = `
<div class="story-editor medium-editor-element" role="textbox" aria-label="Write your story" aria-multiline="true" contenteditable="true" spellcheck="true" data-medium-editor-element="true" data-medium-editor-editor-index="1" medium-editor-index="bcfe2885-5ec9-b52d-0038-3badf221b704" data-placeholder="Type your text"><p data-p-id="cddbe92e402e9b6a947a1648a415364b">Snick! Snick!! Flick!!!</p>
<p data-p-id="6f1cd7c0774defa1c46237ff75cbeb9d">The sparkwheel rolled, </p>
<p data-p-id="c1e921022d2e22c6af88c17675aa156f">The jet, alongside fork and fork spring opened the valve. </p>
<p data-p-id="4dafa4c8e9d27f9cf8e1d0a81d45e906">Letting the gas through, "Go! You are free."</p>
<p data-p-id="3eac76a8268f996e96622f3424e01012">The flat spring applied pressure to the flint, generating a spark.</p>
<p data-p-id="4e0fcbb9af1797b7684683f0dcbd7965">The spark met with the free-flowing gas... </p>
<p data-p-id="ae0f7d9b7da5858e0bf9e09f382afa46">...yellow flame burst through the hood.</p>
<p data-p-id="86e9b816f919522352cb22be3d533b54">Instantly the flame was carried like a child by the breeze, </p>
<p data-p-id="90743e5c4814d197697b1f22451aae8e">Who breastfed it with oxygen. </p>
<p data-p-id="220e8a1333e2ae64e5c64f78cf1cce66">The flame grew older and bigger, and caught up to a cloth stuffed inside a bottle.</p>
<p data-p-id="b0a1a5a0de07b3823ca8f641802a7e88">The flame ran through the cloth until it met with its heart desire – fuel. </p>
<p data-p-id="372ab7744e21bd6c50db7ecd4a33af8f">Kata-kata, kata-kata, kata-kata, kata-kata, kata-kata</p>
<p data-p-id="be9e52daa1bee90eef8205de42af85ec">Each of his foot moved quickly simultaneously</p>
<p data-p-id="5446d5cc671a9aed57dcb3af3a6eeb58">without spending time with mother earth who'd being carrying them for ages</p>
<p data-p-id="d067e1e8d913359beb51e698c18d9812">his hands swung through the air creating tsunamic air wave, </p>
<p data-p-id="a746e81907942e4d9169423550511d0e">kata-kata until he reached a car, he broke the glass </p>
<p data-p-id="9ccc01fffcd74a8320cb7fba9b15ba7e">and deposited the Molotov cocktail inside the car. </p>
<p data-p-id="417eadfd8865d5b1afeb339662831314">Boom!!!! Goes the car and the life of that foreigner inside of it</p>
<p data-p-id="3f69acae3ae30042413ea67376bd41e4">Who was already scared to death.</p>
<p data-p-id="be6b33d6ffd7bb27ce25552dfb280a04">More Molotov cocktail were thrown into foreigners'</p>
<p data-p-id="a1e058d1330d56e7338452d908a442ac">Houses, shops, businesses, cars.</p>
<p data-p-id="7a81ff21a8dcfe561e76cb4b6d5df2b9">Besides burning 'em alive, harassing them, and slaughtering them.</p>
<p data-p-id="4139bcfee97637ddea0d11fa046d7e67">Waves of angry chanting protesters swept through every street </p>
<p data-p-id="9d9e29021e87c612f3374ca91149cac7">with eagle eyes for their perceived enemies, </p>
<p data-p-id="40e2b6bb70da35562439824319786e78">adorning them with "L'Oréal hate cosmetics".</p><p><br></p></div>
`

const poemBody = poemInHTML
  .replace(/<[^>]*>?/gm, '')
  .replace(/[#+]/g, '')
  .replace(/\s\s+/g, '::')
  .split('::')

// const mew = poemBody.map((poem) => console.log(poem))

export default {
  id: 4,
  title: 'Chapter 4',
  dateWritten: '2019',
  body: poemBody,
  img: 'https://img.wattpad.com/cover/205049613-512-k769904.jpg',
}
