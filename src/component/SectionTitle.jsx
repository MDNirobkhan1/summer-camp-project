/* eslint-disable react/prop-types */
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12 text-center my-10">
            <p className="text-yellow-500 mb-2">--- {subHeading} ---</p>
            <h3 className="text-2xl uppercase border-y-4 py-2">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;