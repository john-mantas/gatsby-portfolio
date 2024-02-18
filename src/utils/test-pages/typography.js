import React from 'react'

import Layout from '../../components/common/Layout'

const Typography = () => {
  return (
    <Layout>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <h1 style={{width: '700px'}}>This is a long title to test word-break!</h1>
      <hr />
      <p>Vestibulum lacinia velit id auctor cursus. Phasellus dapibus convallis nisl quis efficitur.</p>
      <p style={{ width: '700px' }}>Donec et ipsum non justo feugiat accumsan. Cras cursus ante convallis ultricies vehicula. Pellentesque vel ex sed ex lobortis facilisis efficitur quis est. Integer urna risus, porttitor vel neque a, pharetra lacinia dolor. Curabitur elit velit, mattis ac tempor nec, eleifend vitae risus. Sed auctor enim et sollicitudin lobortis. Aenean a lacus at ligula eleifend ultricies vel vitae sapien. Proin volutpat egestas diam at facilisis. Sed eros ipsum, ultrices cursus elit eget, tincidunt blandit ex. Nunc tincidunt, ante ac congue interdum, lacus sapien mollis quam, vel gravida odio lorem et nulla. Nunc sodales, nunc id lacinia bibendum, sapien arcu gravida justo, luctus suscipit elit mi fermentum tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dapibus at felis quis venenatis.</p>
      <hr />
      <p><strong>Phasellus dapibus convallis</strong>&nbsp;-&nbsp;<em>Phasellus dapibus convallis</em></p>
      <hr />
      <ul>
        <li>list item</li>
        <li>list item</li>
        <ol>
          <li>list item</li>
          <li>list item</li>
            <ul>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
            </ul>
          <li>list item</li>
        </ol>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <br />
      <ol>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <ul>
          <li>list item</li>
          <li>list item</li>
            <ul>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
            </ul>
          <li>list item</li>
          <li>list item</li>
        </ul>
        <li>list item</li>
        <li>list item</li>
      </ol>
      <hr />
      <dl>
        <dt>Beast of Bodmin</dt>
        <dd>A large feline inhabiting Bodmin Moor.</dd>

        <dt>Morgawr</dt>
        <dd>A sea serpent.</dd>

        <dt>Owlman</dt>
        <dd>A giant owl-like creature.</dd>
      </dl>
      <hr />
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
        <footer>—Aldous Huxley, <cite>Brave New <a href="https://johnmantas.com">World</a></cite></footer>
      </blockquote>
      <hr />
      <code>code: tag</code>
      <pre>
        {
`
  {
      "type": "heading1",
      "text": "John Mantas",
      "spans": [
          {
              "start": 0,
              "end": 4,
              "type": "label",
              "data": {
                  "label": "name"
              }
          }
      ]
  }
`
        }
      </pre>
      <hr />
      <p>JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight data-interchange format.</p>
      <p><dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr></dfn> is a markup language used to create the semantics and structure of a web page.</p>
      <p>A <dfn id="spec">Specification</dfn> (<abbr title="Specification">spec</abbr>) is a document that outlines in detail how a technology or API is intended to function and how it is accessed.</p>
      <hr />
    </Layout>
  )
}

export default Typography