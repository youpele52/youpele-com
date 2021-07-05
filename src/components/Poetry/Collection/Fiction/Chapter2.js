const poemInHTML = `
<div class="story-editor medium-editor-element" role="textbox" aria-label="Write your story" aria-multiline="true" contenteditable="true" spellcheck="true" data-medium-editor-element="true" data-medium-editor-editor-index="1" medium-editor-index="320f3017-49cb-40e6-dd6b-b89d9272f37a" data-placeholder="Type your text"><p data-p-id="bb544534b62b11244ca7649c1dd2b559">Its tip tore the topsoil, tilling, as it strolled on it,</p>
<p data-p-id="1112f546ce654155ada723de7f9d73cf">Infusing blood into the earth</p>
<p data-p-id="d166568a46bd4b33fd530a0720710920">Pints of blood dripped on its back, gliding through the flat </p>
<p data-p-id="ec28958451d22ad7d1a9b1701d0a35f2">Making their way to the tip</p>
<p data-p-id="2f026a4449bb01c905c3d0b03a3fa3e0">Its wooden handle could only absorb so little, </p>
<p data-p-id="3ece9e14efaf986dacfd446f537a0341">tunneling the rest to the back and flat </p>
<p data-p-id="d80cfb33468bdf4eb52e7cca0c083677">And the hand of the holder is as red as </p>
<p data-p-id="655dd42482f36c468b7c8254c07ae6b2">the heart as the person that has been butchered. </p>
<p data-p-id="edb390ea02c856b87a21d23bbe7a7a4f">House flies, their friends and foes already feasting on the exposed </p>
<p data-p-id="b83e82c214b5fd3a98a8108c2729b36e">Organs: bowels, stomach, grey matter, and the heart</p>
<p data-p-id="0ab853b22506aa4439cbc73fd8c75330">From which those pints of blood once get their pump.<br></p><p><br></p></div>
`

const poemBody = poemInHTML
  .replace(/<[^>]*>?/gm, '')
  .replace(/[#+]/g, '')
  .replace(/\s\s+/g, '::')
  .split('::')

// const mew = poemBody.map((poem) => console.log(poem))

export default {
  id: 2,
  title: 'Chapter 2',
  dateWritten: '2019',
  body: poemBody,
  img: 'https://img.wattpad.com/cover/205049613-512-k769904.jpg',
}
