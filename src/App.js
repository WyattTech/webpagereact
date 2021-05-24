import './App.css';

function App() {
  return (

      
  <div className="container" > 
    <div className="left-col">
      <h1>Learn to code by <br></br> watching others</h1>
        <p>See how experienced developers solve problems in real-time. 
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.</p>
    </div>
    <div className="right-col">
      <div className="topBox">
        <input type="submit" className="seven" name="seven" placeholder="seven" value="Try it free 7 days then $20/mo. thereafter" />
      </div>
        <div className="form-container">
          <div className="field-group"> 
           <div className="field"> 
              <input type="text" className="fname" name="fname" placeholder="First Name" />
              <input type="text" className="lname" name="lname" placeholder="Last Name" />
              <input type="text" className="email" name="email" placeholder="Email Address" />
              <input type="text" className="password" name="password" placeholder="Password"/>
              <input type="submit" className="btn" name="btn" placeholder="btn" value="CLAIM YOUR FREE TRIAL" />
              <p className="form-footer">By clicking the button, you are agreeing to our <span> Terms and Services</span></p>
           </div>
          </div>
        </div>
    </div>
  </div>  
  );
}

export default App;
