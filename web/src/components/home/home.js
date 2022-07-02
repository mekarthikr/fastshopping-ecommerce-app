import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../assets/style/home.css";
import image_1 from "../../assets/image/img.png";

export default function Home() {
  const { isLogin } = useSelector((state) => state.user)
  const navigate = useNavigate()

  function navigateTo() {
    isLogin ? navigate("product") : navigate("login")
  }
  
  return (
    <>
      <div>
        <div className="row mar blue">
          <div className="col-md pad red head p-l-50">
            <h1 className="font-70">
              Find it.Love it.
              <br />
              Buy it.
            </h1>
            <p className="font-p">
              Life is hard enough already. Let us make it a little easier.
            </p>
            <button className="home-button" onClick={() => navigateTo()}>Get Started</button>
          </div>
          <div className="col-md m-l padding-0">
            <span className="">
              <div className="">
                <img
                  className="image"
                  width={480}
                  height={520}
                  src={image_1}
                  alt="hello"
                />
              </div>
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="p">
        <div className="row mar product-home">
          <div className="col-md home-product-card">
            <span>
              <a>
                <img
                  className="product-img" alt="icon"
                  src="https://m.media-amazon.com/images/I/718ETwvLVOL._SY450_.jpg"
                />
              </a>
            </span>
            <span>
              <a>
                <h2 className="product-head">Laptop</h2>
              </a>
            </span>
          </div>
          <div className="col-md home-product-card">
            <span>
              <a>
                <img
                  className="product-img" alt="icon"
                  src="https://m.media-amazon.com/images/I/61rDecG7fdL._AC_SS450_.jpg"
                />
              </a>
            </span>
            <span>
              <a>
                <h2 className="product-head">Smart Phone</h2>
              </a>
            </span>
          </div>
          <div className="col-md home-product-card">
            <span>
              <a>
                <img
                  className="product-img" alt="icon"
                  src="https://m.media-amazon.com/images/I/61WFNqf8hVL._SX522_.jpg"
                />
              </a>
            </span>
            <span>
              <a>
                <h2 className="product-head">Headphone</h2>
              </a>
            </span>
          </div>
          <div className="col-md home-product-card">
            <span>
              <a>
                <img
                  className="product-img" alt="icon"
                  src="https://m.media-amazon.com/images/I/81dkcPFfZ1L._SX679_.jpg"
                />
              </a>
            </span>
            <span>
              <a>
                <h2 className="product-head">Accessories</h2>
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="title">JOIN OUR CLUB OF ONE MILLION CUSTOMER</h2>
        </div>
        <div>
          <img
            className="banner" alt="banner"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Apple/iPhone11Pro/Pre-book/D12731792_IN_WLM_Apple_PC_LP_top_banner._CB452057853_.jpg"
          />
        </div>
        {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
        <div>
          <h2 className="title">WHY USE OUR SITE?</h2>
        </div>
      </div>
      <div className="detail">
        <div className="row mar">
          <div className="col-md">
            <div className="detail-cont">
              <h3>FAST DELIVERY</h3>
              <ul>
                <li>
                  We garenter you that our products are delivered fast and
                  securely.
                </li>
                <li>
                  Nullam ligula metus, consequat placerat nisi ac, auctor
                  viverra elit.
                </li>
                <li>Etiam volutpat id nunc at tincidunt.</li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <img
              className="detail-img" alt="image_home"
              src="https://www.philipkingsley.co.uk/media/LandingPages/Homepage/Free_Delivery.jpg"
            />
          </div>
        </div>
        <div className="row mar">
          <div className="col-md">
            <img
              className="detail-img" alt="image_home"
              src="http://www.techtalk.gfi.com/wp-content/uploads/2014/12/30-things-to-do-to-secure-your-network-now_SQ.jpg"
            />
          </div>
          <div className="col-md">
            <div className="detail-cont">
              <h3>USER PRIVACY</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Nullam ligula metus, consequat placerat nisi ac, auctor
                  viverra elit.
                </li>
                <li>Etiam volutpat id nunc at tincidunt.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mar ">
          <div className="col-md">
            <div className="detail-cont">
              <h3>SECURE PAYMENT</h3>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Nullam ligula metus, consequat placerat nisi ac, auctor
                  viverra elit.
                </li>
                <li>Etiam volutpat id nunc at tincidunt.</li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <img
              className="detail-img" alt="image_home"
              src="https://sa.visamiddleeast.com/dam/VCOM/global/run-your-business/images/visa-direct-overview-hero-640x640.jpg"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="title">GET STARTED WITH US</h2>
      </div>
    </>
  );
}