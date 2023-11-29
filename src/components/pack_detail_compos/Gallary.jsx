import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
import Title from "../../shared components/Title";

function Gallary({ gallary }) {
  const images = gallary?.photos;
  console.log(images);
  return (

      <div>
        <div>

            <Title subHeading={' '} heading={'Gallary'} description={' '}></Title>

          <AwesomeSlider className="h-[50vh] absolute">
            {images?.map((image) => (
              <div data-src={image} />
            ))}
          </AwesomeSlider>

        </div>

      </div>

  );
}

export default Gallary;
