import './BadgeCard.css';
const BadgeCard = ({type_id,badge}) => {
        
    return ( 
        <>
        { type_id=="3" ?
        <div className="flex w=[277px] h=[370px] p-[10px] flex-col items-center gap-[10px] bg-bg-card rounded-xl shadow-lg">
            <h4>{badge.name}</h4>
            <img src={badge.icon_url} alt={`${badge.name} icon`} className='w-[139px] h-[137px]'/>
        </div>
        :
        <div className="flex w=[277px] h=[370px] p-[10px] flex-col items-center gap-[10px] bg-bg-card rounded-xl shadow-lg cursor-pointer">
            <h4>{badge.name}</h4>
            <img src={badge.icon_url} alt={`${badge.name} icon`} className='w-[139px] h-[137px]'/>
        </div>
        }
        </>
    );
}
 
export default BadgeCard;