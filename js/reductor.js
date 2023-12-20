import work from './work.js';
import colorSheeme from './colorSheeme.js';



export default function reductor(props) {
    
    const eventsObj = {        
        colorSheeme: () => colorSheeme(),
        work: () => work(),      
    }
    eventsObj[props]()
}