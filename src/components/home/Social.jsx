import React from "react";

const Social = () => {
  return (
    <div className="home__social">
       <a
        href="https://www.linkedin.com/in/tameez-deen/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      
      <a
        href="https://www.instagram.com/tameez.d/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100010474081203"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-facebook-f"></i>
      </a>
    </div>
  );
};

export default Social;
