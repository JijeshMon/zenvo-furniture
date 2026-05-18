import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Zenvo</h1>

      <div className="about-box">
        <h2>Shop Information</h2>

        <table>
          <tbody>
            <tr>
              <td>Shop Name</td>
              <td>Zenvo Furniture</td>
            </tr>

            <tr>
              <td>Location</td>
              <td>IVORY ASSOCIATES, BUILDING NO. 13/520 - B, VALLOM KODANAD ROAD, VALLOM, OKKAL P.O. - 683550, ERNAKULAM DIST.</td>
            </tr>

            <tr>
              <td>Phone</td>
              <td>+91 86065 11611</td>
            </tr>

            <tr>
              <td>Email</td>
              <td>zenvofurniture@gmail.com</td>
            </tr>
            <tr>
              <td>GSTIN</td>
              <td>32AALFI6174Q1ZQ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;