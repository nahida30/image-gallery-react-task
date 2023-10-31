import './App.css'

const Pin = ({pinSize, img}) => {
    return (
        <div className= {`pin ${pinSize}`}>
            <img className='images'  src={img} alt="" />
        <div className='content'>
            <h3>sample</h3>
            <div>
                <input type="checkbox" name="checkbox" id="checkbox" />
            </div>
        </div>
        
        
        
        </div>
    );
};

export default Pin;