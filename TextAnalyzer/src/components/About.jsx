import React from 'react'
export default function About(props) {
    let myStyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'#414e61':'white',
      border:'1px solid',
      borderColor:props.mode==='dark'?'white':'black',
      padding: '1rem'
    }

  return (
             <div className="container" style={myStyle}>
                <h2>About Us</h2>
                                 <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="flush-headingOne">
      <button style={myStyle} className="accordion-button  collapsed" type="button " data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze your text</strong>
      </button >
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button style={myStyle} className="accordion-button  collapsed" type="button " data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Free To Use</strong>
      </button >
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button style={myStyle} className="accordion-button  collapsed" type="button " data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Browser compatible</strong>
      </button >
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

    </div>
 )
}
