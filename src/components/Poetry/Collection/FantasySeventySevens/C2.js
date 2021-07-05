const poemInHTML = `
<pre>                                    <p data-p-id="a6e30e2a0862ca2e8a66649a6e40b925">Deep shallows, no shadows<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="cc972d4b4a27a58dd0c56bbcdf1b1de8">Deadly gallows in, petty Halloween<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="ab3e0a45e087183a8f5c91417c4089e0">Scary night, blackest light<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="ed69bd32a30659307f73ff59850c8070">Dark smoke chasing, clouds replacing<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="c05e06e0a79ce59121e4b6c681f82db8">Key ways open, quarter to oven<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="a2c34d98516fed4baef862c7887d5cc0">Tanks are flying, the days are lying<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="3e8978b6e609e99130ed327788d3b3c1">The earth's aligning, the moon is lined in<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="d229b654382b6399c35a8da7f0528b33">Before the moon bloods red, and earth smokes as said<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="7f0290e150baf7093a809f10f0031bb7">The sun would be darkened, those with ears should hearken!<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                            </pre>

`

const poemBody = poemInHTML
  .replace(/<[^>]*>?/gm, '')
  .replace(/[#+]/g, '')
  .replace(/\s\s+/g, '::')
  .split('::')

// const mew = poemBody.map((poem) => console.log(poem))

export default {
  id: 2,
  title: 'Setting the Sun on Fire',
  dateWritten: '',
  body: poemBody,
  img: '',
}
