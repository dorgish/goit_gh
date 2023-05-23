import s from './List.module.css';
import ListItem from './listItem/ListItem';

const List = ({ data }) => {
    return (
        <div className={s.List}>
            {!!data.length ? (
                <>
                    {data.map(item => (
                        <ListItem key={item.id} data={item} />
                    ))}
                </>
            ) : (
                <span>По Вашому запиту не знайдено жодного репозиторія </span>
            )}
        </div>
    );
};

export default List;
