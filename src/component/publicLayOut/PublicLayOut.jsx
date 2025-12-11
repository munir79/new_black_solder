'use client';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const PublicLayOut = (props) => {
  return (
    <div>
      <Navbar />

      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayOut;
