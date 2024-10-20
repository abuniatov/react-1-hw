import Link from 'next/link';
import styles from './SocialMediaItem.module.css';

const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <>
      <li className={styles.socialMediaItem}>
        <a href={url} target="_blank">
          <img src={icon} alt={`${title} icon`} className={styles.socialMediaIcon} />
          {title}
        </a>
      </li>
    </>
  );
};

export default SocialMediaItem;