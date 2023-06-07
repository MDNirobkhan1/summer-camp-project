/* eslint-disable react/prop-types */


const PopulerItem = ({item}) => {
    const {name, image,email}=item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius:'200px 0 200px 200px'}} className="w-[200px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p className="text-yellow-500">{email}</p>
            </div>
            
        </div>
    );
};

export default PopulerItem;