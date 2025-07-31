
const FrameImage = "ImG"
const title = "Gradient Graphic T-shirt"
const price = "100"

const Clist = () => {
    return (
        <div>
            <div>
                <img src="src/assets/images/Categoryimg/Frame33.png" alt="" />
                <div className="container border">{FrameImage}</div>
                <div>
                    <h3>{title}</h3>
                    <p>star</p>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Clist;


