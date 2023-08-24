import './StyleCompo.css'

function Heading()
{
    return(
        <div className='divhead'>
            <h1>Styling using Functional and Class Based Components</h1>
        </div>
    )
}
export {Heading}
function FunctionCompo()
{
    return(
        <div className='functionblock'>
           <h1>This  is Created using Functional Components</h1>
           <p>This is Done Using external Css</p>
           <p>This is Done Using Inline Css</p>
        </div>
    )
}
export default FunctionCompo;

