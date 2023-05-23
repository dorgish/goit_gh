import StarSVG from '../../../assets/svg/Star';
import WatchersSVG from '../../../assets/svg/Watchers';
import s from './ListItem.module.css';

const ListItem = ({ data }) => {
    return (
        <div className={s.ListItem}>
            <div className={s.imgBox}>
                <img
                    src={data.owner.avatar_url || require(`../../../assets/Course Image.png`)}
                    alt="avatar"
                    height="180px"
                />
            </div>
            <div className={s.infoBox}>
                <h3>{data.name}</h3>
                <p>
                    <b>Author:</b> {data.full_name}
                </p>
                <p>
                    <b>Language:</b> {data.language}
                </p>
                <p>
                    <b>Description:</b>
                    {data.description}
                </p>
            </div>
            <div className={s.ratingBox}>
                <div className={s.ratingItem}>
                    <StarSVG />
                    <span>
                        {data.size} <b>stars</b>
                    </span>
                </div>
                <div className={s.ratingItem}>
                    <WatchersSVG />
                    <span>
                        {data.watchers}
                        <b> watchers</b>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
