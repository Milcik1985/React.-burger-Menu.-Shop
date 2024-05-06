import styles from "../SocialMediaLogos/SocialMediaLogos.module.css";
import instagramLogo from "../../../assets/instagram.svg";
import twitterLogo from "../../../assets/twitter.svg";

const SocialMediaLogos = () => {
  return (
    <div className={styles.main}>
      <a href="#">
        <img src={instagramLogo.src} alt="instagram icon" />
      </a>
      <a href="#">
        <img src={twitterLogo.src} alt="twitter icon" />
      </a>
    </div>
  );
};

export default SocialMediaLogos;
