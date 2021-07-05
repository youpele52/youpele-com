const poemInHTML = `
<pre>                                          <p data-p-id="fee26bbdfe5ee3fd5214a5ab45547349">Owl<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                          <p data-p-id="e8ba3450603aeb3bff3560fbe20add30">Oculo providentiae<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                          <p data-p-id="e71e0cee4c8cac2bc592f50947d0275c">Overseeing, necromantic imperialism<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                          <p data-p-id="cd04c4d5e312713eac0e0f0eaf0d7092">Bossing most's sixth sense<span class="comment-marker hide-marker on-inline-comments-modal">
  <span class="num-comment">
    +
  </span>
  <span class="fa fa-comment-count fa-wp-neutral-2 " aria-hidden="true" style="font-size:28px;"></span>
</span>
</p>
                          <p data-p-id="0d972c4c17b8777458c98282a40c1add">Horus<span class="comment-marker hide-marker on-inline-comments-modal">
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
  id: 4,
  title: 'Owl',
  dateWritten: '',
  body: poemBody,
  img: 'https://d.wattpad.com/story_parts/16785825/images/13b91bef68773019.jpg',
}
