const poemInHTML = `
<pre>                                    <p data-p-id="4292b51e2cf682b77ac61eabf6cba768">Thou night! 29/04/2008<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="47ead427f899dc41dd5a17561dd777c0">Oh thou darkest night of all nights<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="4a93ddff94ff1b0608bd43d319dc44db">Why did you resist to coexist with the day<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="cb562e878b3f940cfb430c05f0a3305b">Even when I offer you the most beautiful sunshine as light <span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="058ad5af098b6683f75bc36afc1a169a">Thou refuseth it and chose to be homogenous like a gay<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="9ac8b5a3bd1a9d9ad0f72b24cffdc12d">Oh thou night which I regret seeing<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="5da975d31caef0dd9824ee95b899ba43">Why do you love to enhance the act of evil friends? <span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="99d491a951d911701b4690d01a15f3fd">Why do you love to use your claws, teeth, pins and stings on the upright beings?<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="5d4f96fa36eae394356c0c5e6e3a22c0">Evil is evil, the evils love evil, that's why night uses the evils to use their evil make the good bend<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="8c7077adb54e0973060f7a413eb3b8f0">Oh! Let there be light and there was<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="8746007b22d74311a0c78d9a7f71a021">And the light was separated from the darkness till tomorrow <span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="de4d4b0c791337b28a9d20c742ce3da0">The light was called Day and the darkness Night, and they fought without laws and with laws<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="d4c0e262d37f85dec8ae3c0e711fd33a">Night that lost the battle at hell still hope on another tomorrow<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="69b17e2e0a3ab0bf2b58165190df8545">Oh thou night your night is as lifeless as death<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                    <p data-p-id="138bfacf7659bffa9d862562403f48a6">Die! Die!! Can't wait to see thee take thy lastly last breath<span class="comment-marker hide-marker on-inline-comments-modal">
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
  id: 8,
  title: 'THOU NIGHT!',
  dateWritten: '29.05.2008',
  body: poemBody,
  img: '',
}
