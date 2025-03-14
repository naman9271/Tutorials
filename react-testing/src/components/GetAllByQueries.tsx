const GetAllByQueries = () => {
  return (
    <div>
        <label htmlFor="input1">Label for input 1</label>
        <input id="input1" value = "default value" disabled placeholder="Enter text here"/>
        <label htmlFor="input2">Label for input 2</label>
        <input id="input2" value = "another value" disabled placeholder="Another Placeholder"/>

        <input placeholder='Enter Something...' disabled/>
        <input placeholder='Enter Something else...' disabled/>

        <p>This is a paragraph with some text content</p>
        <p>This is a paragraph with some text content</p>

        <input value = "Some display value"/>
        <input value = "Another display value"/>

        <img src="img1.png" alt="A Simple Image"/>
        <img src="img2.png" alt="Another Image"/>

        <div title="this is a div with title attribute">Div content with title</div>
        <div title="another div with title attribute"> Another Div content with title</div>

        <button role='button' aria-label="disabled button 1" disabled>Disabled Button 1</button>
        <button role='button' aria-label="disabled button 2" disabled>Disabled Button 2</button>

        <div data-testid='custom-test-id-1'>this div has test id 1</div>
        <div data-testid='custom-test-id-2'>this div has test id 2</div>

    </div>
  )
}

export default GetAllByQueries