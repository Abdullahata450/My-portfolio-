    import React from 'react'
import '../Components/Home.css'
function Contact(props) {
  return (
    <div>
      
<div id="contact" style={{color:props.newmode==='#FAE7A5' ? 'black' : 'white'}}>

<div className="container">
 <div className="row">
     <div className="col-md-6">
         <div className="contact-left">
             <h1 className="sub-title">Contact Me</h1>
             <p style={{textDecoration: 'none'}}><a href="mailto:abdullahbinata450@gmail.com"><i className="fa-solid fa-paper-plane"></i> abdullahbinata450@gmail.com</a></p>
             <p style={{textDecoration: 'none'}}><a href="tel:+923160484410"><i className="fa-solid fa-phone"></i> +923160484410</a></p>
             <div className="social-icons">
                 <a href="https://www.linkedin.com/in/abdullah-bin-ata-429461253"><i className="fa-brands fa-linkedin"></i></a>
                 <a href="https://github.com/Abdullahata450"><i className="fa-brands fa-github"></i></a>
                 <a href="https://www.facebook.com/profile.php?id=100012258855831"><i className="fa-brands fa-facebook"></i></a>
             </div>
             <a href="images/Abdullah CV.pdf" download="Abdullah CV.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{float:'left',color:props.newmode==='#FAE7A5' ? 'black' : 'white'}} >Download CV <i className="fa-solid fa-download"></i></a>
         </div>
     </div>

     <div className="col-md-6">
         <div className="contact-right">
             <form action="https://getform.io/f/0c739f20-70c0-4414-82de-405aa12a995e" method='post'>
                 <div className="mb-3">
                     <label for="exampleInputName" className="form-label">Enter Your Name</label>
                     <input type="Name" className="form-control" />
                 </div>
                 <div className="mb-3">
                     <label for="exampleInputEmail1" className="form-label">Enter Email</label>
                     <input type="Email" className="form-control" />
                 </div>
                 <div className="mb-3">
                     <textarea name="Message" className="form-control" rows="4" placeholder="Your message"></textarea>
                 </div>
                 <button type="submit" className="btn" style={{color:props.newmode==='#FAE7A5' ? 'black' : 'white'}}>Submit</button>
             </form>
         </div>
     </div>
 </div>
</div>

</div>

    </div>
  )
}

export default Contact
